import { Component, Prop, Element } from '@stencil/core';

@Component({
  tag: 'ino-input',
  styleUrl: 'ino-input.scss',
  shadow: false
})
export class Input {
  @Element() el: HTMLElement;

  // Native pass-through properties

  @Prop() accesskey: string;
  @Prop() autocomplete: string;
  @Prop() autofocus: boolean; 
  @Prop() disabled: boolean;
  @Prop() min: string;
  @Prop() max: string;
  @Prop() name: string;
  @Prop() pattern: string;
  @Prop() placeholder: string;
  @Prop() required: boolean;
  @Prop() size: number;
  @Prop() tabindex: string;
  @Prop() type: string = 'text';
  @Prop({ mutable: true }) value: string;

  
  // Events
  // Notice: bubbles all native input-element events (change, keyup, ...)
  
  render() {
    return ([
      <input
        accessKey={this.accesskey}
        autocomplete={this.autocomplete}
        autofocus={this.autofocus}
        disabled={this.disabled}
        min={this.min}
        max={this.max}
        name={this.name}
        pattern={this.pattern}
        placeholder={this.placeholder}
        required={this.required}
        size={this.size}
        tabindex={this.tabindex}
        type={this.type}
        value={this.value}
      />
    ])
  }
}
