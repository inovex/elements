import { Component, Host, Prop, h } from '@stencil/core';

/**
 * A wrapper component to be used for a group of ino-options. This component adds a non-selectable header before the options.
 *
 * Beyond that, if you encounter problems using React or Vue in conjunction with the `ino-select`, use this component as a wrapper around your `ino-option`. This way the virtual DOM will know when to update the `ino-select` and its children, which may otherwise not work properly if the options are added dynamically while deeply nested in the `ino-select'. For more information refer to [this issue](https://github.com/ionic-team/stencil/issues/2259).
 *
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
