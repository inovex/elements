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

import { ButtonColorScheme, ButtonType, SurfaceType } from '../types';

/**
 * @slot icon-leading - For the icon to be prepended
 * @slot icon-trailing - For the icon to be appended
 */
@Component({
  tag: 'ino-button',
  styleUrl: 'ino-button.scss',
  shadow: true,
})
export class Button implements ComponentInterface {
  /**
   * An internal instance of the material design button.
   */
  private button: MDCRipple;

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
   * Possible values: `primary` (default),  `secondary`, `grey`, `white`.
   * `white` and `grey` can only be used in combination with the `outline` fill-option!
   */
  @Prop() colorScheme?: ButtonColorScheme = 'primary';

  /**
   * Styles the button to have the edge on the top-right instead of the top-left
   */
  @Prop() edgeMirrored? = false;

  /**
   * The fill type of this element.
   * Possible values: `solid` (default), `outline`, `inverse`.
   */
  @Prop() fill?: SurfaceType = 'solid';

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
        'ino-button--mirrored-edge': this.edgeMirrored,
        'ino-button--dense': this.dense,
      },
      `ino-button--fill-${this.fill}`,
      `ino-button--color-scheme-${this.colorScheme}`
    );

    const mdcClasses = classNames({
      'mdc-button': true,
      'mdc-button--unelevated':
        this.fill === 'solid' || this.fill === 'inverse',
      'mdc-button--outlined': this.fill === 'outline',
      'ino-button--dense': this.dense,
    });

    const leadingSlotHasContent = hasSlotContent(this.el, 'icon-leading');
    const trailingSlotHasContent = hasSlotContent(this.el, 'icon-trailing');

    return (
      <Host class={hostClasses} onClick={this.handleClick}>
        <button
          class={mdcClasses}
          autoFocus={this.autoFocus}
          disabled={this.disabled}
          name={this.name}
          type={this.type}
          form={this.form}
        >
          {leadingSlotHasContent && (
            <span class="mdc-button__icon">
              <slot name="icon-leading" />
            </span>
          )}
          <div class="mdc-button__label">
            {this.loading ? (
              <ino-spinner height={20} width={20} type="circle" />
            ) : (
              <slot></slot>
            )}
          </div>
          {trailingSlotHasContent && (
            <span class="mdc-button__icon">
              <slot name="icon-trailing" />
            </span>
          )}
        </button>
      </Host>
    );
  }
}
