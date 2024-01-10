import {
  Component,
  ComponentInterface,
  Element,
  Event,
  EventEmitter,
  Host,
  Method,
  Prop,
  Watch,
  h,
} from '@stencil/core';
import { CssClasses } from '../internal-types';
import { FormInputWithHelperText } from '../base/form-input/form-input-with-helper-text';
import { MDCTextFieldHelperText } from '@material/textfield';
import {
  helperTextTemplate,
  initHelperText,
  updateValidityOnErrorChanged,
} from '../base/form-input/helper-text';

/**
 * An input component for files. It functions as a wrapper around the native input capabilities having the [`type="file"`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file).
 *
 * This component replaces the native behaviour with a custom `ino-button` with logic.
 */
@Component({
  tag: 'ino-input-file',
  styleUrl: 'ino-input-file.scss',
})
export class InputFile implements FormInputWithHelperText, ComponentInterface {
  @Element() el!: HTMLInoInputFileElement;

  private static HELPER_COUNTER = 0;

  private static generateHelperTextId() {
    return `file-input-helper-text__${InputFile.HELPER_COUNTER++}`;
  }

  private input: HTMLInputElement;
  private mdcHelperText: MDCTextFieldHelperText;
  private uniqueHelperId = InputFile.generateHelperTextId();
  private eventListeners: [string, EventListener | EventListenerObject][] = [];

  get helperTextInstance() {
    return this.mdcHelperText;
  }

  get nativeElement() {
    return this.input;
  }

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
   * Displays the element as invalid if set to true.
   * This functionality might be useful if the input validation is (additionally) handled by the backend.
   */
  @Prop() error?: boolean;

  @Watch('error')
  onErrorChanged() {
    updateValidityOnErrorChanged(this);
  }

  /**
   * If true, an *optional* message is displayed if not required,
   * otherwise a * marker is displayed if required
   */
  @Prop() showLabelHint?: boolean;

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
   * The optional helper text.
   */
  @Prop() helperText?: string;

  /**
   * Displays the helper permanently.
   */
  @Prop() helperTextPersistent?: boolean;

  @Watch('helperTextPersistent')
  onHelperTextPeristentChanged(): void {
    this.mdcHelperText?.foundationForTextField.setPersistent(
      this.helperTextPersistent,
    );
  }

  /**
   * Styles the helper text as a validation message.
   */
  @Prop() helperTextValidation?: boolean;

  @Watch('helperTextValidation')
  onHelperValidationChanged(): void {
    this.mdcHelperText?.foundationForTextField.setValidation(
      this.helperTextValidation,
    );
  }

  /**
   * Sets focus on the native `input`.
   * Use this method instead of the global `input.focus()`.
   */
  @Method()
  async setFocus(): Promise<void> {
    this.input?.focus();
  }

  /**
   * Sets blur on the native `input`.
   * Use this method instead of the global `input.blur()`.
   */
  @Method()
  async setBlur() {
    this.input?.blur();
  }

  /**
   * Emits when the value changes.
   */
  @Event() changeFile!: EventEmitter<{
    e: any;
    files: File[];
  }>;

  componentDidLoad(): void {
    this.configureDragAndDrop();
    this.initHelperText();
    this.handleInputProps();
  }

  private handleInputProps(): void {
    this.onErrorChanged();
  }

  private initHelperText(): void {
    this.mdcHelperText = initHelperText(this.el);
    this.onHelperTextPeristentChanged();
    this.onHelperValidationChanged();
  }

  disconnectedCallback(): void {
    this.mdcHelperText.destroy();
    this.eventListeners.forEach((tuple) =>
      this.removeEventListeners(this.el, tuple[0], tuple[1]),
    );
  }

  private addEventListeners(
    el: HTMLElement,
    events: string,
    fn: EventListener | EventListenerObject,
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
        },
      );
      this.addEventListeners(this.el, 'dragover dragenter', () => {
        box.classList.add('ino-input-file__dnd-dragover');
      });
      this.addEventListeners(this.el, 'dragend dragleave drop', () =>
        box.classList.remove('ino-input-file__dnd-dragover'),
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
    fn: EventListener | EventListenerObject,
  ): void {
    events.split(' ').forEach((e) => el.removeEventListener(e, fn));
  }

  private selectFiles() {
    this.input.click();
  }

  render() {
    const classes: CssClasses = {
      'ino-input-file': true,
      'ino-input-file__composer': !this.dragAndDrop,
      'ino-input-file__dnd': this.dragAndDrop,
      'ino-input-file__dnd-disabled': this.dragAndDrop && this.disabled,
    };

    const labelClass: CssClasses = {
      'show-hint': this.showLabelHint && this.required,
    };

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
            <span class={labelClass}>{this.label}</span>
          </ino-button>
          <input
            ref={(input) => (this.input = input)}
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
        {helperTextTemplate(this.uniqueHelperId, this.helperText)}
      </Host>
    );
  }
}
