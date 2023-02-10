import {
  Component,
  Element,
  Host,
  Prop,
  h,
  ComponentInterface,
} from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'ino-carousel-slide',
  styleUrl: 'ino-carousel-slide.scss',
  shadow: false,
})
export class InoCarouselSlide implements ComponentInterface {
  @Element() el: HTMLInoCarouselSlideElement;

  /**
   * Link to the image
   */
  @Prop() src: string;

  @Prop() selected: boolean;
  /**
   * Value of the slide
   */
  @Prop() value: any;

  render() {
    return (
      <Host class={classNames({
        'ino-carousel-slide': true,
        'ino-carousel-slide--selected': this.selected,
      })}>
        <div style={{ 'background-image': `url(${this.src})` }} />
      </Host>
    );
  }
}
