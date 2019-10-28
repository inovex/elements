import { MDCCheckbox } from '@material/checkbox';
import { MDCFormField } from '@material/form-field';
import { Component, ComponentInterface, Element, Event, EventEmitter, Host, Prop, Watch, h } from '@stencil/core';

import { generateUniqueId } from '../../util/component-utils';

@Component({
  tag: 'ino-checkbox',
  styleUrl: 'ino-checkbox.scss',
  shadow: false
})
export class Checkbox implements ComponentInterface {
  private checkboxInstance: MDCCheckbox;
  private formField: MDCFormField;
  private nativeInputEl!: HTMLInputElement;

  @Element() el!: HTMLElement;

  /**
   * Marks this element as checked. (**unmanaged**)
   */
  @Prop() checked?: boolean = false;

  @Watch('checked')
  checkedChanged(newChecked: boolean) {
    if (this.checkboxInstance) {
      this.checkboxInstance.checked = newChecked;
    }
  }

  /**
   * Disables this element.
   */
  @Prop() disabled?: boolean;

  /**
   * The name of this element.
   */
  @Prop() name?: string;

  /**
   * The value of this element.
   */
  @Prop() value?: string;

  /**
   * Marks this element as indeterminate (**unmanaged**)
   */
  @Prop() indeterminate?: boolean;

  @Watch('indeterminate')
  indeterminateChanged(newValue: boolean) {
    this.checkboxInstance.indeterminate = newValue;
  }

  private checkboxId = `ino-checkbox-id_${generateUniqueId()}`;

  componentDidLoad() {
    this.checkboxInstance = new MDCCheckbox(
      this.el.querySelector('.mdc-checkbox')
    );
    this.formField = new MDCFormField(this.el.querySelector('.mdc-form-field'));
    this.formField.input = this.checkboxInstance;

    if (this.indeterminate) {
      this.checkboxInstance.indeterminate = true;
    }
  }

  componentWillUnLoad() {
    this.checkboxInstance.destroy();
    this.formField.destroy();
  }

  /**
   * Emits when the user clicks on the checkbox to change the checked state. Contains the status in `event.detail`.
   */
  @Event() checkedChange!: EventEmitter;

  handleInput = (e: Event) => {
    this.nativeInputEl.checked = this.checked;
    this.checkedChange.emit(!this.checked);
    e.stopPropagation();
  }

  render() {

    return (
      <Host>
        <div class="mdc-form-field">
          <div
            class={`mdc-checkbox ${this.disabled && 'mdc-checkbox--disabled'}`}
          >
            <input
              type="checkbox"
              class="mdc-checkbox__native-control"
              checked={this.checked}
              disabled={this.disabled}
              name={this.name}
              value={this.value}
              id={this.checkboxId}
              ref={el => (this.nativeInputEl = el as HTMLInputElement)}
              onChange={e => e.stopPropagation()}
              onInput={this.handleInput}
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
              <div class="mdc-checkbox__mixedmark"/>
            </div>
          </div>
          <label htmlFor={this.checkboxId}>
            <slot></slot>
          </label>
        </div>
      </Host>
    );
  }
}
