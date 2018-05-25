import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'ino-card',
  styleUrl: 'ino-card.scss',
  shadow: false
})
export class Card {
  /**
   * Styles this card as raised from other contents.
   */
  @Prop() inoRaised?: boolean;

  render() {
    return <slot />;
  }
}
