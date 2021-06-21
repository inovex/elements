import { MDCSwitch } from '@material/switch';
import {
  Component,
  ComponentInterface,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Prop,
  Watch,
} from '@stencil/core';
import classNames from 'classnames';

import { generateUniqueId } from '../../util/component-utils';
import { renderHiddenInput } from '../../util/helpers';
import { ColorScheme } from '../types';

/**
 * @slot default - Label of the switch
 */
@Component({
  tag: 'ino-switch',
  styleUrl: 'ino-switch.scss',
  shadow: false,
})
export class Switch implements ComponentInterface {
  @Element() el!: HTMLElement;
  private nativeInputEl!: HTMLInputElement;
  private switch: MDCSwitch;

  private switchId = `ino-switch-id_${generateUniqueId()}`;

  /**
   * Marks this element as checked. (**unmanaged**)
   */
  @Prop() checked?: boolean = false;

  @Watch('checked')
  checkedChanged(newChecked: boolean) {
    if (this.switch) {
      this.switch.checked = newChecked;
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
   * The name of the color scheme which is used
   * to style the background and outline of this component.
   * Possible values: `primary` (default),  `secondary`,
   * `success`, `warning`, `error`, `light`, `dark`.
   */
  @Prop() colorScheme: ColorScheme = 'primary';

  componentDidLoad() {
    this.switch = new MDCSwitch(document.querySelector('.mdc-switch'));
  }

  componentDidUnLoad() {
    this.switch?.destroy();
  }

  /**
   * Emits when the user clicks on the checkbox to change the checked state. Contains the status in `event.detail`.
   */
  @Event() checkedChange!: EventEmitter;

  handleChange = (e: Event) => {
    e.stopPropagation();
    this.nativeInputEl.checked = this.checked;
    this.checkedChange.emit(!this.checked);
  };

  render() {
    const { el, name, disabled } = this;

    renderHiddenInput(el, name, '', disabled);

    const hostClasses = classNames(
      `ino-switch--color-scheme-${this.colorScheme}`
    );

    const classesSwitch = classNames({
      'mdc-switch': true,
      'mdc-switch--disabled': this.disabled,
      'mdc-switch--checked': this.checked,
    });

    return (
      <Host class={hostClasses} checked={this.checked} disabled={this.disabled}>
        <div class={classesSwitch}>
          <div class="mdc-switch__track"></div>
          <div class="mdc-switch__thumb-underlay">
            <div class="mdc-switch__thumb"></div>
            <input
              name={this.name}
              checked={this.checked}
              disabled={this.disabled}
              type="checkbox"
              id={this.switchId}
              class="mdc-switch__native-control"
              role="switch"
              onChange={(e) => e.stopPropagation()}
              onInput={this.handleChange}
              ref={(input) => (this.nativeInputEl = input as HTMLInputElement)}
            />
          </div>
        </div>
        <label htmlFor={this.switchId}>
          <slot></slot>
        </label>
      </Host>
    );
  }
}
