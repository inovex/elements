import { Component, Prop, State, Watch } from '@stencil/core';

@Component({
  tag: 'ino-icon',
  styleUrl: 'ino-icon.scss',
  assetsDir: 'icon-assets/SVG',
  shadow: false
})
export class Icon {
  /**
   * The name of the icon of this element.
   */
  @Prop() inoIcon: string;
  @Watch('inoIcon')
  inoIconChanged() {
    this.loadIcon();
  }

  /**
   * The resource url of the svg icons (global variable by stencil).
   */
  @Prop({ context: 'resourcesUrl' }) resourcesUrl!: string;

  /**
   * The svg content loaded dynamically.
   */
  @State() svgContent?: string;


  componentWillLoad() {
    this.loadIcon();
  }

  private loadIcon() {
    const url = `${this.resourcesUrl}icon-assets/SVG/${this.inoIcon}.svg`;
    requestSVG(url).then(res => this.svgContent = res);
  }

  render() {
    return this.svgContent && <div class="composer" innerHTML={this.svgContent}></div>;
  }
}

function parseIcon(svgContent: string) {
  if (!svgContent) {
    return;
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

const requests = new Map<string, Promise<string | null>>();
function requestSVG(url: string) {
  let req = requests.get(url);

  if (!req) {
    // we don't already have a request
    req = fetch(url, { cache: 'force-cache' })
      .then(rsp => rsp.ok ? rsp.text() : Promise.resolve(null))
      .then(svgContent => parseIcon(svgContent));

    // cache for the same requests
    requests.set(url, req);
  }

  return req;
}
