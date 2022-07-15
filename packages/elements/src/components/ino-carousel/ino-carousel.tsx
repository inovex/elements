import {
  Component,
  ComponentInterface,
  Element,
  Host,
  Prop,
  Watch,
  h,
  Event,
  EventEmitter,
} from '@stencil/core';
import classNames from 'classnames';

enum ArrowDirections {
  LEFT,
  RIGHT,
}
/**
 * @slot default - One or more `ino-carousel-slide`
 */
@Component({
  tag: 'ino-carousel',
  styleUrl: 'ino-carousel.scss',
  shadow: false,
})
export class InoCarousel implements ComponentInterface {
  @Element() el: HTMLInoCarouselElement;
  private slides: HTMLInoCarouselSlideElement[];
  private currentSlide = 0;
  private slideCounter = 1;
  private timer: NodeJS.Timeout;

  /**
   * Optional group value to manually manage the displayed slide
   */
  @Prop() value?: string;
  @Watch('value')
  valueChanged(newVal: string) {
    this.addAnimationToSlide(this.slides[this.currentSlide]); // adds the slide animation to the current slide
    this.selectSlide(newVal);
    this.addAnimationToSlide(this.slides[this.currentSlide]); // adds the slide animation to the new slide
  }
  /**
   * Emits the `value` of the slide that should be displayed after the left or right arrow has been clicked.
   */
  @Event() valueChange: EventEmitter<number | string>;

  /**
   * Enables autoplay which causes slides to be changed automatically
   */
  @Prop() autoplay = false;
  @Watch('autoplay')
  autoplayChanged() {
    this.configureAutoplay();
  }

  /**
   * Enables the slide animation
   */
  @Prop() animated = false;

  /**
   * Hides the arrow buttons
   */
  @Prop() hideButtons = false;

  /**
   * Restarts playback from the first slide upon reaching the last slide
   */
  @Prop() infinite = false;

  /**
   * Sets the intermission between two slides (Unit: ms)
   */
  @Prop() intermission = 5000;

  /**
   * Enables reverse playback of the slides
   */
  @Prop() reverse = false;

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
    if (!this.animated) return;
    if (!slide.classList.contains('ino-carousel--animated')) {
      slide.classList.add('ino-carousel--animated');
    }
  };

  private configureSlides = () => {
    if (this.slides.length < 1) return;
    if (!this.selectSlide(this.value))
      this.slides[this.currentSlide].classList.add(
        'ino-carousel-slide--selected'
      );
  };

  private selectSlide(value: string): boolean {
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
    if (this.autoplay) {
      this.timer = setInterval(this.nextSlide, this.intermission);
      return;
    }
    clearInterval(this.timer);
  };

  /**
   * Switches to the next slide
   * Required for autoplay to work
   */
  private nextSlide = () => {
    if (this.slides.length < 1)
      throw new Error('There are no slides to display');
    this.slides[this.currentSlide].classList.remove(
      'ino-carousel-slide--selected'
    );
    this.addAnimationToSlide(this.slides[this.currentSlide]); // adds the slide animation to current slide
    this.currentSlide = this.getNextSlide();
    this.addAnimationToSlide(this.slides[this.currentSlide]); // adds the slide animation to the new slide
    this.slides[this.currentSlide].classList.add(
      'ino-carousel-slide--selected'
    );
    this.slideCounter++;

    // disables the timer after all slides have been shown
    if (!this.infinite && this.slideCounter >= this.slides.length) {
      this.slideCounter = 1;
      clearInterval(this.timer);
    }
  };

  private emitSlideChange(iconArrow: ArrowDirections): void {
    const allSlides = this.getSlides();
    
    if (!allSlides || allSlides.length === 0) return;
    
    const carouselSlide = this.getSlides()[this.currentSlide];

    if (!carouselSlide) {
      this.valueChange.emit(allSlides[0].value);
      return;
    }

    let nextSlide: HTMLInoCarouselSlideElement;
    switch (iconArrow) {
      case ArrowDirections.RIGHT:
        nextSlide =
          (carouselSlide.nextElementSibling as HTMLInoCarouselSlideElement) ??
          allSlides[0];
        break;
      case ArrowDirections.LEFT:
        nextSlide =
          (carouselSlide.previousElementSibling as HTMLInoCarouselSlideElement) ??
          allSlides[allSlides.length - 1];

        break;
    }
    this.valueChange.emit(nextSlide.value);
  }

  private getSlides() {
    return Array.from(
      this.el.querySelectorAll('ino-carousel-slide')
    ) as HTMLInoCarouselSlideElement[];
  }

  private mod = (a, b) => ((a % b) + b) % b;

  /**
   * determines the index of the next slide
   */
  private getNextSlide = () =>
    this.reverse
      ? this.mod(this.currentSlide - 1, this.slides.length)
      : this.mod(this.currentSlide + 1, this.slides.length);

  render() {
    const classes = classNames({
      'ino-carousel': true,
      'ino-carousel--no-buttons': this.hideButtons,
    });

    return (
      <Host value={this.value}>
        <div class={classes}>
          <div class="ino-carousel__container">
            <slot />
          </div>
          <div class="ino-carousel__left-arrow">
            <ino-icon-button
              icon="arrow_left"
              onClick={() => this.emitSlideChange(ArrowDirections.LEFT)}
            />
          </div>
          <div class="ino-carousel__right-arrow">
            <ino-icon-button
              icon="arrow_right"
              onClick={() => this.emitSlideChange(ArrowDirections.RIGHT)}
            />
          </div>
        </div>
      </Host>
    );
  }
}
