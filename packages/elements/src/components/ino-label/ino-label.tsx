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
  @Prop() outline: boolean;

  /**
   * The text of the label itself
   */
  @Prop() text: string;

  /**
   * Appends * to the label to make it appear as an required input in a form
   */
  @Prop() required?: boolean;

  /**
   * Shows a "optional" message, when not `required`;
   * Shows a * mark, when `required`
   */
  @Prop() showHint?: boolean;

  /**
   * Colors the label in an light grey to indicate the disabled status for this element
   */
  @Prop() disabled: boolean;

  private filledTemplate = (label: HTMLElement) => [
    <div class="mdc-line-ripple" />,
    label,
  ];

  private outlineTemplate = (label: HTMLElement) => (
    <div class="mdc-notched-outline">
      <div class="mdc-notched-outline__leading" />
      <div class="mdc-notched-outline__notch">{label}</div>
      <div class="mdc-notched-outline__trailing" />
    </div>
  );

  render() {
    const hostClasses = classNames({
      'ino-label--show-hint': this.showHint,
      'ino-label--outlined': this.outline,
      'ino-label--required': this.required,
      'ino-label--disabled': this.disabled,
    });

    const label = this.text ? (
      <label class={'mdc-floating-label'}>{this.text}</label>
    ) : (
      ''
    );

    return (
      <Host class={hostClasses}>
        {this.outline
          ? this.outlineTemplate(label)
          : this.filledTemplate(label)}
      </Host>
    );
  }
}
