import { Component, Element, Prop, State, Watch } from '@stencil/core';

import { ImageDecodingTypes } from '../types';

@Component({
  tag: 'ino-img',
  styleUrl: 'ino-img.scss',
  shadow: false
})
export class Image {
  @Element() el!: HTMLElement;

  /**
   * The alternative text of this image.
   */
  @Prop() alt?: string;

  /**
   * The decoding method of the native html input element.
   * Can either be `async`, `auto` or `sync`.
   */
  @Prop() decoding?: ImageDecodingTypes;

  /**
   * The fixed height of this image.
   */
  @Prop() height?: number;
  @Watch('height')
  heightChanged() {
    this.computeFixedDimensions();
  }

  /**
   * A set of rules to specify the usage of images sources that are
   * defined in the `srcset` attribute.
   */
  @Prop() sizes?: string;

  /**
   * The source of this image element.
   */
  @Prop() src?: string;

  /**
   * A set of sources of this image for different viewports or devices.
   */
  @Prop() srcset?: string;

  /**
   * The fixed of the image.
   */
  @Prop() width?: number;
  @Watch('width')
  widthChanged() {
    this.computeFixedDimensions();
  }

  /**
   * An ID referencing to a defined map element for this image.
   */
  @Prop() usemap?: string;

  /**
   * The ratio width of this image (default = 1).
   * Use this attribute together with `ino-ratio-height` to reserve a
   * space for the image during rendering and to prevent jumping contents.
   */
  @Prop() inoRatioWidth = 1;
  @Watch('inoRatioWidth')
  inoRatioWidthChanged() {
    this.computeRatio();
  }

  /**
   * The ratio height for this image (default = 1).
   * Use this attribute together with `ino-ratio-width` to reserve a
   * space for the image during rendering and to prevent jumping contents.
   */
  @Prop() inoRatioHeight = 1;
  @Watch('inoRatioHeight')
  inoRatioHeightChanged() {
    this.computeRatio();
  }

  /**
   * If true, styles the image with rounded borders.
   */
  @Prop() inoRounded?: boolean;

  /**
   * State containing the composed ratio width for this image.
   */
  @State() composedRatioHeight = '100%';

  componentWillLoad() {
    this.computeRatio();
    this.computeFixedDimensions();
  }

  private computeFixedDimensions() {
    this.el.style.height =
      this.height !== undefined ? `${this.height}px` : null;
    this.el.style.width = this.width !== undefined ? `${this.width}px` : null;
  }

  private computeRatio() {
    const ratio = (this.inoRatioHeight / this.inoRatioWidth) * 100;
    this.composedRatioHeight = `${ratio}%`;
  }

  render() {
    return (
      <div
        class="ino-img__composer"
        style={{ 'padding-top': this.composedRatioHeight }}
      >
        <img
          class="ino-img__image"
          alt={this.alt}
          decoding={this.decoding}
          height={this.height}
          sizes={this.sizes}
          src={this.src}
          srcset={this.srcset}
          usemap={this.usemap}
          width={this.width}
        />
      </div>
    );
  }
}
