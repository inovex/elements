import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'ino-checkbox',
  styleUrl: 'ino-checkbox.scss',
  shadow: false
})
export class Checkbox {

  // Native pass-through properties
  
  @Prop() checked: boolean;
  @Prop() disabled: boolean;
  @Prop() id: string; 
  @Prop() name: string;
  @Prop() tabIndex: number;
  @Prop() value: string;


  private uniqueCheckboxId() {
    return this.id ? `ino-checkbox-id-${this.id}` : '';
  }

  render() {
    return (
      <label class={this.disabled ? 'disabled' : ''}>
        <input type="checkbox" 
               id={this.uniqueCheckboxId()} 
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
