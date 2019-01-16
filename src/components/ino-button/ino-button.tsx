import { MDCRipple } from '@material/ripple';
import { Component, Element, Prop } from '@stencil/core';
import classNames from 'classnames';

import { ButtonType, ColorScheme, SurfaceType } from '../types';

@Component({
  tag: 'ino-button',
  styleUrl: 'ino-button.scss',
  shadow: false
})
export class Button {
  /**
   * An internal instance of the material design button.
   */
  private button: MDCRipple;

  @Element() el!: HTMLElement;
  /**
   * Sets the autofocus for this element.
   */
  @Prop() autofocus?: boolean;

  /**
   * Disables this element.
   */
  @Prop() disabled?: boolean;

  /**
   * The name of the element.
   */
  @Prop() name?: string;

  /**
   * The form id this element origins to.
   */
  @Prop() form?: string;

  /**
   * The type of this form.
   *
   * Can either be `button`, `submit` or `reset`.
   */
  @Prop() type?: ButtonType = 'button';

  /**
   * The name of the color scheme which is used
   * to style the background and outline of this component.
   * Possible values: `primary` (default),  `secondary`, `tertiary`,
   * `success`, `warning`, `error`, `light`, `dark`.
   */
  @Prop() inoColorScheme?: ColorScheme = 'primary';

  /**
   * The fill type of this element.
   * Possible values: `solid` (default), `outline`, `raised` or `transparent`.
   */
  @Prop() inoFill?: SurfaceType = 'solid';

  /**
   * Adds an icon to the button.
   * The icon is appended before the text. Use `inoIconPrepend` to place it after the text.
   */
  @Prop() inoIcon?: string;

  /**
   * Prepends an icon after the text.
   */
  @Prop() inoIconPrepend?: boolean;

  /**
   * Makes the button text and container slightly smaller.
   */
  @Prop() inoDense = false;

  componentDidLoad() {
    this.button = new MDCRipple(this.el.querySelector('.mdc-button'));
  }

  componentWillUnload() {
    this.button.destroy();
  }

  render() {
    const classButton = classNames(
      'mdc-button',
      { 'mdc-button--unelevated' : this.inoFill === 'solid' },
      { 'mdc-button--outlined' : this.inoFill === 'outline' },
      { 'mdc-button--raised': this.inoFill === 'raised' },
      { 'mdc-button--dense': this.inoDense }
    );

    return (
      <button
        class={classButton}
        autoFocus={this.autofocus}
        disabled={this.disabled}
        name={this.name}
        type={this.type}
        form={this.form}
      >
        {this.inoIcon && !this.inoIconPrepend
          && <ino-icon class="mdc-button__icon" ino-icon={this.inoIcon}></ino-icon>}
        <slot />

        {this.inoIcon && this.inoIconPrepend
          && <ino-icon class="mdc-button__icon mdc-button__icon--right" ino-icon={this.inoIcon}></ino-icon>}
      </button>
    );
  }
}
