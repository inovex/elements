import { Component, Element, Event, EventEmitter, Prop } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'ino-tab',
  styleUrl: 'ino-tab.scss',
  shadow: false
})
export class Tab {
  @Element() el!: HTMLElement;

  /**
   * Indicates a leading icon in the tab.
   */
  @Prop() inoIcon?: string;

  /**
   * Indicates a label text in the tab.
   */
  @Prop() inoLabel?: string;

  /**
   * Indicates that the tab icon and label should flow vertically instead of horizontally.
   */
  @Prop() inoStacked = false;

  /**
   * Indicates that the tab only expands to the width of its content.
   */
  @Prop() inoIndicatorContentWidth = false;

  /**
   * Emitted when the tab did load.
   */
  @Event() inoTabDidLoad!: EventEmitter;

  /**
   * Emitted when the tab did unload.
   */
  @Event() inoTabDidUnLoad!: EventEmitter;

  componentDidLoad() {
    this.inoTabDidLoad.emit({ tab: this });
  }

  componentDidUnLoad() {
    this.inoTabDidUnLoad.emit({ tab: this });
  }

  render() {
    const tabClasses = classNames({
      'mdc-tab': true,
      'mdc-tab--stacked': this.inoStacked
    });

    const indicatorWidth = (
      <span class="mdc-tab-indicator">
        <span class="mdc-tab-indicator__content mdc-tab-indicator__content--underline" />
      </span>
    );

    return (
      <button class={tabClasses} role="tab" aria-selected="false">
        <span class="mdc-tab__content">
          {this.inoIcon && (
            <ino-icon class="mdc-tab__icon" ino-icon={this.inoIcon} />
          )}
          {this.inoLabel && (
            <span class="mdc-tab__text-label">{this.inoLabel}</span>
          )}
          {this.inoIndicatorContentWidth && indicatorWidth}
        </span>
        {!this.inoIndicatorContentWidth && indicatorWidth}
        <span class="mdc-tab__ripple" />
      </button>
    );
  }
}
