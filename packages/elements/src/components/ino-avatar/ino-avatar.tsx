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

    return <div class={avatarClasses}>{this.initials}</div>;
  }
}
