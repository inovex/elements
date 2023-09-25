import { Component, ComponentInterface, Prop, h, Element } from '@stencil/core';
import classNames from 'classnames';
import { hasSlotContent } from '../../util/component-utils';

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

  /**
   * Colors the border of the avatar in the secondary color.
   */
  @Prop() colorSecondary: boolean = false;

  renderAvatarBorder() {
    // manually created svg to support dashed borders, ass of 25.09.2023 Figma has issues exporting accurate Linear Gradients in SVGs.
    const gradientStopsPrimary = [
      { offset: '0', color: '#4655FF' },
      { offset: '1', color: '#d6def2' },
    ];
    const gradientStopsSecondary = [
      { offset: '0', color: '#4655FF' },
      { offset: '0.6', color: '#d6def2' },
      { offset: '1', color: '#d8e9d3' },
    ];

    const gradientStops = this.colorSecondary
      ? gradientStopsSecondary
      : gradientStopsPrimary;

    const isDashed = this.variant === 'dashed';

    let gradientAttributes = {};

    if (this.colorSecondary) {
      if (isDashed) {
        gradientAttributes = {
          x1: "17.51",
          y1: "17.72",
          x2: "102.55",
          y2: "102.77",
        };
      } else {
        gradientAttributes = {
          x1: "-361.68",
          y1: "-494.46",
          x2: "-241.41",
          y2: "-494.46",
          gradientTransform: "translate(-307.77 507.43) rotate(70.82)",
        };
      }
    } else {
      if (isDashed) {
        gradientAttributes = {
          x1: "60.14",
          y1: "0",
          x2: "60.14",
          y2: "120.27",
        };
      } else {
        gradientAttributes = {
          x1: "-80.14",
          y1: "-180.68",
          x2: "40.14",
          y2: "-180.68",
          gradientTransform: "translate(-120.54 80.14) rotate(90)",
        };
      }
    }

    return (
      <svg
        id="Ebene_2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 120.27 120.27"
        class="ino-avatar__border"
      >
        <defs>
          <style>
            {`.cls-1 { fill: none; stroke: url(#DynamicGradient); ${
              isDashed
                ? 'stroke-linecap: round; stroke-linejoin: round;'
                : 'stroke-miterlimit: 10;'
            } stroke-width: 3px; }`}
          </style>
          <linearGradient
            id="DynamicGradient"
            {...gradientAttributes}
            gradientUnits="userSpaceOnUse"
          >
            {gradientStops.map((stop) => (
              <stop offset={stop.offset} stop-color={stop.color} />
            ))}
          </linearGradient>
        </defs>
        <g id="Ebene_1-2">
          {isDashed ? (
            <path
              class="cls-1"
              d="m2.25,69.52c-.49-3.06-.75-6.19-.75-9.38,0-32.38,26.25-58.64,58.64-58.64,12.14,0,23.43,3.69,32.78,10.01M12.52,94.37c4.73,6.56,10.78,12.11,17.76,16.25m12.08,5.42c5.6,1.78,11.57,2.74,17.76,2.74,32.38,0,58.64-26.25,58.64-58.64,0-14.04-4.93-26.93-13.16-37.02"
            />
          ) : (
            <circle class="cls-1" cx="60.14" cy="60.14" r="58.64" />
          )}
        </g>
      </svg>
    );
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
      <div class={avatarClasses}>
        {avatarBorder}
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
        {hasIconSlot && (
          <span class="ino-avatar__icon-slot">
            <slot name={'icon-slot'}></slot>
          </span>
        )}
      </div>
    );
  }
}
