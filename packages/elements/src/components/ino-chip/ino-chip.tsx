import {
  Component,
  ComponentInterface,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Prop,
} from '@stencil/core';
import classNames from 'classnames';
import { hasSlotContent } from '../../util/component-utils';

import { ChipSurface, ColorScheme } from '../types';

/**
 * @slot icon-leading - For the icon to be prepended
 * @slot icon-trailing - For the icon to be appended - disables the `removable` property
 */
@Component({
  tag: 'ino-chip',
  styleUrl: 'ino-chip.scss',
  shadow: false,
})
export class Chip implements ComponentInterface {
  @Element() el!: HTMLElement;

  /**
   * The name of the color scheme which is used
   * to style the background and outline of this component.
   */
  @Prop() colorScheme: ColorScheme | 'default' = 'default';

  /**
   * The fill type of this element.
   */
  @Prop() fill: ChipSurface = 'solid';

  /**
   * Prepends an icon to the chip label.
   * @deprecated This property is deprecated and will be removed with the next major release. Instead, use the icon-leading slot.
   */
  @Prop() icon?: string;

  /**
   * The label of this chip (**required**).
   */
  @Prop() label?: string;

  /**
   * The value of this chip.
   *
   * **Required** for chips as part of sets of type `filter` or `choice`.
   */
  @Prop() value?: string;

  /**
   * Adds a close icon on the right side of this chip.
   *
   * If applied, emits the `removeChip` event.
   */
  @Prop() removable: boolean = false;

  /**
   * Adds a checkmark if the icon is selected.
   */
  @Prop() selectable: boolean = false;

  /**
   * Marks this element as selected.
   */
  @Prop() selected: boolean = false;

  /**
   * Event that emits as soon as the user removes this chip.
   *
   * Listen to this event to hide or destroy this chip.
   * The event only emits if the property `removable` is true.
   */
  @Event() removeChip!: EventEmitter;

  componentDidLoad(): void {
    if (this.icon) {
      console.warn(
        `Property 'ino-icon' is deprecated and will be removed with the next major release. Instead, use the icon-leading slot.`
      );
    }
  }

  private iconClicked(e: Event) {
    e.preventDefault();
    this.removeChip.emit(this);
  }

  render() {
    const colorSchemeClass = `ino-chip--color-scheme-${this.colorScheme}`;

    const hostClasses = classNames({
      [colorSchemeClass]: this.colorScheme !== 'default',
      'ino-chip--outline': this.fill === 'outline',
    });

    const trailingIconClasses = classNames({
      'mdc-chip__icon': true,
      'mdc-chip__icon--trailing': true,
    });

    const leadingSlotHasContent = hasSlotContent(this.el, 'icon-leading');
    const trailingSlotHasContent = hasSlotContent(this.el, 'icon-trailing');

    return (
      <Host class={hostClasses}>
        <span class="mdc-evolution-chip" role="presentation" id="c5">
          <span
            class="mdc-evolution-chip__action mdc-evolution-chip__action--primary"
            role="option"
            aria-selected="false"
            tabindex="0"
          >
            <span class="mdc-evolution-chip__ripple mdc-evolution-chip__ripple--primary"></span>
            <span class="mdc-evolution-chip__graphic">
              {leadingSlotHasContent && (
                <span class="mdc-evolution-chip__icon mdc-evolution-chip__icon--primary">
                  <slot name="icon-leading" />
                </span>
              )}
              {this.selectable && (
                <span class="mdc-evolution-chip__checkmark">
                  <svg
                    class="mdc-evolution-chip__checkmark-svg"
                    viewBox="-2 -3 30 30"
                  >
                    <path
                      class="mdc-evolution-chip__checkmark-path"
                      fill="none"
                      stroke="black"
                      d="M1.73,12.91 8.1,19.28 22.79,4.59"
                    />
                  </svg>
                </span>
              )}
              {this.removable && !trailingSlotHasContent && (
                <ino-icon
                  class={trailingIconClasses}
                  icon="close"
                  tabindex="0"
                  role="button"
                  clickable={true}
                  onClick={(e) => this.iconClicked(e)}
                />
              )}
            </span>

            <span class="mdc-evolution-chip__text-label">{this.label}</span>
          </span>
        </span>
      </Host>
    );
  }
}
