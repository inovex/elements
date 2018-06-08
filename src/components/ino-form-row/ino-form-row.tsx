import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'ino-form-row',
  styleUrl: 'ino-form-row.scss',
  shadow: false
})
export class FormRow {
  /**
   * The label for this form row which describes the form element.
   */
  @Prop() inoLabel?: string;

  render() {
    return (
      <div class="composer">
        <div class="form-label">
          {this.inoLabel}
        </div>
        <div class="form-element"><slot /></div>
      </div>
    );
  }
}
