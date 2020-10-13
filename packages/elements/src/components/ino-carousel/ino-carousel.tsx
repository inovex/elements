import { Component, ComponentInterface, Element, Host, Prop, Watch, h } from '@stencil/core';
import classNames from 'classnames';


@Component({
  tag: 'ino-carousel',
  styleUrl: 'ino-carousel.scss',
  shadow: false
})
export class InoCarousel implements ComponentInterface {

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
    this.addAnimationToSlide(this.slides[this.currentSlide]); // adds the slide animation to the current slide
    this.selectSlide(newVal);
    this.addAnimationToSlide(this.slides[this.currentSlide]); // adds the slide animation to the new slide
  }

  /**
   * Enables autoplay which causes slides to be changed automatically
   */
  @Prop() inoAutoplay: boolean = false;
  @Watch('inoAutoplay')
  inoAutoplayChanged() {
    this.configureAutoplay();
  }

  /**
   * Enables the slide animation
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

  /**
   * adds a slide animation to the given slide
   * required to prevent the animation from playing when loading the component
   * @param slide carousel slide
   */
  private addAnimationToSlide = (slide: HTMLInoCarouselSlideElement) => {
    if (!this.inoAnimated) return;
    if (!slide.classList.contains('ino-carousel--animated')) {
      slide.classList.add('ino-carousel--animated');
    }
  };

  private configureSlides = () => {
    if (this.slides.length < 1) return;
    if (!this.selectSlide(this.value)) this.slides[this.currentSlide].classList.add('ino-carousel-slide--selected');
  };

  private selectSlide(value: number): boolean {
    let slideSelected = false;
    this.slides.forEach((slide) => {
      if (value === slide.value) {
        slide.classList.add('ino-carousel-slide--selected');
        this.currentSlide = this.slides.indexOf(slide);
        slideSelected = true;
      } else {
        slide.classList.remove('ino-carousel-slide--selected');
      }
    });
    return slideSelected;
  }

  private configureAutoplay = () => {
    if (this.slides.length < 1) return;
    if (this.inoAutoplay) {
      this.timer = setInterval(this.nextSlide, this.inoIntermission);
      return;
    }
    clearInterval(this.timer);
  };

  /**
   * Switches to the next slide
   * Required for autoplay to work
   */
  private nextSlide = () => {
    if (this.slides.length < 1) throw new Error('There are no slides to display');
    this.slides[this.currentSlide].classList.remove('ino-carousel-slide--selected');
    this.addAnimationToSlide(this.slides[this.currentSlide]); // adds the slide animation to current slide
    this.currentSlide = this.getNextSlide();
    this.addAnimationToSlide(this.slides[this.currentSlide]); // adds the slide animation to the new slide
    this.slides[this.currentSlide].classList.add('ino-carousel-slide--selected');
    this.slideCounter++;

    // disables the timer after all slides have been shown
    if (!this.inoInfinite && this.slideCounter >= this.slides.length) {
      this.slideCounter = 1;
      clearInterval(this.timer);
    }
  };

  private getSlides() {
    return Array.from(this.el.querySelectorAll('ino-carousel-slide')) as HTMLInoCarouselSlideElement[];
  };

  private mod = (a, b) => ((a % b) + b) % b;

  /**
   * determines the index of the next slide
   */
  private getNextSlide = () => this.inoReverse
    ? this.mod(this.currentSlide - 1, this.slides.length)
    : this.mod(this.currentSlide + 1, this.slides.length);

  render() {
    const classes = classNames({
      'ino-carousel': true,
      'ino-carousel--no-buttons': this.inoHideButtons
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
            <ino-icon-button ino-icon="arrow_left"/>
          </div>
          <div class="ino-carousel__right-arrow">
            <ino-icon-button ino-icon="arrow_right"/>
          </div>
        </div>
      </Host>
    );
  }

}
