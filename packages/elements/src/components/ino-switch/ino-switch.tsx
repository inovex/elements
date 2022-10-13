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
  State,
  Watch,
} from '@stencil/core';
import classNames from 'classnames';

import { generateUniqueId } from '../../util/component-utils';
import { renderHiddenInput } from '../../util/helpers';

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

  /**
   * Sets the prepended icon
   */
  @Prop() iconLeading?: string;

  /**
   * Sets the appended icon
   */
  @Prop() iconTrailing?: string;

  @State() isShown = false;

  componentDidLoad() {
    this.mdcSwitch = new MDCSwitch(this.mdcSwitchEl);
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

  private handleHover = (e: MouseEvent) => {
    e.stopPropagation();

    if (this.disabled) return;

    if (e.type === 'mouseenter') {
      this.isShown = true;
    } else {
      this.isShown = false;
    }
  };

  render() {
    const { el, name, disabled } = this;

    const hiddenInput = renderHiddenInput(el, name, '', disabled);
    hiddenInput.checked = this.checked;

    const hostClasses = classNames('ino-switch', {
      'ino-switch-disabled': this.disabled,
      'ino-switch-icon-disabled': this.disabled,
    });

    const switchClasses = classNames(
      'mdc-switch',
      {
        'ino-switch-icon': this.iconTrailing && this.iconLeading,
        'ino-switch-icon__toRight': this.isShown && !this.checked,
        'ino-switch-icon__toLeft': this.isShown && this.checked,
      },
      this.checked ? 'mdc-switch--selected' : 'mdc-switch--unselected'
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
          onMouseEnter={this.handleHover}
          onMouseLeave={this.handleHover}
        >
          {this.iconTrailing && (
            <ino-icon class="mdc-switch__icons" icon={this.iconTrailing} />
          )}
          <div class="mdc-switch__track" />
          <div class="mdc-switch__handle-track">
            <div class="mdc-switch__handle">
              <div class="mdc-switch__ripple" />
            </div>
          </div>
          
          {this.iconLeading && (
            <ino-icon class="mdc-switch__icons" icon={this.iconLeading} />
          )}
        </button>
        <label htmlFor={this.switchId} onClick={(e) => e.stopPropagation()}>
          <slot />
        </label>
      </Host>
    );
  }
}
