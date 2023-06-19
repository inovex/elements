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
import TippyJS, {
  Instance as Tippy,
  Placement,
  Props,
  followCursor,
  roundArrow,
} from 'tippy.js';
import { getSlotContent } from '../../util/component-utils';
import { TooltipTrigger } from '../types';
import { closest } from '@material/dom/ponyfill';
import { hideOnEsc, hideOnPopperBlur } from './plugins';

const POPOVER_CLOSE_ATTRIBUTE = 'data-ino-close';

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
  @Element() el!: HTMLInoPopoverElement;
  private tippyInstance?: Tippy;
  private popoverContainer: HTMLDivElement;
  private popoverContent: HTMLDivElement;

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
   * Shows an arrow
   */
  @Prop() arrow = false;


  /**
   * If set, attaches the popover element to the body.
   * Useful to avoid overflow or z-index issues.
   */
  @Prop() attachToBody = false;

  @Watch('attachToBody')
  bodyChanged() {
    this.create();
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
   * If true, hides the popper on blur.
   */
  @Prop() hideOnBlur?: boolean = false;

  @Watch('hideOnBlur')
  hideOnBlurChanged() {
    this.create();
  }

  /**
   * If true, hides the popper on esc.
   */
  @Prop() hideOnEsc?: boolean = false;

  @Watch('hideOnEsc')
  hideOnEscChanged() {
    this.create();
  }

  /**
   * Displaces the popover away from, or toward, the anchor element in the direction of its placement.
   * A positive number displaces it further away, while a negative number lets it overlap the anchor.
   */
  @Prop() distance?: number = 10;

  @Watch('distance')
  distanceChanged() {
    this.tippyInstance?.setProps({
      offset: [0, this.distance],
    });
  }

  /**
   * Sets the color scheme of the popup
   * Valid options include: `light`, `dark` and `primary`.
   */
  @Prop() colorScheme: 'light' | 'dark' | 'primary' =
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
   * Determines if and how the popover follows the user's mouse cursor.
   */
  @Prop() followCursor: Props['followCursor'] = false;

  @Watch('followCursor')
  followCursorChanged() {
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
   * The delay in milliseconds before `ino-popover` shows up or hides.
   *
   * If only one number is given, the show and hide delay get the given delay duration.
   *
   * If two numbers are given e.g. `[500, 200]` the show delay is 500ms and the hide delay is 200ms.
   *
   * Defaults to 0ms.
   *
   */
  @Prop() delay?: number | [number, number] = 0;

  @Watch('delay')
  onDelayChange() {
    this.tippyInstance?.setProps({
      delay: this.delay
    })
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
  @Prop() controlled = false;

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
  visibleChangeHandler(show: boolean) {
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

    const plugins = [];
    if (this.hideOnBlur) {
      plugins.push(hideOnPopperBlur);
    }
    if (this.hideOnEsc) {
      plugins.push(hideOnEsc);
    }

    // in HTML to check if "false" was provided
    const shouldFollowCursor = this.followCursor && (this.followCursor as any) !== "false";

    if(shouldFollowCursor) {
      plugins.push(followCursor)
    }

    const options: Partial<Props> = {
      allowHTML: true,
      theme: this.colorScheme,
      animation: 'scale-subtle',
      appendTo: this.attachToBody ? document.body : this.popoverContainer,
      arrow: this.arrow? roundArrow : false,
      content: this.popoverContent,
      duration: 100,
      delay: this.delay,
      followCursor: shouldFollowCursor ? this.followCursor : false,
      placement: this.placement,
      trigger: this.trigger,
      offset: [0, this.distance],
      plugins: [
        ...plugins,
        // Add lifecycle hooks as plugin to allow consumers to add their own hooks
        // without loosing this functionality (see for instance table-header-cell)
        {
          fn: () => ({
            onMount: () => {
              // Workaround: datepickers may be already initialized an need to be redrawn.
              const datepickers = Array.from(
                this.el.querySelectorAll('ino-datepicker')
              ) as HTMLInoDatepickerElement[];
              datepickers?.forEach((datepicker) => datepicker.redraw());

              const target = this.popoverContent.querySelector(
                'ino-input[data-ino-focus],' +
                  'ino-datepicker[data-ino-focus], ' +
                  ' ino-textarea[data-ino-focus]'
              ) as
                | HTMLInoDatepickerElement
                | HTMLInoTextareaElement
                | HTMLInoInputElement;
              target?.setFocus();
            },
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
          }),
        },
      ],
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

    if (this.interactive) {
      options['interactive'] = true;
    }

    this.tippyInstance = TippyJS(this.target, options);
  }

  private get target(): HTMLElement | null {
    const slotContent = getSlotContent(this.el, 'popover-trigger');

    if (slotContent) return slotContent;

    if (this.for) return document.getElementById(this.for);

    return this.el.parentElement;
  }

  private handlePopoverClick(e: Event): void {
    if (!e.target) {
      return;
    }
    const element = closest(
      e.target as Element,
      `[${POPOVER_CLOSE_ATTRIBUTE}]`
    );
    if (!element) {
      return;
    }
    this.tippyInstance.hide();
  }

  render() {
    const popoverClasses = classNames(
      'ino-popover',
      'ino-popover__content'
    );

    return (
      <Host>
        <slot name="popover-trigger" />
        <div ref={(ref) => (this.popoverContainer = ref)}>
          <div
            class={popoverClasses}
            role="tooltip"
            ref={(ref) => (this.popoverContent = ref)}
            onClick={this.handlePopoverClick.bind(this)}
          >
            <slot></slot>
          </div>
        </div>
      </Host>
    );
  }
}
