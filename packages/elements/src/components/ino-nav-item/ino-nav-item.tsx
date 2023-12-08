import {
  Component,
  ComponentInterface,
  Element,
  h,
  Host,
  Prop,
} from '@stencil/core';
import classNames from 'classnames';

/**
 * @slot default - Any element
 *
 * A nav item component that displays a single instance of choice in a list or menu. It functions as a wrapper around the material [list item](https://github.com/material-components/material-components-web/blob/master/packages/mdc-list/) capabilities.
 *
 * This component is used as child of `ino-list` and `ino-menu` components.
 *
 * > Note: This component's main use case is within the `ino-nav-drawer`.
 */
@Component({
  tag: 'ino-nav-item',
  styleUrl: 'ino-nav-item.scss',
  shadow: false,
})
export class NavItem implements ComponentInterface {
  @Element() el!: HTMLInoNavItemElement;

  /**
   * The text of this list item.
   */
  @Prop() text?: string;

  /**
   * The secondary text of this list item used in a two-lined list.
   */
  @Prop() subText?: string;

  /**
   * Styles the row in an activated style.
   *
   * Use this for only one item
   * and to mark it as permanently activated.
   */
  @Prop() activated?: boolean = false;

  /**
   * Styles the row in a disabled style.
   */
  @Prop() disabled?: boolean = false;

  render() {
    const slotPosition = this.el.children.length > 0 ? 'leading' : '';

    const slotContainerClasses = classNames({
      'ino-nav-item--leading-slot': slotPosition === 'leading',
    });
    return (
      <Host>
        <ino-list-item
          text={this.text}
          secondaryText={this.subText}
          activated={this.activated}
          disabled={this.disabled}
        >
          <span class={slotContainerClasses} slot={slotPosition}>
            <slot></slot>
          </span>
        </ino-list-item>
      </Host>
    );
  }
}
