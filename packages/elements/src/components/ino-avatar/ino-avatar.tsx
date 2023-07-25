import { Component, ComponentInterface, Prop, h, Element } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'ino-avatar',
  styleUrl: 'ino-avatar.scss',
  shadow: false,
})
export class Avatar implements ComponentInterface {
  @Element() el: HTMLElement;

  /**
   * The initials of the avatar.
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

  render() {
    const avatarClasses = classNames({
      'ino-avatar': true,
      'ino-avatar--interactive': this.interactive,
      'ino-avatar--dashed': this.variant === 'dashed',
      'ino-avatar--solid': this.variant === 'solid',
    });
    //TODO: replace SVG with correct gradient after figma issue has been resolved
    const SOLID_SVG = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="142"
        height="142"
        viewBox="0 0 142 142"
        fill="none"
        class="ino-avatar__border"
      >
        <circle
          cx="71"
          cy="71"
          r="69"
          stroke="url(#solidGradient)"
          stroke-width="3"
        />
        <defs>
          <radialGradient
            id="solidGradient"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(71 71) rotate(90) scale(69)"
          >
            <stop offset="0.499373" stop-color="#4655FF" />
            <stop offset="1" stop-color="#D6E0FF" />
          </radialGradient>
        </defs>
      </svg>
    );
    //TODO: replace SVG with correct gradient after figma issue has been resolved
    const DASHED_SVG = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="142"
        height="142"
        viewBox="0 0 142 142"
        fill="none"
        class="ino-avatar__border"
      >
        <path
          d="M2 71C2 32.8924 32.8924 2 71 2C87.0311 2 101.785 7.46709 113.5 16.6385M16 112.672C21.0788 119.364 27.3511 125.102 34.5 129.566M49 136.419C55.9095 138.741 63.3078 140 71 140C109.108 140 140 109.108 140 71C140 57.8079 136.298 45.4805 129.876 35"
          stroke="url(#dashedGradient)"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <defs>
          <radialGradient
            id="dashedGradient"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(71 71) rotate(90) scale(69)"
          >
            <stop offset="0.5" stop-color="#4655FF" />
            <stop offset="1" stop-color="#D6E0FF" />
          </radialGradient>
        </defs>
      </svg>
    );

    return (
      <div class={avatarClasses}>
        {this.variant === 'solid' ? SOLID_SVG : DASHED_SVG}
        {this.src ? (
          <div class="ino-avatar__image image">
            <div
              class="ino-avatar__image-inner"
              style={{ backgroundImage: `url(${this.src})` }}
            />
          </div>
        ) : (
          <div class="ino-avatar__image initials">{this.initials}</div>
        )}
      </div>
    );
  }
}
