import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'ino-spinner',
  styleUrl: 'ino-spinner.scss',
  shadow: false
})
export class Spinner {
  /**
   * The type of this spinner (default = tile).
   * Possible values: `tile`, `bounce` or `circle`
   */
  @Prop() inoType: string = 'tile';

  /**
   * The name of the color scheme which is used
   * to style the background and outline of this component.
   * Possible values: `primary` (default),  `secondary`, `tertiary`,
   * `success`, `warning`, `error`, `light`, `dark`.
   */
  @Prop() inoColorScheme?: string;

  /**
   * The height of this spinner (default = 40)
   */
  @Prop() inoHeight: number = 40;

  /**
   * If true, the spinner is shown as modal over the current app page.
   */
  @Prop() inoModal?: boolean;

  /**
   * The width of this spinner (defaul = 40)
   */
  @Prop() inoWidth: number = 40;


  private tileTemplate() {
    return [
      <div class="ino-spinner__rect1"></div>,
      <div class="ino-spinner__rect2"></div>,
      <div class="ino-spinner__rect3"></div>,
      <div class="ino-spinner__rect4"></div>,
      <div class="ino-spinner__rect5"></div>,
    ];
  }

  private bounceTemplate() {
    return [
      <div class="ino-spinner__double-bounce-1"></div>,
      <div class="ino-spinner__double-bounce-2"></div>
    ];
  }

  private circleTemplate() {
    return [
      <div class="ino-spinner__circle-1"></div>,
      <div class="ino-spinner__circle-2"></div>,
      <div class="ino-spinner__circle-3"></div>,
      <div class="ino-spinner__circle-4"></div>,
      <div class="ino-spinner__circle-5"></div>,
      <div class="ino-spinner__circle-6"></div>,
      <div class="ino-spinner__circle-7"></div>,
      <div class="ino-spinner__circle-8"></div>,
      <div class="ino-spinner__circle-9"></div>,
      <div class="ino-spinner__circle-10"></div>,
      <div class="ino-spinner__circle-11"></div>,
      <div class="ino-spinner__circle-12"></div>
    ];
  }


  render() {
    let spinnerTemplate;
    if (this.inoType === 'tile') {
      spinnerTemplate = this.tileTemplate();
    } else if (this.inoType === 'bounce') {
      spinnerTemplate = this.bounceTemplate();
    } else if (this.inoType === 'circle') {
      spinnerTemplate = this.circleTemplate();
    }

    return (
      <div class="ino-spinner__composer" style={{width: `${this.inoWidth}px`, height: `${this.inoHeight}px`}}>
        {spinnerTemplate}
      </div>
    );
  }
}
