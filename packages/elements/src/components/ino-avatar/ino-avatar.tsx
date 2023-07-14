import { Component, ComponentInterface, Prop, h, Element } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'ino-avatar',
  styleUrl: 'ino-avatar.scss',
  shadow: false,
})
export class Avatar implements ComponentInterface {
  @Element() el: HTMLInoAccordionElement;

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
   * Can be 'dashed' or 'solid'.
   */
  @Prop() variant: 'dashed' | 'solid' = 'solid';

  render() {
    const avatarClasses = classNames({
      'ino-avatar': true,
      'ino-avatar--interactive': this.interactive,
      'ino-avatar--dashed': this.variant === 'dashed',
      'ino-avatar--solid': this.variant === 'solid',
    });

    return (
      <div class={avatarClasses}>
        {this.src ? (
          <div
            class="ino-avatar__image"
            style={{ backgroundImage: `url(${this.src})` }}
          ></div>
        ) : (
          <div class="ino-avatar__image">{this.initials}</div>
        )}
      </div>
    );
  }
}
