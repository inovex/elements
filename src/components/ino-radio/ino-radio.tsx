import { MDCFormField } from '@material/form-field';
import { MDCRadio } from '@material/radio';
import { Component, Element, Event, EventEmitter, Prop, Watch } from '@stencil/core';
import classnames from 'classnames';

import { generateUniqueId } from '../../util/component-utils';

@Component({
  tag: 'ino-radio',
  styleUrl: 'ino-radio.scss',
  shadow: false
})
export class Radio {
  @Element() el!: HTMLElement;
  private nativeInputEl!: HTMLInputElement;

  /**
   * Initially marks this element as checked.
   * If another ino-radio element in the same group receives `true`,
   * the value will be changed to false automatically.
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
   * The name of this element. Use the same name for radio groups
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
   * Emits when the user interacts with the radio-button. Contains `true` in `event.detail`.
   * This event will only be emitted if the current state of the radio button is false.
   */
  @Event() checkedChange!: EventEmitter;

  handleInput = (e: Event) => {
    e.stopPropagation();
    this.nativeInputEl.checked = this.checked;
    this.checkedChange.emit(true);
  }

  private radioId = `ino-radio-id_${generateUniqueId()}`;

  componentDidLoad() {
    this.radio = new MDCRadio(this.el.querySelector('.mdc-radio'));
    this.formField = new MDCFormField(this.el.querySelector('.mdc-form-field'));
    this.formField.input = this.radio;
  }

  componentWillUnLoad() {
    this.radio.destroy();
    this.formField.destroy();
  }

  render() {

    const classes = classnames({
      'mdc-radio': true,
      'mdc-radio--disabled': this.disabled
    });

    return (
      <div class="mdc-form-field">
        <div class={classes}>
          <input
            class="mdc-radio__native-control"
            type="radio"
            id={this.radioId}
            checked={this.checked}
            disabled={this.disabled}
            name={this.name}
            tabindex={this.inoTabindex}
            value={this.value}
            ref={el => (this.nativeInputEl = el as HTMLInputElement)}
            onInput={this.handleInput}
            onChange={e => e.stopPropagation()}
          />

          <div class="mdc-radio__background">
            <div class="mdc-radio__outer-circle"/>
            <div class="mdc-radio__inner-circle"/>
          </div>
        </div>
        <label htmlFor={this.radioId}>
          <slot/>
        </label>
      </div>
    );
  }
}
