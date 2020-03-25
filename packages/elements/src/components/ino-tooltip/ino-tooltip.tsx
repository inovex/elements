import { Component, ComponentInterface, Element, Prop, Watch } from '@stencil/core';
import { Placement } from 'popper.js';
import TooltipJS from 'tooltip.js';

import { TooltipTrigger } from '../types';

@Component({
  tag: 'ino-tooltip',
  styleUrl: 'ino-tooltip.scss',
  shadow: false
})
export class Tooltip implements ComponentInterface {
  private tooltipInstance!: any;
  private target!: HTMLElement | null;

  @Element() el!: HTMLElement;

  /**
   * The placement of the tooltip.
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
   * The trigger to show the tooltip - either click, hover or focus.
   * Multiple triggers possible by separating them with a space.
   */
  @Prop() inoTrigger: TooltipTrigger = 'hover focus';

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

  private retrieveTarget = () => this.inoFor ?
    document.getElementById(this.inoFor)
    :
    this.el.parentElement

  private async create() {
    this.dispose();

    this.target = this.retrieveTarget();

    if (!this.target) {
      // Wait 1 sec for the host element to be rendered
      await new Promise(resolve => setTimeout(resolve, 1000));
      this.target = this.retrieveTarget();
    }

    if (!this.target) {
      // tslint:disable-next-line:no-var-keyword
      throw new Error(`Target with the ID '${this.inoFor}' could not be found in this document.`);
    }

    const options = {
      title: this.inoLabel,
      container: this.el,
      placement: this.inoPlacement,
      trigger: this.inoTrigger,
      popperOptions: {
        modifiers: {
          preventOverflow: { padding: 0 }
        }
      },
      template:
        '<div class="ino-tooltip__composer" role="tooltip"><div class="ino-tooltip__arrow"></div><div class="ino-tooltip__inner"></div></div>',
      arrowSelector: '.ino-tooltip__arrow',
      innerSelector: '.ino-tooltip__inner'
    };

    this.tooltipInstance = new TooltipJS(this.target, options);

    this.target!.addEventListener('keyup', this.onEnterTarget.bind(this));
    this.target!.addEventListener('blur', this.onLeaveTarget.bind(this), true);
  }

  private dispose() {
    if (this.tooltipInstance) {
      this.tooltipInstance.dispose();

      this.target!.removeEventListener('keyup', this.onEnterTarget.bind(this));
      this.target!.removeEventListener(
        'blur',
        this.onLeaveTarget.bind(this),
        true
      );
    }
  }

  private onEnterTarget(e: KeyboardEvent) {
    if (e.code === 'Tab' && !this.inoTrigger.includes('click')) {
      this.tooltipInstance.toggle();
    }

    if (e.code === 'Escape') {
      this.tooltipInstance.hide();
    }
  }

  private onLeaveTarget() {
    this.tooltipInstance.hide();
  }
}
