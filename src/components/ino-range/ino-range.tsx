import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'ino-range',
  styleUrl: 'ino-range.scss',
  shadow: false
})
export class Range {
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
  @Prop() min?: number;

  /**
   * The max value of this element.
   */
  @Prop() max?: number;

  /**
   * The name of this element.
   */
  @Prop() name?: string;

  /**
   * The value of this element.
   */
  @Prop() value?: number;

  /**
   * Marks this element as required.
   */
  @Prop() required?: boolean;

  /**
   * The step size for this element (default =1)
   */
  @Prop() step?: number = 1;

  /**
   * The name of the color scheme of this component.
   * Possible values: `primary` (default), `secondary`, `tertiary`,
   * `success`, `warning`, `danger`.
   */
  @Prop() inoColorScheme?: string;


  render() {
    return (
      <div class="composer">
        <input type="range"
          autofocus={this.autofocus}
          disabled={this.disabled}
          min={this.min}
          max={this.max}
          name={this.name}
          required={this.required}
          value={this.value} />
      </div>
    );
  }
}
