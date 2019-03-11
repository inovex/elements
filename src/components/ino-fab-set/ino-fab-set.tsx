import { Component, Element, Prop } from '@stencil/core';
import classNames from 'classnames';

import { HorizontalLocation, Locations, VerticalLocation } from '../types';

@Component({
  tag: 'ino-fab-set',
  styleUrl: 'ino-fab-set.scss',
  shadow: false
})
export class Fab {
  @Element() el!: HTMLElement;

  /**
   * The direction of the speed dial.
   * Possible values: `top` (default), `bottom`, `right`, `left`.
   */
  @Prop() inoDialDirection: Locations = 'top';

  /**
   * The side where the Fab is displayed.
   * Possible values: `top`, `bottom` (default).
   */
  @Prop() inoTopBottomLocation: VerticalLocation = 'bottom';

  /**
   * The side where the Fab is displayed.
   * Possible values: `right`, `left` (default).
   */
  @Prop() inoLeftRightLocation: HorizontalLocation = 'left';

  render() {
    const speedDialClasses = classNames({
      'ino-speed-dial': true
    });

    const directionClasses = classNames(
      'ino-top-bottom-location-' + this.inoTopBottomLocation,
      'ino-left-right-location-' + this.inoLeftRightLocation,
      'ino-fab-set-wrapper',
      'ino-direction-' + this.inoDialDirection
    );

    return (
      <div class={directionClasses}>
        <div class={speedDialClasses}>
          <slot />
        </div>
        <slot name="primary-fab" />
      </div>
    );
  }
}
