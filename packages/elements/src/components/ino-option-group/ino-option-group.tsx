import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'ino-option-group',
  styleUrl: 'ino-option-group.scss',
  shadow: false
})
export class InoOptionGroup {

  /**
   * Label of the group
   */
  @Prop() inoLabel!: string;

  render() {
    return (
      <Host>
        <ino-option id={'ino-opt-group-header'} value={this.inoLabel} disabled>
          {this.inoLabel}
        </ino-option>
        <slot></slot>
      </Host>
    );
  }

}
