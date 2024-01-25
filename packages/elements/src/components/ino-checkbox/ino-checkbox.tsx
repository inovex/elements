import { MDCCheckbox } from '@material/checkbox';
import { MDCFormField } from '@material/form-field';
import {
  Component,
  ComponentInterface,
  Element,
  Event,
  EventEmitter,
  Host,
  Method,
  Prop,
  Watch,
  h,
} from '@stencil/core';

import { generateUniqueId } from '../../util/component-utils';
import { renderHiddenInput } from '../../util/helpers';
import { CssClasses } from '../internal-types';
import {
  HasHelperText,
  IsFormInput,
} from '../base/form-input/form-input-with-helper-text';
import { MDCTextFieldHelperText } from '@material/textfield';
import {
  helperTextTemplate,
  initHelperText,
  updateValidityOnErrorChanged,
} from '../base/form-input/helper-text';

/**
 * An image that is shown in the `<ino-carousel>` component. Should only be used in conjunction with it.
 *
 * @slot default - Label of the checkbox
 */
@Component({
  tag: 'ino-checkbox',
  styleUrl: 'ino-checkbox.scss',
  shadow: true,
})
export class Checkbox
  implements IsFormInput, HasHelperText, ComponentInterface
{
  @Element() el!: HTMLInoCheckboxElement;

  private static HELPER_COUNTER = 0;

  private static generateHelperTextId() {
    return `checkbox-helper-text__${Checkbox.HELPER_COUNTER++}`;
  }

  private checkboxInstance: MDCCheckbox;
  private formField: MDCFormField;
  private nativeInputEl!: HTMLInputElement;
  private checkboxId = `ino-checkbox-id_${generateUniqueId()}`;
  private mdcHelperText: MDCTextFieldHelperText;
  private uniqueHelperId = Checkbox.generateHelperTextId();

  get helperTextInstance() {
    return this.mdcHelperText;
  }

  get nativeElement() {
    return this.nativeInputEl;
  }

  /**
   * Marks this element as checked. (**unmanaged**)
   */
  @Prop() checked?: boolean = false;

  @Watch('checked')
  checkedChanged(newChecked: boolean) {
    if (this.checkboxInstance != null) {
      this.checkboxInstance.checked = newChecked;
    }
  }

  /**
   * Disables this element.
   */
  @Prop() disabled?: boolean;

  /**
   * Marks this element as required.
   */
  @Prop() required?: boolean;

  /**
   * The label of this checkbox.
   */
  @Prop() label?: string;

  /**
   * Displays the checkbox as invalid if set to true.
   * This functionality might be useful if the input validation is (additionally) handled by the backend.
   */
  @Prop() error?: boolean;

  @Watch('error')
  onErrorChanged() {
    updateValidityOnErrorChanged(this);
  }

  /**
   * If true, an *optional* message is displayed if not required,
   * otherwise a * marker is displayed if required
   */
  @Prop() showLabelHint?: boolean;

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
  onHelperTextValidationChanged(): void {
    this.mdcHelperText?.foundationForTextField.setValidation(
      this.helperTextValidation,
    );
  }

  /**
   * Sets focus on the native `input`.
   * Use this method instead of the global `input.focus()`.
   */
  @Method()
  async setFocus(): Promise<void> {
    this.nativeInputEl.focus();
  }

  /**
   * Sets blur on the native `input`.
   * Use this method instead of the global `input.blur()`.
   */
  @Method()
  async setBlur() {
    this.nativeInputEl?.blur();
  }

  /**
   * The name of this element.
   */
  @Prop() name?: string;

  /**
   * The value of this element.
   */
  @Prop() value?: string;

  /**
   * Styles the checkbox as a selection variant that has a larger radius.
   * While checkboxes are mainly used in lists, the selection should be used as a single, independent UI element.
   * The indeterminate state is not supported here.
   */
  @Prop() selection?: boolean;

  /**
   * Marks this element as indeterminate.
   * It indicates that a user is indeterminate without changing the checked state.
   * If a checkbox is unchecked and indeterminate then it will lose the indeterminate state on click and change to checked.
   * For more information, see [Documentation on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#Indeterminate_state_checkboxes).
   */
  @Prop() indeterminate?: boolean;

  @Watch('indeterminate')
  indeterminateChanged(newValue: boolean) {
    this.checkboxInstance.indeterminate = newValue;
  }

  componentDidLoad() {
    this.checkboxInstance = new MDCCheckbox(
      this.el.shadowRoot.querySelector('.mdc-checkbox'),
    );
    this.formField = new MDCFormField(
      this.el.shadowRoot.querySelector('.mdc-form-field'),
    );
    this.formField.input = this.checkboxInstance;
    if (this.indeterminate) {
      this.checkboxInstance.indeterminate = true;
    }
    this.initHelperText();
    this.handleInputProps();
  }

  private handleInputProps(): void {
    this.onErrorChanged();
  }

  private initHelperText(): void {
    this.mdcHelperText = initHelperText(this.el.shadowRoot);
    this.onHelperTextPeristentChanged();
    this.onHelperTextValidationChanged();
  }

  disconnectedCallback() {
    this.checkboxInstance?.destroy();
    this.mdcHelperText?.destroy();
    this.formField?.destroy();
  }

  /**
   * Emits when the user clicks on the checkbox to change the checked state. Contains the status in `event.detail`.
   */
  @Event() checkedChange!: EventEmitter;

  private handleInput = (e: Event) => {
    this.nativeInputEl.checked = this.checked;
    this.checkedChange.emit(!this.checked);
    e.stopPropagation();
  };

  render() {
    const { el, name, checked, value, disabled, required } = this;

    const formfieldClasses: CssClasses = {
      'mdc-form-field': true,
    };

    const checkboxClasses: CssClasses = {
      'mdc-checkbox': true,
      'mdc-checkbox--disabled': disabled,
      'ino-checkbox-selection': this.selection,
      'ino-checkbox--indeterminate': this.indeterminate,
    };

    renderHiddenInput(el, name, checked ? value : '', disabled);

    return (
      <Host>
        <div class={formfieldClasses}>
          <div class={checkboxClasses}>
            <input
              type="checkbox"
              class="mdc-checkbox__native-control"
              checked={checked}
              disabled={disabled}
              id={this.checkboxId}
              ref={(input) => (this.nativeInputEl = input as HTMLInputElement)}
              onChange={(e) => e.stopPropagation()}
              onInput={this.handleInput}
              required={required}
            />
            <div class="mdc-checkbox__background">
              <svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
                <path
                  class="mdc-checkbox__checkmark-path"
                  fill="none"
                  stroke="white"
                  d="M1.73,12.91 8.1,19.28 22.79,4.59"
                />
              </svg>
              <div class="mdc-checkbox__mixedmark" />
            </div>
          </div>
          <label
            htmlFor={this.checkboxId}
            class={{ 'show-hint': this.showLabelHint }}
          >
            {this.label || <slot />}
          </label>
        </div>
        {helperTextTemplate(this.uniqueHelperId, this.helperText)}
      </Host>
    );
  }
}
