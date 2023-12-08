import {
  Component,
  Element,
  Host,
  Prop,
  h,
  ComponentInterface,
} from '@stencil/core';
import classNames from 'classnames';

/**
 * @slot default - One or more `ino-img` with `imgListItem="true"`
 *
 * The ino-img-list component is used in combination with the ino-img component to display an array of images
 * in a grid-like format. It is based on the mdc-image-list component.
 */
@Component({
  tag: 'ino-img-list',
  styleUrl: 'ino-img-list.scss',
  shadow: false,
})
export class InoImgList implements ComponentInterface {
  @Element() el: HTMLInoImgListElement;

  /**
   * Enables the masonry image list variant, which allows the images to
   * be any combination of aspect ratios.
   */
  @Prop() masonry = false;

  /**
   * Encapsulates the label of all img-list-items within the image
   */
  @Prop() encloseLabel = false;

  componentDidLoad(): void {
    if (this.masonry) {
      const imgs = this.el.querySelectorAll(
        '.mdc-image-list__image-aspect-container',
      );
      imgs.forEach((img) => {
        img.classList.remove('mdc-image-list__image-aspect-container');
      });
    }
  }

  render() {
    const classes = classNames({
      'mdc-image-list': true,
      'mdc-image-list--masonry': this.masonry,
      'mdc-image-list--with-text-protection': this.encloseLabel,
    });

    return (
      <Host>
        <ul class={classes}>
          <slot />
        </ul>
      </Host>
    );
  }
}
