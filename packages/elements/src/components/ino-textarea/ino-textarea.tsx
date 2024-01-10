import { MDCTextField, MDCTextFieldHelperText } from '@material/textfield';
import {
  Component,
  ComponentInterface,
  Element,
  Event,
  EventEmitter,
  Host,
  Listen,
  Prop,
  Watch,
  h,
  Method,
} from '@stencil/core';
import autosize from 'autosize';
import { generateUniqueId } from '../../util/component-utils';
import { CssClasses } from '../internal-types';
import {
  helperTextTemplate,
  initHelperText,
  updateValidityOnErrorChanged,
} from '../base/form-input/helper-text';
import { FormInputWithHelperText } from '../base/form-input/form-input-with-helper-text';

/**
 * A textarea component with styles. It uses a material [textfield](https://github.com/material-components/material-components-web/tree/master/packages/mdc-textfield) component for its styling.
 *
 * > **Note:** The textarea is always styled in an outlined manner. If you need to use a textarea in combination with other form inputs (`ino-input`), use their respective outline style.
 */
@Component({
  tag: 'ino-textarea',
  styleUrl: 'ino-textarea.scss',
  shadow: false,
})
export class Textarea implements FormInputWithHelperText, ComponentInterface {
  @Element() el!: HTMLInoTextareaElement;

  private static HELPER_COUNTER = 0;

  private static generateHelperTextId() {
    return `textarea-helper-text__${Textarea.HELPER_COUNTER++}`;
  }

  private cursorPosition = 0;
  private nativeTextareaElement?: HTMLTextAreaElement;
  private textfield: MDCTextField;

  private mdcHelperText: MDCTextFieldHelperText;
  private uniqueHelperId = Textarea.generateHelperTextId();

  get helperTextInstance() {
    return this.mdcHelperText;
  }

  get nativeElement() {
    return this.nativeTextareaElement;
  }

  /**
   * The autofocus of this element.
   */
  @Prop({ attribute: 'autofocus' }) autoFocus?: boolean;

  /**
   * The number of cols of this textarea.
   */
  @Prop() cols?: number;

  /**
   * Disables this element.
   */
  @Prop() disabled?: boolean;

  /**
   * The max length of this element.
   */
  @Prop() maxlength?: number;

  /**
   * The min length of this element.
   */
  @Prop() minlength?: number;

  /**
   * Displays the number of characters. The maxlength-property must be set.
   */
  @Prop() showCharacterCounter?: boolean;

  /**
   * The name of this element.
   */
  @Prop() name?: string;

  /**
   * The placeholder of this element.
   */
  @Prop() placeholder?: string;

  /**
   * Marks this element as required.
   */
  @Prop() required?: boolean;

  /**
   * If true, an *optional* message is displayed if not required,
   * otherwise a * marker is displayed if required
   */
  @Prop() showLabelHint?: boolean;

  /**
   * The number of rows of this textarea.
   */
  @Prop() rows?: number;

  /**
   * The value of this element. (**unmanaged**)
   */
  @Prop() value?: string = '';

  /**
   * Styles the input field as outlined element.
   */
  @Prop() outline?: boolean;

  /**
   * An optional flag to allow the textarea adjust its height to display all the content.
   * The `rows` attribute can also be used to specify a minimum height. Use CSS to specify
   * a max-height for the textarea element. Once the height exceeds the max-height, autogrow
   * will re-enable the vertical scrollbar.
   */
  @Prop() autogrow = false;

  @Watch('autogrow')
  handleAutogrow(autogrowActive: boolean) {
    autogrowActive ? this.initAutogrow() : this.destroyAutogrow();
  }

  /**
   * The optional floating label of this input field.
   */
  @Prop() label?: string;

  /**
   * The optional helper text.
   */
  @Prop() helperText?: string;

  /**
   * Displays the helper permanently.
   */
  @Prop() helperTextPersistent?: boolean;

  @Watch('helperTextPersistent')
  onHelperTextPeristentChanged(): void {
    this.mdcHelperText?.foundationForTextField.setPersistent(
      this.helperTextPersistent,
    );
  }

  /**
   * Styles the helper text as a validation message.
   */
  @Prop() helperTextValidation?: boolean;

  @Watch('helperTextValidation')
  onHelperValidationChanged(): void {
    this.mdcHelperText?.foundationForTextField.setValidation(
      this.helperTextValidation,
    );
  }

  /**
   * Displays the text area as invalid if set to true.
   * This functionality might be useful if the input validation is (additionally) handled by the backend.
   */
  @Prop() error?: boolean;

  @Watch('error')
  onErrorChanged() {
    if (this.textfield == null) return;
    updateValidityOnErrorChanged(this, {
      setValid: () => this.setValid(),
      setInvalid: () => this.setInvalid(),
    });
  }

