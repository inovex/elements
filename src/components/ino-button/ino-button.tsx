import { Component, Prop, Element } from '@stencil/core';

@Component({
  tag: 'ino-button',
  styleUrl: 'ino-button.scss',
  shadow: false
})
export class Button {
  @Element() el: HTMLElement;

  // Native pass-through properties

  @Prop() autofocus: boolean;
  @Prop() disabled: boolean;
  @Prop() name: string;
  @Prop() form: string;
  @Prop() type: string;

  // Custom properties (prefixed)

  @Prop() inoSecondary: boolean;
  @Prop() inoIconLeft: string;
  @Prop() inoIconRight: string;


  // Events
  // Notice: bubbles all native button-element events (click, submit, reset, ...)


  render() {
    return ([
      <button 
        autoFocus={this.autofocus}
        disabled={this.disabled}  
        name={this.name}  
        class={this.inoSecondary && 'secondary'} 
        type={this.type}
        form={this.form}>
        
        {this.inoIconLeft && <ino-icon class="icon-left" icon={this.inoIconLeft}></ino-icon>}
        <slot />
        {this.inoIconRight && <ino-icon class="icon-right" icon={this.inoIconRight}></ino-icon>}
      </button>
    ])
  }
}
