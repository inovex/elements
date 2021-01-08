import {
  Component,
  Element,
  Host,
  Prop,
  h,
  ComponentInterface,
} from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'ino-img-list',
  styleUrl: 'ino-img-list.scss',
  shadow: false,
})
export class InoImgList implements ComponentInterface {
  @Element() el: HTMLElement;

  /**
   * Enables the masonry image list variant, which allows the images to
   * be any combination of aspect ratios.
   */
  @Prop() inoMasonry: boolean = false;

  /**
   * Encapsulates the label of all img-list-items within the image
   */
  @Prop() inoEncloseLabel: boolean = false;

  componentDidLoad(): void {
    if (this.inoMasonry) {
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
      'mdc-image-list--masonry': this.inoMasonry,
      'mdc-image-list--with-text-protection': this.inoEncloseLabel,
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
