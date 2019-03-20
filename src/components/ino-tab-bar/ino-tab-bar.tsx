import {
  Component,
  Element,
  Event,
  EventEmitter,
  Listen,
  Prop,
  Watch
} from '@stencil/core';

import { MDCTabBarFacade } from './mdc-facade';

@Component({
  tag: 'ino-tab-bar',
  styleUrl: 'ino-tab-bar.scss',
  shadow: false
})
export class TabBar {
  // A facade implementing all the mdc behavior.
  private mdcFacade?: MDCTabBarFacade;

  @Element() el!: HTMLElement;

  /**
   * Activates the tab at the given index (**unmanaged**).
   */
  @Prop() inoActiveTab = 0;
  @Watch('inoActiveTab')
  activeTabChanged(newTabIndex: number, oldTabIndex: number) {
    if (newTabIndex !== oldTabIndex) {
      this.mdcFacade!.activateTab(newTabIndex);
    }
  }

  /**
   * Emits when a tab changes.
   * Contains activating tab in `event.detail`
   */
  @Event() activeTabChange!: EventEmitter;

  componentDidLoad() {
    this.mdcFacade = MDCTabBarFacade.create(this);
  }

  componentDidUnload() {
    this.mdcFacade!.destroy();
  }

  @Listen('inoTabDidLoad')
  @Listen('inoTabDidUnLoad')
  handleTabListChange() {
    // Recreate the tab-bar if an tab has been added after initialization
    if (this.mdcFacade) {
      this.mdcFacade.refreshTabList(this.inoActiveTab);
    }
  }

  /**
   * A handler called by the facade to notify when the active tab changes.
   * @param index number
   */
  activeTabChangesHandler(index: number) {
    this.activeTabChange.emit(index);
  }

  render() {
    return (
      <div class="mdc-tab-bar" role="tablist">
        <div class="mdc-tab-scroller">
          <div class="mdc-tab-scroller__scroll-area">
            <div class="mdc-tab-scroller__scroll-content">
              <slot />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
