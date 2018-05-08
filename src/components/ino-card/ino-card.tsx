import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'ino-card',
  styleUrl: 'ino-card.scss',
  shadow: false
})
export class Card {

  // Custom properties (prefixed)

  @Prop() inoRaised: boolean;

  render() {
    return <slot />;
  }
}
