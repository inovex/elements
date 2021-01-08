import { MDCRipple } from '@material/ripple';
import {
  Component,
  ComponentInterface,
  Element,
  Event,
  EventEmitter,
  Host,
  Prop,
  h,
  Listen,
  Watch,
} from '@stencil/core';
import classNames from 'classnames';

import { ColorScheme, ButtonType } from '../types';

@Component({
  tag: 'ino-icon-button',
  styleUrl: 'ino-icon-button.scss',
  shadow: false,
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
   * Marks the icon button as activated.
   *
   * Useful in cases where an external state controls the icon button activation.
   * Makes the component **managed**.
   */
  @Prop() inoActivated?: boolean;
  @Watch('inoActivated')
  inoActivatedChanged(activated: boolean) {
    activated ? this.maybeCreateRipple() : this.maybeDestroyRipple();
  }

  /**
   * The name of the color scheme which is used
   * to style the background and outline of this component.
   * Possible values: `primary` (default),  `secondary`,
   * `success`, `warning`, `error`, `light`, `dark`.
   */
  @Prop() inoColorScheme?: ColorScheme = 'primary';

  /**
   * Styles this element as filled icon button
   * with the `ino-color-scheme` as background color.
   */
  @Prop() inoFilled?: boolean;

  /**
   * The name of the icon of this element.
   */
  @Prop() inoIcon?: string;

  /**
   * The type of this form.
   *
   * Can either be `button`, `submit` or `reset`.
   */
  @Prop() type?: ButtonType = 'button';

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
    this.maybeCreateRipple();
  }

  componentWillUnload() {
    this.maybeDestroyRipple();
  }

  private maybeCreateRipple() {
    if (!this.inoActivated) {
      this.mdcInstance = new MDCRipple(
        this.el.querySelector('.mdc-icon-button'),
      );
      this.mdcInstance.unbounded = true;
    }
  }

  private maybeDestroyRipple() {
    this.mdcInstance?.destroy();
  }

  render() {
    const iconButtonClasses = classNames({
      'mdc-icon-button': true,
      'mdc-ripple-upgraded--background-focused': this.inoActivated,
    });

    return (
      <Host>
        <button
          autoFocus={this.autoFocus}
          class={iconButtonClasses}
          disabled={this.disabled}
          type={this.type}
        >
          <ino-icon ino-icon={this.inoIcon} class="mdc-icon-button__icon" />
        </button>
      </Host>
    );
  }
}
