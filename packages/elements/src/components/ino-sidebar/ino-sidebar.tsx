import {
  Component,
  Element,
  Event,
  EventEmitter,
  Host,
  Prop,
  Watch,
  h,
} from '@stencil/core';
import classNames from 'classnames';
import { MDCDrawer } from '@material/drawer/component';

import { MDCCustomDrawer } from './MDCCustomDrawer';

/**
 * @slot header - For the header element
 * @slot content - For the content
 */
@Component({
  tag: 'ino-sidebar',
  styleUrl: 'ino-sidebar.scss',
  shadow: true,
})
export class InoSidebar {
  private drawer: MDCDrawer;

  @Element() el!: HTMLElement;

  /**
   * Aligns the sidebar to the right (true) or left (false) side
   */
  @Prop() inoAlignRight: boolean = false;

  /**
   * Expands the sidebar
   */
  @Prop() inoOpen: boolean = false;

  @Watch('inoOpen')
  openChanged(newValue: boolean) {
    this.drawer.open = newValue;
    this.openChange.emit(newValue);
  }

  /**
   * Name of the component
   */
  @Prop() name?: string;

  /**
   * Emits an event if the user expands or collapses the sidebar
   */
  @Event() openChange: EventEmitter;

  componentDidLoad() {
    this.drawer = new MDCCustomDrawer(
      this.el.shadowRoot.querySelector('.mdc-drawer')
    );
    this.drawer.open = this.inoOpen;
  }

  render() {
    const classes = classNames({
      'mdc-drawer': true,
      'mdc-drawer--modal': true,
      'ino-sidebar--right': this.inoAlignRight,
    });

    return (
      <Host name={this.name} ino-open={this.inoOpen}>
        <aside class={classes}>
          <div class="mdc-drawer__header">
            <slot name="header" />
          </div>
          <div class="mdc-drawer__content">
            <div tabindex="0" />
            <slot name="content" />
          </div>
        </aside>
        <div class="mdc-drawer-scrim" />
      </Host>
    );
  }
}
