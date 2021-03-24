import { Component, Prop, h, Host } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'ino-label',
  styleUrl: 'ino-label.scss',
  shadow: false,
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

  filledTemplate = (label: HTMLElement) => [
    <div class="mdc-line-ripple" />,
    label,
  ];

  outlineTemplate = (label: HTMLElement) => (
    <div class={'mdc-notched-outline'}>
      <div class="mdc-notched-outline__leading" />
      <div class="mdc-notched-outline__notch">{label}</div>
      <div class="mdc-notched-outline__trailing" />
    </div>
  );

  render() {
    const hostClasses = classNames({
      'ino-label--show-hint': this.inoShowHint,
      'ino-label--outlined': this.inoOutline,
      'ino-label--required': this.inoRequired,
      'ino-label--disabled': this.inoDisabled,
    });

    const label = this.inoText ? (
      <label class={'mdc-floating-label'}>{this.inoText}</label>
    ) : (
      ''
    );

    return (
      <Host class={hostClasses}>
        {this.inoOutline
          ? this.outlineTemplate(label)
          : this.filledTemplate(label)}
      </Host>
    );
  }
}
