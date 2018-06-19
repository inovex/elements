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

  /**
   * An indicator which marks the contents of the form row as mandatory.
   * If you use this make sure you also check for the values in your application logic.
   */
  @Prop() inoMandatory?: boolean;

  render() {
    return (
      <div class="composer">
        <div class="form-label">
          {this.inoLabel}{this.inoMandatory && <span>*</span>}
        </div>
        <div class="form-element"><slot /></div>
      </div>
    );
  }
}
