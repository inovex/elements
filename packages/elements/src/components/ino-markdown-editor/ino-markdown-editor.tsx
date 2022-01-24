import {Component, ComponentInterface, Event, EventEmitter, h, Prop, State, Watch} from '@stencil/core';
import {Editor} from '@tiptap/core';
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';
import classNames from 'classnames';
import {ViewMode, ViewModeUnion} from '../types';
import markdownSerializer from './markdown-serializer';
import {Actions, handleToolbarBtnClick, isToolbarBtnActive} from './editor-toolbar-helper';

type JsonStructure = { [key: string]: any };

/**
 * The **Preview Mode** supports following actions:
 *
 * | Actions ||||
 * |---|
 * | Link | Blockquotes | Unordered list / Bullet list | Headline 1 |
 * | Italic | Strikethrough | Ordered list / Numbered  list | Headline 2 |
 * | Bold | Inline code |
 *
 * Additionally, there are a lot of predefined
 * [keyboard shortcuts](https://tiptap.dev/api/keyboard-shortcuts#predefined-keyboard-shortcuts)
 * provided by the underlying [tiptap](https://tiptap.dev/) editor.
 *
 * The **Markdown Mode** supports all syntax of [CommonMark](https://commonmark.org/help/) with two exceptions:
 *
 *  * Support of strikethrough syntax (`~~TextToStrike~~`)
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

  public editor!: Editor;
  public isPlainText = false;

  /**
   * Initial `string` value of the markdown editor.
   * Reassigning this value do not change the editor state.
   * The value must contain a valid Markdown syntax.
   */
  @Prop() initialValue: string;

  /**
   * Sets the view mode of the editor.
   * Can be changed between `preview` (default) and `markdown`.
   * The `markdown` mode is made for advanced users that know the markdown syntax.
   */
  @Prop() viewMode: ViewModeUnion = 'preview';

  @State() private toolbarActionsState: Set<Actions> = new Set<Actions>();
  @State() private errorMessage: string = '';

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

  @Watch('viewMode')
  handleViewModeChange(newViewMode: ViewMode): void {
    if (newViewMode === ViewMode.MARKDOWN) {
      this.textareaRef.value = this.htmlToMarkdown();
      this.textareaRef.rows = this.textareaRef.value.split('\n').length;
    }
  }

  componentDidLoad(): void {
    this.createEditor();
    if (this.initialValue) {
      this.editor.commands.setContent(this.markdownToHtml(), true);
      this.textareaRef.value = this.htmlToMarkdown();
      this.textareaRef.rows = this.textareaRef.value.split('\n').length;
    }
    this.textareaRef.addEventListener('valueChange', this.onTextareaChange);
    this.textareaRef.addEventListener('inoBlur', this.handleMarkdownBlur);
  }

  disconnectedCallback(): void {
    this.editor.destroy();
    this.textareaRef.removeEventListener('valueChange', this.onTextareaChange);
    this.textareaRef.removeEventListener('inoBlur', this.handleMarkdownBlur);
  }

  private createEditor(): void {
    this.editor = new Editor({
      element: this.editorRef,
      extensions: [StarterKit, Link],
      onBlur: this.handlePreviewBlur ,
      onTransaction: this.onEditorTransaction,
    });
  }

  private handlePreviewBlur  = (): void => {
    const markdownText = this.htmlToMarkdown();
    if (!this.errorMessage)
      this.valueChange.emit(markdownText);
  }

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
    this.editor.commands.setContent(this.markdownToHtml(this.textareaRef.value));
    if (!this.errorMessage)
      this.valueChange.emit(this.textareaRef.value);
  };

  private htmlToMarkdown(): string {
    return this.tryParse(() => {
      const doc = this.editor.schema.nodeFromJSON(this.editor.getJSON());
      return markdownSerializer.serialize(doc);
    }, this.textareaRef.value);
  }

  private markdownToHtml(md: string = this.initialValue): JsonStructure {
    return this.tryParse(() => {
      const state = markdownSerializer.parse(md, this.editor.schema);
      return state.toJSON();
    }, this.editor.state);
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
    if (!this.errorMessage)
     this.viewModeChange.emit(viewMode);
  }

  private handleToolbarActionClick(action: Actions): void {
    handleToolbarBtnClick(this.editor, action);
  }

  render() {
    const isPreviewMode = this.viewMode === ViewMode.PREVIEW;
    const isMarkdownMode = this.viewMode === ViewMode.MARKDOWN;

    const previewEditorClasses = classNames({
      'markdown-editor__content__container': true,
      'show-editor': isPreviewMode,
      'hide-editor': isMarkdownMode,
    });
    const markdownEditorClasses = classNames({
      'show-editor': isMarkdownMode,
      'hide-editor': isPreviewMode,
    });

    const getViewModeBtnClasses = (viewMode: ViewMode) => classNames({
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

    return (
      <div class="markdown-editor">
        <div class="markdown-editor__toolbar">
          <div>
            <button
              class={getViewModeBtnClasses(ViewMode.PREVIEW)}
              onClick={() => this.handleViewModeBtnClick(ViewMode.PREVIEW)}
            >
              <ino-icon icon="edit_text"/>
            </button>
            <button
              class={getViewModeBtnClasses(ViewMode.MARKDOWN)}
              onClick={() => this.handleViewModeBtnClick(ViewMode.MARKDOWN)}
            >
              <ino-icon icon="code"/>
            </button>
          </div>
          <div class={textFormatToolbarClasses}>
            <button
              class={getToolbarActionBtnClass(Actions.H1)}
              onClick={() => this.handleToolbarActionClick(Actions.H1)}
            >
              <ino-icon icon="headline_one"/>
            </button>
            <button
              class={getToolbarActionBtnClass(Actions.H2)}
              onClick={() => this.handleToolbarActionClick(Actions.H2)}
            >
              <ino-icon icon="headline_two"/>
            </button>
            <button
              class={getToolbarActionBtnClass(Actions.BOLD)}
              onClick={() => this.handleToolbarActionClick(Actions.BOLD)}
            >
              <ino-icon icon="bold"/>
            </button>
            <button
              class={getToolbarActionBtnClass(Actions.ITALIC)}
              onClick={() => this.handleToolbarActionClick(Actions.ITALIC)}
            >
              <ino-icon icon="italic"/>
            </button>
            <button
              class={getToolbarActionBtnClass(Actions.STRIKE)}
              onClick={() => this.handleToolbarActionClick(Actions.STRIKE)}
            >
              <ino-icon icon="strikethrough"/>
            </button>
            <button
              class={getToolbarActionBtnClass(Actions.LINK)}
              onClick={() => this.handleToolbarActionClick(Actions.LINK)}
            >
              <ino-icon icon="link"/>
            </button>
            <button
              class={getToolbarActionBtnClass(Actions.UL)}
              onClick={() => this.handleToolbarActionClick(Actions.UL)}
            >
              <ino-icon icon="bullet_list"/>
            </button>
            <button
              class={getToolbarActionBtnClass(Actions.OL)}
              onClick={() => this.handleToolbarActionClick(Actions.OL)}
            >
              <ino-icon icon="numeric_list"/>
            </button>
            <button
              class={getToolbarActionBtnClass(Actions.BLOCKQUOTE)}
              onClick={() => this.handleToolbarActionClick(Actions.BLOCKQUOTE)}
            >
              <ino-icon icon="quote"/>
            </button>
            <button
              class={getToolbarActionBtnClass(Actions.CODE_BLOCK)}
              onClick={() => this.handleToolbarActionClick(Actions.CODE_BLOCK)}
            >
              <ino-icon icon="code_block"/>
            </button>
          </div>
          <ino-popover
            placement="top-start"
            color-scheme="transparent"
            controlled={true}
            visible={Boolean(this.errorMessage)}>
            <span class="markdown-editor__error-text">{this.errorMessage}</span>
          </ino-popover>
        </div>
        <div class="markdown-editor__content">
          <div
            class={previewEditorClasses}
            ref={(el) => (this.editorRef = el)}
          />
          <ino-textarea
            ref={(el) => (this.textareaRef = el)}
            class={markdownEditorClasses}
            cols={100}
            autogrow={true}
            outline={true}
          />
        </div>
      </div>
    );
  }
}
