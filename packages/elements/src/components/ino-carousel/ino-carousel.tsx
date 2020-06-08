import { Component, ComponentInterface, Element, Host, Prop, Watch, h } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'ino-carousel',
  styleUrl: 'ino-carousel.scss',
  shadow: false
})
export class InoCarousel implements ComponentInterface{

  @Element() el: HTMLElement;
  private slides: HTMLInoCarouselSlideElement[];
  private currentSlide: number = 0;
  private slideCounter: number = 1;
  private timer: NodeJS.Timeout;

  /**
   * Optional group value to manually manage the displayed slide
   */
  @Prop() value?: any;
  @Watch('value')
  valueChanged(newVal: any) {
    this.slides.forEach((slide) => {
      slide.inoSelected = newVal === slide.value;
      if(slide.inoSelected) {
        this.currentSlide = this.slides.indexOf(slide);
      }
    });
  }

  /**
   * Enables autoplay which causes slides to be changed automatically
   */
  @Prop() inoAutoplay: boolean = false;

  /**
   * Disables the slide animation
   */
  @Prop() inoAnimated: boolean = false;

  /**
   * Hides the arrow buttons
   */
  @Prop() inoHideButtons: boolean = false;

  /**
   * Restarts playback from the first slide upon reaching the last slide
   */
  @Prop() inoInfinite: boolean = false;

  /**
   * Sets the intermission between two slides (Unit: ms)
   */
  @Prop() inoIntermission: number = 5000;

  /**
   * Enables reverse playback of the slides
   */
  @Prop() inoReverse: boolean = false;

  componentDidLoad(): void {
    this.slides = this.getSlides();
    this.configureSlides();
    this.configureAutoplay();
  }

  private configureSlides = () => {
    if (this.slides.length < 1) return;
    let slideSelected = false;
    this.slides.forEach((slide) => {
      slide.inoAnimated = this.inoAnimated;
      slide.inoSelected = this.value === slide.value;
      if(slide.inoSelected) {
        this.currentSlide = this.slides.indexOf(slide);
        slideSelected = true;
      }
    });
    if(!slideSelected) this.slides[this.currentSlide].inoSelected = true;
  };

  private configureAutoplay = () => {
    if (this.slides.length < 1) return;
    if (this.inoAutoplay) {
      this.timer = setInterval(this.nextSlide, this.inoIntermission);
      return;
    }
    clearInterval(this.timer);
  };

  // required for autoplay
  private nextSlide = () => {
    if (this.slides.length < 1) return;
    this.slides[this.currentSlide].inoSelected = false;
    this.currentSlide = this.inoReverse
      ? this.mod(this.currentSlide + 1, this.slides.length)
      : this.mod(this.currentSlide - 1 , this.slides.length);
    this.slides[this.currentSlide].inoSelected = true;
    this.slideCounter++;

    // disables the timer after all slides have been shown
    if(!this.inoInfinite && this.slideCounter >= this.slides.length) {
      this.slideCounter = 1;
      clearInterval(this.timer);
    }
  };

  private getSlides() {
    return Array.from(this.el.querySelectorAll('ino-carousel-slide')) as HTMLInoCarouselSlideElement[];
  };

  private mod = (a, b) => ((a % b) + b) % b;


  render() {
    const classes = classNames({
      'ino-carousel': true,
      'ino-carousel--no-buttons': this.inoHideButtons,
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
            <ino-icon-button ino-icon="arrow_right"/>
          </div>
          <div class="ino-carousel__right-arrow">
            <ino-icon-button ino-icon="arrow_right"/>
          </div>
        </div>
      </Host>
    );
  }

}
