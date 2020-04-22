import { Component, ComponentInterface, Element, Event, EventEmitter, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'ino-input-file',
  styleUrl: 'ino-input-file.scss'
})
export class InputFile implements ComponentInterface {
  @Element() el!: HTMLElement;

  /**
   * The types of files accepted by the server.
   */
  @Prop() accept?: string;

  /**
   * The autofocus of this element.
   */
  @Prop({ attribute: 'autofocus' }) autoFocus?: boolean;

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
  @Prop() inoLabel?: string = 'Select file';

  /**
   * Emits when the value changes.
   */
  @Event() changeFile!: EventEmitter<{
    e: any;
    files: object[];
  }>;

  private selectFiles() {
    const input = this.el.querySelector(
      '.ino-input-file__native-element'
    ) as HTMLElement;
    input.click();
  }

  private onFileChange(e: Event) {
    const target = e.target as any;
    const files = target.files as FileList;
    this.changeFile.emit({ e, files: Array.from(files) });
  }

  render() {
    return (
      <Host>
        <div class="ino-input-file__composer">
          <ino-button
            class="ino-input-file__button"
            name="file-paths"
            ino-icon="upload"
            autoFocus={this.autoFocus}
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
          />
        </div>
      </Host>
    );
  }
}
