import {
  Component,
  ComponentInterface,
  Element,
  h,
  Host,
  Prop,
  State,
} from '@stencil/core';
import classNames from 'classnames';
import { hasSlotContent } from '../../util/component-utils';

/**
 * A nav item component that displays a single instance of choice in a list or menu. It functions as a wrapper around the material [list item](https://github.com/material-components/material-components-web/blob/master/packages/mdc-list/) capabilities.
 *
 * This component is used as child of `ino-list` and `ino-menu` components.
 *
 * > Note: This component's main use case is within the `ino-nav-drawer`.
 *
 * @slot default - Any element
 */
@Component({
  tag: 'ino-nav-item',
  styleUrl: 'ino-nav-item.scss',
  shadow: false,
})
export class NavItem implements ComponentInterface {
  private subMenuElement: HTMLElement;

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

  /** 
   * Internal open/close State of the Sub-Menu
   */
  @State() isSubMenuOpen = false;

  componentDidLoad(): void {
    this.subMenuElement = this.el.querySelector('[slot="sub-menu"]')
  }
  
  private handleSubMenuState = () => {
    if(this.subMenuElement !== null){
      this.isSubMenuOpen = !this.isSubMenuOpen;
    }
  }

  render() {
    const hasInoIcon = this.el.querySelector('ino-icon');
    const slotPosition = hasInoIcon !== null ? 'leading' : '';
    const hasSubMenu = hasSlotContent(this.el, 'sub-menu');

    const slotContainerLeadingClasses = classNames({
      'ino-nav-item--leading-slot': slotPosition === 'leading',
    });

    const inoNavItemClasses = classNames({
      'ino-nav-item--sub-menu-open': this.isSubMenuOpen,
    });

    return (
      <Host
        class={inoNavItemClasses}
      >
        <ino-list-item
          text={this.text}
          secondaryText={this.subText}
          activated={this.activated}
          disabled={this.disabled}
          onClickEl={this.handleSubMenuState}
        >
          <span class={slotContainerLeadingClasses} slot={slotPosition}>
            <slot></slot>
          </span>
          { hasSubMenu? 
            <span class="ino-nav-item--trailing-slot" slot="trailing">
              <ino-icon icon="arrow_down"></ino-icon>
            </span>
          : null }
        </ino-list-item>
        { hasSubMenu? 
          <slot name="sub-menu"></slot>
        : null }
      </Host>
    );
  }
}
