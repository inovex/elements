import { Component, Prop, h } from '@stencil/core';

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
   * The text of the label itself
   */
  @Prop() inoText: string;

  /**
   * Appends * to the label to make it appear as an required input in a form
   */
  @Prop() inoRequired?: boolean;

  /**
   * Shows a "optional" message, when not inoRequired;
   * Shows a * mark, when inoRequired
   */
  @Prop() inoShowHint?: boolean;

  /**
   * Colors the label in an light grey to indicate the disabled status for this element
   */
  @Prop() inoDisabled: boolean;

  render() {
    const label = this.inoText ? (
      <label class={'mdc-floating-label'}>{this.inoText}</label>
    ) : (
      ''
    );

    if (this.inoOutline) {
      return [
        <div class={'mdc-notched-outline'}>
          <div class="mdc-notched-outline__leading"/>
          <div class="mdc-notched-outline__notch">{label}</div>
          <div class="mdc-notched-outline__trailing"/>
        </div>
      ];
    }

    return [<div class="mdc-line-ripple"/>, label];
  }
}
