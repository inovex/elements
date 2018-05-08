import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'ino-select',
  styleUrl: 'ino-select.scss',
  shadow: false
})
export class Select {

  // Native pass-through properties

  @Prop() autofocus: boolean;
  @Prop() disabled: boolean;
  @Prop() form: string;
  @Prop() multiple: boolean;
  @Prop() name: string;
  @Prop() required: boolean;
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
