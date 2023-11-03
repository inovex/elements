import {
  Component,
  ComponentInterface,
  Prop,
  h,
  Element,
  State,
  Watch,
} from '@stencil/core';
import classNames from 'classnames';
import { hasSlotContent } from '../../util/component-utils';
import primary from '../../assets/ino-avatar/primary.svg';
import secondary from '../../assets/ino-avatar/secondary.svg';
import primary_dashed from '../../assets/ino-avatar/primary_dashed.svg';
import secondary_dashed from '../../assets/ino-avatar/secondary_dashed.svg';

/**
 * @slot icon-slot - For the icon to be displayed in the avatar.
 */
@Component({
  tag: 'ino-avatar',
  styleUrl: 'ino-avatar.scss',
  shadow: false,
})
export class Avatar implements ComponentInterface {
  @Element() el: HTMLElement;

  /**
   * The alternative text of the avatar image.
   */
  @Prop() alt?: string = '';

  /**
   * The initials of the avatar. Will be shown if no `src` is defined or `img` fails to load.
   */
  @Prop() initials: string = '';

  /**
   * The img of the avatar.
   */
  @Prop() src: string = '';

  /**
   * Enables interactive visuals for the avatar by animating the border and a pointing cursor upon hovering the Element.
   */
  @Prop() interactive: boolean = false;

  /**
   * The style variant of the avatar.
   * Can be 'dashed' | 'solid'.
   */
  @Prop() variant: 'dashed' | 'solid' = 'solid';

  /**
   * Colors the border of the avatar in the secondary color.
   */
  @Prop() colorSecondary: boolean = false;

  /**
   * The aria-label used for the avatar element.
   * https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/img_role.
   */
  @Prop() a11yLabel?: string = '';
  /**
   * Overrides the avatar's loading animation behavior.
   * When set to true, the loading animation is displayed indefinitely.
   * When set to false, the avatar will not show any loading animations.
   *
   * By default, the loading animation will be shown only while the image is being fetched.
   */
  @Prop() loading?: boolean = false;

  @State() imgIsFetching: boolean = true;

  @Watch('showLoading')
  showLoadingHandler(newValue: boolean) {
    this.imgIsFetching = newValue;
  }

  handleImageLoad() {
    if (!this.loading) {
      this.imgIsFetching = false;
    }
  }

  renderAvatarBorder() {
    const isDashed = this.variant === 'dashed';
    const isSecondary = this.colorSecondary;

    // Select appropriate SVG based on variant and color
    let svgContent;
    if (isSecondary) {
      svgContent = isDashed ? secondary_dashed : secondary;
    } else {
      svgContent = isDashed ? primary_dashed : primary;
    }
    // Decode the base64 string, otherwise only the string value is displayed
    const decodedSvgContent = window.atob(svgContent.split(',')[1]);

    return <div class="ino-avatar__border" innerHTML={decodedSvgContent} />;
  }
  render() {
    const avatarClasses = classNames({
      'ino-avatar': true,
      'ino-avatar--interactive': this.interactive,
      'ino-avatar--dashed': this.variant === 'dashed',
      'ino-avatar--solid': this.variant === 'solid',
      'ino-avatar--loading': this.loading && this.imgIsFetching,
    });
    const hasIconSlot = hasSlotContent(this.el, 'icon-slot');

    const avatarBorder = this.renderAvatarBorder();

    return (
      <div
        class={avatarClasses}
        role="img"
        tabIndex={this.interactive ? 0 : null}
        aria-label={this.a11yLabel}
      >
        {avatarBorder}
        {this.src ? (
          <div class="ino-avatar__image image">
            {this.loading && this.imgIsFetching && (
              <div class="skeleton-loader"></div>
            )}
            <img
              class="ino-avatar__image-inner"
              src={this.src}
              alt={this.alt}
              onLoad={() => this.handleImageLoad()}
            />
          </div>
        ) : (
          <div class="ino-avatar__image initials">{this.initials}</div>
        )}
        {hasIconSlot && (
          <span class="ino-avatar__icon-slot">
            <slot name={'icon-slot'}></slot>
          </span>
        )}
      </div>
    );
  }
}
