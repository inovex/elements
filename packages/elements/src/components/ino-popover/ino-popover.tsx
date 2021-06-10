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
import classNames from 'classnames';
import TippyJS, { Instance as Tippy, Placement, Props } from 'tippy.js';
import { getSlotContent } from '../../util/component-utils';

import { TooltipTrigger } from '../types';

/**
 * @slot popover-trigger - The target element to attach the triggers to
 * @slot default - Content of the popover
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
  @Prop() placement: Placement = 'auto';

  @Watch('placement')
  placementChanged() {
    this.tippyInstance?.setProps({
      placement: this.placement,
    });
  }

  /**
   * The target id the popover belongs to.
   * If not given, the popover is attached to the element provided in the named slot (`popover-trigger`)
   * or the parent component if a slot element does not exist.
   */
  @Prop() for?: string;

  @Watch('for')
  forChanged() {
    this.create();
  }

  /**
   * Displaces the popover away from, or toward, the anchor element in the direction of its placement.
   * A positive number displaces it further away, while a negative number lets it overlap the anchor.
   */
  @Prop() distance?: number = 10;

  @Watch('distance')
  inoDistanceChanged() {
    this.tippyInstance?.setProps({
      offset: [0, this.distance],
    });
  }

  /**
   * Sets the color scheme of the popup
   * Valid options include: 'primary', 'secondary', 'light', 'transparent'
   */
  @Prop() colorScheme: 'primary' | 'secondary' | 'light' | 'transparent' =
    'primary';

  /**
   * Use this if you want to interact with the popover content (e.g. button clicks)
   */
  @Prop() interactive? = false;

  @Watch('interactive')
  interactiveChanged() {
    this.create();
  }

  /**
   * The trigger to show the tooltip - either click, hover or focus.
   * Multiple triggers are possible by separating them with a space.
   */
  @Prop() trigger: Exclude<TooltipTrigger, 'manual'> = 'mouseenter focus';

  @Watch('trigger')
  triggerChanged() {
    this.tippyInstance?.setProps({
      trigger: this.trigger,
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
   * Used to indicate if the popover should be controlled by itself (`false`) or manually by the `visible` property (`true`)
   */
  @Prop() controlled: boolean = false;

  @Watch('controlled')
  controlledChanged() {
    this.create();
  }

  /**
   * Programmatically show or hide the popover.
   * Can only be used in controlled mode (see property `controlled`).
   * Use the `visibleChanged` to sync the popovers' visibility state with yours.
   */
  @Prop() visible?: boolean = false;

  @Watch('visible')
  inoVisibleChangeHandler(show: boolean) {
    if (!this.controlled) {
      return;
    }

    show ? this.tippyInstance?.show() : this.tippyInstance?.hide();
  }

  /**
   * Emits when the popover wants to show (`true`) or hide (`false`) itself.
   * This is depended on the `trigger` property.
   * Use this event in controlled-mode (see `controlled`).
   *
   * e.g.: `trigger = 'click'` - This events emits with `true`
   * when the user clicks on the target (slot/`for`/parent-element)
   * and emits with `false` when the target or the outside is clicked.
   */
  @Event() visibleChanged: EventEmitter<boolean>;

  componentDidLoad() {
    this.create();
  }

  private create() {
    this.tippyInstance?.destroy();

    if (!this.target && this.for) {
      console.warn(`The element with the id '${this.for}' could not be found.`);
    }

    const options: Partial<Props> = {
      allowHTML: true,
      animation: 'scale',
      appendTo: this.inoPopoverContainer,
      content: this.inoPopoverContent,
      duration: 100,
      placement: this.placement,
      trigger: this.trigger,
      interactive: this.interactive,
      offset: [0, this.distance],
      onShow: () => {
        if (this.controlled && !this.visible) {
          this.visibleChanged.emit(true);
          return false;
        }
      },
      onHide: () => {
        if (this.controlled && this.visible) {
          this.visibleChanged.emit(false);
          return false;
        }
      },
    };

    this.tippyInstance = TippyJS(this.target, options);
  }

  private get target(): HTMLElement | null {
    const slotContent = getSlotContent(this.el, 'popover-trigger');

    if (slotContent) return slotContent;

    if (this.for) return document.getElementById(this.for);

    return this.el.parentElement;
  }

  render() {
    const popoverClasses = classNames(
      'ino-popover',
      `ino-popover--color-scheme-${this.colorScheme}`
    );

    return (
      <Host>
        <slot name="popover-trigger"/>
        <div
          ref={(ref) => (this.inoPopoverContainer = ref)}
          class={popoverClasses}
        >
          <div
            class="ino-tooltip__composer ino-popover__content"
            role="tooltip"
            ref={(ref) => (this.inoPopoverContent = ref)}
          >
            <div class="ino-tooltip__inner">
              <slot></slot>
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
