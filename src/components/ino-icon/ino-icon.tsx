import { Component, Prop, Event, EventEmitter, Element } from '@stencil/core';

@Component({
  tag: 'ino-icon',
  styleUrl: 'ino-icon.scss',
  shadow: true
})
export class Input {
  @Element() el: HTMLElement;

  @Prop() icon: string;

  //
  // Public events
  //
  @Event() change: EventEmitter;
  
  render() {
    return ([
      <span class="icon-wrapper">
        <svg class={`icon icon-${this.icon}`}>
          <use xlinkHref={`/assets/icons.svg#icon-${this.icon}`}></use>
        </svg>
      </span>
    ])
  }
}
