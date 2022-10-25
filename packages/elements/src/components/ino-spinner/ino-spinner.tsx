import { Component, ComponentInterface, Host, Prop, h } from '@stencil/core';
import classNames from 'classnames';

import { SpinnerType } from '../types';

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
  @Prop() type: SpinnerType = 'tile';

  /**
   * If true, the spinner is shown as modal over the current app page.
   */
  @Prop() modal = false;

  /**
   * The height of this spinner (default = 40)
   */
  @Prop() height = 40;

  /**
   * The width of this spinner (defaul = 40)
   */
  @Prop() width = 40;

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
      `ino-spinner--type-${this.type}`,
      {
        'ino-spinner--modal': this.modal,
      }
    );

    let spinnerTemplate;
    if (this.type === 'tile') {
      spinnerTemplate = this.tileTemplate();
    } else if (this.type === 'bounce') {
      spinnerTemplate = this.bounceTemplate();
    } else if (this.type === 'circle') {
      spinnerTemplate = this.circleTemplate();
    }

    return (
      <Host class={hostClasses}>
        <div
          class="ino-spinner__composer"
          style={{ width: `${this.width}px`, height: `${this.height}px` }}
        >
          {spinnerTemplate}
        </div>
      </Host>
    );
  }
}
