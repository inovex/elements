import {
  Component,
  ComponentInterface,
  Element,
  h,
  Host,
  Prop,
} from '@stencil/core';
import { Instance, Placement } from 'tippy.js';
import { generateUniqueId } from '../../util/component-utils';

@Component({
  tag: 'ino-menu',
  styleUrl: 'ino-menu.scss',
  shadow: false,
})
export class Menu implements ComponentInterface {
  @Element() el!: HTMLElement;

  private popoverEl: HTMLInoPopoverElement;

  /**
   * Determines the position of the opened menu.
   * Usually, the default value (`auto`) will work just fine.
   * Use this if the positioning is off for some reason.
   */
  @Prop() inoPlacement: Placement = 'auto';

  /**
   * If enabled, focuses the first `<ino-list-item>` on menu opening
   */
  @Prop() inoFocusFirstElement: boolean;

  connectedCallback() {
    if (this.el.parentElement.id) {
      return;
    }

    this.generateParentId();
  }

  private generateParentId(): void {
    this.el.parentElement.id = `elements-menu${generateUniqueId()}`;
  }

  componentDidLoad() {
    if (this.inoFocusFirstElement) {
      this.popoverEl?.getTippyInstance().then(this.focusOnMount);
    }
  }

  private focusOnMount = (tippy?: Instance) => {
    if (!tippy) {
      return;
    }

    tippy.setProps({
      onMount: () => {
        this.el.querySelector('ino-list-item')?.focus();
      },
    });
  };

  render() {
    return (
      <Host>
        <ino-popover
          ref={(el) => (this.popoverEl = el)}
          ino-color-scheme="transparent"
          ino-interactive
          ino-for={this.el.parentElement.id}
          ino-placement={this.inoPlacement}
          ino-trigger={'click'}
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
