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

import { generateUniqueId, hasSlotContent } from '../../util/component-utils';
import { renderHiddenInput } from '../../util/helpers';
import { ColorScheme } from '../types';

/**
 * @slot default - Label of the switch
 * @slot icon-on - Icon used for the checked state. The colors of the `color-scheme` will be used.
 * @slot icon-off - Icon used for the unchecked state. The colors of the `color-scheme` will be used.
 */
@Component({
  tag: 'ino-switch',
  styleUrl: 'ino-switch.scss',
  shadow: false,
})
export class Switch implements ComponentInterface {
  @Element() el!: HTMLElement;
  private nativeInputEl!: HTMLInputElement;
  private iconContainerEl: HTMLDivElement;
  private switch: MDCSwitch;

  private switchId = `ino-switch-id_${generateUniqueId()}`;

  /**
   * Marks this element as checked. (**unmanaged**)
   */
  @Prop() checked?: boolean = false;

  @Watch('checked')
  checkedChanged(newChecked: boolean) {
    if (this.switch) {
      this.switch.selected = newChecked;
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
    this.addMdcClassesToIcons();
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

  private addMdcClassesToIcons() {
    const onIcon = this.iconContainerEl.querySelector('[slot="icon-on"]');
    const offIcon = this.iconContainerEl.querySelector('[slot="icon-off"]');
    onIcon?.classList.add('mdc-switch__icon', 'mdc-switch__icon--on');
    offIcon?.classList.add('mdc-switch__icon', 'mdc-switch__icon--off');
  }

  render() {
    const { el, name, disabled } = this;

    renderHiddenInput(el, name, '', disabled);

    const hostClasses = classNames(
      `ino-switch--color-scheme-${this.colorScheme}`
    );

    const switchClasses = classNames(
      'ino-switch',
      'mdc-switch',
      this.checked ? 'mdc-switch--selected' : 'mdc-switch--unselected'
    );

    const hasOnIcon = hasSlotContent(this.el, 'icon-on');
    const hasOffIcon = hasSlotContent(this.el, 'icon-off');

    return (
      <Host class={hostClasses} checked={this.checked} disabled={this.disabled}>
        <button
          id={this.switchId}
          class={switchClasses}
          disabled={this.disabled}
          type="button"
          role="switch"
          aria-checked={this.checked}
        >
          <div class="mdc-switch__track" />
          <div class="mdc-switch__handle-track">
            <div class="mdc-switch__handle">
              <div class="mdc-switch__ripple" />
              <div
                ref={(el) => (this.iconContainerEl = el)}
                class="mdc-switch__icons"
              >
                {hasOnIcon && <slot name="icon-on" />}
                {hasOffIcon && <slot name="icon-off" />}
              </div>
            </div>
          </div>
        </button>
        <label htmlFor={this.switchId}>
          <slot />
        </label>
      </Host>
    );
  }
}
