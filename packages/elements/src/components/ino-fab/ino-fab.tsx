import { MDCRipple } from '@material/ripple';
import {
  Component,
  ComponentInterface,
  Element,
  Host,
  Listen,
  Prop,
  h,
} from '@stencil/core';
import classNames from 'classnames';
import { Placement } from 'tippy.js';
import { hasSlotContent } from "../../util/component-utils";

/**
 * @slot ino-icon-leading - For the icon to be prepended
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
   * @deprecated This property is deprecated and will be removed with the next major release. Instead, use the ino-icon-leading slot.
   */
  @Prop() inoIcon?: string;

  /**
   * Optional, for the text label. Applicable only for Extended FAB.
   */
  @Prop() inoLabel?: string;

  /**
   * Optional, modifies the FAB to wider size which includes a text label.
   */
  @Prop() inoExtended = false;

  /**
   * The position of the edge.
   */
  @Prop() inoEdgePosition:
    | 'top-right'
    | 'top-left'
    | 'bottom-right'
    | 'bottom-left'
    | 'none';

  /**
   * Disables the button.
   */
  @Prop() inoDisabled = false;

  /**
   * Optional, modifies the FAB to a smaller size
   */
  @Prop() inoMini = false;

  /**
   * The placement of the tooltip which will be displayed when the button is not extended.
   * Use `none`, if you don't want a tooltip to be displayed.
   */
  @Prop() inoTooltipPlacement: Placement | 'none' = 'left';

  @Listen('click')
  clickHandler(e) {
    if (this.inoDisabled) {
      e.preventDefault();
      e.stopPropagation();
    }

    if (this.inoIcon) {
      console.warn(
        `Property 'ino-icon' is deprecated and will be removed with the next major release. Instead, use the ino-icon-leading slot.`
      );
    }
  }

  componentDidLoad() {
    this.fabRipple = new MDCRipple(
      this.el.shadowRoot.querySelector('.mdc-fab')
    );

    if (!this.inoExtended && this.inoTooltipPlacement !== 'none') {
      this.renderTooltip();
    }
  }

  private renderTooltip() {
    const attributes = {
      'ino-for': this.uniqueHelperId,
      'ino-label': this.inoLabel,
      'ino-placement': this.inoTooltipPlacement,
      'ino-trigger': 'mouseenter focus',
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
    const classFab = classNames({
      'mdc-fab': true,
      'mdc-fab--extended': this.inoExtended,
      'mdc-fab--mini': this.inoMini,
    });

    const iconSlotHasContent = hasSlotContent(this.el, 'ino-icon-leading');

    return (
      <Host id={this.uniqueHelperId}>
        <button class={classFab} disabled={this.inoDisabled}>
          <span class="material-icons mdc-fab__icon">
            { this.inoIcon && !iconSlotHasContent && (
              <ino-icon ino-icon={this.inoIcon}/>
            )}
            { iconSlotHasContent && (
              <slot name="ino-icon-leading"/>
            )}
          </span>
          {this.inoExtended && (
            <span class="mdc-fab__label">{this.inoLabel}</span>
          )}
        </button>
      </Host>
    );
  }
}
