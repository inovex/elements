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
  @Prop() inoColorScheme?: ButtonColorScheme = 'primary';

  /**
   * Styles the button to have the edge on the top-right instead of the top-left
   */
  @Prop() inoEdgeMirrored? = false;

  /**
   * The fill type of this element.
   * Possible values: `solid` (default), `outline`, `inverse`.
   */
  @Prop() inoFill?: SurfaceType = 'solid';

  /**
   * Styles the button in 100% width.
   */
  @Prop() inoFullWidth? = false;

  /**
   * Makes the button text and container slightly smaller.
   */
  @Prop() inoDense?: boolean = false;

  /**
   * Shows an infinite loading spinner and prevents further clicks.
   */
  @Prop({ reflect: true }) inoLoading?: boolean;

  private buttonSizeBeforeLoad: string;

  @Watch('inoLoading')
  inoLoadingChanged(isLoading: boolean) {
    if (isLoading) {
      const mdcLabel = this.el.shadowRoot.querySelector('.mdc-button__label');
      const labelStyles = window.getComputedStyle(mdcLabel);
      this.buttonSizeBeforeLoad = labelStyles.width;
    } else {
      this.buttonSizeBeforeLoad = undefined;
    }
  }

  componentDidUpdate() {
    if (this.inoLoading && this.buttonSizeBeforeLoad) {
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
    const classButton = classNames({
      'mdc-button': true,
      'mdc-button--unelevated':
        this.inoFill === 'solid' || this.inoFill === 'inverse',
      'mdc-button--outlined': this.inoFill === 'outline',
      'ino-button--dense': this.inoDense,
    });

    const leadingSlotHasContent = hasSlotContent(this.el, 'ino-icon-leading');
    const trailingSlotHasContent = hasSlotContent(this.el, 'ino-icon-trailing');

    return (
      <Host
        onClick={this.handleClick}
        ino-fill={this.inoFill}
        ino-color-scheme={this.inoColorScheme}
      >
        <button
          class={classButton}
          autoFocus={this.autoFocus}
          disabled={this.disabled}
          name={this.name}
          type={this.type}
          form={this.form}
        >
          {leadingSlotHasContent && (
            <span class="mdc-button__icon">
              <slot name="ino-icon-leading" />
            </span>
          )}
          <div class="mdc-button__label">
            {this.inoLoading ? (
              <ino-spinner
                ino-height={20}
                ino-width={20}
                ino-type="circle"
              ></ino-spinner>
            ) : (
              <slot></slot>
            )}
          </div>
          {trailingSlotHasContent && (
            <span class="mdc-button__icon">
              <slot name="ino-icon-trailing" />
            </span>
          )}
        </button>
      </Host>
    );
  }
}
