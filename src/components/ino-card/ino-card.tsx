import { Component, Prop } from '@stencil/core';
import classnames from 'classnames';

@Component({
  tag: 'ino-card',
  styleUrl: 'ino-card.scss',
  shadow: false
})
export class Card {
  /**
   * Removes the shadow and displays a hairline outline instead.
   */
  @Prop() inoOutline?: boolean;

  /**
   * An optional title of this card.
   */
  @Prop() inoTitle?: string;

  /**
   * An optional subtitle of this card.
   */
  @Prop() inoSubtitle?: string;


  private mediaTemplate() {
    if (this.inoTitle || this.inoSubtitle) {
      return (
        <div class="header">
          {this.inoTitle && <div class="title">{this.inoTitle}</div>}
          {this.inoSubtitle && <div class="subtitle">{this.inoSubtitle}</div>}
        </div>
      );
    }
    return '';
  }

  render() {
    const cardClass = classnames(
      'composer',
      'mdc-card',
      {'mdc-card--outlined': this.inoOutline}
    );

    return (
      <div class={cardClass}>
        {this.mediaTemplate()}
        <div class="content"><slot /></div>
      </div>
    );
  }
}
