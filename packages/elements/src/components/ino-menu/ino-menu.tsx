import {
  Component,
  ComponentInterface,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Listen,
  Prop,
} from '@stencil/core';
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
   * The id of the anchor element
   */
  @Prop() inoFor?: string;

  /**
   * Set this option to show the menu.
   */
  @Prop() inoOpen?: boolean = false;

  @Listen('keydown')
  onKeydown({ key }: KeyboardEvent) {
    if (key === 'Escape') {
      this.menuClose.emit();
    }
  }

  @Listen('click')
  onClick(ev: any) {
    console.log(ev);
  }

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
          ino-trigger={'manual'}
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
