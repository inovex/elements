import { MDCTab } from '@material/tab';
import { MDCTabBarFoundation } from '@material/tab-bar';
import { MDCTabScroller } from '@material/tab-scroller';

import { TabBar } from './ino-tab-bar';

/**
 * An implementation that proxies all the mdc tab bar functionalities.
 *
 * This facade implements a custom adapter to enable the controlled component
 * behavior of inovex elements.
 */
export class MDCTabBarFacade {
  private foundation!: MDCTabBarFoundation;
  private scroller!: MDCTabScroller;
  private tabList: MDCTab[] = [];
  private root: HTMLElement;

  constructor(tabBar: TabBar) {
    this.root = tabBar.el.querySelector('.mdc-tab-bar') as HTMLElement;

    this.foundation = new MDCTabBarFoundation(this.adapter(tabBar));
    this.scroller = new MDCTabScroller(this.root.querySelector('.mdc-tab-scroller'));

    this.root.addEventListener('keydown', this.handleKeyDown.bind(this));
    this.root.addEventListener('MDCTab:interacted', this.handleTabInteraction.bind(this));
    this.refreshTabList(tabBar.inoActiveTab);
  }

  static create(tabBar: TabBar) {
    return new MDCTabBarFacade(tabBar);
  }

  /**
   * Cleans up the mdc instances.
   */
  destroy() {
    this.foundation.destroy();
    this.scroller.destroy();
    this.root.removeEventListener('keydown', this.handleKeyDown.bind(this));
    this.destroyTabList();
  }

  /**
   * Activate a tab at the passed index.
   * @param newTabIndex The tab to be displayed.
   */
  activateTab(newTabIndex: number) {
    this.foundation.activateTab(newTabIndex);
  }

  /**
   * Handles a KeyDown of the user.
   * @param evt The KeyboardEvent
   */
  handleKeyDown(evt: Event) {
    this.foundation.handleKeyDown(evt);
  }

  /**
   * Handles a tab interaction.
   * @param evt The KeyboardEvent
   */
  handleTabInteraction(evt) {
    this.foundation.handleTabInteraction(evt);
  }

  /**
   * Refreshs the tab list to keep in track with the dom.
   * @param activeTab The active tab.
   */
  refreshTabList(activeTab: number) {
    if (this.tabList.length > 0) {
      this.destroyTabList();
    }

    this.tabList = this.getTabElements().map(el => new MDCTab(el));
    this.tabList[activeTab].activate();
    this.foundation.scrollIntoView(activeTab);
  }

  private destroyTabList() {
    if (this.tabList.length > 0) {
      this.tabList.forEach(tab => tab.destroy());
    }
    this.tabList = [];
  }

  private getTabElements() {
    return [].slice.call(this.root.querySelectorAll('.mdc-tab'));
  }

  private adapter(tabBar: TabBar) {
    return {
      scrollTo: scrollX => this.scroller.scrollTo(scrollX),
      incrementScroll: scrollXIncrement => this.scroller.incrementScroll(scrollXIncrement),
      getScrollPosition: () => this.scroller.getScrollPosition(),
      getScrollContentWidth: () => this.scroller.getScrollContentWidth(),
      getOffsetWidth: () => this.root.offsetWidth,
      isRTL: () => window.getComputedStyle(this.root).getPropertyValue('direction') === 'rtl',
      setActiveTab: index => tabBar.activeTabChangesHandler(index),
      activateTabAtIndex: (index, clientRect) => this.tabList[index].activate(clientRect),
      deactivateTabAtIndex: index => this.tabList[index].deactivate(),
      focusTabAtIndex: index => this.tabList[index].focus(),
      getTabIndicatorClientRectAtIndex: index => this.tabList[index].computeIndicatorClientRect(),
      getTabDimensionsAtIndex: index => this.tabList[index].computeDimensions(),
      getPreviousActiveTabIndex: () => {
        for (const i in this.tabList) {
          if (this.tabList[i].active) {
            return i;
          }
        }
        return -1;
      },
      getFocusedTabIndex: () => {
        const tabElements = this.getTabElements();
        const activeElement = document.activeElement;
        return tabElements.indexOf(activeElement);
      },
      getIndexOfTab: tabToFind => this.tabList.indexOf(tabToFind),
      getTabListLength: () => this.tabList.length,
      notifyTabActivated: index => index,
    };
  }
}
