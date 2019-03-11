import { Component, Element, Prop } from '@stencil/core';
import classnames from 'classnames';

import { CardAspectRatio, ColorScheme } from '../types';

@Component({
  tag: 'ino-card',
  styleUrl: 'ino-card.scss',
  shadow: false
})
export class Card {
  @Element() el!: HTMLElement;

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
   * Displays a media area with a custom `background-image` with `background-size: cover`
   */
  @Prop() inoImage?: string;

  /**
   * Automatically scales the media areas's height according to its width.
   * Possible values: `16-9` (default), `square`
   */
  @Prop() inoAspectRatio?: CardAspectRatio = '16-9';

  /**
   * Displays the card title inside the image
   */
  @Prop() inoMediaTitle = false;

  /**
   * The name of the color scheme which is used
   * to style the background and outline of this component.
   * Possible values: `primary` (default),  `secondary`, `tertiary`,
   * `success`, `warning`, `error`, `light`, `dark`.
   */
  @Prop() inoColorScheme?: ColorScheme = 'primary';

  private headerTemplate() {
    if (this.inoTitle || this.inoSubtitle) {
      return (
        <div class="ino-card__header">
          {this.inoTitle && (
            <div class="ino-card__header-title">{this.inoTitle}</div>
          )}
          {this.inoSubtitle && (
            <div class="ino-card__header-subtitle">{this.inoSubtitle}</div>
          )}
        </div>
      );
    }
    return '';
  }

  private mediaTeamplate() {
    const style = {
      backgroundImage: 'url(' + this.inoImage + ')'
    };

    const mediaClass = classnames('mdc-card__media', {
      'mdc-card__media--16-9': this.inoAspectRatio === '16-9',
      'mdc-card__media--square': this.inoAspectRatio === 'square'
    });

    if (this.inoImage) {
      return (
        <div class={mediaClass} style={style}>
          <div class="mdc-card__media-content">
            {this.inoMediaTitle && this.headerTemplate()}
          </div>
        </div>
      );
    }

    return '';
  }

  render() {
    const cardClass = classnames('mdc-card', {
      'mdc-card--outlined': this.inoOutline
    });

    const mdcCardActionsClass = classnames('mdc-card__actions');

    return (
      <div class={cardClass}>
        {this.mediaTeamplate()}
        <div class="ino-card__composer">
          {!this.inoMediaTitle && this.headerTemplate()}
          <div class="ino-card__content">
            <slot name="content" />
          </div>
        </div>
        <div class={mdcCardActionsClass}>
          <div class="mdc-card__action-buttons">
            <slot name="action-buttons" />
          </div>
          <div class="mdc-card__action-icons">
            <slot name="action-icons" />
          </div>
        </div>
      </div>
    );
  }
}
