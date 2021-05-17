import {
  Component,
  ComponentInterface,
  Element,
  Host,
  Prop,
  State,
  Watch,
  h,
} from '@stencil/core';

import { ImageDecodingTypes } from '../types';
import classNames from 'classnames';

@Component({
  tag: 'ino-img',
  styleUrl: 'ino-img.scss',
  shadow: false,
})
export class Image implements ComponentInterface {
  private imageEl: HTMLImageElement;

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
   * Icon used for fallback image if image can not be loaded
   */
  @Prop() fallbackIcon: string = 'image_not_available';

  /**
   * Indicates that the image is a part of an image list component
   */
  @Prop() imgListItem: boolean = false;

  /**
   * Sets the label of the image. Note: Only works if image is part of
   * an ino-img-list component.
   */
  @Prop() label?: string;

  /**
   * The ratio width of this image (default = 1).
   * Use this attribute together with `ratio-height` to reserve a
   * space for the image during rendering and to prevent jumping contents.
   */
  @Prop() ratioWidth?: number = 1;
  @Watch('ratioWidth')
  inoRatioWidthChanged() {
    this.computeRatio();
  }

  /**
   * The ratio height for this image (default = 1).
   * Use this attribute together with `ratio-width` to reserve a
   * space for the image during rendering and to prevent jumping contents.
   */
  @Prop() ratioHeight?: number = 1;
  @Watch('ratioHeight')
  inoRatioHeightChanged() {
    this.computeRatio();
  }

  /**
   * If true, styles the image with rounded borders.
   */
  @Prop() rounded?: boolean;

  /**
   * State containing the composed ratio width for this image.
   */
  @State() composedRatioHeight?: string = '100%';

  componentWillLoad() {
    this.computeRatio();
    this.computeFixedDimensions();
  }

  componentDidLoad(): void {
    if (!this.imgListItem) {
      this.el.querySelector('div').style.paddingTop = this.composedRatioHeight;
    }
    this.imageEl.onerror = () => this.handleError();
  }

  private computeFixedDimensions() {
    if (!isNaN(this.height)) {
      this.el.style.height = `${this.height}px`;
    }
    if (!isNaN(this.width)) {
      this.el.style.width = `${this.width}px`;
    }
  }

  private computeRatio() {
    const ratio = (this.ratioHeight / this.ratioWidth) * 100;
    this.composedRatioHeight = `${ratio}%`;
  }

  private handleError() {
    this.imageEl.nextElementSibling.classList.add(
      'ino-img__fallback-icon--visible'
    );
  }

  render() {
    const hostClasses = classNames({
      'ino-img__rounded': this.rounded,
      'mdc-image-list__item': this.imgListItem,
    });

    const divClasses = classNames({
      'ino-img__composer': !this.imgListItem,
      'mdc-image-list__image-aspect-container': this.imgListItem,
    });

    const imgClasses = classNames({
      'ino-img__image': !this.imgListItem,
      'mdc-image-list__image': this.imgListItem,
    });

    return (
      <Host class={hostClasses}>
        <div class={divClasses}>
          <img
            class={imgClasses}
            alt={this.alt}
            decoding={this.decoding}
            ref={(ref) => (this.imageEl = ref)}
            sizes={this.sizes}
            src={this.src}
            srcset={this.srcset}
            usemap={this.usemap}
            height={!isNaN(this.height) ? this.height : undefined}
            width={!isNaN(this.width) ? this.width : undefined}
          />
          <div class="ino-img__fallback-icon">
            <ino-icon icon={this.fallbackIcon} />
          </div>
        </div>
        {this.imgListItem && (
          <div class="mdc-image-list__supporting">
            <span class="mdc-image-list__label">{this.label}</span>
          </div>
        )}
      </Host>
    );
  }
}
