import { MDCRipple } from '@material/ripple';
import { Component, ComponentInterface, Element, h, Host, Listen, Prop } from '@stencil/core';
import classNames from 'classnames';
import { hasSlotContent } from '../../util/component-utils';

/**
 * A floating action button represents the primary action in an application. [Floating Action Button](https://github.com/material-components/material-components-web/tree/master/packages/mdc-fab) component.
 * It appears in front of all screen content, typically as a circular shape with an icon in its center.
 *
 * FABs come in three types: regular, mini, and extended
 *
 * #### Additional Hints
 *
 * **Content**: Use the  label` attribute to set the text of a fab. To add an icon, use the  icon` attribute.
 *
 *  @slot icon-leading - For the icon to be prepended
 */
@Component({
  tag: 'ino-fab',
  styleUrl: 'ino-fab.scss',
  shadow: false,
})
export class Fab implements ComponentInterface {
  private fabRipple: MDCRipple;

  @Element() el!: HTMLInoFabElement;

  /**
   * Optional, for the text label. Applicable only for Extended FAB.
   */
  @Prop() label?: string;

  /**
   * The position of the edge.
   */
  @Prop() edgePosition: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'none' = 'top-right';

  /**
   * Disables the button.
   */
  @Prop() disabled = false;

  /**
   * The variant of the FAB.
   */
  @Prop() variant: 'small' | 'standard' | 'large' | 'extended' = 'standard';

  /**
   * Optional, displays a shadow around the button. Flat when it should be part of a button, shadow to abheben
   */
  @Prop() shadow? = false;

  @Listen('click')
  clickHandler(e) {
    if (this.disabled) {
      e.preventDefault();
      e.stopPropagation();
    }
  }

  componentDidLoad() {
    this.fabRipple = new MDCRipple(this.el.querySelector('.mdc-fab'));
  }

  disconnectedCallback() {
    this.fabRipple?.destroy();
  }

  /**
   * Simple static construct to generate unique helper text ids.
   */
  private static HELPER_COUNTER = 0;

  private static generateHelperTextId() {
    return `fab-helper-text__${Fab.HELPER_COUNTER++}`;
  }

  /**
   * An internal auto generated id for the helper field.
   */
  private uniqueHelperId = Fab.generateHelperTextId();

  render() {
    const hostClasses = classNames(`ino-fab--edge-position-${this.edgePosition}`);

    const classFab = classNames({
      'mdc-fab': true,
      'mdc-fab--extended': this.variant === 'extended',
      'mdc-fab--small': this.variant === 'small',
      'mdc-fab--standard:': this.variant === 'standard',
      'mdc-fab--large': this.variant === 'large',
      'mdc-fab--shadow': this.shadow,
    });

    const iconSlotHasContent = hasSlotContent(this.el, 'icon-leading');

    return (
      <Host class={hostClasses} id={this.uniqueHelperId}>
        <button class={classFab} disabled={this.disabled}>
          <span class="material-icons mdc-fab__icon">{iconSlotHasContent && <slot name="icon-leading" />}</span>
          {this.variant === 'extended' && <span class="mdc-fab__label">{this.label}</span>}
        </button>
      </Host>
    );
  }
}