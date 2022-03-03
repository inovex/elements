import {
  Component,
  ComponentInterface,
  Element,
  Event,
  EventEmitter,
  Host,
  Prop,
  h,
} from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'ino-input-file',
  styleUrl: 'ino-input-file.scss',
})
export class InputFile implements ComponentInterface {
  @Element() el!: HTMLInoInputFileElement;

  private eventListeners: [string, EventListener | EventListenerObject][] = [];

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
  @Prop() label?: string = 'Select file';

  /**
   * Enables drag-and-drop file input
   */
  @Prop() dragAndDrop?: boolean = false;

  /**
   * Sets the primary text of the drag and drop window
   */
  @Prop() dragAndDropText?: string = 'Drag your files here';

  /**
   * Sets the secondary text of the drag and drop window
   */
  @Prop() dragAndDropSecondaryText?: string = 'or';

  /**
   * Emits when the value changes.
   */
  @Event() changeFile!: EventEmitter<{
    e: any;
    files: File[];
  }>;

  componentDidLoad(): void {
    this.configureDragAndDrop();
  }

  disconnectedCallback(): void {
    this.eventListeners.forEach((tuple) =>
      this.removeEventListeners(this.el, tuple[0], tuple[1])
    );
  }

  private addEventListeners(
    el: HTMLElement,
    events: string,
    fn: EventListener | EventListenerObject
  ): void {
    this.eventListeners.push([events, fn]);
    events.split(' ').forEach((e) => {
      el.addEventListener(e, fn);
    });
  }

  private browserSupportsDragAndDrop(): boolean {
    return (
      'draggable' in this.el ||
      ('ondragstart' in this.el &&
        'ondrop' in this.el &&
        'FormData' in window &&
        'FileReader' in window)
    );
  }

  private configureDragAndDrop(): void {
    if (this.dragAndDrop && this.browserSupportsDragAndDrop()) {
      const box = this.el.querySelector('.ino-input-file__dnd');

      this.addEventListeners(
        this.el,
        'drag dragstart dragend dragover dragenter dragleave drop',
        (e) => {
          e.preventDefault();
          e.stopPropagation();
        }
      );
      this.addEventListeners(this.el, 'dragover dragenter', () => {
        box.classList.add('ino-input-file__dnd-dragover');
      });
      this.addEventListeners(this.el, 'dragend dragleave drop', () =>
        box.classList.remove('ino-input-file__dnd-dragover')
      );
      this.el.addEventListener('drop', (e: DragEvent) => {
        if (this.disabled) {
          return;
        }
        const files = e.dataTransfer.files;
        if (!this.multiple) {
          this.changeFile.emit({ e, files: Array.from(files).slice(0, 1) });
          return;
        }
        this.changeFile.emit({ e, files: Array.from(files) });
      });
    }
  }

  private onFileChange(e: Event) {
    const target = e.target as any;
    const files = target.files as FileList;
    this.changeFile.emit({ e, files: Array.from(files) });
  }

  private removeEventListeners(
    el: HTMLElement,
    events: string,
    fn: EventListener | EventListenerObject
  ): void {
    events.split(' ').forEach((e) => el.removeEventListener(e, fn));
  }

  private selectFiles() {
    const input = this.el.querySelector(
      '.ino-input-file__native-element'
    ) as HTMLElement;
    input.click();
  }

  render() {
    const classes = classNames({
      'ino-input-file__composer': !this.dragAndDrop,
      'ino-input-file__dnd': this.dragAndDrop,
      'ino-input-file__dnd-disabled': this.dragAndDrop && this.disabled,
    });

    return (
      <Host>
        <div class={classes}>
          {this.dragAndDrop && (
            <div class="ino-input-file__dnd-text">
              <label>{this.dragAndDropText}</label>
              <label>{this.dragAndDropSecondaryText}</label>
            </div>
          )}
          <ino-button
            class="ino-input-file__button"
            name="file-paths"
            autoFocus={this.autoFocus}
            disabled={this.disabled}
            onClick={() => this.selectFiles()}
            icon-leading
          >
            <ino-icon icon="upload" slot="icon-leading" />
            {this.label}
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
            onChange={(e) => this.onFileChange(e)}
          />
        </div>
      </Host>
    );
  }
}
