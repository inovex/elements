import { Component, ComponentInterface, h } from '@stencil/core';
import { ChainedCommands, Editor } from '@tiptap/core';
import StarterKit from '@tiptap/starter-kit';
import {
  defaultMarkdownSerializer,
  defaultMarkdownParser,
} from 'prosemirror-markdown';

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

  public editor!: Editor;
  public isPlainText = false;
  public plainTextValue = '';

  componentDidLoad(): void {
    this.createEditor();
  }

  disconnectedCallback(): void {
    this.editor.destroy();
  }

  action = (): ChainedCommands => this.editor.chain().focus();

  updatePlainText(event: Event): void {
    this.plainTextValue = (event as CustomEvent<string>).detail;
  }

  toggleViewMode(): void {
    this.isPlainText = !this.isPlainText;
    if (this.isPlainText) {
      this.plainTextValue = this.serializeContent();
    } else {
      this.editor.commands.setContent(this.deserializeContent());
    }
  }

  private createEditor(): void {
    this.editor = new Editor({
      element: this.editorRef,
      extensions: [StarterKit],
    });
  }

  /* eslint-disable */
  private serializeContent(): string {
    const doc = this.editor.schema.nodeFromJSON(this.editor.getJSON());
    return defaultMarkdownSerializer.serialize(doc);
  }

  private deserializeContent(): any {
    const state = defaultMarkdownParser.parse(this.plainTextValue);
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
    return (
      <div class="markdown-editor grid-3x1 gap-y-3">
        <div class="markdown-editor__toolbar flex--row gap-x-2">
          <ino-button dense onClick={() => this.handleBtnClick(Actions.BOLD)}>
            bold
          </ino-button>
          <ino-button dense>italic</ino-button>
          <ino-button dense>strike</ino-button>
          <ino-button dense>paragraph</ino-button>
          <ino-button dense>h1</ino-button>
          <ino-button dense>h2</ino-button>
          <ino-button dense>h3</ino-button>
        </div>
        <div class="markdown-editor__content">
          <div
            class="markdown-editor__content__container"
            style={{ backgroundColor: 'yellow' }}
            ref={(el) => (this.editorRef = el)}
          ></div>
        </div>
      </div>
    );
  }
}
