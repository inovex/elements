import { Component, Host, Prop, h } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'ino-option',
  styleUrl: 'ino-option.scss',
  shadow: false
})
export class InoOption {

  /**
   * Disables the option
   */
  @Prop() disabled?: boolean = false;

  /**
   * Selects the option
   */
  @Prop() selected?: boolean = false;

  /**
   * Value of the option
   */
  @Prop() value!: string;

  render() {
    const classSelect = classNames({
      'mdc-list-item': true,
      'mdc-list-item--disabled': this.disabled,
      'mdc-list-item--selected': this.selected
    });

    return (
      <Host>
        <li class={classSelect} data-value={this.value} aria-selected={this.selected}>
          <slot/>
        </li>
      </Host>
    );
  }

}
