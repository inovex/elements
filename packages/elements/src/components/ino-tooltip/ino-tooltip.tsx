import {
  Component,
  ComponentInterface,
  Element,
  Host,
  Prop,
  Watch,
  h,
  Method,
} from '@stencil/core';
import classNames from 'classnames';
import TippyJS, { Instance, Placement } from 'tippy.js';
import { TooltipTrigger } from '../types';

@Component({
  tag: 'ino-tooltip',
  styleUrl: 'ino-tooltip.scss',
  shadow: false,
})
export class Tooltip implements ComponentInterface {
  private tooltipInstance!: Instance;
  private target!: HTMLElement | null;

  @Element() el!: HTMLElement;

  /**
   * Sets the color scheme of the tooltip
   * Valid options include: 'primary', 'secondary' 'light', 'transparent'
   */
  @Prop() colorScheme: 'primary' | 'secondary' | 'light' | 'transparent' =
    'primary';

  /**
   * The placement of the tooltip.
   * Accepted values: `top(-start, -end)`, `right(-start, -end)`,
   * `bottom(-start, -end)`, `left(-start, -end)`
   */
  @Prop() placement: Placement = 'auto';

  @Watch('placement')
  async placementChanged() {
    await this.create();
  }

  /**
   * The target id the tooltip belongs to.
   * If not given, the tooltip is attached to the parent component.
   */
  @Prop() for?: string;

  @Watch('for')
  async inoForChanged() {
    await this.create();
  }

  /**
   * The trigger to show the tooltip - either click, hover or focus.
   * Multiple triggers possible by separating them with a space.
   */
  @Prop() trigger: TooltipTrigger = 'mouseenter focus';

  @Watch('trigger')
  async triggerChanged() {
    await this.create();
  }

  /**
   * The text shown in the tooltip.
   */
  @Prop() label?: string;

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

  private retrieveTarget = () =>
    this.for ? document.getElementById(this.for) : this.el.parentElement;

  private async create() {
    await this.dispose();

    this.target = this.retrieveTarget();

    if (!this.target) {
      // Wait 1 sec for the host element to be rendered
      await new Promise((resolve) => setTimeout(resolve, 1000));
      this.target = this.retrieveTarget();
    }

    if (!this.target) {
      throw new Error(
        `Target with the ID '${this.for}' could not be found in this document.`
      );
    }

    const options = {
      content: this.el,
      duration: 100,
      placement: this.placement,
      trigger: this.trigger,
    };

    this.tooltipInstance = TippyJS(this.target, options);

    this.target!.addEventListener('keyup', this.onEnterTarget.bind(this));
    this.target!.addEventListener('blur', this.onLeaveTarget.bind(this), true);

    if (this.trigger.includes('hover')) {
      this.target!.addEventListener(
        'mouseleave',
        this.onLeaveTarget.bind(this)
      );
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
      this.target!.removeEventListener(
        'mouseleave',
        this.onLeaveTarget.bind(this)
      );
    }
  }

  private onEnterTarget(e: KeyboardEvent) {
    if (e.code === 'Tab' && !this.trigger.includes('click')) {
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
    const hostClasses = classNames(
      `ino-tooltip--color-scheme-${this.colorScheme}`
    );

    return (
      <Host class={hostClasses}>
        <div class="ino-tooltip__composer" role="tooltip">
          <div class="ino-tooltip__inner">{this.label}</div>
        </div>
      </Host>
    );
  }
}
