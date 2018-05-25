import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'ino-checkbox',
  styleUrl: 'ino-checkbox.scss',
  shadow: false
})
export class Checkbox {
  /**
   * Marks this element as checked.
   */
  @Prop() checked?: boolean;

  /**
   * Disables this element.
   */
  @Prop() disabled?: boolean;

  /**
   * The id of this element.
   */
  @Prop() id?: string;

  /**
   * The name of this element.
   */
  @Prop() name?: string;

  /**
   * Sets the tabIndex of this element.
   */
  @Prop() tabIndex?: number;

  /**
   * The value of this element.
   */
  @Prop() value?: string;



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
