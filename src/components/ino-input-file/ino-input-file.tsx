import { Component, Element, Prop, State } from '@stencil/core';

@Component({
    tag: 'ino-input-file',
    styleUrl: 'ino-input-file.scss'
})
export class InputFile {
  @Element() el!: HTMLElement;

  /**
   * The types of files accepted by the server.
   */
  @Prop() accept?: string;

  /**
   * The autofocus of this element.
   */
  @Prop() autofocus?: boolean;

  /**
   * Disables this element.
   */
  @Prop() disabled?: boolean;

  /**
   * Indicates whether the user can enter one or more values.
   */
  @Prop() multiple?: boolean;

  /**
   * The name of this input field.
   */
  @Prop() name?: string;

  /**
   * Marks this element as required.
   */
  @Prop() required?: boolean;

  /**
   * Sets the label of the select files button.
   */
  @Prop() inoLabel = 'Select file';

  /**
   * Sets the phrase of the select button when selecting multiple files.
   * Example: `selected` results in `x selected`.
   *
   * Only applicable if `multiple` is true.
   */
  @Prop() inoLabelSelected = 'selected';

  /**
   * State that holds the current label of the select button.
   */
  @State() stLabel!: string;

  componentDidLoad() {
    this.stLabel = this.inoLabel;
  }

  private selectFiles() {
    const input = this.el.querySelector('.ino-input-file__native-element') as HTMLElement;
    input.click();
  }

  private updateLabel(e: Event) {
    let fileName = '';
    const target = e.target as any;
    if (target.files && target.files.length > 1) {
      fileName = `${target.files.length} ${this.inoLabelSelected}`;
    } else if (target.files) {
      fileName = target.value.split('\\').pop();
    }

    this.stLabel = fileName ? fileName : this.inoLabel;
  }

  render() {
      return (
        <div class="ino-input-file__composer">
          <ino-button
            class="ino-input-file__button"
            name="file-paths"
            ino-icon="file_upload"
            autofocus={this.autofocus}
            disabled={this.disabled}
            onClick={_ => this.selectFiles()}
          >
            {this.stLabel}
          </ino-button>
          <input
            class="ino-input-file__native-element"
            accept={this.accept}
            disabled={this.disabled}
            multiple={this.multiple}
            name={this.name}
            required={this.required}
            type="file"
            aria-hidden="true"
            onChange={e => this.updateLabel(e)}
          >
          </input>
        </div>
      );
  }
}
