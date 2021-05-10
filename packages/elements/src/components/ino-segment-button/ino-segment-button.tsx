import {
  Component,
  ComponentInterface,
  Element,
  Event,
  EventEmitter,
  Host,
  Prop,
  h,
  Watch,
} from '@stencil/core';
import classNames from 'classnames';

import { generateUniqueId } from '../../util/component-utils';

@Component({
  tag: 'ino-segment-button',
  styleUrl: 'ino-segment-button.scss',
  shadow: true,
})
export class InoSegmentButton implements ComponentInterface {
  private buttonId = `ino-segment-button-id_${generateUniqueId()}`;
  private successor: Element;
  private belongsToGroup: boolean = false;

  @Element() el!: HTMLElement;

  /**
   * Activates the button
   */
  @Prop() checked: boolean = false;
  @Watch('checked')
  checkedChanged(newVal: boolean) {
    if (this.belongsToGroup && this.successor && !newVal) {
      this.enableBorder();
    }
  }

  /**
   * Disables the button
   */
  @Prop() disabled: boolean = false;

  /**
   * Slightly decreases the size of the button
   */
  @Prop() dense: boolean = false;

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

  componentWillRender(): Promise<void> | void {
    this.belongsToGroup = this.el.parentElement.tagName === 'INO-SEGMENT-GROUP';
    this.successor = this.el.nextElementSibling;

    // only adds the event listeners if the button belongs to a group and is not the last child of that particular group
    if (
      this.belongsToGroup &&
      this.successor &&
      !this.disabled &&
      this.successor.tagName === 'INO-SEGMENT-BUTTON'
    ) {
      this.el.addEventListener('mouseover', this.disableBorder);
      this.el.addEventListener('mouseleave', this.enableBorder);
      if (this.checked) {
        this.disableBorder();
      }
    }
  }

  /**
   * Disables the left border of the succeeding segment-button
   */
  private disableBorder = () => {
    const btn = this.successor.shadowRoot.querySelector('button');
    btn.style.borderLeft = 'none';
  };

  /**
   * Enables the left border of the succeeding segment-button
   */
  private enableBorder = () => {
    if (!this.checked) {
      const btn = this.successor.shadowRoot.querySelector('button');
      btn.style.borderLeft = '1px solid';
    }
  };

  private handleClick = (e: Event) => {
    if (!this.checked && !this.disabled) {
      this.checkedChange.emit(true);
    } else {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  render() {
    const hostClasses = classNames({
      'ino-segment-button--checked': this.checked,
      'ino-segment-button--disabled': this.disabled,
    });

    const buttonClasses = classNames({
      'mdc-button': true,
      'mdc-button--outlined': true,
      'ino-segment-button--dense': this.dense,
      'ino-segment-button--active': this.checked,
      'belongs-to-group': this.belongsToGroup,
    });

    return (
      <Host
        checked={this.checked}
        onClick={this.handleClick}
        class={hostClasses}
      >
        <button
          class={buttonClasses}
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
