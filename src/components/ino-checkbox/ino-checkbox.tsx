import { Component, Element, Prop } from '@stencil/core';
import {MDCFormField} from '@material/form-field';
import {MDCCheckbox} from '@material/checkbox';

@Component({
  tag: 'ino-checkbox',
  styleUrl: 'ino-checkbox.scss',
  shadow: false
})
export class Checkbox {
  @Element() el: HTMLElement;
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
   * The tab index of this element.
   */
  @Prop() tabIndex?: number;

  /**
   * The value of this element.
   */
  @Prop() value?: string;

  /**
   * An internal instance of the material design checkbox.
   */
  private checkbox: MDCCheckbox;

  /**
   * An internal instance of the material design form field.
   */
  private formField: MDCFormField;


  componentDidLoad() {
    this.checkbox = new MDCCheckbox(this.el.querySelector('.mdc-checkbox'));
    this.formField = new MDCFormField(this.el.querySelector('.mdc-form-field'));
    this.formField.input = this.checkbox;
  }

  componentWillUnLoad() {
    this.checkbox.destroy();
    this.formField.destroy();
  }


  private uniqueCheckboxId() {
    return this.id ? `ino-checkbox-id-${this.id}` : '';
  }


  render() {
    return (
      <div class="mdc-form-field">
        <div class={`mdc-checkbox ${this.disabled && 'mdc-checkbox--disabled'}`}>
          <input type="checkbox"
                 class="mdc-checkbox__native-control"
                 checked={this.checked}
                 disabled={this.disabled}
                 name={this.name}
                 tabindex={this.tabIndex}
                 value={this.value}
                 id={this.uniqueCheckboxId()} />
          <div class="mdc-checkbox__background">
            <svg class="mdc-checkbox__checkmark"
                viewBox="0 0 24 24">
              <path class="mdc-checkbox__checkmark-path"
                    fill="none"
                    stroke="white"
                    d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
            </svg>
            <div class="mdc-checkbox__mixedmark"></div>
          </div>
        </div>
        <label htmlFor={this.uniqueCheckboxId()}><slot /></label>
      </div>
    );
  }
}
