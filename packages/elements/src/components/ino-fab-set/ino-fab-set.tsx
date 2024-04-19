import { Component, ComponentInterface, Element, h, Host, Prop } from '@stencil/core';
import classNames from 'classnames';
import { hasSlotContent } from '../../util/component-utils';

import { HorizontalLocation, Locations, VerticalLocation } from '../types';

/**
 * The ino-fab-set component serves as a container for multiple fab buttons. It contains actions related to the main fab
 * button. Upon interacting with the fab button, a FAB-Set can display three to six related actions in the form of a speed
 * dial.
 *
 * #### Additional Hints
 * **Content**: Put the FABs for the speed dial inside of `ino-fab-set` as `ino-fab`.
 *
 * #### Control flow
 *
 * The ino-fab-set has a controlled (unmanaged) attribute `openDial`. For this reason, listen to `click` events, sync to
 * your local state and pass the state to the component again to open/close the fab-set.
 *
 * @slot default - One or more `ino-fab`
 * @slot icon-opened - The icon of the FAB button while being open
 * @slot icon-closed - The icon of the FAB button while being closed
 */
@Component({
  tag: 'ino-fab-set',
  styleUrl: 'ino-fab-set.scss',
  shadow: false,
})
export class FabSet implements ComponentInterface {
  @Element() el!: HTMLInoFabSetElement;

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
      'ino-left-right-location-' + this.leftRightLocation,
    );

    const speedDialClasses = classNames({
      'ino-speed-dial': true,
    });

    const directionClasses = classNames('ino-fab-set-wrapper', 'ino-direction-' + this.dialDirection);

    const hasClosedIcon = hasSlotContent(this.el, 'icon-closed');
    const hasOpenedIcon = hasSlotContent(this.el, 'icon-opened');

    return (
      <Host class={hostClasses}>
        <div class={directionClasses}>
          <div class={speedDialClasses}>
            <slot></slot>
          </div>

          <ino-fab id={'primary-fab'} class="ino-fab-set-button" edge-position="none" tooltip-placement="none">
            {hasClosedIcon ? (
              <div slot="icon-leading">
                <slot name="icon-closed" />
              </div>
            ) : (
              <ino-icon
                class="ino-fab-set-icon ino-fab-set-icon--closed"
                slot="icon-leading"
                icon={'_fab_set_arrow_up'}
              />
            )}

            {hasOpenedIcon ? (
              <div slot="icon-leading">
                <slot name="icon-opened" />
              </div>
            ) : (
              <ino-icon
                class="ino-fab-set-icon ino-fab-set-icon--opened"
                slot="icon-leading"
                icon={'_fab_set_arrow_down'}
              />
            )}
          </ino-fab>
        </div>
      </Host>
    );
  }
}
