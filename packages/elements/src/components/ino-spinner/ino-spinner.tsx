import { Component, ComponentInterface, Host, Prop, h } from '@stencil/core';
import classNames from 'classnames';

import { ColorScheme, SpinnerType } from '../types';

@Component({
  tag: 'ino-spinner',
  styleUrl: 'ino-spinner.scss',
  shadow: false,
})
export class Spinner implements ComponentInterface {
  /**
   * The type of this spinner.
   * Possible values: `tile` (default), `bounce` or `circle`
   */
  @Prop() inoType: SpinnerType = 'tile';

  /**
   * The name of the color scheme which is used
   * to style the background and outline of this component.
   * Possible values: `primary` (default),  `secondary`,
   * `success`, `warning`, `error`, `light`, `dark`.
   */
  @Prop() inoColorScheme: ColorScheme = 'primary';

  /**
   * If true, the spinner is shown as modal over the current app page.
   */
  @Prop() inoModal: boolean = false;

  /**
   * The height of this spinner (default = 40)
   */
  @Prop() inoHeight: number = 40;

  /**
   * The width of this spinner (defaul = 40)
   */
  @Prop() inoWidth: number = 40;

  private tileTemplate() {
    return [
      <div class="ino-spinner__rect1" />,
      <div class="ino-spinner__rect2" />,
      <div class="ino-spinner__rect3" />,
      <div class="ino-spinner__rect4" />,
      <div class="ino-spinner__rect5" />,
    ];
  }

  private bounceTemplate() {
    return [
      <div class="ino-spinner__double-bounce-1" />,
      <div class="ino-spinner__double-bounce-2" />,
    ];
  }

  private circleTemplate() {
    return [
      <div class="ino-spinner__circle-1" />,
      <div class="ino-spinner__circle-2" />,
      <div class="ino-spinner__circle-3" />,
      <div class="ino-spinner__circle-4" />,
      <div class="ino-spinner__circle-5" />,
      <div class="ino-spinner__circle-6" />,
      <div class="ino-spinner__circle-7" />,
      <div class="ino-spinner__circle-8" />,
      <div class="ino-spinner__circle-9" />,
      <div class="ino-spinner__circle-10" />,
      <div class="ino-spinner__circle-11" />,
      <div class="ino-spinner__circle-12" />,
    ];
  }

  render() {
    const hostClasses = classNames(
      `ino-spinner--type-${this.inoType}`,
      `ino-spinner--color-scheme-${this.inoColorScheme}`,
      {
        'ino-spinner--modal': this.inoModal,
      }
    );

    let spinnerTemplate;
    if (this.inoType === 'tile') {
      spinnerTemplate = this.tileTemplate();
    } else if (this.inoType === 'bounce') {
      spinnerTemplate = this.bounceTemplate();
    } else if (this.inoType === 'circle') {
      spinnerTemplate = this.circleTemplate();
    }

    return (
      <Host class={hostClasses}>
        <div
          class="ino-spinner__composer"
          style={{ width: `${this.inoWidth}px`, height: `${this.inoHeight}px` }}
        >
          {spinnerTemplate}
        </div>
      </Host>
    );
  }
}
