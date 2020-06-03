import { Component, ComponentInterface, Element, Host, Prop, Watch, h } from '@stencil/core';
import classNames from 'classnames';
import { Components } from '../../components';
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
  private timer: NodeJS.Timeout;

  /**
   * Optional group value to manually manage the displayed slide
   */
  @Prop() value?: any;
  @Watch('value')
  valueChanged(newVal: any) {
    this.slides.forEach((slide) => {
      slide.selected = newVal === slide.value;
      this.currentSlide = newVal;
    });
  }

  /**
   * Enables autoplay which causes slides to be changed automatically
   */
  @Prop() inoAutoplay: boolean = false;
  @Watch('inoAutoplay')
  inoAutoplayChanged(newVal: boolean) {
    if(newVal && this.slides.length > 0) {
      this.setupAutoplay();
    } else {
      clearInterval(this.timer);
    }
  }

  /**
   * Disables the slide animation
   */
  @Prop() inoDisableAnimation: boolean = false;

  /**
   * Restarts playback from the first slide upon reaching the last slide
   */
  @Prop() inoInfinite: boolean = true;

  /**
   * Sets the intermission between two slides (Unit: ms)
   */
  @Prop() inoInterludeDuration: number = 5000;

  /**
   * Plays the slides in reverse order
   */
  @Prop() inoReversePlayback: boolean = false;

  componentDidLoad(): void {
    this.slides = this.getSlides();
    if(this.slides.length > 0) {
      this.slides[this.currentSlide].selected = true;
      this.setupAutoplay();
    }
  }

  private setupAutoplay = () => {
    if(this.inoAutoplay && this.inoInterludeDuration) {
      this.timer = setInterval(this.previousSlide, this.inoInterludeDuration);
    } else if (this.inoAutoplay) {
      this.timer = setInterval(this.nextSlide, this.inoInterludeDuration);
    }
  };

  // required for autoplay
  private nextSlide = () => {
    if(this.slides.length > 0) {
      this.slides[this.currentSlide].selected = false;
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
      this.slides[this.currentSlide].selected = true;
    }
    if(!this.inoInfinite && this.currentSlide === this.slides.length -1) { // TODO: should play all slides once
      clearInterval(this.timer);
    }
  };

  // required for autoplay
  private previousSlide = () => {
    if(this.slides.length > 0) {
      this.slides[this.currentSlide].selected = false;
      this.currentSlide = ((this.currentSlide - 1 % this.slides.length) + this.slides.length) % this.slides.length;
      this.slides[this.currentSlide].selected = true;
    }
    if(!this.inoInfinite && this.currentSlide === 0) { // TODO: should play all slides once
      clearInterval(this.timer);
    }
  };

  private getSlides() {
    return Array.from(this.el.querySelectorAll('ino-carousel-slide')) as InoCarouselSlide[];
  };


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
