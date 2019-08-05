import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'ino-label',
  styleUrl: 'ino-label.scss',
  shadow: false
})
export class Label {
  /**
   * Styles the label in an outlined style
   */
  @Prop() inoOutline: boolean;

  /**
   * The optional floating label of this input field.
   */
  @Prop() inoText: string;

  /**
   * Appends * to the label
   */
  @Prop() inoRequired: boolean;

  render() {
    const label = this.inoText ? (
      <label class={'mdc-floating-label'}>{this.inoText}</label>
    ) : (
      ''
    );

    if (this.inoOutline) {
      return [
        <div class={'mdc-notched-outline'}>
          <div class="mdc-notched-outline__leading" />
          <div class="mdc-notched-outline__notch">{label}</div>
          <div class="mdc-notched-outline__trailing" />
        </div>
      ];
    }

    return [<div class="mdc-line-ripple" />, label];
  }
}
