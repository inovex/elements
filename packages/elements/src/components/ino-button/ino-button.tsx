import {
  Component,
  ComponentInterface,
  Element,
  h,
  Host,
  Prop,
  Watch,
} from '@stencil/core';
import classNames from 'classnames';
import { hasSlotContent } from '../../util/component-utils';

import { ButtonType } from '../types';

export type Variants = 'filled' | 'outlined' | 'text';

/**
 * A button component with different styles and icon capability.
 * 
 * @slot icon-leading - For the icon to be prepended
 * @slot icon-trailing - For the icon to be appended
 */
@Component({
  tag: 'ino-button',
  styleUrl: 'ino-button.scss',
  shadow: false,
})
export class Button implements ComponentInterface {
  private buttonEl: HTMLButtonElement;

  @Element() el!: HTMLInoButtonElement;
  /**
   * Sets the autofocus for this element.
   */
  @Prop({ attribute: 'autofocus' }) autoFocus?: boolean;

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
   * The button variant.
   *
   * * **filled**: Contain actions that are important for your application.
   * * **outlined**: Buttons with medium highlighting. They contain actions that are important but are not the main action in an app.
   * * **text**: Typically used for less prominent actions, including those in dialogs and cards.
   */
  @Prop() variant: Variants = 'filled';

  /**
   * Makes the button text and container slightly smaller.
   */
  @Prop() dense = false;

  /**
   * Shows an infinite loading spinner and prevents further clicks.
   */
  @Prop({ reflect: true }) loading?: boolean;

  private buttonSizeBeforeLoad: string | null = null;
  private buttonHeightBeforeLoad: string | null = null;

  @Watch('loading')
  loadingChanged(isLoading: boolean) {
    if (isLoading) {
      const buttonStyles = window.getComputedStyle(this.buttonEl);
      this.buttonSizeBeforeLoad = buttonStyles.width;
      this.buttonHeightBeforeLoad = buttonStyles.height;
    } else {
      this.buttonSizeBeforeLoad = null;
    }
  }

  componentDidUpdate() {
    if (this.loading && this.buttonSizeBeforeLoad) {
      this.buttonEl.style.setProperty('width', this.buttonSizeBeforeLoad);
      this.buttonEl.style.setProperty('height', this.buttonHeightBeforeLoad);
    }
  }

  private handleClick = (e: Event) => {
    if (this.disabled) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }

    // this button wants to specifically submit a form
    // see https://github.com/ionic-team/ionic/blob/master/core/src/components/button/button.tsx
    const form = this.el.closest('form');
    if (form) {
      e.preventDefault();

      const fakeButton = document.createElement('button');
      fakeButton.type = this.type;
      fakeButton.style.display = 'none';
      fakeButton.name = 'fake-button';
      form.appendChild(fakeButton);
      fakeButton.click();
      fakeButton.remove();
    }
  };

  render() {
    const hostClasses = classNames({
      'ino-button--loading': this.loading,
    });

    const leadingSlotHasContent = hasSlotContent(this.el, 'icon-leading');
    const trailingSlotHasContent = hasSlotContent(this.el, 'icon-trailing');

    const inoButtonClasses = classNames(
      'button',
      `button__variant--${this.variant}`,
      {
        'button__icon--leading': leadingSlotHasContent,
        'button__icon--trailing': trailingSlotHasContent,
        'button--dense': this.dense,
      },
    );

    const labelClasses = classNames('button__label', {
      'button__label--hide': this.loading,
    });

    return (
      <Host class={hostClasses} onClick={this.handleClick}>
        <button
          class={inoButtonClasses}
          autoFocus={this.autoFocus}
          disabled={this.disabled}
          name={this.name}
          type={this.type}
          form={this.form}
          ref={(el) => (this.buttonEl = el)}
        >
          {leadingSlotHasContent && (
            <span class="icon__wrapper">
              <slot name="icon-leading" />
            </span>
          )}
          <span class={labelClasses}>
            <slot></slot>
          </span>
          {this.loading && <ino-spinner height={20} width={20} type="circle" />}
          {trailingSlotHasContent && (
            <span class="icon__wrapper">
              <slot name="icon-trailing" />
            </span>
          )}
        </button>
      </Host>
    );
  }
}
