import { Component, Prop, h, Host, Element, Method } from '@stencil/core';
import classNames from 'classnames';
import { MDCNotchedOutline } from '@material/notched-outline';
import { createMDCNotchedOutline } from './createMDCNotchedOutline';

/**
 * This is an internally used component for various sorts of inputs like `ino-input`, `ino-select` and `ino-textarea`. It is used to display the label for each respective component.
 */
@Component({
  tag: 'ino-label',
  styleUrl: 'ino-label.scss',
  shadow: false,
})
export class Label {
  @Element() el!: HTMLInoLabelElement;

  /**
   * An instance of the material design outline notch.
   */
  private mdcNotchedOutline?: MDCNotchedOutline;

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

  /**
   * Id of the associated form control
   */
  @Prop() for: string;

  /**
   * Returns internal mdcNotchedOutline instance
   */
  @Method()
  async getMdcNotchedOutlineInstance() {
    return this.mdcNotchedOutline;
  }

  componentDidUpdate() {
    if (this.outline && !this.mdcNotchedOutline) {
      this.mdcNotchedOutline = createMDCNotchedOutline(
        this.el.querySelector('.mdc-notched-outline'),
      );
    }
  }

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
      <label htmlFor={this.for} class={'mdc-floating-label'}>
        {this.text}
      </label>
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
