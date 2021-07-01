import { Component, ComponentInterface, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'ino-header',
  styleUrl: 'ino-header.scss',
  shadow: true,
})
export class Header implements ComponentInterface {
  /**
   * The text of this header
   */
  @Prop() text!: string;

  render() {
    return (
      <Host>
        <div class="header-container">
          <p>{this.text}</p>
          <div class="header-separator">
            <div class="header-inner-box"></div>
          </div>
        </div>
      </Host>
    );
  }
}
