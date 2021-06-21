import {
  Component,
  ComponentInterface,
  Element,
  h,
  Host,
  Prop,
} from '@stencil/core';
import classNames from 'classnames';

import { HorizontalLocation, Locations, VerticalLocation } from '../types';

/**
 * @slot default - One or more `ino-fab`
 */
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
  @Prop() dialDirection: Locations = 'top';

  /**
   * The side where the Fab is displayed.
   * Possible values: `top`, `bottom` (default).
   */
  @Prop() topBottomLocation: VerticalLocation = 'bottom';

  /**
   * The side where the Fab is displayed.
   * Possible values: `right`, `left` (default).
   */
  @Prop() leftRightLocation: HorizontalLocation = 'left';

  /**
   * Opens the dial (**uncontrolled**)
   */
  @Prop() openDial = false;

  render() {
    const hostClasses = classNames(
      {
        'ino-fab-set--open-dial': this.openDial,
      },
      'ino-top-bottom-location-' + this.topBottomLocation,
      'ino-left-right-location-' + this.leftRightLocation
    );

    const speedDialClasses = classNames({
      'ino-speed-dial': true,
    });

    const directionClasses = classNames(
      'ino-fab-set-wrapper',
      'ino-direction-' + this.dialDirection
    );

    return (
      <Host class={hostClasses}>
        <div class={directionClasses}>
          <div class={speedDialClasses}>
            <slot></slot>
          </div>
          <ino-fab
            id={'primary-fab'}
            edge-position="none"
            tooltip-placement="none"
          >
            <ino-icon slot="icon-leading" icon={'_fab_set_arrow_up'} />
          </ino-fab>
        </div>
      </Host>
    );
  }
}
