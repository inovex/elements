import { Component, Element, Prop, State, Watch } from '@stencil/core';

@Component({
  tag: 'ino-img',
  styleUrl: 'ino-img.scss',
  shadow: false
})
export class Image {
  @Element() el: HTMLElement;

  // Native pass-through properties

  @Prop() alt: string;
  @Prop() decoding: 'async' | 'auto' | 'sync';
  @Prop() height: number;
  @Prop() sizes: string;
  @Prop() src: string;
  @Prop() srcset: string;
  @Prop() width: number;
  @Prop() usemap: string;


  // Custom properties (prefixed)

  @Prop() inoRatioWidth = 1;
  @Prop() inoRatioHeight = 1;
  @Prop() inoRounded: boolean;


  // States

  @State() composedRatioHeight = '100%';


  // Watchers

  @Watch('width')
  handleWidthChange() {
    this.computeFixedDimensions();
  }
  @Watch('height')
  handleHeightChange() {
    this.computeFixedDimensions();
  }

  @Watch('inoRatioWidth')
  handleInoRatioWidthChange() {
    this.computeRatio();
  }
  @Watch('inoRatioHeight')
  handleInoRatioHeightChange() {
    this.computeRatio();
  }


  // Lifecyle methods

  componentWillLoad() {
    this.computeRatio();
    this.computeFixedDimensions();
  }

  // Private methods

  private computeFixedDimensions() {
    this.el.style.height = this.height ? `${this.height}px` : null;
    this.el.style.width = this.width ? `${this.width}px` : null;
  }

  private computeRatio() {
    const ratio = (this.inoRatioHeight / this.inoRatioWidth) * 100;
    this.composedRatioHeight = `${ratio}%`;
  }


  render() {
    return (
      <div class="composer" style={{'padding-top' : this.composedRatioHeight}}>
        <img alt={this.alt}
            decoding={this.decoding}
            height={this.height}
            sizes={this.sizes}
            src={this.src}
            srcset={this.srcset}
            usemap={this.usemap}
            width={this.width} />
      </div>
    );
  }
}
