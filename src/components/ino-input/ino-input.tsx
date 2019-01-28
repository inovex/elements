import { MDCTextField } from '@material/textfield';
import { MDCTextFieldHelperText } from '@material/textfield/helper-text';
import { MDCTextFieldIcon } from '@material/textfield/icon';
import { Component, Element, Event, EventEmitter, Listen, Prop, Watch } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'ino-input',
  styleUrl: 'ino-input.scss',
  shadow: false
})
export class Input {
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
   * The accesskey of this native element.
   */
  @Prop() accesskey?: string;

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
   * The step value of this element
   */
  @Prop() step = 1;

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
   * The tabindex of this element.
   */
  @Prop() tabindex?: string;

  /**
   * The type of this element (default = text).
   */
  @Prop() type = 'text';

  /**
   * The value of this element. (**unmanaged**)
   */
  @Prop() value = '';

  @Watch('value')
  valueChanged(newValue: string) {
    if (this.nativeInputEl) {
      this.nativeInputEl.value = newValue;
      this.nativeInputEl.setSelectionRange(this.cursorPosition, this.cursorPosition);
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
   * The optional icon of this input field.
   */
  @Prop() inoIcon?: string;

  /**
   * Positions the icon trailing after the input field.
   */
  @Prop() inoIconTrailing = false;

  /**
   * Makes the icon clickable and allows to listen to the `inoIconClicked` event.
   */
  @Prop() inoIconClickable?: boolean;

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
      this.helperText = new MDCTextFieldHelperText(document.querySelector('.mdc-text-field-helper-text'));
    }
    if (this.inoIcon) {
      this.icon = new MDCTextFieldIcon(document.querySelector('.mdc-text-field-icon'));
    }

    if (this.value && this.nativeInputEl) {
      this.nativeInputEl.value = this.value;
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
    this.valueChanges.emit(e.target.value);
    if (this.nativeInputEl) {
      this.nativeInputEl.value = this.value;
    }
  }

  /**
   * Emits when the user types something in.
   * Contains typed input in `event.detail`
   */
  @Event() valueChanges!: EventEmitter<string>;

  @Listen('change')
  handleChange(e: Event) {
    e.stopPropagation();
  }

  @Listen('input')
  handleInput(e) {
    e.stopImmediatePropagation();
    e.stopPropagation();
  }

  private labelTemplate() {
    if (!this.inoLabel) {
      return '';
    }
    const classLabel = classNames(
      'mdc-floating-label',
      { 'mdc-floating-label--float-above': this.inoLabel && (this.value || this.nativeInputEl === document.activeElement) }
    );
    return <label class={classLabel}>{this.inoLabel}</label>;
  }

  private inputStyleTemplate() {
    if (this.inoOutline) {
      return ([
        <div class="mdc-notched-outline">
          <svg>
            <path class="mdc-notched-outline__path"/>
          </svg>
        </div>,
        <div class="mdc-notched-outline__idle"></div>
      ]);
    }
    return <div class="mdc-line-ripple"></div>;
  }

  private helperTextTemplate() {
    if (!this.inoHelper) {
      return '';
    }
    const classInputMessage = classNames({
      'mdc-text-field-helper-text' : true,
      'mdc-text-field-helper-text--persistent': this.inoHelperPersistent,
      'mdc-text-field-helper-text--validation-msg': !!this.inoHelperValidation
    });

    return <p class={classInputMessage} id={this.uniqueHelperId} aria-hidden="true">{this.inoHelper}</p>;
  }

  private iconTemplate() {
    return this.inoIcon && (
      <ino-icon
        class="mdc-text-field__icon"
        ino-icon={this.inoIcon}
        tabindex={this.inoIconClickable ? 0 : -1}
        ino-clickable={this.inoIconClickable}
      >
      </ino-icon>
    );
  }

  render() {
    const classTextfield = classNames({
      'ino-input__composer': true,
      'mdc-text-field': true,
      'mdc-text-field--focused': this.autofocus,
      'mdc-text-field--outlined': this.inoOutline,
      'mdc-text-field--box': !this.inoOutline,
      'mdc-text-field--upgraded': true,
      'mdc-text-field--with-leading-icon': this.inoIcon && !this.inoIconTrailing,
      'mdc-text-field--with-trailing-icon': this.inoIcon && this.inoIconTrailing,
    });

    return ([
      <div class={classTextfield}>
        {!this.inoIconTrailing && this.iconTemplate()}
        <input
          ref={el => this.nativeInputEl = el}
          class="mdc-text-field__input"
          accessKey={this.accesskey}
          autocomplete={this.autocomplete}
          autofocus={this.autofocus}
          disabled={this.disabled}
          min={this.min}
          max={this.max}
          step={this.step}
          name={this.name}
          pattern={this.pattern}
          placeholder={this.placeholder}
          required={this.required}
          size={this.size}
          tabindex={this.tabindex}
          type={this.type}
          value={this.value}
          aria-controls={this.inoHelper && this.uniqueHelperId}
          aria-describedby={this.inoHelper && this.uniqueHelperId}
          onInput={this.handleNativeInputChange.bind(this)}
        />

        {this.labelTemplate()}
        {this.inoIconTrailing && this.iconTemplate()}
        {this.inputStyleTemplate()}
      </div>,
      this.helperTextTemplate()
    ]);
  }
}
