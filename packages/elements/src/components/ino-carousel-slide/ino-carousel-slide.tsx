import { Component, Element, Host, Prop, h, ComponentInterface } from '@stencil/core';

@Component({
  tag: 'ino-carousel-slide',
  styleUrl: 'ino-carousel-slide.scss',
  shadow: false
})
export class InoCarouselSlide implements ComponentInterface{

  @Element() el: HTMLElement;

  /**
   * Link to the image
   */
  @Prop() src: string;

  /**
   * Value of the slide
   */
  @Prop() value: any;

  render() {
    return (
      <Host>
        <div style={{"background-image": `url(${this.src})`}}/>
      </Host>
    );
  }

}
