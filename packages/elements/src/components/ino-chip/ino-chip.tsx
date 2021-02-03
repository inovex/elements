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
  @Prop() inoColorScheme?: ColorScheme;

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
   * If enabled, appends the slotted icon to the chip label.
   *
   * Please be aware that enabling this property will disable the inoRemovable
   * property.
   */
  @Prop() inoIconTrailing = false;

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
    const chipClasses = classNames('mdc-chip', {
      'mdc-chip--selected': this.inoSelected,
    });

    const iconClasses = classNames({
      'mdc-chip__icon': true,
      'mdc-chip__icon--leading': true,
      'mdc-chip__icon--trailing': this.inoIconTrailing,
      'mdc-chip__icon--leading-hidden': this.inoSelected && this.inoSelectable
    });

    const leadingSlotHasContent = hasSlotContent(this.el, 'ino-icon-leading');

    return (
      <Host>
        <button class={chipClasses} tabindex="0" data-ino-value={this.inoValue}>
          <div class="mdc-chip__ripple"></div>

          {this.inoIcon && (
            <ino-icon class={iconClasses} ino-icon={this.inoIcon} />
          )}

          {leadingSlotHasContent && !this.inoIcon && (
            <span class={iconClasses}>
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

          {this.inoIconTrailing && (
            <span class="mdc-chip__icon ">
              <slot name="ino-icon-trailing"/>
            </span>
          )}

          {this.inoRemovable && !this.inoIconTrailing && (
            <ino-icon
              class="mdc-chip__icon mdc-chip__icon--trailing"
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
