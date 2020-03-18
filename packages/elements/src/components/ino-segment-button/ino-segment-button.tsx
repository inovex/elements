import { Component, ComponentInterface, Element, Event, EventEmitter, Host, Prop, h } from '@stencil/core';
import classNames from 'classnames';

import { generateUniqueId } from '../../util/component-utils';

import { CSS_CLASSES } from './constants';

@Component({
  tag: 'ino-segment-button',
  styleUrl: 'ino-segment-button.scss',
  shadow: false
})
export class InoSegmentButton implements ComponentInterface {
  private buttonId = `ino-segment-button-id_${generateUniqueId()}`;

  @Element() el!: HTMLElement;

  /**
   * Activates the button
   */
  @Prop() checked: boolean = false;

  /**
   * Disables the button
   */
  @Prop() disabled: boolean = false;

  /**
   * Slightly decreases the size of the button
   */
  @Prop() inoDense: boolean = false;

  /**
   * Name of the element
   */
  @Prop() name?: string;

  /**
   * Value of the element
   */
  @Prop() value?: string;

  /**
   * Emits if the user interacts with the button.
   * If the button is disabled or checked, the event will not be emitted.
   */
  @Event() checkedChange!: EventEmitter;

  private handleClick = (e: Event) => {
    if (!this.checked && !this.disabled) {
      this.checkedChange.emit(true);
    } else {
      e.preventDefault();
      e.stopPropagation();
    }
  }

  render() {
    const classes = classNames(
      CSS_CLASSES.MDC_BUTTON,
      CSS_CLASSES.OUTLINED,
      this.inoDense && CSS_CLASSES.DENSE,
      this.checked && CSS_CLASSES.INO_SEGMENT_BUTTON_ACTIVE
    );

    return (
      <Host
        checked={this.checked}
        onClick={this.handleClick}
      >
        <button
          class={classes}
          disabled={this.disabled}
          id={this.buttonId}
          name={this.name}
        >
          <div class="mdc-button__label">
            <slot></slot>
          </div>
        </button>
      </Host>
    );
  }

}
