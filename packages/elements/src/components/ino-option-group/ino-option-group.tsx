import { Component, Host, Prop, h } from '@stencil/core';

/**
 * @slot default - One or more `ino-option`
 */
@Component({
  tag: 'ino-option-group',
  styleUrl: 'ino-option-group.scss',
  shadow: false,
})
export class InoOptionGroup {
  /**
   * Label of the group. If not set, this component serves as a wrapper component for dynamically added `ino-options`.
   * When using react and vue, an issue exists with slots and the virtual DOM. Read more about it [here](https://github.com/ionic-team/stencil/issues/2259).
   */
  @Prop() label?: string;

  render() {
    return (
      <Host>
        {this.label && (
          <ino-option id={'ino-opt-group-header'} value={this.label} disabled>
            {this.label}
          </ino-option>
        )}
        <slot></slot>
      </Host>
    );
  }
}
