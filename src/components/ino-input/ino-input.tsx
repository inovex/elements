import { MDCTextField } from '@material/textfield';
import { MDCTextFieldHelperText } from '@material/textfield/helper-text';
import { MDCTextFieldIcon } from '@material/textfield/icon';
import { Component, ComponentInterface, Element, Event, EventEmitter, Host, Listen, Prop, Watch, h } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'ino-input',
  styleUrl: 'ino-input.scss',
  shadow: false
})
export class Input implements ComponentInterface {
  /**
   * Native Input Element
   */
  private nativeInputEl?: HTMLInputElement;

  private cursorPosition = 0;

  /**
   * An internal auto generated id for the helper field.
   */
  private uniqueHelperId = Input.generateHelperTextId();

  /**
   * An internal instance of the material design textfield.
   */
  private textfield: MDCTextField;

  /**
   * An internal instance of an textfield helper text instance (if neccessary).
   */
  private helperText: MDCTextFieldHelperText;

  /**
   * An internal instance of an textfield icon instance (if neccessary).
   */
  private icon: MDCTextFieldIcon;

  @Element() el!: HTMLElement;

  /**
   * The autocomplete property of this element.
   */
  @Prop() autocomplete?: string;

  /**
   * The autofocus of this element.
   */
  @Prop() autofocus?: boolean;

  /**
   * Disables this element.
   */
  @Prop() disabled?: boolean;

  /**
   * The min value of this element.
   */
  @Prop() min?: string;

  /**
   * The max value of this element.
   */
  @Prop() max?: string;

  /**
   * Limits the number of possible characters to the given number
   */
  @Prop() maxlength?: number;

  /**
   * The step value of this element. Use `any` for decimal numbers
   */
  @Prop() step?: number | 'any' = 1;

  /**
   * The name of this element.
   */
  @Prop() name?: string;

  /**
   * The validation pattern of this element.
   */
  @Prop() pattern?: string;

  /**
   * The placeholder of this element.
   */
  @Prop() placeholder?: string;

  /**
   * Marks this element as required.
   */
  @Prop() required?: boolean;

  /**
   * The size of this element.
   */
  @Prop() size?: number;

  /**
   * The type of this element (default = text).
   */
  @Prop() type?: string = 'text';

  /**
   * The value of this element. (**unmanaged**)
   */
  @Prop() value = '';

  @Watch('value')
  valueChanged(newValue: string) {
    if (this.textfield && this.nativeInputEl) {
      this.textfield.value = newValue;

      // setSelectionRange does not work on number input
      if (this.type !== 'number' && this.type !== 'email') {
        this.nativeInputEl.setSelectionRange(
          this.cursorPosition,
          this.cursorPosition
        );
      }
    }
  }

  /**
   * Styles the input field as outlined element.
   */
  @Prop() inoOutline?: boolean;

  /**
   * The optional floating label of this input field.
   */
  @Prop() inoLabel?: string;

  /**
   * The optional helper text.
   */
  @Prop() inoHelper?: string;

  /**
   * Displays the helper permanently.
   */
  @Prop() inoHelperPersistent?: boolean;

  /**
   * Styles the helper text as a validation message.
   */
  @Prop() inoHelperValidation?: boolean;

  /**
   * Displays the number of characters. The maxlength-property must be set.
   * This helper text will be displayed persistently.
   */
  @Prop() inoHelperCharacterCounter?: boolean;

  /**
   * The optional icon of this input field.
   */
  @Prop() inoIcon?: string;

  /**
   * Positions the icon trailing after the input field.
   */
  @Prop() inoIconTrailing = false;

  /**
   * Makes the icon clickable and allows to listen to the `clickEl` event.
   */
  @Prop() inoIconClickable?: boolean;

  /**
   * The id of the datalist child
   */
  @Prop() inoDataList?: string;

  /**
   * Simple static construct to generate unique helper text ids.
   */
  private static HELPER_COUNTER = 0;

  static generateHelperTextId() {
    return `input-helper-text__${Input.HELPER_COUNTER++}`;
  }

