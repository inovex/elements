import {
  Component,
  ComponentInterface,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Prop,
} from '@stencil/core';
import { Placement } from 'tippy.js';
import { generateUniqueId } from '../../util/component-utils';

@Component({
  tag: 'ino-menu',
  styleUrl: 'ino-menu.scss',
  shadow: false,
})
export class Menu implements ComponentInterface {
  @Element() el!: HTMLElement;

  /**
   * Emits on outside menu click and escape press.
   */
  @Event() menuClose: EventEmitter<void>;

  /**
   * The id of the anchor element.
   * If none is given, the id of the parent element will be used (and generated if none exists).
   */
  @Prop() inoFor?: string;

  /**
   * Set this option to show the menu.
   */
  @Prop() inoOpen?: boolean = false;

  /**
   * Determines the position of the opened menu.
   * Usually, the default value (`auto`) will work just fine.
   * Use this if the positioning is off for some reason.
   */
  @Prop() inoPlacement: Placement = 'auto';

  connectedCallback() {
    if (this.inoFor || this.el.parentElement.id) {
      return;
    }

    this.generateParentId();
  }

  private generateParentId(): void {
    this.el.parentElement.id = `elements-menu${generateUniqueId()}`;
  }

  render() {
    return (
      <Host>
        <ino-popover
          ino-color-scheme="transparent"
          ino-interactive
          ino-for={this.inoFor || this.el.parentElement.id}
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
