import {
  Component,
  ComponentInterface,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Prop,
  State,
  Watch,
} from '@stencil/core';
import classNames from 'classnames';

/**
 * @slot default - One or more `ino-carousel-slide`
 * The `ino-carousel` component works in combination with the `ino-carousel-slide` component
 * and can be used to display an array of images as a slide show. What is more,
 * it also features an autoplay property that allows the slides to be changed automatically.
 * Lastly, using the css variables described at the bottom of the page, you can easily customize
 * the dimensions of the component as well as the duration of the slide transition.
 */
@Component({
  tag: 'ino-carousel',
  styleUrl: 'ino-carousel.scss',
  shadow: false,
})
export class InoCarousel implements ComponentInterface {
  @Element() el: HTMLInoCarouselElement;
  private timer: NodeJS.Timeout;

  @State() allSlides: HTMLInoCarouselSlideElement[] = [];
  private currentSlideEl: HTMLInoCarouselSlideElement = null;

  /**
   * `value` of the slide that should be displayed.
   */
  @Prop() value!: string;

  @Watch('value')
  valueChanged(newVal: string | number) {
    const nextSlide = this.allSlides.find(
      (slide: HTMLInoCarouselSlideElement) => slide.value === newVal,
    );

    if (!nextSlide) {
      throw new Error(
        `<ino-carousel-slide> with value '${newVal}' could not be found in the children of <ino-carousel>`,
      );
    }

    if (this.currentSlideEl) this.currentSlideEl.selected = false;

    nextSlide.selected = true;
    this.currentSlideEl = nextSlide;

    this.setupTimer();
  }

  /**
   * Emits the `value` of the slide that should be displayed after interaction or autoplay interval.
   */
  @Event() valueChange: EventEmitter<string>;

  /**
   * Enables autoplay which causes slides to be changed automatically after `intermission` milliseconds.
   */
  @Prop() autoplay = false;

  /**
   * Hides the arrow buttons
   */
  @Prop() hideButtons = false;

  /**
   * Restarts playback from the first slide upon reaching the last slide
   */
  @Prop() infinite = true;

  /**
   * Sets the intermission between two slides (Unit: ms)
   */
  @Prop() intermission = 5000;

  /**
   * Enables reverse playback of the slides
   */
  @Prop() reverse = false;

  @Watch('autoplay')
  @Watch('intermission')
  @Watch('reverse')
  onTimerPropsChange() {
    this.setupTimer();
  }

  componentDidLoad(): void {
    this.setupTimer();

    this.onSlotChanged();

    if (this.value == null) {
      console.error('ino-carousel: A value is required.');
    } else {
      this.valueChanged(this.value);
    }
  }

  disconnectedCallback(): void {
    clearInterval(this.timer);
  }

  private setupTimer() {
    clearInterval(this.timer);

    if (!this.autoplay) return;
    this.timer = setInterval(
      () => this.emitNextSlide(this.reverse ? 'previous' : 'next'),
      this.intermission,
    );
  }

  private emitNextSlide(direction: 'next' | 'previous' = 'next') {
    let nextSlide = (
      direction === 'next'
        ? this.currentSlideEl.nextElementSibling
        : this.currentSlideEl.previousElementSibling
    ) as HTMLInoCarouselSlideElement;

    if (!this.infinite) {
      this.valueChange.emit(nextSlide?.value ?? this.currentSlideEl.value);
      return;
    }

    if (direction === 'previous') {
      nextSlide = nextSlide ?? this.allSlides[this.allSlides.length - 1];
    } else {
      nextSlide = nextSlide ?? this.allSlides[0];
    }

    this.valueChange.emit(nextSlide.value);
  }

  private onSlotChanged = () => {
    this.allSlides = Array.from(
      this.el.getElementsByTagName('ino-carousel-slide'),
    );

    if (this.allSlides.length === 0)
      console.warn(
        'ino-carousel: No ino-carousel-slide elements have been found. Make sure to provide them via the default slot.',
      );
  };

  render() {
    return (
      <Host class="ino-carousel">
        <div class="ino-carousel__container">
          <div class="ino-carousel__slides">
            <slot onSlotchange={this.onSlotChanged} />
          </div>
          {!this.hideButtons && (
            <div class="ino-carousel__arrow ino-carousel__arrow--left">
              <ino-icon-button
                icon="arrow_left"
                onClick={() => this.emitNextSlide('previous')}
              />
            </div>
          )}
          {!this.hideButtons && (
            <div class="ino-carousel__arrow ino-carousel__arrow--right">
              <ino-icon-button
                icon="arrow_right"
                onClick={() => this.emitNextSlide('next')}
              />
            </div>
          )}
          <div class="ino-carousel__stepper">
            {this.allSlides.map((el) => (
              <div
                class={classNames({
                  'ino-carousel__stepper-dot': true,
                  'ino-carousel__stepper-dot--selected':
                    el === this.currentSlideEl,
                })}
                onClick={() => this.valueChange.emit(el.value)}
              />
            ))}
          </div>
        </div>
      </Host>
    );
  }
}
