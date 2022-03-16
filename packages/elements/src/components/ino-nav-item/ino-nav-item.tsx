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
