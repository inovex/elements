import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'ino-carousel-slide',
  styleUrl: 'ino-carousel-slide.scss',
  shadow: false
})
export class InoCarouselSlide {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
