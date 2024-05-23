import { Component, ComponentInterface, Element, h, Host, Listen, Prop, State } from '@stencil/core';
import classNames from 'classnames';
import { hasSlotContent } from '../../util/component-utils';

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
 * @slot primary-fab - The main fab button of the fab set.
 */
@Component({
  tag: 'ino-fab-set',
  styleUrl: 'ino-fab-set.scss',
  shadow: false,
})
export class FabSet implements ComponentInterface {
  @Element() el!: HTMLInoFabSetElement;

  @State() dialDirection: 'top' | 'bottom' | 'left' | 'right' = 'top';

  /**
   * The label of the fab set when the variant is `stacked`.
   */
  @Prop() label?: string;

  /**
   * The orientation of the dial in which the secondary ino-fabs will be displayed.
   */
  @Prop() orientation?: 'horizontal' | 'vertical'; // Optional property

  /**
   * Opens the dial (**uncontrolled**)
   */
  @Prop() openDial = false;

  @Listen('click')
  handleFabClick() {
    this.updateDialDirection();
  }

  componentDidLoad() {
    this.updateTooltipOffsets();
  }

  // Update any ino-tooltip offset to adhere to the figma design by moving closer to the button.
  private async updateTooltipOffsets() {
    const tooltips = Array.from(this.el.querySelectorAll('ino-tooltip'));
    for (const tooltip of tooltips) {
      const instance = await (tooltip as HTMLInoTooltipElement).getTippyInstance();
      if (instance) {
        instance.setProps({
          offset: [0, -10],
        });
      }
    }
  }

  updateDialDirection() {
    const rect = this.el.getBoundingClientRect();
    const parentRect = this.el.parentElement.getBoundingClientRect();

    const fromTop = rect.top - parentRect.top;
    const fromBottom = parentRect.bottom - rect.bottom;
    const fromLeft = rect.left - parentRect.left;
    const fromRight = parentRect.right - rect.right;

    // feasible directions in which the dial can be displayed
    let feasibleDirections: Array<'top' | 'bottom' | 'left' | 'right'> = [];

    if (fromTop > 50) feasibleDirections.push('top');
    if (fromBottom > 50) feasibleDirections.push('bottom');
    if (fromLeft > 50) feasibleDirections.push('left');
    if (fromRight > 50) feasibleDirections.push('right');

    // Filter directions based on preferred orientation
    if (this.orientation) {
      const orientedDirections: Array<'top' | 'bottom' | 'left' | 'right'> =
        this.orientation === 'horizontal' ? ['left', 'right'] : ['top', 'bottom'];
      feasibleDirections = feasibleDirections.filter(direction => orientedDirections.includes(direction));
    }

    const getSpaceFromDirection = (direction: 'top' | 'bottom' | 'left' | 'right') => {
      switch (direction) {
        case 'top':
          return fromTop;
        case 'bottom':
          return fromBottom;
        case 'left':
          return fromLeft;
        case 'right':
          return fromRight;
      }
    };

    // Choose the direction with the most space available from the feasible set
    this.dialDirection = feasibleDirections.reduce((acc, direction) => {
      const currentMaxSpace = getSpaceFromDirection(acc);
      const newSpace = getSpaceFromDirection(direction);
      return newSpace > currentMaxSpace ? direction : acc;
    }, feasibleDirections[0] || 'bottom'); // Default to 'bottom' as a safe fallback
  }

  render() {
    const hostClasses = classNames({
      'ino-fab-set--open-dial': this.openDial,
    });

    const speedDialClasses = classNames({
      'ino-speed-dial': true,
    });

    const directionClasses = classNames('ino-fab-set-wrapper', 'ino-direction-' + this.dialDirection);

    const hasPrimaryFab = hasSlotContent(this.el, 'primary-fab');

    return (
      <Host class={hostClasses}>
        <div class={directionClasses}>
          <div class={speedDialClasses}>
            <slot></slot>
          </div>

          {hasPrimaryFab ? (
            <slot name="primary-fab"></slot>
          ) : (
            <ino-fab
              id={'primary-fab'}
              class="ino-fab-set-button"
              edge-position="top-right"
              variant="standard"
              label={this.label}
            >
              <ino-icon class="ino-fab-set-icon" slot="icon-leading" icon="options_dotted" />
            </ino-fab>
          )}
        </div>
      </Host>
    );
  }
}
