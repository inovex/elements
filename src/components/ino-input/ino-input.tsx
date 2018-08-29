import { Component, Element, Prop } from '@stencil/core';
import { MDCTextField } from '@material/textfield';
import { MDCTextFieldHelperText } from '@material/textfield/helper-text';
import { MDCTextFieldIcon } from '@material/textfield/icon';
import classNames from 'classnames';

@Component({
  tag: 'ino-input',
  styleUrl: 'ino-input.scss',
  shadow: false
})
export class Input {
  @Element() el: HTMLElement;

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
  @Prop() type: string = 'text';

  /**
   * The value of this element.
   */
  @Prop({ mutable: true }) value: string;


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
  @Prop() inoIconTrailing?: boolean = false;

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


  componentDidLoad() {
    this.textfield = new MDCTextField(this.el.querySelector('.mdc-text-field'));
    if (this.inoHelper) {
      this.helperText = new MDCTextFieldHelperText(document.querySelector('.mdc-text-field-helper-text'));
    }
    if (this.inoIcon) {
      this.icon = new MDCTextFieldIcon(document.querySelector('.mdc-text-field-icon'));
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


  private labelTemplate() {
    if (!this.inoLabel) {
      return '';
    }
    const classLabel = classNames(
      'mdc-floating-label',
      {'mdc-floating-label--float-above': this.inoLabel && this.value}
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
        ino-clickable={this.inoIconClickable}>
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
      'mdc-text-field--upgraded': this.value && this.inoLabel,
      'mdc-text-field--with-leading-icon': this.inoIcon && !this.inoIconTrailing,
      'mdc-text-field--with-trailing-icon': this.inoIcon && this.inoIconTrailing,
    });

    return ([
      <div class={classTextfield}>
        {!this.inoIconTrailing && this.iconTemplate()}
        <input
          class="mdc-text-field__input"
          accessKey={this.accesskey}
          autocomplete={this.autocomplete}
          autofocus={this.autofocus}
          disabled={this.disabled}
          min={this.min}
          max={this.max}
          name={this.name}
          pattern={this.pattern}
          placeholder={this.placeholder}
          required={this.required}
          size={this.size}
          tabindex={this.tabindex}
          type={this.type}
          value={this.value}
          aria-controls={this.inoHelper && this.uniqueHelperId}
          aria-describedby={this.inoHelper && this.uniqueHelperId} />

        {this.labelTemplate()}
        {this.inoIconTrailing && this.iconTemplate()}
        {this.inputStyleTemplate()}
      </div>,
      this.helperTextTemplate()
    ]);
  }
}
