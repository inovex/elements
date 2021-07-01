import { MDCDrawer } from '@material/drawer';
import {
  Component,
  ComponentInterface,
  Element,
  Host,
  Prop,
  Watch,
  Event,
  EventEmitter,
  h,
} from '@stencil/core';
import { NavDrawerAnchor, NavDrawerVariant } from '../types';
import classNames from 'classnames';

/**
 * @slot header - For a custom header on top of the navigation bar
 * @slot logo - For the logo on top of the navigation bar (cannot be used with the `header` slot)
 * @slot subtitle - For the element just below the logo (cannot be used with the `header` slot)
 * @slot content - For the content of the navigation bar (usually used with `ino-list` and `ino-nav-item`)
 * @slot footer - For elements below the content slot
 * @slot app - For the application located next to this nav-drawer
 */
@Component({
  tag: 'ino-nav-drawer',
  styleUrl: 'ino-nav-drawer.scss',
  shadow: true,
})
export class NavDrawer implements ComponentInterface {
  /**
   * An internal instance of the material design drawer.
   */
  private drawerInstance: MDCDrawer;

  @Element() el!: HTMLElement;

  /**
   * Marks this element as open. (**unmanaged**)
   */
  @Prop() open?: boolean = false;

  @Watch('open')
  openChanged(newOpen: boolean) {
    if (this.drawerInstance) {
      this.drawerInstance.open = newOpen;
    }
  }

  /**
   * Side from which the drawer will appear.
   * Possible values: `left` (default), `right`.
   */
  @Prop() anchor?: NavDrawerAnchor = 'left';

  /**
   * The variant to use for the drawer
   * Possible values: `docked` (default), `dismissible`, `modal`.
   */
  @Prop() variant?: NavDrawerVariant = 'docked';

  componentDidLoad() {
    this.drawerInstance = new MDCDrawer(
      this.el.shadowRoot.querySelector('.mdc-drawer')
    );
    // set initial value of open state
    if (this.drawerInstance) {
      this.drawerInstance.open = this.open || false;
    }

    this.el.shadowRoot
      .querySelector('.mdc-drawer')
      .addEventListener('MDCDrawer:closed', this.closeDrawer);

    this.el.shadowRoot
      .querySelector('.mdc-drawer__toggle')
      .addEventListener('click', this.toggleDrawer);
  }

  disconnectedCallback() {
    this.drawerInstance?.destroy();
  }

  /**
   * Emits when the user clicks on the drawer toggle icon to change the open state. Contains the status in `event.detail`.
   */
  @Event() openChange!: EventEmitter<boolean>;

  closeDrawer = (e: Event) => {
    e.preventDefault();
    this.openChange.emit(false);
  };

  toggleDrawer = (e: Event) => {
    const newOpenState = !this.open;
    this.openChange.emit(newOpenState);
    e.stopPropagation();
  };

  render() {
    const { anchor, variant } = this;

    const classDrawer = classNames({
      'mdc-drawer': true,
      'mdc-drawer--docked': variant === 'docked',
      'mdc-drawer--dismissible':
        variant === 'dismissible' || variant === 'docked', // docked is a modifier of MDC's dismissible inoVariant
      'mdc-drawer--modal': variant === 'modal',
      'mdc-drawer--anchor-left': anchor === 'left',
      'mdc-drawer--anchor-right': anchor === 'right',
    });

    const classAppContent = classNames({
      'mdc-drawer-app-content':
        variant === 'docked' || variant === 'dismissible',
    });

    const nav = (
      <aside class={classDrawer}>
        <div class="mdc-drawer__header">
          <slot name="header">
            <div class="mdc-drawer__logo">
              <slot name="logo"></slot>
            </div>
            <div class="mdc-drawer__subtitle">
              <slot name="subtitle"></slot>
            </div>
          </slot>
        </div>

        <nav class="mdc-drawer__content">
          <slot name="content"></slot>
        </nav>

        <div class="mdc-drawer__footer">
          <slot name="footer"></slot>
          <ino-icon-button class="mdc-drawer__toggle" icon="arrow_right" />
        </div>
      </aside>
    );

    const main = (
      <div class={classAppContent}>
        <slot name="app"></slot>
      </div>
    );

    return (
      <Host>
        {nav}
        {variant === 'modal' && <div class="mdc-drawer-scrim"></div>}
        {main}
      </Host>
    );
  }
}
