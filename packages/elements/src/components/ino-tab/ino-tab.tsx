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
   * Indicates a label text in the tab.
   */
  @Prop() label?: string;

  /**
   * Indicates that the tab icon and label should flow vertically instead of horizontally.
   */
  @Prop() stacked: boolean = false;

  /**
   * Indicates that the tab only expands to the width of its content.
   */
  @Prop() indicatorContentWidth: boolean = false;

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
            {this.label && (
              <span class="mdc-tab__text-label">{this.label}</span>
            )}
            {this.indicatorContentWidth && indicatorWidth}
          </span>
          {!this.indicatorContentWidth && indicatorWidth}
          <span class="mdc-tab__ripple" />
        </button>
      </Host>
    );
  }
}
