import {
  Component,
  ComponentInterface,
  Element,
  h,
  Host,
  Prop,
} from '@stencil/core';
import { Placement } from 'tippy.js';
import { focusIfExists, generateUniqueId } from '../../util/component-utils';

/**
 * A menu component that displays a list of choices on a temporary surface which opens and closes on anchor or item click.
 * The anchor element is the parent element.
 *
 * The menu items consist of different variations of the `ino-list-item` component.
 *
 * If you need a more customizable menu with a different type of elements or functionalities, have a look at the `ino-popover`.
 *
 * @slot default - One or more `ino-(control|list|nav)-item` and `ino-list-divider`
 */
@Component({
  tag: 'ino-menu',
  styleUrl: 'ino-menu.scss',
  shadow: false,
})
export class Menu implements ComponentInterface {
  @Element() el!: HTMLInoMenuElement;

  private popoverEl: HTMLInoPopoverElement;

  /**
   * Determines the position of the opened menu.
   * Usually, the default value (`auto`) will work just fine.
   * Use this if the positioning is off for some reason.
   */
  @Prop() placement: Placement = 'auto';

  connectedCallback() {
    if (this.el.parentElement.id) {
      return;
    }

    this.generateParentId();
  }

  private generateParentId(): void {
    this.el.parentElement.id = `elements-menu${generateUniqueId()}`;
  }

  async componentDidLoad() {
    const tippy = await this.popoverEl?.getTippyInstance();

    if (!tippy) {
      return;
    }

    tippy.setProps({
      onMount: () => focusIfExists(this.el),
    });
  }

  render() {
    return (
      <Host>
        <ino-popover
          colorScheme="light"
          ref={(el) => (this.popoverEl = el)}
          interactive={true}
          for={this.el.parentElement.id}
          placement={this.placement}
          trigger={'click'}
        >
          <ino-list
            role="menu"
            aria-hidden="true"
            aria-orientation="vertical"
            tabindex="-1"
          >
            <slot />
          </ino-list>
        </ino-popover>
      </Host>
    );
  }
}
