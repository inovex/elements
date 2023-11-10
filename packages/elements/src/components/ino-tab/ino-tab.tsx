import {
  Component,
  ComponentInterface,
  Element,
  Event,
  EventEmitter,
  Host,
  Prop,
  h,
  Listen,
  Watch,
} from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'ino-tab',
  styleUrl: 'ino-tab.scss',
  shadow: false,
})
export class Tab implements ComponentInterface {
  @Element() el!: HTMLInoTabElement;

  /**
   * Indicates a leading icon in the tab.
   */
  @Prop() icon?: string;

  /**
   * [DEPRECATED] Please use the default slot instead.
   * Indicates a label text in the tab.
   * @deprecated
   */
  @Prop() label?: string;

  /**
   * The ID of the associated content panel. This prop is specifically used in conjunction with the `ino-tab-bar`. It links the tab to its content panel for accessibility, adhering to WAI-ARIA practices for the tabpanel role. See: https://w3c.github.io/aria/#tabpanel
   */
  @Prop({ reflect: true }) panelId?: string = '';

  /**
   * Indicates that the tab icon and label should flow vertically instead of horizontally.
   */
  @Prop() stacked = false;

  /**
   * Indicates that the tab only expands to the width of its content.
   */
  @Prop() indicatorContentWidth = false;

  /**
   * Emitted when the user interacts with the tab.
   * This event is used by the ino-tab-bar.
   */
  @Event() interacted!: EventEmitter;

  @Watch('panelID')
  panelIdChanged(newValue: string) {
    this.panelId = newValue;
  }

  @Listen('MDCTab:interacted')
  interactionHandler(e) {
    e.stopPropagation();
    this.interacted.emit(this.el);
  }
  componentWillLoad() {
    this.syncAttributeToProp();
  }
  /**
   * Syncs 'panelID' attribute with the property for Storybook compatibility inside the ino-tab-bar story.
   * ( <ino-tab panelID="panel-1" label="User" icon="user"></ino-tab> )
   */
  private syncAttributeToProp() {
    const panelIdAttr = this.el.getAttribute('panelID');
    if (panelIdAttr) {
      this.panelId = panelIdAttr;
    }
  }

  render() {
    const tabClasses = classNames({
      'mdc-tab': true,
      'mdc-tab--stacked': this.stacked,
    });

    const indicatorWidth = (
      <span class="mdc-tab-indicator">
        <span class="mdc-tab-indicator__content mdc-tab-indicator__content--underline" />
      </span>
    );

    return (
      <Host>
        <button class={tabClasses} role="tab" aria-selected="false">
          <span class="mdc-tab__content">
            {this.icon && <ino-icon class="mdc-tab__icon" icon={this.icon} />}
            <span class="mdc-tab__text-label">{this.label ? this.label : <slot />}</span>
            {this.indicatorContentWidth && indicatorWidth}
          </span>
          {!this.indicatorContentWidth && indicatorWidth}
          <span class="mdc-tab__ripple" />
        </button>
      </Host>
    );
  }
}
