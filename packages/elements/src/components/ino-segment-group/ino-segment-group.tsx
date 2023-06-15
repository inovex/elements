import {
  Component,
  ComponentInterface,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Listen,
  Prop,
  Watch,
} from '@stencil/core';

import { generateUniqueId } from '../../util/component-utils';

/**
 * @slot default - One or more `ino-segment-button`
 */
@Component({
  tag: 'ino-segment-group',
  styleUrl: 'ino-segment-group.scss',
  shadow: false,
})
export class InoSegmentGroup implements ComponentInterface {
  private groupId = `ino-segment-group-id_${generateUniqueId()}`;

  @Element() el: HTMLInoSegmentGroupElement;

  /**
   * Name of the segment group
   */
  @Prop() name?: string;

  /**
   * Value of the segment group
   */
  @Prop() value?: any;

  @Watch('value')
  async valueChanged() {
    await this.updateButtons();
  }

  /**
   * Forwards the `checkedChange` events of the `<ino-segment-buttons>` with its value as the detail.
   */
  @Event() valueChange!: EventEmitter<any>;

  @Listen('checkedChange')
  handleCheckedChange(ev: CustomEvent) {
    if ((ev.target as HTMLElement).tagName === 'INO-SEGMENT-BUTTON') {
      this.valueChange.emit((ev.target as HTMLInoSegmentButtonElement).value);
    }
  }

  /**
   * Initially updates the checked property of all segment-buttons
   * in the group according to the initial value of the group.
   */
  async componentDidLoad() {
    this.updateButtons();
  }

  /**
   * Updates the checked property of the segment-buttons in the group
   */
  private async updateButtons() {
    Array.from(this.el.querySelectorAll('ino-segment-button')).forEach(
      (button) => (button.checked = this.value === button.value)
    );
  }

  render() {
    return (
      <Host
        class="ino-segment-group"
        id={this.groupId}
        name={this.name}
        value={this.value}
      >
        <slot></slot>
      </Host>
    );
  }
}
