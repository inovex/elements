import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'ino-input',
  styleUrl: 'ino-input.scss',
  shadow: false
})
export class Input {
  /**
   * The accesskey of this native element.
   */
  @Prop() accesskey?: string;

  /**
   * The autocomplete property of this element.
   */
  @Prop() autocomplete?: string;

  /**
   * The autofocus of this element.
   */
  @Prop() autofocus?: boolean;

  /**
   * Disables this element.
   */
  @Prop() disabled?: boolean;

  /**
   * The min value of this element.
   */
  @Prop() min?: string;

  /**
   * The max value of this element.
   */
  @Prop() max?: string;

  /**
   * The name of this element.
   */
  @Prop() name?: string;

  /**
   * The validation pattern of this element.
   */
  @Prop() pattern?: string;

  /**
   * The placeholder of this element.
   */
  @Prop() placeholder?: string;

  /**
   * Marks this element as required.
   */
  @Prop() required?: boolean;

  /**
   * The size of this element.
   */
  @Prop() size?: number;

  /**
   * The tabindex of this element.
   */
  @Prop() tabindex?: string;

  /**
   * The type of this element (default = text).
   */
  @Prop() type: string = 'text';

  /**
   * The value of this element.
   */
  @Prop({ mutable: true }) value: string;


  render() {
    return (
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
    );
  }
}
