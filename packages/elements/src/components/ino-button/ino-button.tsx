import { MDCRipple } from '@material/ripple';
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

import { ButtonType, SurfaceType } from '../types';

/**
 * @slot icon-leading - For the icon to be prepended
 * @slot icon-trailing - For the icon to be appended
 */
@Component({
  tag: 'ino-button',
  styleUrl: 'ino-button.scss',
  shadow: false,
})
export class Button implements ComponentInterface {
  /**
   * An internal instance of the material design button.
   */
  private button: MDCRipple;

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
   * The fill type of this element.
   * Possible values: `solid` (default), `outline`, `inverse`.
   */
  @Prop() fill?: SurfaceType = 'filled';

  /**
   * Makes the button text and container slightly smaller.
   */
  @Prop() dense?: boolean = false;

  /**
   * Shows an infinite loading spinner and prevents further clicks.
   */
  @Prop({ reflect: true }) loading?: boolean;

  private buttonSizeBeforeLoad: string;

  @Watch('loading')
  loadingChanged(isLoading: boolean) {
    if (isLoading) {
      const mdcLabel = this.el.shadowRoot.querySelector('.mdc-button__label');
      const labelStyles = window.getComputedStyle(mdcLabel);
      this.buttonSizeBeforeLoad = labelStyles.width;
    } else {
      this.buttonSizeBeforeLoad = undefined;
    }
  }

  componentDidUpdate() {
    if (this.loading && this.buttonSizeBeforeLoad) {
      const mdcLabel = this.el.shadowRoot.querySelector(
        '.mdc-button__label'
      ) as HTMLDivElement;
      mdcLabel.style.setProperty('width', this.buttonSizeBeforeLoad);
    }
  }

  componentDidLoad() {
    this.button = new MDCRipple(
      this.el.shadowRoot.querySelector('.mdc-button')
    );
  }

  disconnectedCallback() {
    this.button?.destroy();
  }

  private handleClick = (e: Event) => {
    if (this.disabled) {
      e.preventDefault();
      e.stopPropagation();
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
    const hostClasses = classNames(
      {
        'ino-button--loading': this.loading,
        'ino-button--dense': this.dense,
      },
    );

    const leadingSlotHasContent = hasSlotContent(this.el, 'icon-leading');
    const trailingSlotHasContent = hasSlotContent(this.el, 'icon-trailing');

    const inoButtonClasses = classNames(
      'button--base',
      `button--fill-${this.fill}`,
      { hasLeadingIcon: leadingSlotHasContent },
      { hasTrailingIcon: trailingSlotHasContent },
    )

    return (
      <Host class={hostClasses} onClick={this.handleClick}>
        <button
          class={inoButtonClasses}
          autoFocus={this.autoFocus}
          disabled={this.disabled}
          name={this.name}
          type={this.type}
          form={this.form}
         
        >
          {leadingSlotHasContent && (
            <span class="icon-wrapper">
              <slot name="icon-leading" />
            </span>
          )}
          <div>
            {this.loading ? (
              <ino-spinner height={20} width={20} type="circle" />
            ) : (
              <slot></slot>
            )}
          </div>
          {trailingSlotHasContent && (
            <span class="icon-wrapper">
              <slot name="icon-trailing" />
            </span>
          )}
        </button>
      </Host>
    );
  }
}
