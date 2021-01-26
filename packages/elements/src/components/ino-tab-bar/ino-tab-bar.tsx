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
} from '@stencil/core';

@Component({
  tag: 'ino-tab-bar',
  styleUrl: 'ino-tab-bar.scss',
  shadow: false,
})
export class TabBar implements ComponentInterface {
  private mdcInstance?: MDCTabBar;

  @Element() el!: HTMLElement;

  /**
   * Activates the tab at the given index (**unmanaged**).
   */
  @Prop() inoActiveTab?: number = 0;

  @Watch('inoActiveTab')
  activeTabChangedWatcher(newTabIndex: number) {
    if (this.mdcInstance) {
      this.mdcInstance.activateTab(newTabIndex);
    }
  }

  /**
   * Emits when a tab changes.
   * Contains the index of the activated tab in `event.detail`
   */
  @Event() activeTabChange!: EventEmitter;

  componentDidLoad() {
    this.mdcInstance = new MDCTabBar(this.el.querySelector('.mdc-tab-bar'));
    this.mdcInstance.activateTab(this.inoActiveTab);
    this.el.addEventListener('inoInteracted', this.interactionHandler);
  }

  disconnectedCallback() {
    this.mdcInstance?.destroy();
    this.el.removeEventListener('inoInteracted', this.interactionHandler);
  }

  interactionHandler = async (e) => {
    e.stopPropagation();
    const allTabs = await Promise.all(
      Array.from(this.el.querySelectorAll('ino-tab'))
    );
    const indexOfActivatedTab = allTabs.indexOf(e.detail as HTMLInoTabElement);
    this.activeTabChange.emit(indexOfActivatedTab);
  };

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
