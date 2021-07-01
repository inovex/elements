import { MDCRipple } from '@material/ripple';
import {
  Component,
  ComponentInterface,
  Element,
  h,
  Host,
  Listen,
  Prop,
} from '@stencil/core';
import classNames from 'classnames';
import { Placement } from 'tippy.js';
import { hasSlotContent } from '../../util/component-utils';

/**
 * @slot icon-leading - For the icon to be prepended
 */
@Component({
  tag: 'ino-fab',
  styleUrl: 'ino-fab.scss',
  shadow: true,
})
export class Fab implements ComponentInterface {
  private fabRipple: MDCRipple;

  @Element() el!: HTMLElement;

  tooltipRef!: HTMLInoTooltipElement;

  /**
   * Adds an icon to the Fab.
   * @deprecated This property is deprecated and will be removed with the next major release. Instead, use the `icon-leading` slot.
   */
  @Prop() icon?: string;

  /**
   * Optional, for the text label. Applicable only for Extended FAB.
   */
  @Prop() label?: string;

  /**
   * Optional, modifies the FAB to wider size which includes a text label.
   */
  @Prop() extended = false;

  /**
   * The position of the edge.
   */
  @Prop() edgePosition:
    | 'top-right'
    | 'top-left'
    | 'bottom-right'
    | 'bottom-left'
    | 'none' = 'top-left';

  /**
   * Disables the button.
   */
  @Prop() disabled = false;

  /**
   * Optional, modifies the FAB to a smaller size
   */
  @Prop() mini = false;

  /**
   * The placement of the tooltip which will be displayed when the button is not extended.
   * Use `none`, if you don't want a tooltip to be displayed.
   */
  @Prop() tooltipPlacement: Placement | 'none' = 'left';

  @Listen('click')
  clickHandler(e) {
    if (this.disabled) {
      e.preventDefault();
      e.stopPropagation();
    }

    if (this.icon) {
      console.warn(
        `Property 'icon' is deprecated and will be removed with the next major release. Instead, use the icon-leading slot.`
      );
    }
  }

  componentDidLoad() {
    this.fabRipple = new MDCRipple(
      this.el.shadowRoot.querySelector('.mdc-fab')
    );

    if (!this.extended && this.tooltipPlacement !== 'none') {
      this.renderTooltip();
    }
  }

  private renderTooltip() {
    const attributes: Partial<HTMLInoTooltipElement> = {
      for: this.uniqueHelperId,
      label: this.label,
      placement:
        this.tooltipPlacement === 'none' ? undefined : this.tooltipPlacement,
      trigger: 'mouseenter focus',
    };

    const tooltip = document.createElement('ino-tooltip');
    Object.keys(attributes).forEach((key) =>
      tooltip.setAttribute(key, attributes[key])
    );
    this.el.appendChild(tooltip);
  }

  disconnectedCallback() {
    this.fabRipple?.destroy();
  }

  /**
   * Simple static construct to generate unique helper text ids.
   */
  private static HELPER_COUNTER = 0;

  static generateHelperTextId() {
    return `fab-helper-text__${Fab.HELPER_COUNTER++}`;
  }

  /**
   * An internal auto generated id for the helper field.
   */
  private uniqueHelperId = Fab.generateHelperTextId();

  render() {
    const hostClasses = classNames(
      `ino-fab--edge-position-${this.edgePosition}`
    );

    const classFab = classNames({
      'mdc-fab': true,
      'mdc-fab--extended': this.extended,
      'mdc-fab--mini': this.mini,
    });

    const iconSlotHasContent = hasSlotContent(this.el, 'icon-leading');

    return (
      <Host class={hostClasses} id={this.uniqueHelperId}>
        <button class={classFab} disabled={this.disabled}>
          <span class="material-icons mdc-fab__icon">
            {this.icon && !iconSlotHasContent && (
              <ino-icon icon={this.icon} />
            )}
            {iconSlotHasContent && <slot name="icon-leading" />}
          </span>
          {this.extended && <span class="mdc-fab__label">{this.label}</span>}
        </button>
      </Host>
    );
  }
}
