import {
  Component,
  ComponentInterface,
  Element,
  Prop,
  Host,
  h
} from '@stencil/core';

@Component({
  tag: 'ino-nav-item',
  styleUrl: 'ino-nav-item.scss',
  shadow: false
})
export class NavItem implements ComponentInterface {
  @Element() el!: HTMLElement;

  /**
   * The text of this list item.
   */
  @Prop() inoText?: string;

  /**
   * The secondary text of this list item used in a two-lined list.
   */
  @Prop() inoSecondaryText?: string;

  /**
   * Styles the row in an activated style.
   *
   * Use this for only one item
   * and to mark it as permanently activated.
   */
  @Prop() inoActivated?: boolean = false;

  /**
   * Styles the row in a disabled style.
   */
  @Prop() inoDisabled?: boolean = false;

  render() {
    const slotPosition = this.el.children.length > 0 ? 'ino-leading' : '';

    return (
      <Host>
        <ino-list-item
          inoText={this.inoText}
          inoSecondaryText={this.inoSecondaryText}
          inoActivated={this.inoActivated}
          inoDisabled={this.inoDisabled}
        >
          <span slot={slotPosition}>
            <slot></slot>
          </span>
        </ino-list-item>
      </Host>
    );
  }
}
