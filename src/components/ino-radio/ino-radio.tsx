import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'ino-radio',
  styleUrl: 'ino-radio.scss',
  shadow: false
})
export class Radio {
  /**
   * Marks this element as checked.
   */
  @Prop() checked?: boolean;

  /**
   * Disables this element.
   */
  @Prop() disabled?: boolean;

  /**
   * The name of this element.
   */
  @Prop() name?: string;

  /**
   * The tabIndex of this element.
   */
  @Prop() tabIndex?: number;

  /**
   * The value of this element.
   */
  @Prop({mutable: true}) value?: string;

  render() {
    return (
      <label class={this.disabled ? 'disabled' : ''}>
        <input type="radio"
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
