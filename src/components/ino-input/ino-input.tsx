import { Component, Prop, Event, EventEmitter, Element } from '@stencil/core';

@Component({
  tag: 'ino-input',
  styleUrl: 'ino-input.scss',
  shadow: true
})
export class Input {
  @Element() el: HTMLElement;

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

  //
  // Public events
  //
  @Event() change: EventEmitter;
  private handleKeyUp(e :any) {
    e.preventDefault();

    this.value = e.target.value;
    this.change.emit(this.value);
  }
  
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
        onKeyUp={ (event: KeyboardEvent) => this.handleKeyUp(event) }
      />
    ])
  }
}
