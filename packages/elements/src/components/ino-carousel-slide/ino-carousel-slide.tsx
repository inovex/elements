import { Component, Element, Host, Prop, h, ComponentInterface, Watch } from '@stencil/core';
import classNames from 'classnames';

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

  /**
   * Enables/Disables the slide animation
   */
  @Prop() inoAnimated: boolean = false;

  /**
   * Indicates whether the slide is selected or not
   */
  @Prop() inoSelected: boolean = false;
  @Watch('inoSelected')
  inoSelectedChanged() {
    if(this.inoAnimated && !this.el.classList.contains('ino-carousel-slide__animation')) {
      this.el.classList.add('ino-carousel-slide__animation');
    }
  }

  render() {
    const classes = classNames({
      'ino-carousel-slide--selected': this.inoSelected,
    });

    return (
      <Host class={classes}>
        <div style={{"background-image": `url(${this.src})`}}/>
      </Host>
    );
  }

}
