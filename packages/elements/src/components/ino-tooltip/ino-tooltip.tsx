import { Component, ComponentInterface, Element, Host, Prop, Watch, h, Method } from '@stencil/core';
import { Placement } from 'popper.js';
import TippyJS, { Instance } from 'tippy.js';
import { TooltipTrigger } from '../types';

@Component({
  tag: 'ino-tooltip',
  styleUrl: 'ino-tooltip.scss',
  shadow: false
})
export class Tooltip implements ComponentInterface {
  private tooltipInstance!: Instance;
  private target!: HTMLElement | null;

  @Element() el!: HTMLElement;

  /**
   * Sets the color scheme of the tooltip
   * Valid options include: 'primary', 'secondary' 'light', 'transparent'
   */
  @Prop() inoColorScheme: string = 'primary';

  /**
   * The placement of the tooltip.
   * Accepted values: `top(-start, -end)`, `right(-start, -end)`,
   * `bottom(-start, -end)`, `left(-start, -end)`
   */
  @Prop() inoPlacement: Placement = 'auto';

  @Watch('inoPlacement')
  async inoPlacementChanged() {
    await this.create();
  }

  /**
   * The target id the tooltip belongs to.
   * If not given, the tooltip is attached to the parent component.
   */
  @Prop() inoFor?: string;

  @Watch('inoFor')
  async inoForChanged() {
    await this.create();
  }

  /**
   * The trigger to show the tooltip - either click, hover or focus.
   * Multiple triggers possible by separating them with a space.
   */
  @Prop() inoTrigger: TooltipTrigger = 'mouseenter focus';

  @Watch('inoTrigger')
  async inoTriggerChanged() {
    await this.create();
  }

  /**
   * The text shown in the tooltip.
   */
  @Prop() inoLabel?: string;

  @Watch('inoLabel')
  inoLabelChanged() {
    if (this.tooltipInstance) {
      this.tooltipInstance.setContent(this.inoLabel);
    }
  }

  /**
   * Returns the internally used tippy.js instance
   * For more informations see: https://atomiks.github.io/tippyjs/
   */
  @Method()
  async getTippyInstance(): Promise<any> {
    return this.tooltipInstance;
  }

  // Lifecycle

  async componentDidLoad() {
    await this.create();
  }

  async componentWillUnLoad() {
    await this.dispose();
  }

  private retrieveTarget = () => this.inoFor ?
    document.getElementById(this.inoFor)
    :
    this.el.parentElement;

  private async create() {
    await this.dispose();

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
      content: this.el,
      duration: 100,
      placement: this.inoPlacement,
      trigger: this.inoTrigger,
    };

    this.tooltipInstance = TippyJS(this.target, options);

    this.target!.addEventListener('keyup', this.onEnterTarget.bind(this));
    this.target!.addEventListener('blur', this.onLeaveTarget.bind(this), true);

    if (this.inoTrigger.includes('hover')) {
      this.target!.addEventListener('mouseleave', this.onLeaveTarget.bind(this));
    }
  }

  private async dispose() {
    if (this.tooltipInstance) {
      await this.tooltipInstance.destroy();

      this.target!.removeEventListener('keyup', this.onEnterTarget.bind(this));
      this.target!.removeEventListener(
        'blur',
        this.onLeaveTarget.bind(this),
        true
      );
      this.target!.removeEventListener('mouseleave', this.onLeaveTarget.bind(this));
    }
  }

  private onEnterTarget(e: KeyboardEvent) {
    if (e.code === 'Tab' && !this.inoTrigger.includes('click')) {
      this.tooltipInstance.show();
    }

    if (e.code === 'Escape') {
      this.tooltipInstance.hide();
    }
  }

  private onLeaveTarget() {
    this.tooltipInstance.hide();
  }

  render() {
    return (
      <Host>
        <div class="ino-tooltip__composer" role="tooltip">
          <div class="ino-tooltip__inner">
            {this.inoLabel}
          </div>
        </div>
      </Host>
    );
  }
}
