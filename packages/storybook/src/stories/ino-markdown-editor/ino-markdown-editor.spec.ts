import { expect, Locator, Page, test } from '@playwright/test';
import { goToStory } from '../test-utils';

enum ViewMode {
  MARKDOWN = 'markdown',
  PREVIEW = 'preview',
  READONLY = 'readonly',
}

const MARKDOWN_TEXT = [
  '# Headline 1\n',
  '## Headline 2\n',
  [
    '_italic_',
    '**bold**',
    '~~strikethrough~~',
    '[elements](https://github.com/inovex/elements)',
    '`inline code`',
  ].join(' '),
  '',
  '> Blockquote\n',
  '```\nthis should be a code block\n```\n',
  '* [x] ToDo 1 checked',
  '* [ ] ToDo 2',
  '* [ ] ToDo 3',
].join('\n');

const HTML_TEXT_TAGS = [
  '<h1>Headline 1</h1>',
  '<h2>Headline 2</h2>',
  '<em>italic</em>',
  '<strong>bold</strong>',
  '<s>strikethrough</s>',
  '<a target="_blank" rel="noopener noreferrer nofollow" href="https://github.com/inovex/elements">elements</a>',
  '<code>inline code</code>',
  '<blockquote><p>Blockquote</p></blockquote>',
  `<pre><code>this should be a code block
<br class="ProseMirror-trailingBreak"></code></pre>`,
];

test.describe('ino-markdown-editor', () => {
  const setupEditor = (
    inoMarkdownEditor: Locator,
    viewMode: ViewMode,
    text?: string,
  ) =>
    inoMarkdownEditor.evaluate(
      (editor, { viewMode, text }) => {
        editor.setAttribute('view-mode', viewMode);
        if (text) {
          editor.setAttribute('initial-value', text);
        }
      },
      { viewMode, text },
    );

  const getDefaultLocators = (page: Page) => {
    const inoMarkdownEditor = page.locator('ino-markdown-editor');
    return {
      inoMarkdownEditor,
      textArea: inoMarkdownEditor.locator('textarea'),
      tipTapEditor: inoMarkdownEditor.locator('.ProseMirror'),
      textFormatToolbar: inoMarkdownEditor.locator('.toolbar__text-format'),
    };
  };

  test.beforeEach(async ({ page }) => {
    await goToStory(page, ['Input', 'ino-markdown-editor', 'default']);
  });

  test('should show preview mode correctly', async ({ page }) => {
    const { inoMarkdownEditor, textArea, tipTapEditor, textFormatToolbar } =
      getDefaultLocators(page);
    await setupEditor(inoMarkdownEditor, ViewMode.PREVIEW);
    await expect(textArea).not.toBeInViewport();
    await expect(tipTapEditor).toBeInViewport();
    await expect(textFormatToolbar).toBeInViewport();
  });

  test('should show markdown mode correctly', async ({ page }) => {
    const { inoMarkdownEditor, textArea, tipTapEditor, textFormatToolbar } =
      getDefaultLocators(page);
    await setupEditor(inoMarkdownEditor, ViewMode.MARKDOWN);
    await expect(textArea).toBeInViewport();
    await expect(tipTapEditor).not.toBeInViewport();
    await expect(textFormatToolbar).not.toBeInViewport();
  });

  test('should change view mode', async ({ page }) => {
    const { inoMarkdownEditor, textArea, tipTapEditor, textFormatToolbar } =
      getDefaultLocators(page);
    await setupEditor(inoMarkdownEditor, ViewMode.MARKDOWN);
    const viewModeToolbar = inoMarkdownEditor.locator('.toolbar__view-mode');
    await expect(viewModeToolbar).toHaveCount(2);

    await viewModeToolbar.nth(0).click();
    await expect(textArea).not.toBeInViewport();
    await expect(tipTapEditor).toBeInViewport();
    await expect(textFormatToolbar).toBeInViewport();

    await viewModeToolbar.nth(1).click();
    await expect(textArea).toBeInViewport();
    await expect(tipTapEditor).not.toBeInViewport();
    await expect(textFormatToolbar).not.toBeInViewport();
  });

  test('should display all text format buttons', async ({ page }) => {
    const { inoMarkdownEditor, textFormatToolbar } = getDefaultLocators(page);
    await setupEditor(inoMarkdownEditor, ViewMode.PREVIEW);
    const buttons = textFormatToolbar.locator('.toolbar__action-button');
    await expect(buttons).toHaveCount(11);
  });

  test('should show preview as html when set initial value property', async ({
    page,
  }) => {
    const { inoMarkdownEditor, tipTapEditor } = getDefaultLocators(page);
    await setupEditor(inoMarkdownEditor, ViewMode.MARKDOWN, MARKDOWN_TEXT);
    const htmlValue = await tipTapEditor.innerHTML();

    expect(htmlValue.includes('<ul data-type="taskList">')).toBeTruthy();
    expect(htmlValue.match(/input/gm)).toHaveLength(3);
    HTML_TEXT_TAGS.forEach((tag) => expect(htmlValue).toContain(tag));
  });

  test('should enter text in markdown mode', async ({ page }) => {
    const { inoMarkdownEditor, textArea, tipTapEditor } =
      getDefaultLocators(page);
    const viewModeToolbar = inoMarkdownEditor.locator('.toolbar__view-mode');
    await setupEditor(inoMarkdownEditor, ViewMode.MARKDOWN);
    const dummyText = '# Hallo Welt';

    await textArea.fill(dummyText);
    await textArea.blur();
    await viewModeToolbar.nth(0).click();
    await expect(tipTapEditor).toHaveText('Hallo Welt');
  });

  test('should change initial value', async ({ page }) => {
    const initialText = '# Hello World';
    const { inoMarkdownEditor, textArea } = getDefaultLocators(page);
    await setupEditor(inoMarkdownEditor, ViewMode.MARKDOWN, initialText);
    await expect(textArea).toHaveValue(initialText);

    const newInitialText = '# Hello New Welt';
    await inoMarkdownEditor.evaluate((editor, text) => {
      editor.setAttribute('initial-value', text);
    }, newInitialText);
    await expect(textArea).toHaveValue(newInitialText);
  });
});
