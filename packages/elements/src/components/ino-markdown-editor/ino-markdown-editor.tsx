import {
  Component,
  ComponentInterface,
  Event,
  EventEmitter,
  h,
  Prop,
  Watch,
} from '@stencil/core';
import { ChainedCommands, Editor } from '@tiptap/core';
import StarterKit from '@tiptap/starter-kit';
import classNames from 'classnames';
import {
  defaultMarkdownParser,
  defaultMarkdownSerializer,
} from 'prosemirror-markdown';
import { ViewMode } from '../types';

enum Actions {
  ITALIC,
  BOLD,
  H1,
  H2,
  H3,
  STRIKE,
  P,
  OL,
  UL,
  LINK,
  CODE,
  QUOTE,
}

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

  @Event() viewModeChange: EventEmitter<ViewMode>;

  @Event() valueChange: EventEmitter<string>;

  @Watch('viewMode')
  handleViewModeChange(newViewMode: ViewMode) {
    if (newViewMode === ViewMode.MARKDOWN) {
      this.textareaRef.value = this.htmlToMarkdown();
      this.textareaRef.rows = this.textareaRef.value.split('\n').length;
    }
  }

  private onTextareaChange = (e: CustomEvent<string>) => {
    e.stopPropagation();
    console.log(e.detail);
    this.editor.commands.setContent(this.markdownToHtml(e.detail));
    this.textareaRef.value = e.detail;
  };

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

  action = (): ChainedCommands => this.editor.chain().focus();

  private createEditor(): void {
    this.editor = new Editor({
      element: this.editorRef,
      extensions: [StarterKit],
      onBlur: () => this.valueChange.emit(this.htmlToMarkdown()),
    });
  }

  private htmlToMarkdown(): string {
    const doc = this.editor.schema.nodeFromJSON(this.editor.getJSON());
    return defaultMarkdownSerializer.serialize(doc);
  }

  private markdownToHtml(md: string = this.value): any {
    const state = defaultMarkdownParser.parse(md);
    return state.toJSON();
  }

  private handleBtnClick = (action: Actions): void => {
    switch (action) {
      case Actions.BOLD:
        this.action().toggleBold().run();
        break;
      case Actions.ITALIC:
        this.action().toggleItalic().run();
        break;
      case Actions.H1:
        this.action().toggleHeading({ level: 1 }).run();
        break;
      case Actions.H2:
        this.action().toggleHeading({ level: 2 }).run();
        break;
      case Actions.H3:
        this.action().toggleHeading({ level: 3 }).run();
        break;
      case Actions.STRIKE:
        this.action().toggleStrike().run();
        break;
      case Actions.P:
        this.action().setParagraph().run();
        break;
      default:
        console.warn('case missing:', action);
    }

    Array.from(
      document.getElementsByClassName('toolbar__action-button')
    ).forEach((el: HTMLElement) => {
      const { action } = el.dataset;
      el.classList.remove('toolbar__action-button--active');
      if (this.isActive(action)) {
        el.classList.add('toolbar__action-button--active');
      }
    });
  };

  private isActive(action: string): boolean {
    switch (action) {
      case Actions.BOLD.toString():
        return this.editor.isActive('bold');
      case Actions.ITALIC.toString():
        return this.editor.isActive('italic');
      case Actions.H1.toString():
        return this.editor.isActive('heading', { level: 1 });
      case Actions.H2.toString():
        return this.editor.isActive('heading', { level: 2 });
      case Actions.H3.toString():
        return this.editor.isActive('heading', { level: 3 });
      case Actions.STRIKE.toString():
        return this.editor.isActive('strike');
      case Actions.P.toString():
        return this.editor.isActive('paragraph');
      default:
        console.warn('case missing:', action);
    }
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
          <div>
            <button
              class="toolbar__action-button"
              data-action={Actions.H1}
              onClick={() => this.handleBtnClick(Actions.H1)}
            >
              <span class="action-button__headline">H1</span>
            </button>
            <button
              class="toolbar__action-button"
              data-action={Actions.H2}
              onClick={() => this.handleBtnClick(Actions.H2)}
            >
              <span class="action-button__headline">H2</span>
            </button>
            <button
              class="toolbar__action-button"
              data-action={Actions.BOLD}
              onClick={() => this.handleBtnClick(Actions.BOLD)}
            >
              B
            </button>
            <button
              class="toolbar__action-button"
              data-action={Actions.ITALIC}
              onClick={() => this.handleBtnClick(Actions.ITALIC)}
            >
              <i>I</i>
            </button>
            <button
              class="toolbar__action-button"
              data-action={Actions.P}
              onClick={() => this.handleBtnClick(Actions.P)}
            >
              <ins>U</ins>
            </button>
            <button
              class="toolbar__action-button"
              data-action={Actions.STRIKE}
              onClick={() => this.handleBtnClick(Actions.STRIKE)}
            >
              <del>S</del>
            </button>
            <button
              class="toolbar__action-button"
              data-action={Actions.LINK}
              onClick={() => this.handleBtnClick(Actions.LINK)}
            >
              <ino-icon icon="request" />
            </button>
            <button
              class="toolbar__action-button"
              data-action={Actions.UL}
              onClick={() => this.handleBtnClick(Actions.UL)}
            >
              <ino-icon icon="menu" />
            </button>
            <button
              class="toolbar__action-button"
              data-action={Actions.OL}
              onClick={() => this.handleBtnClick(Actions.OL)}
            >
              <ino-icon icon="menu" />
            </button>
            <button
              class="toolbar__action-button"
              data-action={Actions.QUOTE}
              onClick={() => this.handleBtnClick(Actions.QUOTE)}
            >
              <ino-icon icon="message" />
            </button>
            <button
              class="toolbar__action-button"
              data-action={Actions.CODE}
              onClick={() => this.handleBtnClick(Actions.CODE)}
            >
              <ino-icon icon="web" />
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