  /**
   * Emits when the textarea is blurred and validates email input
   */
  @Event({ bubbles: false }) inoBlur!: EventEmitter<void>;
  private handleBlur = (e) => {
    this.inoBlur.emit(e);
  };

  @Watch('value')
  handleChange(value: string) {
    if (this.nativeTextareaElement != null && this.textfield != null) {
      this.textfield.value = value;
      this.nativeTextareaElement.setSelectionRange(
        this.cursorPosition,
        this.cursorPosition,
      );
      this.updateAutogrow();
    }
  }

  /**
   * Emits when the user types something in. Contains typed input in `event.detail`
   */
  @Event() valueChange!: EventEmitter<string>;

  /**
   * Sets focus on the native `textarea`.
   * Use this method instead of the global `textarea.focus()`.
   */
  @Method()
  async setFocus() {
    this.textfield?.focus();
  }

  /**
   * Sets blur on the native `textarea`.
   * Use this method instead of the global `textarea.blur()`.
   */
  @Method()
  async setBlur() {
    this.nativeTextareaElement?.blur();
  }

  connectedCallback() {
    // Remove as soon as the 'filled' style should be released as new default style
    if (this.outline === undefined) {
      console.warn(
        `The ino-textarea default style will be changed to 'filled' in the next major release (analogous to the ino-input). In order to keep the 'outline' style, set the new 'outline' property explicitly to true, please.`,
      );
      this.outline = true;
    }
  }

  componentWillLoad() {
    this.inputID = generateUniqueId();
  }

  componentDidLoad() {
    this.textfield = new MDCTextField(this.el.querySelector('.mdc-text-field'));
    if (this.autogrow) {
      this.initAutogrow();
    }

    if (this.autoFocus) {
      this.textfield.focus();
    }

    this.initHelperText();
    this.handleInputProps();
  }

  private handleInputProps(): void {
    this.onErrorChanged();
  }

  private initHelperText(): void {
    this.mdcHelperText = initHelperText(this.el);
    this.onHelperTextPeristentChanged();
    this.onHelperValidationChanged();
  }

  disconnectedCallback() {
    this.textfield?.destroy();
    this.mdcHelperText.destroy();
    this.destroyAutogrow();
  }

  @Listen('change')
  handleInput(e) {
    e.stopImmediatePropagation();
    e.preventDefault();
  }

  @Listen('input')
  handleNativeElement(e) {
    e.stopImmediatePropagation();
    e.preventDefault();
  }

  private inputID: string;

  private initAutogrow() {
    autosize(this.nativeTextareaElement);
  }

  private destroyAutogrow() {
    autosize.destroy(this.nativeTextareaElement);
  }

  private updateAutogrow() {
    if (this.autogrow) {
      autosize.update(this.nativeTextareaElement);
    }
  }

  private handleNativeTextareaChange(e) {
    const value = e.target.value !== undefined ? e.target.value : '';
    this.cursorPosition = e.target.selectionStart;
    if (this.nativeTextareaElement != null) {
      this.nativeTextareaElement.value = this.value || '';
    }
    this.valueChange.emit(value);
  }

  private setValid = () => {
    this.textfield.valid = false;
    this.textfield.useNativeValidation = false;
  };

  private setInvalid = (): void => {
    this.textfield.valid = true;
    this.textfield.useNativeValidation = true;
    this.nativeTextareaElement.checkValidity();
  };

  render() {
    const hostClasses: CssClasses = {
      'ino-textarea--outline': this.outline,
    };

    const classes: CssClasses = {
      'mdc-text-field': true,
      'mdc-text-field--textarea': true,
      'mdc-text-field--outlined': this.outline,
      'mdc-text-field--filled': !this.outline,
      'mdc-text-field-fullwidth': this.cols == null,
      'mdc-text-field--no-label': this.label == null,
      'mdc-text-field--with-internal-counter': Boolean(this.maxlength),
    };

    return (
      <Host class={hostClasses}>
        <div class={classes}>
          <textarea
            ref={(el) => (this.nativeTextareaElement = el)}
            id={this.inputID}
            class="mdc-text-field__input"
            autofocus={this.autoFocus}
            cols={this.cols}
            disabled={this.disabled}
            maxLength={this.maxlength}
            minLength={this.minlength}
            name={this.name}
            placeholder={this.placeholder}
            required={this.required}
            rows={this.rows}
            value={this.value}
            onInput={this.handleNativeTextareaChange.bind(this)}
            onBlur={this.handleBlur}
          />
          {this.showCharacterCounter && this.maxlength && (
            <div class="mdc-text-field-character-counter">
              {this.value.length} / {this.maxlength}
            </div>
          )}
          <ino-label
            outline={this.outline}
            for={this.inputID}
            text={this.label}
            required={this.required}
            disabled={this.disabled}
            show-hint={this.showLabelHint}
          />
        </div>
        {helperTextTemplate(this.uniqueHelperId, this.helperText)}
      </Host>
    );
  }
}
