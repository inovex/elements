import {
  Component,
  ComponentInterface,
  Event,
  EventEmitter,
  h,
  Prop,
  State,
  Watch,
} from '@stencil/core';
import { Editor } from '@tiptap/core';
import Link from '@tiptap/extension-link';
import StarterKit from '@tiptap/starter-kit';
import classNames from 'classnames';
import { InoInputCustomEvent } from '../..';
import { hasValue } from '../../util/helpers';
import { ViewMode, ViewModeUnion } from '../types';
import {
  Actions,
  getActiveLink,
  handleToolbarBtnClick,
  isToolbarBtnActive,
} from './editor-toolbar-helper';
import BulletList from './extensions/bullet_list';
import TaskItem from './extensions/task_item';
import TaskList from './extensions/task_list';
import markdownSerializer from './markdown-serializer';

/**
 * The **Preview Mode** supports following actions:
 *
 * | Actions ||||
 * |---|
 * | Link | Blockquotes | Unordered list / Bullet list | Headline 1 |
 * | Italic | Strikethrough | Ordered list / Numbered  list | Headline 2 |
 * | Bold | Inline code | Task list |
 *
 * Additionally, there are a lot of predefined
 * [keyboard shortcuts](https://tiptap.dev/api/keyboard-shortcuts#predefined-keyboard-shortcuts)
 * provided by the underlying [tiptap](https://tiptap.dev/) editor.
 *
 * The **Markdown Mode** supports all syntax of [CommonMark](https://commonmark.org/help/) with two exceptions:
 *
 *  * Support of strikethrough syntax (`~~TextToStrike~~`)
 *  * Support of task list syntax (`- [x] MyToDoTask`)
 *  * No support of image syntax. __Images are not allowed!__
 */
@Component({
  tag: 'ino-markdown-editor',
  styleUrl: 'ino-markdown-editor.scss',
  shadow: false,
})
export class MarkdownEditor implements ComponentInterface {
  private editorRef!: HTMLDivElement;
  private textareaRef: HTMLInoTextareaElement;

  private editor!: Editor;

  /**
   * Initial `string` value of the markdown editor.
   * Reassigning this value do not change the editor state.
   * The value must contain a valid Markdown syntax.
   */
  @Prop() initialValue: string;

  @Watch('initialValue')
  handleInitialValueChange(newInitialValue: string): void {
    this.initializeEditor(newInitialValue);
  }

  /**
   * Sets the view mode of the editor.
   * Can be changed between `preview` (default), `markdown` and `readonly`.
   * The `markdown` mode is made for advanced users that know the Markdown syntax.
   */
  @Prop() viewMode: ViewModeUnion = 'preview';

  @Watch('viewMode')
  handleViewModeChange(newViewMode: ViewMode): void {
    if (newViewMode === ViewMode.MARKDOWN && this.textareaRef) {
      this.textareaRef.value = this.htmlToMarkdown();
      this.textareaRef.rows = this.textareaRef.value.split('\n').length;
    } else {
      this.editor?.setEditable(newViewMode !== ViewMode.READONLY);
    }
  }

  @State() private toolbarActionsState: Set<Actions> = new Set<Actions>();
  @State() private errorMessage = '';
  @State() private showLinkDialog = false;
  @State() private currentURL = '';
  @State() private isCreationDialog = true;
  @State() private hasValueChanged = false;

  /**
   * Emits when one of the view mode buttons was clicked.
   * The value of type `ViewMode` can be found in `event.detail`
   */
  @Event() viewModeChange: EventEmitter<ViewModeUnion>;

  /**
   * Emits when the value of the markdown editor **blurs**.
   * The value of type `string` can be found in `event.detail`
   */
  @Event() valueChange: EventEmitter<string>;

  /**
   * Emits when the ino-markdown-editor is blurred
   */
  @Event({ bubbles: false }) inoBlur!: EventEmitter<void>;

  componentDidLoad(): void {
    this.createEditor();
    if (this.initialValue) {
      this.initializeEditor(this.initialValue);
    }
    this.textareaRef.addEventListener('valueChange', this.onTextareaChange);
    this.textareaRef.addEventListener('inoBlur', this.handleMarkdownBlur);
  }

  disconnectedCallback(): void {
    this.editor?.destroy();
    this.textareaRef.removeEventListener('valueChange', this.onTextareaChange);
    this.textareaRef.removeEventListener('inoBlur', this.handleMarkdownBlur);
  }

  private initializeEditor(initialValue: string): void {
    if (!this.editor) return;
    this.editor.commands.setContent(this.markdownToHtml(initialValue), true);
    this.textareaRef.value = this.htmlToMarkdown();
    this.textareaRef.rows = this.textareaRef.value.split('\n').length;
  }

