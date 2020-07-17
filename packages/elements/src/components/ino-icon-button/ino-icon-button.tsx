import { MDCRipple } from '@material/ripple';
import { Component, ComponentInterface, Element, Event, EventEmitter, Host, Prop, h, Listen } from '@stencil/core';
import classNames from 'classnames';

import { ColorScheme } from '../types';

@Component({
  tag: 'ino-icon-button',
  styleUrl: 'ino-icon-button.scss',
  shadow: false
})
export class IconButton implements ComponentInterface {
  // An internal instance of the icon button. Either the ripple effect
  // or a toggle button instance.
  private mdcInstance: MDCRipple;

  @Element() el!: HTMLElement;

  /**
   * Sets the autofocus for this element.
   */
  @Prop({ attribute: 'autofocus' }) autoFocus?: boolean;

  /**
   * Disables this element.
   */
  @Prop() disabled?: boolean;

  /**
   * The name of the icon of this element.
   */
  @Prop() inoIcon?: string;

  /**
   * The name of the color scheme which is used
   * to style the background and outline of this component.
   * Possible values: `primary` (default),  `secondary`,
   * `success`, `warning`, `error`, `light`, `dark`.
   */
  @Prop() inoColorScheme?: ColorScheme = 'primary';

  @Event() clickEl: EventEmitter;

  @Listen('click')
  clickHandler(e) {
    if (this.disabled) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      this.clickEl.emit();
    }
  }

  componentDidLoad() {
    const nativeElement = this.el.querySelector('.mdc-icon-button');
    this.mdcInstance = new MDCRipple(nativeElement);
    this.mdcInstance.unbounded = true;
  }

  componentWillUnload() {
    this.destroyIconButton();
  }

  private destroyIconButton() {
    if (this.mdcInstance) {
      this.mdcInstance.destroy();
    }
  }

  render() {
    const iconButtonClasses = classNames({
      'mdc-icon-button': true
    });

    return (
      <Host>
        <button
          autoFocus={this.autoFocus}
          class={iconButtonClasses}
          disabled={this.disabled}
        >
          <ino-icon ino-icon={this.inoIcon} class="mdc-icon-button__icon" />
        </button>
      </Host>
    );
  }
}
