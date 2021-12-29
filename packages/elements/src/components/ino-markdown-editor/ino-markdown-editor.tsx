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
import StarterKit from '@tiptap/starter-kit';
// import Link from '@tiptap/extension-link';
import classNames from 'classnames';
import { ViewMode } from '../types';
import markdownSerializer from './markdown-serializer';
import {
  Actions,
  handleToolbarBtnClick,
  isToolbarBtnActive,
} from './editor-toolbar-helper';

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

  @Prop() value: string;

  @Prop() viewMode: ViewMode = ViewMode.PREVIEW;

  @State() stateChanged: boolean;

  @Event() viewModeChange: EventEmitter<ViewMode>;

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
    this.editor.commands.setContent(this.markdownToHtml(), true);
    this.textareaRef.value = this.htmlToMarkdown();
    this.textareaRef.addEventListener('valueChange', this.onTextareaChange);
  }

  disconnectedCallback(): void {
    this.editor.destroy();
    this.textareaRef.removeEventListener('valueChange', this.onTextareaChange);
  }

  private createEditor(): void {
    this.editor = new Editor({
      element: this.editorRef,
      extensions: [StarterKit],
      onBlur: () => this.valueChange.emit(this.htmlToMarkdown()),
      onTransaction: () => (this.stateChanged = !this.stateChanged),
    });
  }

  private onTextareaChange = (e: CustomEvent<string>) => {
    e.stopPropagation();
    this.editor.commands.setContent(this.markdownToHtml(e.detail));
    this.textareaRef.value = e.detail;
  };

  private htmlToMarkdown(): string {
    const doc = this.editor.schema.nodeFromJSON(this.editor.getJSON());
    return markdownSerializer.serialize(doc);
  }

  private markdownToHtml(md: string = this.value): any {
    const state = markdownSerializer.parse(md);
    return state.toJSON();
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
              onClick={() => this.viewModeChange.emit(ViewMode.PREVIEW)}
            >
              <ino-icon icon="display" />
            </button>
            <button
              class={markdownViewModeBtnClasses}
              onClick={() => this.viewModeChange.emit(ViewMode.MARKDOWN)}
            >
              <ino-icon icon="web" />
            </button>
          </div>
          <div
            class={
              this.viewMode === ViewMode.PREVIEW
                ? 'preview-toolbar--show'
                : 'preview-toolbar--hide'
            }
          >
            <button
              class={getToolbarActionBtnClass(Actions.H1)}
              data-action={Actions.H1}
              onClick={() => this.handleBtnClick(Actions.H1)}
            >
              <ino-icon icon="headline_one" />
            </button>
            <button
              class={getToolbarActionBtnClass(Actions.H2)}
              data-action={Actions.H2}
              onClick={() => this.handleBtnClick(Actions.H2)}
            >
              <ino-icon icon="headline_two" />
            </button>
            <button
              class={getToolbarActionBtnClass(Actions.BOLD)}
              data-action={Actions.BOLD}
              onClick={() => this.handleBtnClick(Actions.BOLD)}
            >
              <ino-icon icon="bold" />
            </button>
            <button
              class={getToolbarActionBtnClass(Actions.ITALIC)}
              data-action={Actions.ITALIC}
              onClick={() => this.handleBtnClick(Actions.ITALIC)}
            >
              <ino-icon icon="italic" />
            </button>
            <button
              class={getToolbarActionBtnClass(Actions.STRIKE)}
              data-action={Actions.STRIKE}
              onClick={() => this.handleBtnClick(Actions.STRIKE)}
            >
              <ino-icon icon="strikethrough" />
            </button>
            <button
              class={getToolbarActionBtnClass(Actions.LINK)}
              data-action={Actions.LINK}
              onClick={() => this.handleBtnClick(Actions.LINK)}
            >
              <ino-icon icon="link" />
            </button>
            <button
              class={getToolbarActionBtnClass(Actions.UL)}
              data-action={Actions.UL}
              onClick={() => this.handleBtnClick(Actions.UL)}
            >
              <ino-icon icon="bullet_list" />
            </button>
            <button
              class={getToolbarActionBtnClass(Actions.OL)}
              data-action={Actions.OL}
              onClick={() => this.handleBtnClick(Actions.OL)}
            >
              <ino-icon icon="numeric_list" />
            </button>
            <button
              class={getToolbarActionBtnClass(Actions.BLOCKQUOTE)}
              data-action={Actions.BLOCKQUOTE}
              onClick={() => this.handleBtnClick(Actions.BLOCKQUOTE)}
            >
              <ino-icon icon="quote" />
            </button>
            <button
              class={getToolbarActionBtnClass(Actions.CODE)}
              data-action={Actions.CODE}
              onClick={() => this.handleBtnClick(Actions.CODE)}
            >
              <ino-icon icon="code" />
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
            autogrow
          />
        </div>
      </div>
    );
  }
}