  private createEditor(): void {
    this.editor = new Editor({
      element: this.editorRef,
      extensions: [
        StarterKit.configure({ bulletList: false }),
        BulletList,
        Link.extend({
          inclusive: false,
        }),
        TaskItem,
        TaskList,
      ],
      onBlur: this.handlePreviewBlur,
      onTransaction: this.onEditorTransaction,
      editable: this.viewMode !== ViewMode.READONLY,
    });
  }

  private handlePreviewBlur = (): void => {
    const markdownText = this.htmlToMarkdown();
    if (!this.errorMessage) this.valueChange.emit(markdownText);
    this.inoBlur.emit();
  };

  private onEditorTransaction = (): void => {
    this.toolbarActionsState = new Set<Actions>(
      Object.values(Actions).filter(
        (action) =>
          typeof action === 'number' && isToolbarBtnActive(this.editor, action)
      ) as Actions[]
    );
  };

  private onTextareaChange = (e: CustomEvent<string>): void => {
    e.stopPropagation();
    this.textareaRef.value = e.detail;
  };

  private handleMarkdownBlur = (e: CustomEvent<void>): void => {
    e.stopPropagation();
    this.editor.commands.clearContent();
    this.editor.commands.setContent(
      this.markdownToHtml(this.textareaRef.value)
    );
    if (!this.errorMessage) this.valueChange.emit(this.textareaRef.value);
    this.inoBlur.emit();
  };

  private htmlToMarkdown(): string {
    return this.tryParse(() => {
      const doc = this.editor.schema.nodeFromJSON(this.editor.getJSON());
      return markdownSerializer.serialize(doc);
    }, this.textareaRef.value);
  }

  private markdownToHtml(md: string = this.initialValue): string {
    return this.tryParse(
      () => markdownSerializer.parse(md),
      this.editor.getHTML()
    );
  }

  private tryParse<T>(parseCallback: () => T, fallbackValue: T): T {
    try {
      this.errorMessage = '';
      return parseCallback();
    } catch (err) {
      this.errorMessage = err.message;
      console.error(err);
      return fallbackValue;
    }
  }

  private handleViewModeBtnClick(viewMode: ViewMode): void {
    if (!this.errorMessage) this.viewModeChange.emit(viewMode);
  }

  private handleToolbarActionClick(action: Actions, url?: string): void {
    handleToolbarBtnClick(this.editor, action, url);
  }

  private handleDeleteLink(): void {
    this.handleToolbarActionClick(Actions.UNLINK);
    this.showLinkDialog = false;
  }

  private handleTextInputChange(e: InoInputCustomEvent<string>): void {
    this.currentURL = e.detail;
    this.hasValueChanged = true;
  }

  private handleLinkButtonClick(): void {
    const url = getActiveLink(this.editor);
    if (url) {
      this.currentURL = url;
      this.isCreationDialog = false;
    } else {
      this.currentURL = '';
      this.isCreationDialog = true;
    }

    this.hasValueChanged = false;
    this.showLinkDialog = true;
  }

  private submitLink(): void {
    this.handleToolbarActionClick(Actions.LINK, this.currentURL);
    this.showLinkDialog = false;
  }

