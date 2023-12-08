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
   * [DEPRECATED] Please use the default slot instead.
   * Indicates a label text in the tab.
   * @deprecated
   */
  @Prop() label?: string;

  /**
   * Contains the ID of the associated tab panel for accessibility purposes.
   * This property is optional and used to link the tab to its content panel, adhering to WAI-ARIA practices for the tabpanel role.
   */
  @Prop({ reflect: true }) a11yControls?: string;

  /**
   * Reflects the selected state of the tab for accessibility purposes.
   * This property is optional and primarily managed by the parent `ino-tab-bar` component, adhering to WAI-ARIA practices for the tab role.
   */
  @Prop({ reflect: true }) a11ySelected?: boolean;

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
        <button
          class={tabClasses}
          role="tab"
          aria-selected={this.a11ySelected ? 'true' : 'false'}
          aria-controls={this.a11yControls}
        >
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
