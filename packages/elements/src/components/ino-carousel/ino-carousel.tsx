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
  @Prop() value!: string | number;

  @Watch('value')
  valueChanged(newVal: string | number) {
    const nextSlide = this.allSlides.find(
      (slide: HTMLInoCarouselSlideElement) => slide.value === newVal
    );

    if (this.currentSlideEl) this.currentSlideEl.selected = false;

    nextSlide.selected = true;
    this.currentSlideEl = nextSlide;
    this.setupTimer();
  }

  /**
   * Emits the `value` of the slide that should be displayed after interaction or autoplay interval.
   */
  @Event() valueChange: EventEmitter<number | string>;

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
  @Prop() infinite = false;

  /**
   * Sets the intermission between two slides (Unit: ms)
   */
  @Prop() intermission = 5000;

  /**
   * Enables reverse playback of the slides
   */
  @Prop() reverse = false;

  @Watch('intermission')
  @Watch('reverse')
  onTimerPropsChange() {
    this.setupTimer();
  }

  componentDidLoad(): void {
    if (this.autoplay) this.setupTimer();

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
    this.timer = setInterval(
      () => this.emitNextSlide(this.reverse ? 'previous' : 'next'),
      this.intermission
    );
  }

  private emitNextSlide(direction: 'next' | 'previous' = 'next') {
    let nextSlide = (direction === 'next'
      ? this.currentSlideEl.nextElementSibling
      : this.currentSlideEl
          .previousElementSibling) as HTMLInoCarouselSlideElement;

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
      this.el.getElementsByTagName('ino-carousel-slide')
    );

    if (this.allSlides.length === 0)
      console.warn(
        'ino-carousel: No ino-carousel-slide elements have been found. Make sure to provide them via the default slot.'
      );
  };

  render() {
    const classes = classNames({
      'ino-carousel': true,
      'ino-carousel--no-buttons': this.hideButtons,
    });

    return (
      <Host value={this.value}>
        <div class={classes}>
          <div class="ino-carousel__container">
            <slot onSlotchange={this.onSlotChanged} />
          </div>
          {!this.hideButtons && (
            <div class="ino-carousel__left-arrow">
              <ino-icon-button
                icon="arrow_left"
                onClick={() => this.emitNextSlide('previous')}
              />
            </div>
          )}
          {!this.hideButtons && (
            <div class="ino-carousel__right-arrow">
              <ino-icon-button
                icon="arrow_right"
                onClick={() => this.emitNextSlide('next')}
              />
            </div>
          )}
        </div>
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
      </Host>
    );
  }
}
