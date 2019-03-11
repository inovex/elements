import { MDCCheckbox } from '@material/checkbox';
import { MDCFormField } from '@material/form-field';
import {
  Component,
  Element,
  Event,
  EventEmitter,
  Listen,
  Prop,
  Watch
} from '@stencil/core';

@Component({
  tag: 'ino-checkbox',
  styleUrl: 'ino-checkbox.scss',
  shadow: false
})
export class Checkbox {
  private checkboxInstance: MDCCheckbox;
  private formField: MDCFormField;
  private nativeInputEl!: HTMLInputElement;

  @Element() el!: HTMLElement;

  /**
   * Marks this element as checked. (**unmanaged**)
   */
  @Prop() checked = false;

  @Watch('checked')
  checkedChanged(newChecked: boolean) {
    this.nativeInputEl.checked = newChecked;
  }

  /**
   * Disables this element.
   */
  @Prop() disabled?: boolean;

  /**
   * The id of this element.
   */
  @Prop() inoId?: string;

  /**
   * The name of this element.
   */
  @Prop() name?: string;

  /**
   * The tab index of this element.
   */
  @Prop() inoTabindex?: number;

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
  @Event() checkedChanges!: EventEmitter;

  @Listen('change')
  handleChange(e: Event) {
    e.stopPropagation();
  }

  @Listen('input')
  handleInput(e: Event) {
    const newValue = this.nativeInputEl.checked;
    if (newValue === this.checked) {
      return;
    }
    // Reset native value
    this.nativeInputEl.checked = this.checked;

    // reset indeterminate status
    this.checkboxInstance.indeterminate = this.indeterminate;
    this.checkedChanges.emit(newValue);

    e.stopPropagation();
  }

  private uniqueCheckboxId() {
    return this.inoId ? `ino-checkbox-id-${this.inoId}` : '';
  }

  render() {
    return (
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
            tabindex={this.inoTabindex}
            value={this.value}
            id={this.uniqueCheckboxId()}
            ref={el => (this.nativeInputEl = el as HTMLInputElement)}
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
        <label htmlFor={this.uniqueCheckboxId()}>
          <slot />
        </label>
      </div>
    );
  }
}
