import { Component, ComponentInterface, Event, EventEmitter, Host, Prop, State, Watch, h } from '@stencil/core';
import { getSvgContent, inoiconContent } from './request';
import { getUrl } from './utils';
import { SvgParser } from '../../util/svg-parser';

/**
 * This component is based on the ionicons (https://github.com/ionic-team/ionicons)
 */
@Component({
  tag: 'ino-icon',
  styleUrl: 'ino-icon.scss',
  assetsDirs: ['icon-assets/SVG'],
  shadow: true
})
export class Icon implements ComponentInterface {
  /**
   * The name of the icon of this element or an URL.
   */
  @Prop() inoIcon?: string;

  @Watch('inoIcon')
  inoIconChanged() {
    this.loadIcon();
  }

  /**
   * Colors the icon in the global secondary color
   */
  @Prop() inoColorSecondary?: boolean;

  /**
   * Makes the icon clickable and allows to listen to the `clickEl` event.
   */
  @Prop() inoClickable?: boolean;

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
    const url = getUrl(this.src, this.inoIcon);
    if (url) {
      if (inoiconContent.has(url)) {
        // sync if it's already loaded
        this.svgContent = inoiconContent.get(url);
      } else {
        // async if it hasn't been loaded
        getSvgContent(url).then(() => this.svgContent = inoiconContent.get(url));
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
    if (this.inoClickable) {
      iconProps = {
        onClick: e => this.handleClick(e),
        onKeyPress: e => this.handleKeyPress(e),
        tabindex: 0,
        role: 'button'
      };
    }

    return (
      <Host>
        <i innerHTML={this.svgContent} {...iconProps} />
      </Host>
    );
  }
}
