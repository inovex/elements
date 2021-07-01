import {
  Component,
  ComponentInterface,
  Element,
  Host,
  Prop,
  Watch,
  h,
} from '@stencil/core';

import { generateUniqueId } from '../../util/component-utils';

/**
 * @slot default - One or more `ino-segment-button`
 */
@Component({
  tag: 'ino-segment-group',
  styleUrl: 'ino-segment-group.scss',
  shadow: true,
})
export class InoSegmentGroup implements ComponentInterface {
  private groupId: string = `ino-segment-group-id_${generateUniqueId()}`;

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
   * Initially updates the checked property of all segment-buttons
   * in the group according to the initial value of the group.
   */
  async componentDidLoad() {
    this.updateButtons();
  }

  private async getButtons() {
    return Array.from(this.el.querySelectorAll('ino-segment-button'));
  }

  /**
   * Updates the checked property of the segment-buttons in the group
   */
  private async updateButtons() {
    const buttons = await this.getButtons();

    for (const btn of buttons) {
      btn.checked = this.value === btn.value;
    }
  }

  render() {
    return (
      <Host id={this.groupId} name={this.name} value={this.value}>
        <slot></slot>
      </Host>
    );
  }
}
