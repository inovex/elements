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

  // Custom properties (prefixed)

  @Prop() inoPlacement = 'auto';
  @Prop() inoFor: string;
  @Prop() inoTrigger = 'hover focus';
  @Prop() inoLabel: string;

  // Watchers

  @Watch('inoFor')
  handleInoForChange() {
    this.instantiateTooltip();
  }

  // Lifecycle

  componentDidLoad() {
    this.instantiateTooltip();
  }

  componentWillUnLoad() {
    if (this.tooltipInstance) {
      this.tooltipInstance.destroy();
    }
  }

  // Private methods

  private instantiateTooltip() {
    const target = this.inoFor ?
      document.querySelector(`#${this.inoFor}`) :
      this.el.parentElement;

    this.tooltipInstance = new TooltipJS(target, {
      title: this.inoLabel,
      placement: this.inoPlacement,
      trigger: this.inoTrigger
    });
  }
}
