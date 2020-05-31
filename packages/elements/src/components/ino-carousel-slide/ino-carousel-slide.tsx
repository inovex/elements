import { Component, Element, Host, Prop, h, ComponentInterface } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'ino-carousel-slide',
  styleUrl: 'ino-carousel-slide.scss',
  shadow: false
})
export class InoCarouselSlide implements ComponentInterface{

  @Element() el: HTMLElement;

  /**
   * Indicates whether the slide is selected or not
   */
  @Prop() selected: boolean = false;

  /**
   * Link to the image
   */
  @Prop() src: string;

  /**
   * Value of the slide
   */
  @Prop() value: any;

  componentDidLoad(): void {
  }

  render() {
    const classes = classNames({
      'ino-carousel-slide--selected': this.selected
    });

    return (
      <Host class={classes}>
        <div style={{"background-image": `url(${this.src})`}}/>
      </Host>
    );
  }

}
