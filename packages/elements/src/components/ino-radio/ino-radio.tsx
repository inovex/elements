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
  h,
} from '@stencil/core';
import classnames from 'classnames';

import { generateUniqueId } from '../../util/component-utils';
import { renderHiddenInput } from '../../util/helpers';

/**
 * A radio component that allows the user to select an option from a set of radio-buttons. In order to have a single select functionality, please refer to the `ino-radio-group`-component. This component functions as a wrapper around the material [radio](https://github.com/material-components/material-components-web/tree/master/packages/mdc-radio) component.
 *
 * #### Additional Hints
 * Clicking on the radio button triggers an event that contains the boolean value `true` (`e.detail`). This event is only triggered if the radio button was not previously selected (`checked=false`). In order to check one element and uncheck the other ones, please refer to the `ino-radio-group`-Component. If (`checked=true`) is passed to an element, the other elements **won't** be deselected without the use of the `ino-radio-group`.
 * 
 * @slot default - Label of the checkbox
 */
@Component({
  tag: 'ino-radio',
  styleUrl: 'ino-radio.scss',
  shadow: true,
})
export class Radio implements ComponentInterface {
  @Element() el!: HTMLInoRadioElement;
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

  private handleInput = (e: Event) => {
    e.stopPropagation();
    this.nativeInputEl.checked = this.checked;
    this.checkedChange.emit(true);
  };

  private radioId = `ino-radio-id_${generateUniqueId()}`;

  componentDidLoad() {
    this.radio = new MDCRadio(this.el.shadowRoot.querySelector('.mdc-radio'));
    this.formField = new MDCFormField(
      this.el.shadowRoot.querySelector('.mdc-form-field'),
    );
    this.formField.input = this.radio;
  }

  disconnectedCallback() {
    this.radio?.destroy();
    this.formField?.destroy();
  }

  render() {
    const { el, name, checked, value, disabled } = this;

    const hostClasses = classnames({
      'ino-radio--checked': checked,
    });

    const mdcClasses = classnames({
      'mdc-radio': true,
      'mdc-radio--disabled': disabled,
    });

    renderHiddenInput(el, name, checked ? value : '', disabled);

    return (
      <Host class={hostClasses}>
        <div class="mdc-form-field">
          <div class={mdcClasses}>
            <input
              class="mdc-radio__native-control"
              type="radio"
              id={this.radioId}
              checked={this.checked}
              disabled={this.disabled}
              name={this.name}
              value={this.value}
              ref={(input) => (this.nativeInputEl = input as HTMLInputElement)}
              onInput={this.handleInput}
              onChange={(e) => e.stopPropagation()}
            />

            <div class="mdc-radio__background">
              <div class="mdc-radio__outer-circle" />
              <div class="mdc-radio__inner-circle" />
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
