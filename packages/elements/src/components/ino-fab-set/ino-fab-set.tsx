import {
  Component,
  ComponentInterface,
  Element,
  Host,
  Prop,
  h,
} from '@stencil/core';
import classNames from 'classnames';

import { HorizontalLocation, Locations, VerticalLocation } from '../types';

@Component({
  tag: 'ino-fab-set',
  styleUrl: 'ino-fab-set.scss',
  shadow: true,
})
export class Fab implements ComponentInterface {
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

  /**
   * Opens the dial (**uncontrolled**)
   */
  @Prop() inoOpenDial = false;

  render() {
    const speedDialClasses = classNames({
      'ino-speed-dial': true,
    });

    const directionClasses = classNames(
      'ino-top-bottom-location-' + this.inoTopBottomLocation,
      'ino-left-right-location-' + this.inoLeftRightLocation,
      'ino-fab-set-wrapper',
      'ino-direction-' + this.inoDialDirection
    );

    return (
      <Host>
        <div class={directionClasses}>
          <div class={speedDialClasses}>
            <slot></slot>
          </div>
          <ino-fab
            id={'primary-fab'}
            ino-edge-position="none"
            ino-tooltip-placement="none"
          >
            <ino-icon slot="ino-icon-leading" ino-icon={'_fab_set_arrow_up'}></ino-icon>
          </ino-fab>
        </div>
      </Host>
    );
  }
}
