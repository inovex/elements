import { MDCFormField } from '@material/form-field';
import { MDCRadio } from '@material/radio';
import { Component, Prop } from '@stencil/core';
import classnames from 'classnames';

@Component({
  tag: 'ino-radio',
  styleUrl: 'ino-radio.scss',
  shadow: false
})
export class Radio {
  /**
   * Marks this element as checked.
   */
  @Prop() checked?: boolean;

  /**
   * Disables this element.
   */
  @Prop() disabled?: boolean;

  /**
   * The id of this element.
   */
  @Prop() id?: string;

  /**
   * The name of this element.
   */
  @Prop() name?: string;

  /**
   * The tabIndex of this element.
   */
  @Prop() tabIndex?: number;

  /**
   * The value of this element.
   */
  @Prop({ mutable: true }) value?: string;

  /**
   * An internal instance of the material design radio.
   */
  private radio: MDCRadio;

  /**
   * An internal instance of the material design form field.
   */
  private formField: MDCFormField;

  componentDidLoad() {
    this.radio = new MDCRadio(document.querySelector('.mdc-radio'));
    this.formField = new MDCFormField(document.querySelector('.mdc-form-field'));
    this.formField.input = this.radio;
  }

  componentWillUnLoad() {
    this.radio.destroy();
    this.formField.destroy();
  }

  private uniqueRadioId() {
    return this.id ? `ino-radio-id-${this.id}` : '';
  }

  render() {
    return (
      <div class="mdc-form-field">
        <div class={classnames('mdc-radio', { 'mdc-radio--disabled': this.disabled })}>
          <input
            class="mdc-radio__native-control"
            type="radio"
            id={this.uniqueRadioId()}
            checked={this.checked}
            disabled={this.disabled}
            name={this.name}
            tabindex={this.tabIndex}
            value={this.value}
          />

          <div class="mdc-radio__background">
            <div class="mdc-radio__outer-circle"></div>
            <div class="mdc-radio__inner-circle"></div>
          </div>
        </div>
        <label htmlFor={this.uniqueRadioId()}><slot /></label>
      </div>
    );
  }
}
