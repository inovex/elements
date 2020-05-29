import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'ino-carousel',
  styleUrl: 'ino-carousel.scss',
  shadow: false
})
export class InoCarousel {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
