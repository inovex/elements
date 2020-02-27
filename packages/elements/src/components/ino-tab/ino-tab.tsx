import { Component, ComponentInterface, Element, Event, EventEmitter, Host, Prop, h } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'ino-tab',
  styleUrl: 'ino-tab.scss',
  shadow: false
})
export class Tab implements ComponentInterface {
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
  @Prop() inoStacked: boolean = false;

  /**
   * Indicates that the tab only expands to the width of its content.
   */
  @Prop() inoIndicatorContentWidth: boolean = false;

  /**
   * Emitted when the user interacts with the tab.
   * This event is used by the ino-tab-bar.
   */
  @Event() inoInteracted!: EventEmitter;

  componentDidLoad() {
    this.el.addEventListener('MDCTab:interacted', this.interactionHandler);
  }

  componentDidUnLoad() {
    this.el.removeEventListener('MDCTab:interacted', this.interactionHandler);
  }

  interactionHandler = e => {
    e.stopPropagation();
    this.inoInteracted.emit(this.el);
  }

  render() {
    const tabClasses = classNames({
      'mdc-tab': true,
      'mdc-tab--stacked': this.inoStacked
    });

    const indicatorWidth = (
      <span class="mdc-tab-indicator">
        <span class="mdc-tab-indicator__content mdc-tab-indicator__content--underline"/>
      </span>
    );

    return (
      <Host>
        <button class={tabClasses} role="tab" aria-selected="false">
          <span class="mdc-tab__content">
            {this.inoIcon && (
              <ino-icon class="mdc-tab__icon" ino-icon={this.inoIcon}/>
            )}
            {this.inoLabel && (
              <span class="mdc-tab__text-label">{this.inoLabel}</span>
            )}
            {this.inoIndicatorContentWidth && indicatorWidth}
          </span>
          {!this.inoIndicatorContentWidth && indicatorWidth}
          <span class="mdc-tab__ripple"/>
        </button>
      </Host>
    );
  }
}
