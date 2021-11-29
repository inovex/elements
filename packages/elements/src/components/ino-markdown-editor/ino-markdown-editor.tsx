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
  };

  render() {
    const previewEditorClasses = classNames([
      'markdown-editor__content__container',
      this.viewMode === ViewMode.PREVIEW ? 'show-editor' : 'hide-editor',
    ]);

    const markdownEditorClasses = classNames([
      this.viewMode === ViewMode.MARKDOWN ? 'show-editor' : 'hide-editor',
    ]);

    return (
      <div class="markdown-editor grid-3x1 gap-y-3">
        <div class="markdown-editor__toolbar flex--row gap-x-2">
          <ino-segment-group value={this.viewMode}>
            <ino-segment-button
              value={ViewMode.PREVIEW}
              onClick={() => this.viewModeChange.emit(ViewMode.PREVIEW)}
            >
              Preview
            </ino-segment-button>
            <ino-segment-button
              value={ViewMode.MARKDOWN}
              onClick={() => this.viewModeChange.emit(ViewMode.MARKDOWN)}
            >
              Markdown
            </ino-segment-button>
          </ino-segment-group>
          <ino-button dense onClick={() => this.handleBtnClick(Actions.BOLD)}>
            bold
          </ino-button>
          <ino-button dense onClick={() => this.handleBtnClick(Actions.ITALIC)}>
            italic
          </ino-button>
          <ino-button dense onClick={() => this.handleBtnClick(Actions.STRIKE)}>
            strike
          </ino-button>
          <ino-button dense onClick={() => this.handleBtnClick(Actions.P)}>
            paragraph
          </ino-button>
          <ino-button dense onClick={() => this.handleBtnClick(Actions.H1)}>
            h1
          </ino-button>
          <ino-button dense onClick={() => this.handleBtnClick(Actions.H2)}>
            h2
          </ino-button>
          <ino-button dense onClick={() => this.handleBtnClick(Actions.H3)}>
            h3
          </ino-button>
        </div>
        <div class="markdown-editor__content">
          <div
            class={previewEditorClasses}
            ref={(el) => (this.editorRef = el)}
          />
          <ino-textarea
            ref={(el) => (this.textareaRef = el)}
            class={markdownEditorClasses}
          />
        </div>
      </div>
    );
  }
}