  componentDidLoad() {
    this.textfield = new MDCTextField(this.el.querySelector('.mdc-text-field'));
    if (this.inoHelper) {
      this.helperText = new MDCTextFieldHelperText(
        document.querySelector('.mdc-text-field-helper-text')
      );
    }
    if (this.inoIcon) {
      this.icon = new MDCTextFieldIcon(
        document.querySelector('.mdc-text-field__icon')
      );
    }

    if (this.value && this.textfield) {
      this.textfield.value = this.value;
    }

    if (this.autofocus) {
      this.textfield.focus();
    }

    if (this.inoDataList) {
      this.nativeInputEl.setAttribute('list', this.inoDataList);
      // see https://github.com/ionic-team/stencil/issues/1582
    }
  }

  componentWillUnLoad() {
    this.textfield.destroy();
    if (this.helperText) {
      this.helperText.destroy();
    }
    if (this.icon) {
      this.icon.destroy();
    }
  }

  private handleNativeInputChange(e) {
    this.cursorPosition = e.target.selectionStart;
    this.valueChange.emit(e.target.value);
  }

  /**
   * Emits when the user types something in.
   * Contains typed input in `event.detail`
   */
  @Event() valueChange!: EventEmitter<string>;

  @Listen('change')
  handleChange(e: Event) {
    e.stopPropagation();
  }

  @Listen('input')
  handleInput(e) {
    e.stopImmediatePropagation();
    e.stopPropagation();
  }

  /**
   * Emits when the input field is blurred
   */
  @Event({ bubbles: false }) inoBlur!: EventEmitter<void>;
  private handleBlur = e => this.inoBlur.emit(e);

  /**
   * Emits when the input field is focused
   */
  @Event({ bubbles: false }) inoFocus!: EventEmitter<void>;
  private handleFocus = e => this.inoFocus.emit(e);

  private helperTextTemplate() {
    if (!this.inoHelper && !this.inoHelperCharacterCounter) {
      return '';
    }

    const classInputMessage = classNames({
      'mdc-text-field-helper-text': true,
      'mdc-text-field-helper-text--persistent': this.inoHelperPersistent,
      'mdc-text-field-helper-text--validation-msg': !!this.inoHelperValidation
    });

    return (
      <div class="mdc-text-field-helper-line">
        <div
          class={classInputMessage}
          id={this.uniqueHelperId}
          aria-hidden="true"
        >
          {this.inoHelper}
        </div>
        {this.inoHelperCharacterCounter && !Number.isNaN(this.maxlength) && (
          <div class="mdc-text-field-character-counter">
            {`${this.value.length} / ${this.maxlength}`}
          </div>
        )}
      </div>
    );
  }

  private iconTemplate() {
    return (
      this.inoIcon && (
        <ino-icon
          class="mdc-text-field__icon"
          tabindex={this.inoIconClickable ? 1 : -1}
          ino-icon={this.inoIcon}
          ino-clickable={this.inoIconClickable}
        />
      )
    );
  }

  render() {
    const classTextfield = classNames({
      'ino-input__composer': true,
      'mdc-text-field': true,
      'mdc-text-field--disabled': this.disabled,
      'mdc-text-field--focused': this.autofocus,
      'mdc-text-field--outlined': this.inoOutline,
      'mdc-text-field--box': !this.inoOutline,
      'mdc-text-field--with-leading-icon':
        this.inoIcon && !this.inoIconTrailing,
      'mdc-text-field--with-trailing-icon':
        this.inoIcon && this.inoIconTrailing,
      'mdc-text-field--no-label': !this.inoLabel
    });

    return (
      <Host>
        <div class={classTextfield}>
          {!this.inoIconTrailing && this.iconTemplate()}
          <input
            ref={el => (this.nativeInputEl = el)}
            class="mdc-text-field__input"
            autocomplete={this.autocomplete}
            disabled={this.disabled}
            min={this.min}
            max={this.max}
            maxLength={this.maxlength}
            step={this.step}
            name={this.name}
            pattern={this.pattern}
            placeholder={this.placeholder}
            required={this.required}
            size={this.size}
            type={this.type}
            value={this.value}
            aria-controls={this.inoHelper && this.uniqueHelperId}
            aria-describedby={this.inoHelper && this.uniqueHelperId}
            onInput={this.handleNativeInputChange.bind(this)}
            onBlur={this.handleBlur}
            onFocus={this.handleFocus}
            list={this.inoDataList}
          />
          <slot/>
          <ino-label
            ino-outline={this.inoOutline}
            ino-text={this.inoLabel}
            ino-required={this.required}
            ino-disabled={this.disabled}
          />
          {this.inoIconTrailing && this.iconTemplate()}
        </div>
        {this.helperTextTemplate()}
      </Host>
    );
  }
}
