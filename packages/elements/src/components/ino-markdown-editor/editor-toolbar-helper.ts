import { ChainedCommands, Editor } from '@tiptap/core';

export enum Actions {
  ITALIC,
  BOLD,
  H1,
  H2,
  STRIKE,
  OL,
  UL,
  LINK,
  UNLINK,
  CODE_BLOCK,
  BLOCKQUOTE,
  TASK_LIST,
}

const focusChain = (editor: Editor): ChainedCommands => editor.chain().focus();

export function handleToolbarBtnClick(editor: Editor, action: Actions, url?): void {
  switch (action) {
    case Actions.ITALIC:
      focusChain(editor).toggleItalic().run();
      break;
    case Actions.BOLD:
      focusChain(editor).toggleBold().run();
      break;
    case Actions.H1:
      focusChain(editor).toggleHeading({ level: 1 }).run();
      break;
    case Actions.H2:
      focusChain(editor).toggleHeading({ level: 2 }).run();
      break;
    case Actions.STRIKE:
      focusChain(editor).toggleStrike().run();
      break;
    case Actions.OL:
      focusChain(editor).toggleOrderedList().run();
      break;
    case Actions.UL:
      focusChain(editor).toggleBulletList().run();
      break;
    case Actions.LINK:
      if (url) {
        focusChain(editor).setLink({ href: url }).run();
      }
      break;
    case Actions.UNLINK:
      focusChain(editor).unsetLink().run();
      break;
    case Actions.CODE_BLOCK:
      focusChain(editor).toggleCodeBlock().run();
      break;
    case Actions.BLOCKQUOTE:
      focusChain(editor).toggleBlockquote().run();
      break;
    case Actions.TASK_LIST:
      focusChain(editor).toggleTaskList().run();
      break;
    default:
      console.warn('case missing:', action);
  }
}

export function isToolbarBtnActive(editor: Editor, action: Actions): boolean {
  if (!editor) return false;

  switch (action) {
    case Actions.ITALIC:
      return editor.isActive('italic');
    case Actions.BOLD:
      return editor.isActive('bold');
    case Actions.H1:
      return editor.isActive('heading', { level: 1 });
    case Actions.H2:
      return editor.isActive('heading', { level: 2 });
    case Actions.STRIKE:
      return editor.isActive('strike');
    case Actions.OL:
      return editor.isActive('orderedList');
    case Actions.UL:
      return editor.isActive('bulletList');
    case Actions.LINK:
      return editor.isActive('link');
    case Actions.UNLINK:
      return false;
    case Actions.CODE_BLOCK:
      return editor.isActive('code');
    case Actions.BLOCKQUOTE:
      return editor.isActive('blockquote');
    case Actions.TASK_LIST:
      return editor.isActive('taskList');
    default:
      console.warn('case missing:', action);
  }
}

export function getActiveLink(editor: Editor): string | null {
  if (!editor) return null;

  if (editor.isActive('link')) {
    const href = editor.getAttributes('link').href;
    return href || null;
  }

  return null;
}
