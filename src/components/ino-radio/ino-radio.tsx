import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'ino-radio',
  styleUrl: 'ino-radio.scss',
  shadow: false
})
export class Radio {

  // Native pass-through properties

  @Prop() checked: boolean;
  @Prop() disabled: boolean;
  @Prop() id: string;
  @Prop() name: string;
  @Prop() tabIndex: number;
  @Prop() value: string;


  private uniqueRadioId() {
    return this.id ? `ino-radio-id-${this.id}` : '';
  }

  render() {
    return (
      <label class={this.disabled ? 'disabled' : ''}>
        <input type="radio"
               id={this.uniqueRadioId()}
               checked={this.checked}
               disabled={this.disabled}
               name={this.name}
               tabindex={this.tabIndex}
               value={this.value} />
        <slot />
      </label>
    );
  }
}
