import { MDCFormField } from '@material/form-field';
import { MDCRadio } from '@material/radio';
import {
  Component,
  ComponentInterface,
  Element,
  Event,
  EventEmitter,
  Host,
  Prop,
  Watch,
  h
} from '@stencil/core';
import classnames from 'classnames';

import { generateUniqueId } from '../../util/component-utils';
import { renderHiddenInput } from '../../util/helpers';

@Component({
  tag: 'ino-radio',
  styleUrl: 'ino-radio.scss',
  shadow: true
})
export class Radio implements ComponentInterface {
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
    if (this.radio) {
      this.radio.checked = newChecked;
    }
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
    this.radio = new MDCRadio(this.el.shadowRoot.querySelector('.mdc-radio'));
    this.formField = new MDCFormField(this.el.shadowRoot.querySelector('.mdc-form-field'));
    this.formField.input = this.radio;
  }

  componentWillUnLoad() {
    this.radio.destroy();
    this.formField.destroy();
  }

  render() {

    const { el, name, checked, value, disabled } = this;

    const classes = classnames({
      'mdc-radio': true,
      'mdc-radio--disabled': disabled
    });

    renderHiddenInput(el, name, (checked ? value : ''), disabled);

    return (
      <Host checked={checked}>
        <div class="mdc-form-field">
          <div class={classes}>
            <input
              class="mdc-radio__native-control"
              type="radio"
              id={this.radioId}
              checked={this.checked}
              disabled={this.disabled}
              name={this.name}
              value={this.value}
              ref={input => (this.nativeInputEl = input as HTMLInputElement)}
              onInput={this.handleInput}
              onChange={e => e.stopPropagation()}
            />

            <div class="mdc-radio__background">
              <div class="mdc-radio__outer-circle"/>
              <div class="mdc-radio__inner-circle"/>
            </div>
          </div>
          <label htmlFor={this.radioId}>
            <slot></slot>
          </label>
        </div>
      </Host>
    );
  }
}
