import { Component, Element, Event, EventEmitter, Listen, Prop, Watch } from '@stencil/core';

import { MDCTabBar } from './material-tab-bar';

@Component({
  tag: 'ino-tab-bar',
  styleUrl: 'ino-tab-bar.scss',
  shadow: false
})
export class TabBar {
  private mdcTabBarEl!: HTMLElement;
  private mdcTabBarInstance!: MDCTabBar;
  private listenerAttached = false;

  @Element() el!: HTMLElement;

  /**
   * Activates the tab at the given index.
   */
  @Prop({ mutable: true }) inoActiveTab = 0;

  @Watch('inoActiveTab')
  activeTabHandler(newTabIndex: number, oldTabIndex: number) {
    if (newTabIndex !== oldTabIndex) {
      this.mdcTabBarInstance.activateTab(newTabIndex);
    }
  }

  /**
   * Emits when a tab is activated.
   * Contains activated tab in `event.detail.inoIndex`
   */
  @Event() inoTabActivated!: EventEmitter;

  componentDidLoad() {
    this.create();
  }

  componentDidUnload() {
    this.destroy();
  }

  @Listen('inoTabDidLoad')
  onInoTabDidLoad() {
    // Recreate the tab-bar if an tab has been added after initialization
    if (this.mdcTabBarInstance) {
      this.create();
    }
  }

  @Listen('inoTabDidUnLoad')
  onInoTabDidUnLoad() {
    // Recreate the tab-bar if an tab has been added after initialization
    if (this.mdcTabBarInstance) {
      this.create();
    }
  }

  private destroy() {
    // destroy mdcTabbarInstance
    if (this.mdcTabBarInstance !== undefined) {
      this.mdcTabBarInstance.destroy();
    }

    // remove event listener
    if (this.listenerAttached) {
      this.mdcTabBarEl.removeEventListener(
        'MDCTabBar:activated',
        e => this.mdcTabActivatedHandler(e as CustomEvent)
      );
      this.listenerAttached = false;
    }

  }

  private create() {
    this.destroy();

    this.mdcTabBarEl = this.el.querySelector('.mdc-tab-bar') as HTMLElement;
    this.mdcTabBarInstance = new MDCTabBar(this.mdcTabBarEl);

    this.mdcTabBarInstance.tabList_[this.inoActiveTab].activate();

    this.mdcTabBarEl.addEventListener(
      'MDCTabBar:activated',
      e => this.mdcTabActivatedHandler(e as CustomEvent)
    );
    this.listenerAttached = true;
  }

  private mdcTabActivatedHandler(e: CustomEvent) {
    const index = e.detail.index;
    this.inoActiveTab = index;
    this.inoTabActivated.emit({ inoIndex: index });
    e.stopPropagation();
  }

  render() {
    return (
      <div class="mdc-tab-bar" role="tablist">
        <div class="mdc-tab-scroller">
          <div class="mdc-tab-scroller__scroll-area">
            <div class="mdc-tab-scroller__scroll-content">
              <slot/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
