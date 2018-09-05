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

  /**
   * The name of the color scheme which is used
   * to style the background and outline of this component.
   * Possible values: `primary` (default),  `secondary`, `tertiary`,
   * `success`, `warning`, `error`, `light`, `dark`.
   */
  @Prop() inoColorScheme?: string;

  private mediaTemplate() {
    if (this.inoTitle || this.inoSubtitle) {
      return (
        <div class="ino-card__header">
          {this.inoTitle && <div class="ino-card__header-title">{this.inoTitle}</div>}
          {this.inoSubtitle && <div class="ino-card__header-subtitle">{this.inoSubtitle}</div>}
        </div>
      );
    }
    return '';
  }

  render() {
    const cardClass = classnames(
      'ino-card__composer',
      'mdc-card',
      {'mdc-card--outlined': this.inoOutline}
    );

    return (
      <div class={cardClass}>
        {this.mediaTemplate()}
        <div class="ino-card__content"><slot /></div>
      </div>
    );
  }
}
