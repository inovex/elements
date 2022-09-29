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

import { ButtonType } from '../types';

/**
 * @slot default - `<ino-icon>`
 */
@Component({
  tag: 'ino-icon-button',
  styleUrl: 'ino-icon-button.scss',
  shadow: false,
})
export class IconButton implements ComponentInterface {
  // An internal instance of the icon button. Either the ripple effect
  // or a toggle button instance.
  private mdcInstance: MDCRipple;

  @Element() el!: HTMLInoIconButtonElement;

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
  @Prop() activated?: boolean;
  @Watch('activated')
  activatedChanged(activated: boolean) {
    activated ? this.maybeCreateRipple() : this.maybeDestroyRipple();
  }

  /**
   * Styles this element as filled icon button
   * with the `ino-color-scheme` as background color.
   */
  @Prop() filled?: boolean;

  /**
   * The name of the icon of this element.
    */
  @Prop() icon?: string;

  /**
   * The type of this form.
   *
   * Can either be `button`, `submit` or `reset`.
   */
  @Prop() type?: ButtonType = 'button';

  /**
   * Event that emits as soon as the user clicks on the icon.
   * The event only emits if the property `clickable` is true.
   */
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

  disconnectedCallback() {
    this.maybeDestroyRipple();
  }

  private maybeCreateRipple() {
    if (!this.activated) {
      this.mdcInstance = new MDCRipple(
        this.el.querySelector('.mdc-icon-button')
      );
      this.mdcInstance.unbounded = true;
    }
  }

  private maybeDestroyRipple() {
    this.mdcInstance?.destroy();
  }

  render() {
    const hostClasses = classNames(
      {
        'ino-icon-button--filled': this.filled,
      }
    );

    const iconButtonClasses = classNames({
      'mdc-icon-button': true,
      'mdc-ripple-upgraded--background-focused': this.activated,
      'ino-icon-button-filled': this.filled,
      'ino-icon-button--disabled': this.disabled,
    });
    
    return (
      <Host class={hostClasses}>
        <button
          autoFocus={this.autoFocus}
          class={iconButtonClasses}
          disabled={this.disabled}
          type={this.type}
        >
          <div class="mdc-icon-button__ripple"/>
          <span class="mdc-icon-button__icon">
            {this.icon ? <ino-icon icon={this.icon} /> : <slot />}
          </span>
        </button>
      </Host>
    );
  }
}
