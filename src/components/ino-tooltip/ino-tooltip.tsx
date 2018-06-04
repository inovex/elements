import { Component, Element, Prop, Watch } from '@stencil/core';
import TooltipJS from 'tooltip.js';

@Component({
  tag: 'ino-tooltip',
  styleUrl: 'ino-tooltip.scss',
  shadow: false
})
export class Tooltip {
  @Element() el: HTMLElement;
  private tooltipInstance: TooltipJS;

  /**
   * The placement of the tooltip.
   * Accepted values: `top(-start, -end)`, `right(-start, -end)`,
   * `bottom(-start, -end)`, `left(-start, -end)`
   */
  @Prop() inoPlacement = 'auto';
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
   * The trigger to show the tooltip - either click, hover or focus.
   * Multiple triggers possible by separating them with a space.
   */
  @Prop() inoTrigger = 'hover focus';
  @Watch('inoTrigger')
  inoTriggerChanged() {
    this.create();
  }

  /**
   * The text shown in the tooltip.
   */
  @Prop() inoLabel?: string;
  @Watch('inoLabel')
  inoLabelChanged() {
    if (this.tooltipInstance) {
      this.tooltipInstance.updateTitleContent(this.inoLabel);
    }
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

    const target = this.inoFor ?
      document.getElementById(this.inoFor) :
      this.el.parentElement;

    this.tooltipInstance = new TooltipJS(target, {
      title: this.inoLabel,
      container: this.el,
      placement: this.inoPlacement,
      trigger: this.inoTrigger
    });
  }

  private dispose() {
    if (this.tooltipInstance) {
      this.tooltipInstance.dispose();
    }
  }
}
