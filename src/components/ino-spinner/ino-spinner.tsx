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
      <div class="rect1"></div>,
      <div class="rect2"></div>,
      <div class="rect3"></div>,
      <div class="rect4"></div>,
      <div class="rect5"></div>,
    ];
  }

  private bounceTemplate() {
    return [
      <div class="double-bounce-1"></div>,
      <div class="double-bounce-2"></div>
    ];
  }

  private circleTemplate() {
    return [
      <div class="circle-1"></div>,
      <div class="circle-2"></div>,
      <div class="circle-3"></div>,
      <div class="circle-4"></div>,
      <div class="circle-5"></div>,
      <div class="circle-6"></div>,
      <div class="circle-7"></div>,
      <div class="circle-8"></div>,
      <div class="circle-9"></div>,
      <div class="circle-10"></div>,
      <div class="circle-11"></div>,
      <div class="circle-12"></div>
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
      <div class="spinner" style={{width: `${this.inoWidth}px`, height: `${this.inoHeight}px`}}>
        {spinnerTemplate}
      </div>
    );
  }
}
