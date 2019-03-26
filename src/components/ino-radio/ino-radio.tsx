import { MDCFormField } from '@material/form-field';
import { MDCRadio } from '@material/radio';
import {
  Component,
  Element,
  Event,
  EventEmitter,
  Listen,
  Prop,
  Watch
} from '@stencil/core';
import classnames from 'classnames';

@Component({
  tag: 'ino-radio',
  styleUrl: 'ino-radio.scss',
  shadow: false
})
export class Radio {
  @Element() el!: HTMLElement;
  private nativeInputEl!: HTMLInputElement;

  /**
   * Marks this element as checked (**unmanaged**).
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
   * The tabIndex of this element.
   */
  @Prop() inoTabindex?: number;

  /**
   * The value of this element.
   */
  @Prop() value?: string;

  /**
   * An internal instance of the material design radio.
   */
  private radio: MDCRadio;

  /**
   * An internal instance of the material design form field.
   */
  private formField: MDCFormField;

  /**
   * Emits when the user enters some keystrokes. Contains typed input in `event.detail`
   */
  @Event() checkedChange!: EventEmitter;

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
    this.checkedChange.emit(newValue);

    e.stopPropagation();
  }

  componentDidLoad() {
    this.radio = new MDCRadio(this.el.querySelector('.mdc-radio'));
    this.formField = new MDCFormField(this.el.querySelector('.mdc-form-field'));
    this.formField.input = this.radio;
  }

  componentWillUnLoad() {
    this.radio.destroy();
    this.formField.destroy();
  }

  private uniqueRadioId() {
    return this.inoId ? `ino-radio-id-${this.inoId}` : '';
  }

  render() {
    return (
      <div class="mdc-form-field">
        <div
          class={classnames('mdc-radio', {
            'mdc-radio--disabled': this.disabled
          })}
        >
          <input
            class="mdc-radio__native-control"
            type="radio"
            id={this.uniqueRadioId()}
            checked={this.checked}
            disabled={this.disabled}
            name={this.name}
            tabindex={this.inoTabindex}
            value={this.value}
            ref={el => (this.nativeInputEl = el as HTMLInputElement)}
          />

          <div class="mdc-radio__background">
            <div class="mdc-radio__outer-circle" />
            <div class="mdc-radio__inner-circle" />
          </div>
        </div>
        <label htmlFor={this.uniqueRadioId()}>
          <slot />
        </label>
      </div>
    );
  }
}
