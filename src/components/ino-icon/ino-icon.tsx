import {
  Component,
  Event,
  EventEmitter,
  Prop,
  State,
  Watch
} from '@stencil/core';

/**
 * If you add new icons you also have to update the `icons.js` file beside that
 * ino-icon.tsx.
 *
 * You only have to do these simple steps:
 *
 * 1) Goto https://icomoon.io/
 * 2) Import the selection.json from `icon-assets`
 * 3) Select/add new icons you want to have in the collection
 * 4) Download the new asset and replace all file in `icon-assets`
 * 5) Update `icons.js` with the string of the icons you added
 * 6) Done! The consumer is now able to use the new icons
 */
// import ICONS from './icons';
import { getIconMap, getSrc, isSrc } from '../../util/icons';

@Component({
  tag: 'ino-icon',
  styleUrl: 'ino-icon.scss',
  assetsDir: 'icon-assets/SVG',
  shadow: false
})
export class Icon {
  /**
   * The name of the icon of this element or an URL.
   */
  @Prop() inoIcon?: string;
  @Watch('inoIcon')
  inoIconChanged() {
    this.loadIcon();
  }

  /**
   * Makes the icon clickable and allows to listen to the `clickEl` event.
   */
  @Prop() inoClickable?: boolean;

  /**
   * The resource url of the svg icons (global variable by stencil).
   *
   */
  @Prop({ context: 'resourcesUrl' }) resourcesUrl!: string;

  /**
   * Specifies the exact `src` of an SVG file to use.
   */
  @Prop() src?: string;
  /**
   * Event that emits as soon as the user clicks on the icon.
   * The event only emits if the property `inoClickable` is true.
   */
  @Event() clickEl!: EventEmitter;

  /**
   * The svg content loaded dynamically.
   */
  @State() svgContent?: string;

  componentWillLoad() {
    this.loadIcon();
  }

  private loadIcon() {
    const url = this.getUrl();
    if (url) {
      requestSVG(url).then(res => (this.svgContent = res || ''));
    } else {
      console.error('icon was not resolved');
    }
  }
  private getName() {
    if (this.inoIcon && !isSrc(this.inoIcon)) {
      return this.inoIcon;
    }
    return undefined;
  }
  private getUrl() {
    let url = getSrc(this.src);

    if (url) {
      return url;
    }
    url = this.getName();
    if (url) {
      return this.getNamedUrl(url);
    }

    url = getSrc(this.inoIcon);
    if (url) {
      return url;
    }

    return null;
  }

  private getNamedUrl(name: string) {
    const url = getIconMap().get(name);
    if (url) {
      return url;
    }
    return `${this.resourcesUrl}icon-assets/svg/${name}.svg`;
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
    return <i innerHTML={this.svgContent} {...iconProps} />;
  }
}

function parseIcon(svgContent: string | null): string {
  if (!svgContent) {
    return '';
  }

  const div = document.createElement('div');
  div.innerHTML = svgContent;

  // setup this way to ensure it works on IE
  for (let i = div.childNodes.length - 1; i >= 0; i--) {
    if (div.childNodes[i].nodeName.toLowerCase() !== 'svg') {
      div.removeChild(div.childNodes[i]);
    }
  }
  return div.innerHTML;
}

// Helper to load the SVG files effectively

const requests = new Map<string, Promise<string>>();
function requestSVG(url: string) {
  if (!requests.has(url)) {
    // we don't already have a request
    const req = fetch(url, { cache: 'force-cache' })
      .then(rsp => (rsp.ok ? rsp.text() : Promise.resolve(null)))
      .then(svgContent => parseIcon(svgContent));

    // cache for the same requests
    requests.set(url, req);
  }
  return requests.get(url) || Promise.resolve('');
}
