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
  h
} from '@stencil/core';
import { NavDrawerAnchor, NavDrawerVariant } from '../types';
import classNames from 'classnames';

@Component({
  tag: 'ino-nav-drawer',
  styleUrl: './ino-nav-drawer.scss',
  shadow: true
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
  @Prop() inoOpen?: boolean = false;

  @Watch('inoOpen')
  inoOpenChanged(newOpen: boolean) {
    if (this.drawerInstance) {
      this.drawerInstance.open = newOpen;
    }
  }

  /**
   * Side from which the drawer will appear.
   * Possible values: `left` (default), `right`.
   */
  @Prop() inoAnchor?: NavDrawerAnchor = 'left';

  /**
   * The variant to use for the drawer
   * Possible values: `docked` (default), `dismissible`, `modal`.
   */
  @Prop() inoVariant?: NavDrawerVariant = 'docked';

  componentDidLoad() {
    this.drawerInstance = new MDCDrawer(
      this.el.shadowRoot.querySelector('.mdc-drawer')
    );
    // set initial value of open state
    if (this.drawerInstance) {
      this.drawerInstance.open = this.inoOpen || false;
    }

    this.el.shadowRoot
      .querySelector('.mdc-drawer__toggle')
      .addEventListener('click', this.toggleDrawer);
  }

  componentWillUnload() {
    this.drawerInstance.destroy();
  }

  /**
   * Emits when the user clicks on the drawer toggle icon to change the open state. Contains the status in `event.detail`.
   */
  @Event() openChange!: EventEmitter<boolean>;

  toggleDrawer = (e: Event) => {
    const newOpenState = !this.inoOpen;
    this.openChange.emit(newOpenState);
    e.stopPropagation();
  };

  render() {
    const { inoAnchor, inoVariant } = this;

    const classDrawer = classNames({
      'mdc-drawer': true,
      'mdc-drawer--docked': inoVariant === 'docked',
      'mdc-drawer--dismissible':
        inoVariant === 'dismissible' || inoVariant === 'docked', // docked is a modifier of MDC's dismissible inoVariant
      'mdc-drawer--modal': inoVariant === 'modal',
      'mdc-drawer--anchor-left': inoAnchor === 'left',
      'mdc-drawer--anchor-right': inoAnchor === 'right'
    });

    const classAppContent = classNames({
      'mdc-drawer-app-content':
        inoVariant === 'docked' || inoVariant === 'dismissible'
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
          <ino-icon-button class="mdc-drawer__toggle" ino-icon="arrow_right" />
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
        {inoVariant === 'modal' && <div class="mdc-drawer-scrim"></div>}
        {main}
      </Host>
    );
  }
}
