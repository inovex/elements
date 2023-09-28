import { Component, ComponentInterface, Prop, h, Element } from '@stencil/core';
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
   * Flag to enable hover effect.
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
            <img class="ino-avatar__image-inner" src={this.src} alt={this.alt}/>
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
