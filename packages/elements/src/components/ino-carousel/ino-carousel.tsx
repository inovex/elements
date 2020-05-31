import { Component, ComponentInterface, Element, Host, Prop, Watch, h } from '@stencil/core';
import classNames from 'classnames';
import { Components } from '../../..';
import InoCarouselSlide = Components.InoCarouselSlide;

@Component({
  tag: 'ino-carousel',
  styleUrl: 'ino-carousel.scss',
  shadow: false
})
export class InoCarousel implements ComponentInterface{

  @Element() el: HTMLElement;
  private slides: InoCarouselSlide[];
  private currentSlide: number = 0;

  /**
   * Optional group value to manage the displayed slide
   */
  @Prop() value?: any;
  @Watch('value')
  valueChanged(newVal: any) {
    this.slides.forEach((slide) => {
      slide.selected = newVal === slide.value;
    });
  }

  /**
   * Sets the duration of the slide animation
   */
  @Prop() inoAnimationDuration: number = 500;

  /**
   * Enables autoplay which causes slides to be changed automatically
   */
  @Prop() inoAutoplay: boolean = false;

  /**
   * Disables the slide animation
   */
  @Prop() inoDisableAnimation: boolean = false;

  /**
   * Restarts playback from the first slide upon reaching the last slide
   */
  @Prop() inoInfinite: boolean = false;

  /**
   * Sets the intermission between two slides (Unit: ms)
   */
  @Prop() inoInterludeDuration: number = 5000;

  componentDidLoad(): void {
    this.slides = this.getSlides();
    if(this.slides.length > 0) {
      this.slides[this.currentSlide].selected = true;
    }
  }

  // required for autoplay
  private nextSlide = () => {
    if(this.slides.length > 0) {
      this.slides[this.currentSlide].selected = false;
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
      this.slides[this.currentSlide].selected = true;
    }
  };

  // required for autoplay
  private previousSlide = () => {
    if(this.slides.length > 0) {
      this.slides[this.currentSlide].selected = false;
      this.currentSlide = ((this.currentSlide - 1 % this.slides.length) + this.slides.length) % this.slides.length;
      this.slides[this.currentSlide].selected = true;
    }
  };

  private getSlides() {
    return Array.from(this.el.querySelectorAll('ino-carousel-slide')) as InoCarouselSlide[];
  };

  //TODO: use ino-icon-button for arrow buttons and slide navigation bar

  render() {
    const classes = classNames({
      'ino-carousel': true,
    });

    return (
      <Host
        value={this.value}
      >
        <div class={classes}>
          <div class="ino-carousel__container">
            <slot/>
          </div>
          <div class="ino-carousel__left-arrow">
            <ino-icon-button ino-icon="arrow_right" onClick={() => this.previousSlide()}/>
          </div>
          <div class="ino-carousel__right-arrow">
            <ino-icon-button ino-icon="arrow_right" onClick={() => this.nextSlide()}/>
          </div>
        </div>
      </Host>
    );
  }

}
