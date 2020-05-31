import { Component, Element, Host, Prop, h, ComponentInterface } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'ino-carousel',
  styleUrl: 'ino-carousel.scss',
  shadow: false
})
export class InoCarousel implements ComponentInterface{

  @Element() el: HTMLElement;

  /**
   * Sets the current value of the carousel
   */
  @Prop() value: number;

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

  //TODO: use ino-icon-button for arrow buttons and slide navigation bar

  render() {
    const classes = classNames({
      'ino-carousel': true,
    });

    return (
      <Host>
        <div class={classes}>
          <div class="ino-carousel__container">
            <slot/>
          </div>
          <div class="ino-carousel__nav-bar">
            <ino-icon-button ino-icon="info"/>
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
