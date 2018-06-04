import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'ino-select',
  styleUrl: 'ino-select.scss',
  shadow: false
})
export class Select {
  /**
   * Marks this element as autofocused.
   */
  @Prop() autofocus: boolean;

  /**
   * Disables this element.
   */
  @Prop() disabled: boolean;

  /**
   * The form this element belongs to.
   */
  @Prop() form: string;

  /**
   * If true, enables multiple select options.
   */
  @Prop() multiple: boolean;

  /**
   * The name of this element.
   */
  @Prop() name: string;

  /**
   * Marks this element as required.
   */
  @Prop() required: boolean;

  /**
   * The size of this element.
   */
  @Prop() size: number;

  render() {
    return (
      <div class="composer">
        <select
          autoFocus={this.autofocus}
          disabled={this.disabled}
          form={this.form}
          multiple={this.multiple}
          name={this.name}
          required={this.required}
          size={this.size}>

          <slot />
        </select>
        <ino-icon ino-icon="select-arrows"></ino-icon>
      </div>
    );
  }
}
