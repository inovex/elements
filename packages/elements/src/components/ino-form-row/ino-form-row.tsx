import { Component, ComponentInterface, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'ino-form-row',
  styleUrl: 'ino-form-row.scss',
  shadow: false,
})
export class FormRow implements ComponentInterface {
  /**
   * The label for this form row which describes the form element.
   */
  @Prop() label?: string;

  /**
   * An indicator which marks the contents of the form row as mandatory.
   * If you use this make sure you also check for the values in your application logic.
   */
  @Prop() mandatory?: boolean;

  render() {
    return (
      <Host>
        <div class="ino-form-row__composer">
          <div class="ino-form-row__label">
            {this.label}
            {this.mandatory && <span>*</span>}
          </div>
          <div class="ino-form-row__element">
            <slot />
          </div>
        </div>
      </Host>
    );
  }
}
