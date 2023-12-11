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

/**
 * Input switches toggle the state of a single item. Compared to the input checkbox, their changes usually apply without any additional submission.
 *
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
  @Element() el!: HTMLInoSwitchElement;

  private mdcSwitchEl: HTMLButtonElement;
  private mdcSwitch: MDCSwitch;

  private switchId = `ino-switch-id_${generateUniqueId()}`;

  /**
   * Marks this element as checked. (**unmanaged**)
   */
  @Prop() checked?: boolean = false;

  @Watch('checked')
  checkedChanged(newChecked: boolean) {
    if (this.mdcSwitch) {
      this.mdcSwitch.selected = newChecked;
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

  componentDidLoad() {
    this.mdcSwitch = new MDCSwitch(this.mdcSwitchEl);

    const hasLeadingSlot = hasSlotContent(this.el, 'leading');
    const hasTrailingSlot = hasSlotContent(this.el, 'trailing');

    if (hasLeadingSlot != hasTrailingSlot) {
      console.error(
        '[ino-switch] Two icons (leading & trailing) are required in order to use the icon switch.',
      );
    }
  }

  disconnectedCallback() {
    this.mdcSwitch?.destroy();
  }

  /**
   * Emits when the user clicks on the switch to change the `checked` state. Contains the status in `event.detail`.
   */
  @Event() checkedChange!: EventEmitter;

  private handleChange = (e: MouseEvent) => {
    e.stopPropagation();

    if (this.disabled) return;

    this.checkedChange.emit(!this.checked);
  };

  render() {
    const { el, name, disabled } = this;

    const hiddenInput = renderHiddenInput(el, name, '', disabled);
    hiddenInput.checked = this.checked;

    const hasLeadingSlot = hasSlotContent(this.el, 'leading');
    const hasTrailingSlot = hasSlotContent(this.el, 'trailing');

    const hostClasses = classNames(
      'ino-switch',
      hasLeadingSlot || hasTrailingSlot
        ? 'ino-switch__icon-toggle'
        : 'ino-switch__default',
      {
        'ino-switch-disabled': this.disabled,
        'ino-switch-icon-disabled': this.disabled,
      },
    );

    const switchClasses = classNames(
      'mdc-switch',
      this.checked ? 'mdc-switch--selected' : 'mdc-switch--unselected',
      {
        'mdc-switch': true,
        'ino-switch__icon-toggle': hasLeadingSlot && hasTrailingSlot,
      },
    );

    const iconClasses = classNames('mdc-switch__icons', 'switch-icon');

    const leadingIconClasses = classNames(
      iconClasses,
      !this.checked ? 'switch-icon--selected' : 'switch-icon--unselected',
    );

    const trailingIconClasses = classNames(
      iconClasses,
      this.checked ? 'switch-icon--selected' : 'switch-icon--unselected',
    );

    return (
      <Host
        class={hostClasses}
        checked={this.checked}
        disabled={this.disabled}
        onClick={this.handleChange}
      >
        <button
          id={this.switchId}
          ref={(el) => (this.mdcSwitchEl = el)}
          class={switchClasses}
          disabled={this.disabled}
          type="button"
          role="switch"
          aria-checked={this.checked}
        >
          {hasLeadingSlot && (
            <span class={leadingIconClasses}>
              <slot name={'leading'} />
            </span>
          )}
          <div class="mdc-switch__track" />
          <div class="mdc-switch__handle-track">
            <div class="mdc-switch__handle">
              <div class="mdc-switch__ripple" />
            </div>
          </div>
          {hasTrailingSlot && (
            <span class={trailingIconClasses}>
              <slot name={'trailing'} />
            </span>
          )}
        </button>
        <label htmlFor={this.switchId} onClick={(e) => e.stopPropagation()}>
          <slot />
        </label>
      </Host>
    );
  }
}
