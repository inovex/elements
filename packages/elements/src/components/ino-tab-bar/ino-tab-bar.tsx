import { MDCTabBar } from '@material/tab-bar/component';
import {
  Component,
  ComponentInterface,
  Element,
  Event,
  EventEmitter,
  Host,
  Prop,
  Watch,
  h,
  Listen,
} from '@stencil/core';

/**
 * @slot default - One or more `ino-tab`
 * 
 * Tabs organize and allow navigation between groups of content that are related and at the same hierarchical level. The Tab Bar contains the Tab Scroller and Tab components. It functions as a wrapper around the material [Tab Bar](https://github.com/material-components/material-components-web/tree/master/packages/mdc-tab-bar) component.
 */
@Component({
  tag: 'ino-tab-bar',
  styleUrl: 'ino-tab-bar.scss',
  shadow: false,
})
export class TabBar implements ComponentInterface {
  private mdcInstance?: MDCTabBar;

  @Element() el!: HTMLInoTabBarElement;

  /**
   * Activates the tab at the given index (**unmanaged**).
   */
  @Prop() activeTab?: number = 0;

  @Watch('activeTab')
  activeTabChangedWatcher(newTabIndex: number) {
    if (this.mdcInstance) {
      this.mdcInstance.activateTab(newTabIndex);
    }
  }

  /**
   * Autofocus of tab on activation.
   */
  @Prop() autoFocus?: boolean = false;

  /**
   * Emits when a tab changes.
   * Contains the index of the activated tab in `event.detail`
   */
  @Event() activeTabChange!: EventEmitter;

  componentDidLoad() {
    this.mdcInstance = new MDCTabBar(this.el.querySelector('.mdc-tab-bar'));
    this.mdcInstance.focusOnActivate = this.autoFocus;
    this.mdcInstance.activateTab(this.activeTab);
  }

  disconnectedCallback() {
    this.mdcInstance?.destroy();
  }

  @Listen('interacted')
  async interactionHandler(e) {
    e.stopPropagation();
    const allTabs = await Promise.all(
      Array.from(this.el.querySelectorAll('ino-tab')),
    );
    const indexOfActivatedTab = allTabs.indexOf(e.detail as HTMLInoTabElement);
    this.activeTabChange.emit(indexOfActivatedTab);
  }

  render() {
    return (
      <Host>
        <div class="mdc-tab-bar" role="tablist">
          <div class="mdc-tab-scroller">
            <div class="mdc-tab-scroller__scroll-area">
              <div class="mdc-tab-scroller__scroll-content">
                <slot />
              </div>
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