  render() {
    const isReadonlyMode = this.viewMode === ViewMode.READONLY;
    const isPreviewMode = isReadonlyMode || this.viewMode === ViewMode.PREVIEW;
    const isMarkdownMode = this.viewMode === ViewMode.MARKDOWN;

    const editorClasses = classNames({
      'markdown-editor': true,
      'markdown-editor--readonly': isReadonlyMode,
    });

    const previewModeEditorClasses = classNames({
      'markdown-editor__content__container': true,
      'show-editor': isPreviewMode,
      'hide-editor': isMarkdownMode,
    });
    const markdownModeEditorClasses = classNames({
      'show-editor': isMarkdownMode,
      'hide-editor': isPreviewMode,
    });

    const getViewModeBtnClasses = (viewMode: ViewMode) =>
      classNames({
        'toolbar__action-button': true,
        'toolbar__view-mode': true,
        'toolbar__action-button--active': this.viewMode === viewMode,
      });

    const textFormatToolbarClasses = classNames({
      'toolbar__text-format': true,
      'toolbar__text-format--show': isPreviewMode,
      'toolbar__text-format--hide': isMarkdownMode,
    });

    const getToolbarActionBtnClass = (action: Actions) =>
      classNames({
        'toolbar__action-button': true,
        'toolbar__action-button--active': this.toolbarActionsState.has(action),
      });

    const editLinkDialog = (
      <ino-dialog
        id="link-dialog"
        open={this.showLinkDialog}
        attach-to=".markdown-editor__content"
        dismissible={true}
        headerText="Insert Link"
        onClose={() => (this.showLinkDialog = false)}
      >
        <section data-ino-dialog-section slot="body">
          <ino-input
            data-ino-dialog-input
            label="URL"
            type="text"
            required={true}
            // autoFocus={true} // doesn't work because MUI Dialog traps focus
            helper="Enter a valid URL"
            value={this.currentURL}
            onValueChange={(e) => this.handleTextInputChange(e)}
            placeholder="https://example.org"
          ></ino-input>
        </section>
        <section data-ino-dialog-section slot="footer">
          <ino-icon-button
            data-ino-dialog-delete
            icon="remove"
            disabled={this.isCreationDialog}
            onClick={() => this.handleDeleteLink()}
            type="reset"
          ></ino-icon-button>
          <ino-icon-button
            icon="add"
            disabled={!hasValue(this.currentURL) || !this.hasValueChanged}
            onClick={() => this.submitLink()}
            type="submit"
          ></ino-icon-button>
        </section>
      </ino-dialog>
    );

    return (
      <div class={editorClasses}>
        {this.showLinkDialog && editLinkDialog}
        <div class="markdown-editor__toolbar">
          <div>
            <button
              class={getViewModeBtnClasses(ViewMode.PREVIEW)}
              onClick={() => this.handleViewModeBtnClick(ViewMode.PREVIEW)}
            >
              <ino-icon icon="edit_text" />
            </button>
            <button
              class={getViewModeBtnClasses(ViewMode.MARKDOWN)}
              onClick={() => this.handleViewModeBtnClick(ViewMode.MARKDOWN)}
            >
              <ino-icon icon="code" />
            </button>
          </div>
          <div class={textFormatToolbarClasses}>
            <button
              class={getToolbarActionBtnClass(Actions.H1)}
              onClick={() => this.handleToolbarActionClick(Actions.H1)}
            >
              <ino-icon icon="headline_one" />
            </button>
            <button
              class={getToolbarActionBtnClass(Actions.H2)}
              onClick={() => this.handleToolbarActionClick(Actions.H2)}
            >
              <ino-icon icon="headline_two" />
            </button>
            <button
              class={getToolbarActionBtnClass(Actions.BOLD)}
              onClick={() => this.handleToolbarActionClick(Actions.BOLD)}
            >
              <ino-icon icon="bold" />
            </button>
            <button
              class={getToolbarActionBtnClass(Actions.ITALIC)}
              onClick={() => this.handleToolbarActionClick(Actions.ITALIC)}
            >
              <ino-icon icon="italic" />
            </button>
            <button
              class={getToolbarActionBtnClass(Actions.STRIKE)}
              onClick={() => this.handleToolbarActionClick(Actions.STRIKE)}
            >
              <ino-icon icon="strikethrough" />
            </button>
            <button
              class={getToolbarActionBtnClass(Actions.LINK)}
              onClick={() => this.handleLinkButtonClick()}
            >
              <ino-icon icon="link" />
            </button>
            <button
              class={getToolbarActionBtnClass(Actions.UL)}
              onClick={() => this.handleToolbarActionClick(Actions.UL)}
            >
              <ino-icon icon="bullet_list" />
            </button>
            <button
              class={getToolbarActionBtnClass(Actions.OL)}
              onClick={() => this.handleToolbarActionClick(Actions.OL)}
            >
              <ino-icon icon="numeric_list" />
            </button>
            <button
              class={getToolbarActionBtnClass(Actions.TASK_LIST)}
              onClick={() => this.handleToolbarActionClick(Actions.TASK_LIST)}
            >
              <ino-icon icon="checkmark" />
            </button>
            <button
              class={getToolbarActionBtnClass(Actions.BLOCKQUOTE)}
              onClick={() => this.handleToolbarActionClick(Actions.BLOCKQUOTE)}
            >
              <ino-icon icon="quote" />
            </button>
            <button
              class={getToolbarActionBtnClass(Actions.CODE_BLOCK)}
              onClick={() => this.handleToolbarActionClick(Actions.CODE_BLOCK)}
            >
              <ino-icon icon="code_block" />
            </button>
          </div>
          <ino-popover
            placement="top-start"
            controlled={true}
            colorScheme="light"
            visible={Boolean(this.errorMessage)}
          >
            <span class="markdown-editor__error-text">{this.errorMessage}</span>
          </ino-popover>
        </div>
        <div class="markdown-editor__content">
          <div
            class={previewModeEditorClasses}
            ref={(el) => (this.editorRef = el)}
          />
          <ino-textarea
            ref={(el) => (this.textareaRef = el)}
            class={markdownModeEditorClasses}
            cols={100}
            autogrow={true}
            outline={true}
          />
        </div>
      </div>
    );
  }
}
