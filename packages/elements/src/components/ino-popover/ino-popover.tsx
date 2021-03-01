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
import { getSlotContent } from '../../util/component-utils';

import { TooltipTrigger } from '../types';

/**
 * @slot ino-popover-trigger - The target element to attach the triggers to
 */
@Component({
  tag: 'ino-popover',
  styleUrl: 'ino-popover.scss',
  shadow: false,
})
export class Popover implements ComponentInterface {
  @Element() el!: HTMLElement;
  private tippyInstance?: Tippy;
  private inoPopoverContainer: HTMLDivElement;
  private inoPopoverContent: HTMLDivElement;

  /**
   * The placement of this popover.
   * Accepted values: `top(-start, -end)`, `right(-start, -end)`,
   * `bottom(-start, -end)`, `left(-start, -end)`
   */
  @Prop() inoPlacement: Placement = 'auto';

  @Watch('inoPlacement')
  inoPlacementChanged() {
    this.tippyInstance?.setProps({
      placement: this.inoPlacement,
    });
  }

  /**
   * The target id the popover belongs to.
   * If not given, the popover is attached to the element provided in the named slot (`ino-popover-trigger`)
   * or the parent component if a slot element does not exist.
   */
  @Prop() inoFor?: string;

  @Watch('inoFor')
  inoForChanged() {
    this.create();
  }

  /**
   * Displaces the popover away from, or toward, the anchor element in the direction of its placement.
   * A positive number displaces it further away, while a negative number lets it overlap the anchor.
   */
  @Prop() inoDistance?: number = 10;

  @Watch('inoDistance')
  inoDistanceChanged() {
    this.tippyInstance?.setProps({
      offset: [0, this.inoDistance],
    });
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

  @Watch('inoInteractive')
  inoInteractiveChanged() {
    this.create();
  }

  /**
   * The trigger to show the tooltip - either click, hover or focus.
   * Multiple triggers are possible by separating them with a space.
   */
  @Prop() inoTrigger: Exclude<TooltipTrigger, 'manual'> = 'mouseenter focus';

  @Watch('inoTrigger')
  inoTriggerChanged() {
    this.tippyInstance?.setProps({
      trigger: this.inoTrigger,
    });
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
   * Used to indicate if the popover should be controlled by itself (`false`) or manually by the `ino-visible` property (`true`)
   */
  @Prop() inoControlled: boolean = false;

  @Watch('inoControlled')
  inoControlledChanged() {
    this.create();
  }

  /**
   * Programmatically show or hide the popover.
   * Can only be used in controlled mode (see property `ino-controlled`).
   * Use the `inoVisibleChanged` to sync the popovers' visibility state with yours.
   */
  @Prop() inoVisible?: boolean = false;

  @Watch('inoVisible')
  inoVisibleChangeHandler(show: boolean) {
    if (!this.inoControlled) {
      return;
    }

    show ? this.tippyInstance?.show() : this.tippyInstance?.hide();
  }

  /**
   * Emits when the popover wants to show (`true`) or hide (`false`) itself.
   * This is depended on the `ino-trigger` property.
   * Use this event in controlled-mode (see `ino-controlled`).
   *
   * e.g.: `ino-trigger = 'click'` - This events emits with `true`
   * when the user clicks on the target (slot/`ino-for`/parent-element)
   * and emits with `false` when the target or the outside is clicked.
   */
  @Event() inoVisibleChanged: EventEmitter<boolean>;

  componentDidLoad() {
    this.create();
  }

  private create() {
    this.tippyInstance?.destroy();

    if (!this.target && this.inoFor) {
      console.warn(
        `The element with the id '${this.inoFor}' could not be found.`
      );
    }

    const options: Partial<Props> = {
      allowHTML: true,
      appendTo: this.inoPopoverContainer,
      content: this.inoPopoverContent,
      duration: 100,
      placement: this.inoPlacement,
      trigger: this.inoTrigger,
      interactive: this.inoInteractive,
      offset: [0, this.inoDistance],
      onShow: () => {
        if (this.inoControlled && !this.inoVisible) {
          this.inoVisibleChanged.emit(true);
          return false;
        }
      },
      onHide: () => {
        if (this.inoControlled && this.inoVisible) {
          this.inoVisibleChanged.emit(false);
          return false;
        }
      },
    };

    this.tippyInstance = TippyJS(this.target, options);
  }

  private get target(): HTMLElement | null {
    const slotContent = getSlotContent(this.el, 'ino-popover-trigger');

    if (slotContent) return slotContent;

    if (this.inoFor) return document.getElementById(this.inoFor);

    return this.el.parentElement;
  }

  render() {
    return (
      <Host>
        <slot name="ino-popover-trigger"></slot>
        <div
          ref={(ref) => (this.inoPopoverContainer = ref)}
          class="ino-popover"
        >
          <div
            class="ino-tooltip__composer ino-popover__content"
            role="tooltip"
            ref={(ref) => (this.inoPopoverContent = ref)}
          >
            <div class="ino-tooltip__inner">
              <div class="ino-popover__content">
                <slot></slot>
              </div>
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
