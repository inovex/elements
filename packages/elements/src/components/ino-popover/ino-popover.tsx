import { Component, ComponentInterface, Element, Host, Prop, Watch, h } from '@stencil/core';
import { Placement } from 'popper.js';
import TooltipJS from 'tooltip.js';

import { TooltipTrigger } from '../types';

@Component({
  tag: 'ino-popover',
  styleUrl: 'ino-popover.scss',
  shadow: false
})
export class Popover implements ComponentInterface {
  @Element() el!: HTMLElement;
  private tooltipInstance?: TooltipJS;

  /**
   * The placement of this popover.
   * Accepted values: `top(-start, -end)`, `right(-start, -end)`,
   * `bottom(-start, -end)`, `left(-start, -end)`
   */
  @Prop() inoPlacement: Placement = 'auto';
  @Watch('inoPlacement')
  inoPlacementChanged() {
    this.create();
  }

  /**
   * The target id the tooltip belongs to.
   * If not given, the tooltip is attached to the parent component.
   */
  @Prop() inoFor?: string;
  @Watch('inoFor')
  inoForChanged() {
    this.create();
  }

  /**
   * Sets the color scheme of the popup
   * Valid options include: 'primary', 'secondary', 'light', 'transparent'
   */
  @Prop() inoColorScheme?: string = 'primary';

  /**
   * The trigger to show the tooltip - either click, hover or focus.
   * Multiple triggers are possible by separating them with a space.
   */
  @Prop() inoTrigger: TooltipTrigger = 'hover focus';
  @Watch('inoTrigger')
  inoTriggerChanged() {
    this.create();
  }

  // Lifecycle

  componentDidLoad() {
    this.create();
  }

  componentWillUnLoad() {
    this.dispose();
  }

  // Private methods

  private create() {
    this.dispose();

    const target = this.inoFor
      ? document.getElementById(this.inoFor)
      : this.el.parentElement;

    const options = {
      html: true,
      container: this.el,
      title: this.el.querySelector('.ino-popover__content') as HTMLElement,
      placement: this.inoPlacement,
      trigger: this.inoTrigger,
      template:
        '<div class="ino-tooltip__composer" role="tooltip"><div class="ino-tooltip__inner"></div></div>',
      arrowSelector: '.ino-tooltip__arrow',
      innerSelector: '.ino-tooltip__inner'
    };
    // TODO: Remove ts-ignore after https://github.com/FezVrasta/popper.js/pull/675 is released
    // @ts-ignore
    this.tooltipInstance = new TooltipJS(target, options);
  }

  private dispose() {
    if (this.tooltipInstance) {
      this.tooltipInstance.dispose();
    }
  }

  render() {
    return (
      <Host>
        <div class="ino-popover__content">
          <slot />
        </div>
      </Host>
    );
  }
}
