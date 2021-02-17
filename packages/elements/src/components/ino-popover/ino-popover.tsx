import {
  Component,
  ComponentInterface,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Method,
  Prop,
  Watch,
} from '@stencil/core';
import TippyJS, { Instance as Tippy, Placement, Props } from 'tippy.js';

import { TooltipTrigger } from '../types';

@Component({
  tag: 'ino-popover',
  styleUrl: 'ino-popover.scss',
  shadow: false,
})
export class Popover implements ComponentInterface {
  @Element() el!: HTMLElement;
  private tippyInstance?: Tippy;

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
   * Use this if you want to interact with the popover content (e.g. button clicks)
   */
  @Prop() inoInteractive? = false;

  /**
   * The trigger to show the tooltip - either click, hover or focus.
   * Multiple triggers are possible by separating them with a space.
   */
  @Prop() inoTrigger: Exclude<TooltipTrigger, 'manual'> = 'mouseenter focus';

  @Watch('inoTrigger')
  inoTriggerChanged() {
    this.create();
  }

  /**
   * Returns the internally used tippy.js instance
   * For more informations see: https://atomiks.github.io/tippyjs/
   */
  @Method()
  async getTippyInstance(): Promise<any> {
    return this.tippyInstance;
  }

  /**
   * Programmatically show or hide the popover.
   * Using this property disables the functionality of the `inoTrigger` prop.
   */
  @Prop() inoShow?: boolean;

  @Watch('inoShow')
  inoShowChanged(show: boolean) {
    console.log('SHOW CHANGED TO', show);
    show ? this.tippyInstance.show() : this.tippyInstance.hide();
  }

  @Event() visibilityChanged: EventEmitter<boolean>;

  // Lifecycle

  componentDidLoad() {
    this.create();
  }

  /**
   * Emits when an element which is not part of the popover is clicked.
   * Should be used if you control the state of the popover.
   */
  @Event() clickOutside: EventEmitter<void>;

  private create() {
    this.tippyInstance?.destroy();

    const target = this.inoFor
      ? document.getElementById(this.inoFor)
      : this.el.parentElement;

    if (!target && this.inoFor) {
      console.warn(
        `The element with the id '${this.inoFor}' could not be found.`
      );
    }

    const options: Partial<Props> = {
      allowHTML: true,
      appendTo: this.el.parentElement,
      content: this.el,
      duration: 100,
      placement: this.inoPlacement,
      trigger: this.inoTrigger,
      interactive: this.inoInteractive,
      onShow: () => this.onShow(),
      onHide: () => this.onHide(),
    };

    this.tippyInstance = TippyJS(target, options);
  }

  internalVisibility: boolean = false;

  onShow(): false | void {
    console.log('SHOWING');

    if (this.internalVisibility) return;

    console.log('NOT VISIBLE YET');
    this.visibilityChanged.emit(true);
    this.internalVisibility = true;
    return false;
  }

  onHide(): false | void {
    if (this.internalVisibility) {
      this.visibilityChanged.emit(false);
      return false;
    } else {
      this.internalVisibility = false;
    }
  }

  render() {
    return (
      <Host>
        <div class="ino-tooltip__composer ino-popover__content" role="tooltip">
          <div class="ino-tooltip__inner">
            <div class="ino-popover__content">
              <slot></slot>
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
