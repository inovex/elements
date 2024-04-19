import { Component, Element, Event, EventEmitter, h, Host, Listen, Prop } from '@stencil/core';
import classNames from 'classnames';

/**
 * An option component that can be used to add options to an ino-select component.
 *
 * @slot default - The text of the option
 */
@Component({
  tag: 'ino-option',
  styleUrl: 'ino-option.scss',
  shadow: false,
})
export class InoOption {
  @Element() el: HTMLInoOptionElement;

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

  /**
   * Emits on option click
   */
  @Event() clickEl: EventEmitter<HTMLInoOptionElement>;

  @Listen('click')
  clickHandler() {
    if (!this.disabled) {
      this.clickEl.emit(this.el);
    }
  }

  @Listen('keydown')
  keydownHandler(e) {
    if (this.disabled && (e.key === 'Enter' || e.key === ' ')) {
      e.stopPropagation();
      e.preventDefault();
    }
  }

  componentDidLoad() {
    if (this.value === undefined) console.error('[ino-option]: A value is required.');
  }

  render() {
    const classSelect = classNames({
      'mdc-deprecated-list-item': true,
      'mdc-deprecated-list-item--disabled': this.disabled,
      'mdc-deprecated-list-item--selected': this.selected,
    });

    return (
      <Host role="option">
        <li class={classSelect} data-value={this.value}>
          <span class="mdc-deprecated-list-item__text">
            <slot />
          </span>
        </li>
      </Host>
    );
  }
}
