import {Component, ComponentInterface, Event, EventEmitter, h, Prop, State, Watch,} from '@stencil/core';
import {Editor} from '@tiptap/core';
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';
import classNames from 'classnames';
import {ViewMode, ViewModeUnion} from '../types';
import markdownSerializer from './markdown-serializer';
import {Actions, handleToolbarBtnClick, isToolbarBtnActive,} from './editor-toolbar-helper';

@Component({
  tag: 'ino-markdown-editor',
  styleUrl: 'ino-markdown-editor.scss',
  shadow: false,
})
export class MarkdownEditor implements ComponentInterface {
  private editorRef!: HTMLDivElement;
  private textareaRef: HTMLInoTextareaElement;
  private isMarkdownValid: boolean = true;

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
   * The `markdown` mode is made for advanced users which known the syntax of markdown.
   */
  @Prop() viewMode: ViewModeUnion = 'preview';

  @State() stateChanged: boolean;

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
  handleViewModeChange(newViewMode: ViewMode) {
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
    this.textareaRef.addEventListener('inoBlur', this.onTextareaBlur);
  }

  disconnectedCallback(): void {
    this.editor.destroy();
    this.textareaRef.removeEventListener('valueChange', this.onTextareaChange);
    this.textareaRef.removeEventListener('inoBlur', this.onTextareaBlur);
  }

  private createEditor(): void {
    this.editor = new Editor({
      element: this.editorRef,
      extensions: [StarterKit, Link],
      onBlur: () => {
        const markdownText = this.htmlToMarkdown();
        if (this.isMarkdownValid)
          this.valueChange.emit(markdownText);
      },
      onTransaction: () => (this.stateChanged = !this.stateChanged),
    });
  }

  private onTextareaChange = (e: CustomEvent<string>) => {
    e.stopPropagation();
    this.textareaRef.value = e.detail;
  };

  private onTextareaBlur = (e: CustomEvent<void>) => {
    e.stopPropagation();
    this.editor.commands.setContent(this.markdownToHtml(this.textareaRef.value));
    if (this.isMarkdownValid)
      this.valueChange.emit(this.textareaRef.value);
  };

  private htmlToMarkdown(): string {
    return this.handleParsingError(() => {
      const doc = this.editor.schema.nodeFromJSON(this.editor.getJSON());
      return markdownSerializer.serialize(doc);
    }, this.textareaRef.value);
  }

  private markdownToHtml(md: string = this.initialValue): { [key: string]: any } {
    return this.handleParsingError(() => {
      const state = markdownSerializer.parse(md, this.editor.schema);
      return state.toJSON();
    }, this.editor.state);
  }

  private handleParsingError<T> (parseCallback: () => T, errorValue: T): T {
    try {
      this.isMarkdownValid = true;
      return parseCallback();
    } catch ({ message }) {
      this.isMarkdownValid = false;
      alert(message);
      return errorValue;
    }
  }

  private isBtnActive(action: Actions): boolean {
    return isToolbarBtnActive(this.editor, action);
  }

  private handleBtnClick(action: Actions): void {
    handleToolbarBtnClick(this.editor, action);
  }

  render() {
    const previewEditorClasses = classNames([
      'markdown-editor__content__container',
      this.viewMode === ViewMode.PREVIEW ? 'show-editor' : 'hide-editor',
    ]);
    const markdownEditorClasses = classNames([
      this.viewMode === ViewMode.MARKDOWN ? 'show-editor' : 'hide-editor',
    ]);

    const previewViewModeBtnClasses = classNames([
      'toolbar__action-button',
      'toolbar__view-mode',
      this.viewMode === ViewMode.PREVIEW
        ? 'toolbar__action-button--active'
        : '',
    ]);
    const markdownViewModeBtnClasses = classNames([
      'toolbar__action-button',
      'toolbar__view-mode',
      this.viewMode === ViewMode.MARKDOWN
        ? 'toolbar__action-button--active'
        : '',
    ]);

    const textFormatToolbarClasses = classNames([
      'toolbar__text-format',
      this.viewMode === ViewMode.PREVIEW
        ? 'toolbar__text-format--show'
        : 'toolbar__text-format--hide',
    ]);

    const getToolbarActionBtnClass = (action: Actions) =>
      classNames([
        'toolbar__action-button',
        this.isBtnActive(action) ? 'toolbar__action-button--active' : '',
      ]);

    return (
      <div class="markdown-editor">
        <div class="markdown-editor__toolbar">
          <div>
            <button
              class={previewViewModeBtnClasses}
              onClick={() => this.isMarkdownValid && this.viewModeChange.emit(ViewMode.PREVIEW)}
            >
              <ino-icon icon="edit_text"/>
            </button>
            <button
              class={markdownViewModeBtnClasses}
              onClick={() => this.isMarkdownValid && this.viewModeChange.emit(ViewMode.MARKDOWN)}
            >
              <ino-icon icon="code"/>
            </button>
          </div>
          <div class={textFormatToolbarClasses}>
            <button
              class={getToolbarActionBtnClass(Actions.H1)}
              onClick={() => this.handleBtnClick(Actions.H1)}
            >
              <ino-icon icon="headline_one"/>
            </button>
            <button
              class={getToolbarActionBtnClass(Actions.H2)}
              onClick={() => this.handleBtnClick(Actions.H2)}
            >
              <ino-icon icon="headline_two"/>
            </button>
            <button
              class={getToolbarActionBtnClass(Actions.BOLD)}
              onClick={() => this.handleBtnClick(Actions.BOLD)}
            >
              <ino-icon icon="bold"/>
            </button>
            <button
              class={getToolbarActionBtnClass(Actions.ITALIC)}
              onClick={() => this.handleBtnClick(Actions.ITALIC)}
            >
              <ino-icon icon="italic"/>
            </button>
            <button
              class={getToolbarActionBtnClass(Actions.STRIKE)}
              onClick={() => this.handleBtnClick(Actions.STRIKE)}
            >
              <ino-icon icon="strikethrough"/>
            </button>
            <button
              class={getToolbarActionBtnClass(Actions.LINK)}
              onClick={() => this.handleBtnClick(Actions.LINK)}
            >
              <ino-icon icon="link"/>
            </button>
            <button
              class={getToolbarActionBtnClass(Actions.UL)}
              onClick={() => this.handleBtnClick(Actions.UL)}
            >
              <ino-icon icon="bullet_list"/>
            </button>
            <button
              class={getToolbarActionBtnClass(Actions.OL)}
              onClick={() => this.handleBtnClick(Actions.OL)}
            >
              <ino-icon icon="numeric_list"/>
            </button>
            <button
              class={getToolbarActionBtnClass(Actions.BLOCKQUOTE)}
              onClick={() => this.handleBtnClick(Actions.BLOCKQUOTE)}
            >
              <ino-icon icon="quote"/>
            </button>
            <button
              class={getToolbarActionBtnClass(Actions.CODE_BLOCK)}
              onClick={() => this.handleBtnClick(Actions.CODE_BLOCK)}
            >
              <ino-icon icon="code_block"/>
            </button>
          </div>
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
