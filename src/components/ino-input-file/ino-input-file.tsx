import { Component, Element, Event, EventEmitter, Prop } from '@stencil/core';

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
   * Emits when the value changes.
   */
  @Event() valueChanges!: EventEmitter<{ e: Event, files: object[] }>;

  private selectFiles() {
    const input = this.el.querySelector('.ino-input-file__native-element') as HTMLElement;
    input.click();
  }

  private onFileChange(e: Event) {
    const target = e.target as any;
    const files = target.files as FileList;
    this.valueChanges.emit({ e, files: Array.from(files) });
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
            {this.inoLabel}
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
            onChange={e => this.onFileChange(e)}
          >
          </input>
        </div>
      );
  }
}
