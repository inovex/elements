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

  selectSVG() {
    const SOLID_SVG = (
      <svg
        id="Ebene_2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 120.27 120.27"
        class="ino-avatar__border"
      >
        <defs>
          <style>{`.cls-1{fill:none;stroke:url(#Unbenannter_Verlauf_10);stroke-miterlimit:10;stroke-width:3px;}`}</style>
          <linearGradient
            id="Unbenannter_Verlauf_10"
            x1="-80.14"
            y1="-180.68"
            x2="40.14"
            y2="-180.68"
            gradientTransform="translate(-120.54 80.14) rotate(90)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#4458a4" />
            <stop offset="1" stop-color="#d6def2" />
          </linearGradient>
        </defs>
        <g id="Ebene_1-2">
          <circle class="cls-1" cx="60.14" cy="60.14" r="58.64" />
        </g>
      </svg>
    );
    const DASHED_SVG = (
      <svg
        id="Ebene_2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 120.27 120.27"
        class="ino-avatar__border"
      >
        <defs>
          <style>{`.cls-1 { fill: none; stroke: url(#Unbenannter_Verlauf_56); stroke-linecap: round; stroke-linejoin: round; stroke-width: 3px; }`}</style>
          <linearGradient
            id="Unbenannter_Verlauf_56"
            x1="60.14"
            y1="120.27"
            x2="60.14"
            y2="0"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#d6def2" />
            <stop offset="1" stop-color="#4458a4" />
          </linearGradient>
        </defs>
        <g id="Ebene_1-2">
          <path
            class="cls-1"
            d="m2.25,69.52c-.49-3.06-.75-6.19-.75-9.38,0-32.38,26.25-58.64,58.64-58.64,12.14,0,23.43,3.69,32.78,10.01M12.52,94.37c4.73,6.56,10.78,12.11,17.76,16.25m12.08,5.42c5.6,1.78,11.57,2.74,17.76,2.74,32.38,0,58.64-26.25,58.64-58.64,0-14.04-4.93-26.93-13.16-37.02"
          />
        </g>
      </svg>
    );
    const SECONDARY_SOLID_SVG = (
      <svg
        id="Ebene_2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 120.3 120.3"
        class="ino-avatar__border"
      >
        <defs>
          <style>{`.cls-1 { fill: none; stroke: url(#Unbenannter_Verlauf_21); stroke-miterlimit: 10; stroke-width: 3px; }`}</style>
          <linearGradient
            id="Unbenannter_Verlauf_21"
            x1="-361.68"
            y1="-494.46"
            x2="-241.41"
            y2="-494.46"
            gradientTransform="translate(-307.77 507.43) rotate(70.82)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#4458a4" />
            <stop offset=".6" stop-color="#d6def2" />
            <stop offset="1" stop-color="#d8e9d3" />
          </linearGradient>
        </defs>
        <g id="Ebene_1-2">
          <circle class="cls-1" cx="60.15" cy="60.15" r="58.64" />
        </g>
      </svg>
    );
    const SECONDARY_DASHED_SVG = (
      <svg
        id="Ebene_2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 120.27 120.27"
        class="ino-avatar__border"
      >
        <defs>
          <style>{`.cls-1 { fill: none; stroke: url(#Unbenannter_Verlauf_66); stroke-linecap: round; stroke-linejoin: round; stroke-width: 3px; }`}</style>
          <linearGradient
            id="Unbenannter_Verlauf_66"
            x1="17.51"
            y1="17.72"
            x2="102.55"
            y2="102.77"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#5465ad" />
            <stop offset=".6" stop-color="#d6def2" />
            <stop offset="1" stop-color="#d8e9d3" />
          </linearGradient>
        </defs>
        <g id="Ebene_1-2">
          <path
            class="cls-1"
            d="m2.25,69.52c-.49-3.06-.75-6.19-.75-9.38,0-32.38,26.25-58.64,58.64-58.64,12.14,0,23.43,3.69,32.78,10.01M12.52,94.37c4.73,6.56,10.78,12.11,17.76,16.25m12.08,5.42c5.6,1.78,11.57,2.74,17.76,2.74,32.38,0,58.64-26.25,58.64-58.64,0-14.04-4.93-26.93-13.16-37.02"
          />
        </g>
      </svg>
    );

    let selectedSVG;
    if (this.variant === 'solid') {
      selectedSVG = this.colorSecondary ? SECONDARY_SOLID_SVG : SOLID_SVG;
    } else {
      selectedSVG = this.colorSecondary ? SECONDARY_DASHED_SVG : DASHED_SVG;
    }
    return selectedSVG;
  }

  render() {
    const avatarClasses = classNames({
      'ino-avatar': true,
      'ino-avatar--interactive': this.interactive,
      'ino-avatar--dashed': this.variant === 'dashed',
      'ino-avatar--solid': this.variant === 'solid',
    });

    const hasIconSlot = hasSlotContent(this.el, 'icon-slot');

    const selectedSVG = this.selectSVG();

    return (
      <div class={avatarClasses}>
        {selectedSVG}

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
