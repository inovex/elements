import {
  Component,
  ComponentInterface,
  Event,
  EventEmitter,
  h,
  Host,
  Prop,
  State,
  Watch,
} from '@stencil/core';
import { SvgParser } from '../../util/svg-parser';
import { getSvgContent, inoiconContent } from './request';
import { getUrl } from './utils';

/**
 * A light icon component for texts and other components.
 * This component is based on the ionicons (https://github.com/ionic-team/ionicons)
 *
 * #### Additional Hints
 * The component inherits styles, such as the text size, from the parent element. For custom styles, use the css properties of the component.
 *
 * **Clickable icon:** Make an icon interactive with the optional attribute `clickable`. Clickable icons emit a `clickEl` event.
 *
 * #### Add icons
 * If you would like to add custom icons, you have to add the `.svg` file to the `src/assets/ino-icon` folder and run the `yarn integrate:icons` script which takes care of the rest.
 *
 * > **Note:** To use the provided icons in your consumer project, you need to copy all contents of
 * > `node_modules/@inovex.de/elements/dist/inovex-elements/ino-icon` into your `dist/ino-icon` folder. All icons are expected
 * > to be located in `ino-icon/` at runtime. Please refer to the Storybook documentation to get detailed instructions
 * > on how to integrate the icons with Angular, React or plain JavaScript.
 *
 * Alternatively, you can also just provide the URL to your preferred icon by setting the `src` property accordingly.
 */
@Component({
  tag: 'ino-icon',
  styleUrl: 'ino-icon.scss',
  shadow: true,
})
export class Icon implements ComponentInterface {
  /**
   * The name of the icon of this element or an URL.
   */
  @Prop() icon?: string;

  @Watch('icon')
  iconChanged() {
    this.loadIcon();
  }

  /**
   * Colors the icon in the global secondary color
   */
  @Prop() colorSecondary?: boolean;

  /**
   * Makes the icon clickable and allows to listen to the `clickEl` event.
   */
  @Prop() clickable?: boolean;

  /**
   * Specifies the exact `src` of an SVG file to use.
   */
  @Prop() src?: string;

  /**
   * Sets a meaningful svg title for assistive technologies.
   */
  @Prop() svgTitle?: string;

  /**
   * Event that emits as soon as the user clicks on the icon.
   * The event only emits if the property `inoClickable` is true.
   */
  @Event() clickEl!: EventEmitter;

  /**
   * The svg content loaded dynamically.
   */
  @State() svgContent?: string;

  @Watch('svgContent')
  watchHandler(content: string) {
    if (content) {
      this.svgContent = this.svgTitle
        ? SvgParser.setSvgTitle(this.svgContent, this.svgTitle)
        : SvgParser.removeSvgTitle(this.svgContent);
    }
  }

  componentWillLoad() {
    this.loadIcon();
  }

  private loadIcon() {
    const url = getUrl(this.src, this.icon);
    if (url) {
      if (inoiconContent.has(url)) {
        // sync if it's already loaded
        this.svgContent = inoiconContent.get(url);
      } else {
        // async if it hasn't been loaded
        getSvgContent(url).then(
          () => (this.svgContent = inoiconContent.get(url)),
        );
      }
    }
  }

  private handleClick(e: Event) {
    e.preventDefault();
    this.clickEl.emit(true);
  }

  private handleKeyPress(e: KeyboardEvent) {
    if (e.code === 'Enter') {
      e.preventDefault();
      this.clickEl.emit(true);
    }
  }

  render() {
    if (!this.svgContent) {
      return;
    }

    let iconProps = {};
    if (this.clickable) {
      iconProps = {
        onClick: (e) => this.handleClick(e),
        onKeyPress: (e) => this.handleKeyPress(e),
        tabindex: 0,
        role: 'button',
      };
    }

    return (
      <Host class={'ino-icon--color-scheme-primary'}>
        <i innerHTML={this.svgContent} {...iconProps} />
      </Host>
    );
  }
}
