import { Component, Prop } from '@stencil/core';
import TooltipJS from 'tooltip.js';

@Component({
  tag: 'ino-tooltip',
  styleUrl: 'ino-tooltip.scss',
  shadow: false
})
export class Tooltip {
  private tooltipInstance: TooltipJS; 

  // Custom properties (prefixed)
  @Prop() inoPlacement: 'auto';
  @Prop() inoTargetId: string;
  @Prop() inoTrigger = 'hover focus';
  @Prop() inoLabel: string;

  componentDidLoad() {
    const target = document.getElementById(this.inoTargetId);
    if(target) {
      this.tooltipInstance = new TooltipJS(target, {
        title: this.inoLabel,
        placement: this.inoPlacement,
        trigger: this.inoTrigger
      });
    }
  }

  componentWillUnLoad() {
    if(this.tooltipInstance) {
      this.tooltipInstance.destroy();
    }
  }
}
