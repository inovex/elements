import { Component, ComponentInterface, Element, Host, Prop, State, Watch, h } from '@stencil/core';

import { ImageDecodingTypes } from '../types';
import classNames from 'classnames';

@Component({
  tag: 'ino-img',
  styleUrl: 'ino-img.scss',
  shadow: false
})
export class Image implements ComponentInterface {
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
   * Indicates that the image is a part of an image list component
   */
  @Prop() inoImgListItem: boolean = false;

  /**
   * Sets the label of the image. Note: Only works if image is part of
   * an ino-img-list component.
   */
  @Prop() inoLabel?: string;

  /**
   * The ratio width of this image (default = 1).
   * Use this attribute together with `ino-ratio-height` to reserve a
   * space for the image during rendering and to prevent jumping contents.
   */
  @Prop() inoRatioWidth?: number = 1;
  @Watch('inoRatioWidth')
  inoRatioWidthChanged() {
    this.computeRatio();
  }

  /**
   * The ratio height for this image (default = 1).
   * Use this attribute together with `ino-ratio-width` to reserve a
   * space for the image during rendering and to prevent jumping contents.
   */
  @Prop() inoRatioHeight?: number = 1;
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
  @State() composedRatioHeight?: string = '100%';

  componentWillLoad() {
    this.computeRatio();
    this.computeFixedDimensions();
  }

  componentDidLoad(): void {
    if(!this.inoImgListItem) {
      this.el.querySelector('div').style.paddingTop = this.composedRatioHeight;
    }
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
    const hostClasses = classNames({
      "mdc-image-list__item": this.inoImgListItem
    });

    const divClasses = classNames({
      "ino-img__composer": !this.inoImgListItem,
      "mdc-image-list__image-aspect-container": this.inoImgListItem
    });

    const imgClasses = classNames({
      "ino-img__image": !this.inoImgListItem,
      "mdc-image-list__image": this.inoImgListItem
    });

    return (
      <Host class={hostClasses}>
        <div
          class={divClasses}
        >
          <img
            class={imgClasses}
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
        {this.inoImgListItem && (
          <div class="mdc-image-list__supporting">
            <span class="mdc-image-list__label">{this.inoLabel}</span>
          </div>
        )}
      </Host>
    );
  }
}
