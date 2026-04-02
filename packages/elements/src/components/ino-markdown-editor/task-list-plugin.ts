/**
 * markdown-it plugin for GFM-style task lists.
 *
 * This is a self-contained replacement for @hedgedoc/markdown-it-task-lists.
 * The original package imports `Token` from `markdown-it/lib/token`, a subpath
 * that no longer exists as a plain .js file in markdown-it v14 (which migrated
 * to .mjs). This breaks newer Rollup versions (introduced in Stencil >=4.28).
 *
 * The fix: obtain the `Token` constructor from `state.Token`, which markdown-it
 * exposes on StateCore.prototype since v14 (`state_core.mjs` line 15).
 *
 * The HTML output is intentionally identical to @hedgedoc/markdown-it-task-lists
 * so that the custom TipTap extensions (task_item.ts, task_list.ts) continue to
 * work without modification — they parse the DOM using the same CSS class names:
 *   - .contains-task-list  (on the parent <ul>/<ol>)
 *   - .task-list-item      (on each <li>)
 *   - .task-list-item-checkbox  (on the <input type="checkbox">)
 */

import type MarkdownIt from 'markdown-it';
import type Token from 'markdown-it/lib/token.mjs';

export interface TaskListOptions {
  /** If false (default), checkboxes are rendered as disabled. */
  enabled?: boolean;
  /** If true, wraps the checkbox and text in a <label>. */
  label?: boolean;
  /** If true, adds a data-line attribute with the source line number. */
  lineNumber?: boolean;
}

const CHECKBOX_REGEX = /^ *\[([\sx])] /i;

export function taskListPlugin(md: MarkdownIt, options: TaskListOptions = {}): void {
  const opts: Required<TaskListOptions> = {
    enabled: false,
    label: false,
    lineNumber: false,
    ...options,
  };

  md.core.ruler.after('inline', 'task-lists', state => {
    const tokens = state.tokens;
    for (let i = 2; i < tokens.length; i++) {
      if (!isTodoItem(tokens, i)) continue;

      todoify(tokens[i], state.Token, opts);

      tokens[i - 2].attrJoin('class', `task-list-item${opts.enabled ? ' enabled' : ''}`);

      const parent = findParentToken(tokens, i - 2);
      if (parent) parent.attrJoin('class', 'contains-task-list');
    }
    return false;
  });

  md.renderer.rules['taskListItemCheckbox'] = tokens => {
    const token = tokens[0];
    const checked = token.attrGet('checked') ? 'checked="" ' : '';
    const disabled = token.attrGet('disabled') ? 'disabled="" ' : '';
    const line = token.attrGet('line');
    const id = token.attrGet('id');
    const dataLine = line && opts.lineNumber ? `data-line="${line}" ` : '';
    return `<input class="task-list-item-checkbox" type="checkbox" ${checked}${disabled}${dataLine}id="${id}"/>`;
  };

  md.renderer.rules['taskListItemLabel_open'] = tokens => {
    const id = tokens[0].attrGet('id');
    return `<label for="${id}">`;
  };

  md.renderer.rules['taskListItemLabel_close'] = () => '</label>';
}

// ─── Helpers ────────────────────────────────────────────────────────────────

type TokenConstructor = typeof Token;

function isTodoItem(tokens: Token[], index: number): boolean {
  return (
    tokens[index].type === 'inline' &&
    tokens[index - 1].type === 'paragraph_open' &&
    tokens[index - 2].type === 'list_item_open' &&
    CHECKBOX_REGEX.test(tokens[index].content)
  );
}

function findParentToken(tokens: Token[], index: number): Token | undefined {
  const targetLevel = tokens[index].level - 1;
  for (let i = index - 1; i >= 0; i--) {
    if (tokens[i].level === targetLevel) return tokens[i];
  }
  return undefined;
}

function todoify(token: Token, TokenClass: TokenConstructor, opts: Required<TaskListOptions>): void {
  if (!token.children) return;

  const id = token.map ? `task-item-${token.map[0]}` : `task-item-${Math.ceil(Math.random() * 9_999_000)}`;

  // Inject checkbox token at the front
  token.children.splice(0, 0, createCheckbox(token, TokenClass, opts.enabled, id));

  // Strip the `[ ] ` / `[x] ` prefix from the first text token (now index 1)
  token.children[1].content = token.children[1].content.replace(CHECKBOX_REGEX, '');

  if (opts.label) {
    token.children.splice(1, 0, createLabelOpen(TokenClass, id));
    token.children.push(createLabelClose(TokenClass));
  }
}

function createCheckbox(token: Token, TokenClass: TokenConstructor, enabled: boolean, id: string): Token {
  const checkbox = new TokenClass('taskListItemCheckbox', '', 0);
  if (!enabled) checkbox.attrSet('disabled', 'true');
  if (token.map) checkbox.attrSet('line', String(token.map[0]));
  checkbox.attrSet('id', id);
  const match = CHECKBOX_REGEX.exec(token.content);
  if (match?.[1].toLowerCase() === 'x') checkbox.attrSet('checked', 'true');
  return checkbox;
}

function createLabelOpen(TokenClass: TokenConstructor, id: string): Token {
  const t = new TokenClass('taskListItemLabel_open', '', 1);
  t.attrSet('id', id);
  return t;
}

function createLabelClose(TokenClass: TokenConstructor): Token {
  return new TokenClass('taskListItemLabel_close', '', -1);
}
