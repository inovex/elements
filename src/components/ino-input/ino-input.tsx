import { Component, Element, Prop } from '@stencil/core';
import { MDCTextField } from '@material/textfield';
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
   * An internal instance of the material design textfield.
   */
  private textfield: MDCTextField;


  componentDidLoad() {
    this.textfield = new MDCTextField(this.el.querySelector('.mdc-text-field'));
  }

  componentWillUnLoad() {
    this.textfield.destroy();
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


  render() {
    const classTextfield = classNames(
      'composer',
      'mdc-text-field',
      {'mdc-text-field--focused': this.autofocus},
      {'mdc-text-field--outlined': this.inoOutline},
      {'mdc-text-field--box': !this.inoOutline},
      {'mdc-text-field--upgraded': this.value && this.inoLabel}
    );

    return (
      <div class={classTextfield}>
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
          value={this.value} />

        {this.labelTemplate()}
        {this.inputStyleTemplate()}
      </div>
    );
  }
}
