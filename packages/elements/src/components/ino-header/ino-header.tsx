import { Component, ComponentInterface, Host, Prop, h } from '@stencil/core';

/**
 * @slot default - The text to display
 */
@Component({
  tag: 'ino-header',
  styleUrl: 'ino-header.scss',
  shadow: true,
})
export class Header implements ComponentInterface {
  /**
   * [DEPRECATED] Please use the default slot instead of this prop.
   * @deprecated
   */
  @Prop() text?: string;

  componentDidLoad() {
    if (this.text) {
      console.warn('[ino-header] The attribute "text" is deprecated, please use the default slot instead.');
    }
  }

  render() {
    return (
      <Host>
        <div class="header-container">
          <p>{ this.text ? this.text : <slot /> }</p>
          <div class="header-separator">
            <div class="header-inner-box"></div>
          </div>
        </div>
      </Host>
    );
  }
}
