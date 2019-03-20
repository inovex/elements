import { Component, Element, Event, EventEmitter, Prop } from '@stencil/core';
import classNames from 'classnames';

import { ChipSurface, ColorScheme } from '../types';

@Component({
  tag: 'ino-chip',
  styleUrl: 'ino-chip.scss',
  shadow: false
})
export class Chip {
  @Element() el!: HTMLElement;

  /**
   * The name of the color scheme which is used
   * to style the background and outline of this component.
   * Possible values: `primary`,  `secondary`, `tertiary`,
   * `success`, `warning`, `error`, `light`, `dark`.
   */
  @Prop() inoColorScheme?: ColorScheme = null;

  /**
   * The fill type of this element.
   * Possible values: `solid` (default) or `outline`.
   */
  @Prop() inoFill?: ChipSurface = 'solid';

  /**
   * The icon before the label in this chip.
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

  private iconClicked(e: Event) {
    e.preventDefault();
    this.removeChip.emit(this);
  }

  render() {
    const chipClasses = classNames('mdc-chip', {
      'mdc-chip--selected': this.inoSelected
    });

    const iconClasses = classNames({
      'mdc-chip__icon': true,
      'mdc-chip__icon--leading': true,
      'mdc-chip__icon--leading-hidden': this.inoSelected && this.inoSelectable
    });

    return (
      <div class={chipClasses} tabindex="0" data-ino-value={this.inoValue}>
        {this.inoIcon && (
          <ino-icon class={iconClasses} ino-icon={this.inoIcon} />
        )}

        {this.inoSelectable && (
          <div class="mdc-chip__checkmark">
            <svg class="mdc-chip__checkmark-svg" viewBox="-2 -3 30 30">
              <path
                class="mdc-chip__checkmark-path"
                fill="none"
                stroke="black"
                d="M1.73,12.91 8.1,19.28 22.79,4.59"
              />
            </svg>
          </div>
        )}

        <div class="mdc-chip__text">{this.inoLabel}</div>

        {this.inoRemovable && (
          <ino-icon
            class="mdc-chip__icon mdc-chip__icon--trailing"
            ino-icon="cancel"
            tabindex="0"
            role="button"
            ino-clickable
            onClick={e => this.iconClicked(e)}
          />
        )}
      </div>
    );
  }
}
