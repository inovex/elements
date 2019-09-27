import { MDCRipple } from '@material/ripple';
import { Component, ComponentInterface, Element, Host, Prop, h } from '@stencil/core';
import classNames from 'classnames';
import { Placement } from 'popper.js';

import { ColorScheme } from '../types';

@Component({
  tag: 'ino-fab',
  styleUrl: 'ino-fab.scss',
  shadow: false
})
export class Fab implements ComponentInterface {
  private fabRipple: MDCRipple;

  @Element() el!: HTMLElement;

  /**
   * Adds an icon to the Fab.
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
   * Optional, modifies the FAB to a smaller size
   */
  @Prop() inoMini = false;

  /**
   * The placement of the tooltip.
   * Accepted values: `top(-start, -end)`, `right(-start, -end)`,
   * `bottom(-start, -end)`, `left(-start, -end)`
   */
  @Prop() inoTooltipPlacement: Placement = 'left';

  /**
   * The name of the color scheme which is used
   * to style the background and outline of this component.
   * Possible values: `primary` (default),  `secondary`, `tertiary`,
   * `success`, `warning`, `error`, `light`, `dark`.
   */
  @Prop() inoColorScheme?: ColorScheme = 'primary';

  componentDidLoad() {
    this.fabRipple = new MDCRipple(this.el.querySelector('.mdc-fab'));
  }

  componentWillUnload() {
    this.fabRipple.destroy();
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
      'mdc-fab--mini': this.inoMini
    });

    return (
      <Host>
        <button class={classFab} id={this.uniqueHelperId}>
          <span class="material-icons mdc-fab__icon">
            <ino-icon class="mdc-button__icon" ino-icon={this.inoIcon} />
          </span>
          {this.inoExtended && (
            <span class="mdc-fab__label">{this.inoLabel}</span>
          )}
        </button>
        {this.inoExtended && (
          <ino-tooltip
            ino-for={this.uniqueHelperId}
            ino-label={this.inoLabel}
            ino-placement={this.inoTooltipPlacement}
            ino-trigger="hover focus"
          />
        )}
      </Host>
    );
  }
}
