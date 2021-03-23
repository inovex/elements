import {
  Component,
  ComponentInterface,
  Element,
  Event,
  EventEmitter,
  Host,
  Prop,
  h,
} from '@stencil/core';
import classNames from 'classnames';
import { hasSlotContent } from '../../util/component-utils';

import { ChipSurface, ColorScheme } from '../types';

/**
 * @slot ino-icon-leading - For the icon to be prepended
 * @slot ino-icon-trailing - For the icon to be appended - disables the inoRemovable property
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
   * Possible values: `primary`, `secondary`,
   * `success`, `warning`, `error`, `light`, `dark`.
   */
  @Prop() inoColorScheme: ColorScheme | 'default' = 'default';

  /**
   * The fill type of this element.
   * Possible values: `solid` (default) or `outline`.
   */
  @Prop() inoFill?: ChipSurface = 'solid';

  /**
   * Prepends an icon to the chip label.
   * @deprecated This property is deprecated and will be removed with the next major release. Instead, use the ino-icon-leading slot.
   */
  @Prop() inoIcon?: string;

  /**
   * The label of this chip (**required**).
   */
  @Prop() inoLabel?: string;

  /**
   * The value of this chip.
   *
   * **Required** for chips as part of sets of type `filter` or `choice`.
   */
  @Prop() inoValue?: string;

  /**
   * Adds a close icon on the right side of this chip.
   *
   * If applied, emits the `removeChip` event.
   */
  @Prop() inoRemovable?: boolean;

  /**
   * Adds a checkmark if the icon is selected.
   */
  @Prop() inoSelectable?: boolean;

  /**
   * Marks this element as selected.
   */
  @Prop() inoSelected?: boolean;

  /**
   * Event that emits as soon as the user removes this chip.
   *
   * Listen to this event to hide or destroy this chip.
   * The event only emits if the property `inoRemovable` is true.
   */
  @Event() removeChip!: EventEmitter;

  componentDidLoad(): void {
    if (this.inoIcon) {
      console.warn(
        `Property 'ino-icon' is deprecated and will be removed with the next major release. Instead, use the ino-icon-leading slot.`
      );
    }
  }

  private iconClicked(e: Event) {
    e.preventDefault();
    this.removeChip.emit(this);
  }

  render() {
    const colorSchemeClass = `ino-chip--color-scheme-${this.inoColorScheme}`;

    const hostClasses = classNames({
      [colorSchemeClass]: this.inoColorScheme !== 'default',
      'ino-chip--outline': this.inoFill === 'outline',
    });

    const chipClasses = classNames('mdc-chip', {
      'mdc-chip--selected': this.inoSelected,
    });

    const leadingIconClasses = classNames({
      'mdc-chip__icon': true,
      'mdc-chip__icon--leading': true,
      'mdc-chip__icon--leading-hidden': this.inoSelected && this.inoSelectable,
    });

    const trailingIconClasses = classNames({
      'mdc-chip__icon': true,
      'mdc-chip__icon--trailing': true,
    });

    const leadingSlotHasContent = hasSlotContent(this.el, 'ino-icon-leading');
    const trailingSlotHasContent = hasSlotContent(this.el, 'ino-icon-trailing');

    return (
      <Host class={hostClasses}>
        <button class={chipClasses} tabindex="0" data-ino-value={this.inoValue}>
          <div class="mdc-chip__ripple"></div>

          {this.inoIcon && (
            <ino-icon class={leadingIconClasses} ino-icon={this.inoIcon} />
          )}

          {leadingSlotHasContent && !this.inoIcon && (
            <span class={leadingIconClasses}>
              <slot name="ino-icon-leading" />
            </span>
          )}

          {this.inoSelectable && (
            <span class="mdc-chip__checkmark">
              <svg class="mdc-chip__checkmark-svg" viewBox="-2 -3 30 30">
                <path
                  class="mdc-chip__checkmark-path"
                  fill="none"
                  stroke="black"
                  d="M1.73,12.91 8.1,19.28 22.79,4.59"
                />
              </svg>
            </span>
          )}

          <span class="mdc-chip__text">{this.inoLabel}</span>

          {trailingSlotHasContent && (
            <span class={trailingIconClasses}>
              <slot name="ino-icon-trailing" />
            </span>
          )}

          {this.inoRemovable && !trailingSlotHasContent && (
            <ino-icon
              class={trailingIconClasses}
              ino-icon="close"
              tabindex="0"
              role="button"
              ino-clickable
              onClick={(e) => this.iconClicked(e)}
            />
          )}
        </button>
      </Host>
    );
  }
}
