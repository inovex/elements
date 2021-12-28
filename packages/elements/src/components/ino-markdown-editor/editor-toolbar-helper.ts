import { ChainedCommands, Editor } from '@tiptap/core';

export enum Actions {
  ITALIC,
  BOLD,
  H1,
  H2,
  H3,
  STRIKE,
  OL,
  UL,
  LINK,
  CODE,
  BLOCKQUOTE,
}

const focusChain = (editor: Editor): ChainedCommands => editor.chain().focus();

export function handleToolbarBtnClick(editor: Editor, action: Actions): void {
  switch (action) {
    case Actions.H1:
      focusChain(editor).toggleHeading({ level: 1 }).run();
      break;
    case Actions.H2:
      focusChain(editor).toggleHeading({ level: 2 }).run();
      break;
    case Actions.BOLD:
      focusChain(editor).toggleBold().run();
      break;
    case Actions.ITALIC:
      focusChain(editor).toggleItalic().run();
      break;
    case Actions.STRIKE:
      focusChain(editor).toggleStrike().run();
      break;
    case Actions.LINK:
      //focusChain(editor).toggleLink().run();
      break;
    case Actions.OL:
      focusChain(editor).toggleOrderedList().run();
      break;
    case Actions.UL:
      focusChain(editor).toggleBulletList().run();
      break;
    case Actions.BLOCKQUOTE:
      focusChain(editor).toggleBlockquote().run();
      break;
    case Actions.CODE:
      focusChain(editor).toggleCode().run();
      break;
    default:
      console.warn('case missing:', action);
  }
}

export function isToolbarBtnActive(editor: Editor, action: Actions): boolean {
  if (!editor) return false;

  switch (action) {
    case Actions.H1:
      return editor.isActive('heading', { level: 1 });
    case Actions.H2:
      return editor.isActive('heading', { level: 2 });
    case Actions.BOLD:
      return editor.isActive('bold');
    case Actions.ITALIC:
      return editor.isActive('italic');
    case Actions.STRIKE:
      return editor.isActive('strike');
    case Actions.LINK:
      //action().toggleLink().run();
      break;
    case Actions.OL:
      return editor.isActive('orderedList');
    case Actions.UL:
      return editor.isActive('bulletList');
    case Actions.BLOCKQUOTE:
      return editor.isActive('blockquote');
    case Actions.CODE:
      return editor.isActive('code');
    default:
      console.warn('case missing:', action);
  }
}
