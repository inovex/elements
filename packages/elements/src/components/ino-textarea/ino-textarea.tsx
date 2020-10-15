import { MDCTextField } from '@material/textfield';
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
  h
} from '@stencil/core';
import autosize from 'autosize';
import classNames from 'classnames';

@Component({
  tag: 'ino-textarea',
  styleUrl: 'ino-textarea.scss',
  shadow: false
})
export class Textarea implements ComponentInterface {
  private cursorPosition = 0;

  /**
   * Native Textarea Element
   */
  private nativeTextareaElement?: HTMLTextAreaElement;

  /**
   * An internal instance of the material design textfield.
   */
  private textfield: MDCTextField;

  @Element() el!: HTMLElement;

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
  @Prop() inoShowLabelHint?: boolean;

  /**
   * The number of rows of this textarea.
   */
  @Prop() rows?: number;

  /**
   * The value of this element. (**unmanaged**)
   */
  @Prop() value?: string = '';

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
  @Prop() inoLabel?: string;

  @Watch('value')
  handleChange(value: string) {
    if (this.nativeTextareaElement && this.textfield) {
      this.textfield.value = value;
      this.nativeTextareaElement.setSelectionRange(
        this.cursorPosition,
        this.cursorPosition
      );
      this.updateAutogrow();
    }
  }

  /**
   * Emits when the user types something in. Contains typed input in `event.detail`
   */
  @Event() valueChange!: EventEmitter<string>;

  componentDidLoad() {
    this.textfield = new MDCTextField(this.el.querySelector('.mdc-text-field'));
    if (this.autogrow) {
      this.initAutogrow();
    }

    if (this.autoFocus) {
      this.textfield.focus();
    }
  }

  componentWillUnLoad() {
    this.textfield.destroy();
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
    if (this.nativeTextareaElement) {
      this.nativeTextareaElement.value = this.value || '';
    }
    this.valueChange.emit(value);
  }

  render() {
    const classes = classNames({
      'mdc-text-field': true,
      'mdc-text-field--textarea': true,
      'mdc-text-field--outlined': true,
      'mdc-text-field-fullwidth': !Boolean(this.cols),
      'mdc-text-field--no-label': !this.inoLabel
    });

    return (
      <Host>
        <div class={classes}>
          <textarea
            ref={el => (this.nativeTextareaElement = el)}
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
          />
          <ino-label
            ino-outline
            ino-text={this.inoLabel}
            ino-required={this.required}
            ino-disabled={this.disabled}
            ino-show-hint={this.inoShowLabelHint}
          />
        </div>
        {this.maxlength && (
          <div class="mdc-text-field-helper-line">
              <div class="mdc-text-field-character-counter">{this.value.length} / {this.maxlength}</div>
          </div>
        )}
      </Host>
    );
  }
}
