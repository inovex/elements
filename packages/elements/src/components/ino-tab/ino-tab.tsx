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
} from '@stencil/core';
import classNames from 'classnames';

/**
 * Tabs organize and allow navigation between groups of content that are related and at the same hierarchical level. Each Tab governs the visibility of one group of content. It functions as a wrapper around the material [Tab](https://github.com/material-components/material-components-web/tree/master/packages/mdc-tab) component.
 */
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

  @Listen('MDCTab:interacted')
  interactionHandler(e) {
    e.stopPropagation();
    this.interacted.emit(this.el);
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
            <span class="mdc-tab__text-label">
              {this.label ? this.label : <slot />}
            </span>
            {this.indicatorContentWidth && indicatorWidth}
          </span>
          {!this.indicatorContentWidth && indicatorWidth}
          <span class="mdc-tab__ripple" />
        </button>
      </Host>
    );
  }
}
