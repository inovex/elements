import { MDCRipple } from '@material/ripple';
import { Component, ComponentInterface, Element, Host, Listen, Prop, h } from '@stencil/core';
import classNames from 'classnames';
import { Placement } from 'tippy.js';

import { ColorScheme } from '../types';

@Component({
  tag: 'ino-fab',
  styleUrl: 'ino-fab.scss',
  shadow: true
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
   * The position of the edge.
   */
  @Prop() inoEdgePosition: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'none';

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

  /**
   * The name of the color scheme which is used
   * to style the background and outline of this component.
   * Possible values: `primary` (default),  `secondary`,
   * `success`, `warning`, `error`, `light`, `dark`.
   */
  @Prop() inoColorScheme?: ColorScheme = 'primary';

  @Listen('click')
  clickHandler(e) {
    if (this.inoDisabled) {
      e.preventDefault();
      e.stopPropagation();
    }
  }

  componentDidLoad() {
    this.fabRipple = new MDCRipple(this.el.shadowRoot.querySelector('.mdc-fab'));
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
      <Host id={this.uniqueHelperId}>
        <button class={classFab} disabled={this.inoDisabled}>
          <span class="material-icons mdc-fab__icon">
            {this.inoIcon ?
              <ino-icon class="mdc-button__icon" ino-icon={this.inoIcon}/>
              :
              <slot></slot>
            }
          </span>
          {this.inoExtended && (
            <span class="mdc-fab__label">{this.inoLabel}</span>
          )}
        </button>
        {!this.inoExtended && this.inoTooltipPlacement !== 'none' && (
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
