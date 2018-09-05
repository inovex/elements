import { Component, Element, Prop, Watch } from '@stencil/core';
import { MDCMenu } from '@material/menu';

@Component({
  tag: 'ino-menu',
  styleUrl: 'ino-menu.scss',
  shadow: false
})
export class Menu {
  @Element() el: HTMLElement;

  /**
   * The anchor element for this menu. If empty, the anchor is the parent element.
   */
  @Prop() inoFor?: string;
  @Watch('inoFor')
  inoForChanged() {
    this.registerTrigger();
  }

  /**
   * Set this option to show the menu manually.
   */
  @Prop() inoOpen?: boolean;
  @Watch('inoOpen')
  inoOpenChanged(open: boolean) {
    this.menu.open = open;
  }



  /**
   * An internal instance of the mdc menu.
   */
  private menu: MDCMenu;

  componentDidLoad() {
    this.menu = new MDCMenu(this.el.querySelector('.mdc-menu'));
    this.menu.open = this.inoOpen;
    this.registerTrigger();
  }

  private registerTrigger() {
    const target = this.inoFor ?
      document.getElementById(this.inoFor) :
      this.el.parentElement;

    target.addEventListener('click', _ => this.menu.open = !this.menu.open);
  }

  componentWillUnload() {
    this.menu && this.menu.destroy();
  }

  render() {
    return (
      <div class="mdc-menu-surface--anchor">
        <div class="mdc-menu mdc-menu-surface" tabindex="-1">
          <ino-list role="menu" aria-hidden="true" aria-orientation="vertical">
            <slot />
          </ino-list>
        </div>
      </div>
    );
  }
}
