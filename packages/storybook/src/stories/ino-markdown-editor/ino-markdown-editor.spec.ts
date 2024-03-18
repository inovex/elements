import { expect, Locator, test } from '@playwright/test';
import { interceptCustomEvent, goToStory } from '../test-utils';

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
  let inoMarkdownEditor: Locator;
  let textArea: Locator;
  let tipTapEditor: Locator;
  let textFormatToolbar: Locator;

  const setupEditor = (viewMode: ViewMode, text?: string) =>
    inoMarkdownEditor.evaluate(
      (editor, { viewMode, text }) => {
        editor.setAttribute('view-mode', viewMode);
        if (text) {
          editor.setAttribute('initial-value', text);
        }
      },
      { viewMode, text },
    );

  test.beforeEach(async ({ page }) => {
    await goToStory(page, ['Input', 'ino-markdown-editor', 'default']);
    inoMarkdownEditor = page.locator('ino-markdown-editor');
    textArea = inoMarkdownEditor.locator('textarea');
    tipTapEditor = inoMarkdownEditor.locator('.ProseMirror');
    textFormatToolbar = inoMarkdownEditor.locator('.toolbar__text-format');
  });

  test('should show preview mode correctly', async () => {
    await setupEditor(ViewMode.PREVIEW);
    await expect(textArea).not.toBeInViewport();
    await expect(tipTapEditor).toBeInViewport();
    await expect(textFormatToolbar).toBeInViewport();
  });

  test('should show markdown mode correctly', async () => {
    await setupEditor(ViewMode.MARKDOWN);
    await expect(textArea).toBeInViewport();
    await expect(tipTapEditor).not.toBeInViewport();
    await expect(textFormatToolbar).not.toBeInViewport();
  });

  test('should emit view mode change', async ({ page }) => {
    await setupEditor(ViewMode.PREVIEW);
    const viewModeToolbar = inoMarkdownEditor.locator('.toolbar__view-mode');
    await expect(viewModeToolbar).toHaveCount(2);

    const getInterceptor = () =>
      interceptCustomEvent<ViewMode>(page, 'viewModeChange');

    const previewPromise = getInterceptor();
    await (await viewModeToolbar.all())[0].click();
    expect(await previewPromise).toBe(ViewMode.PREVIEW);

    const markdownPromise = getInterceptor();
    await (await viewModeToolbar.all())[1].click();
    expect(await markdownPromise).toBe(ViewMode.MARKDOWN);
  });

  test('should display all text format buttons', async () => {
    await setupEditor(ViewMode.PREVIEW);
    const buttons = textFormatToolbar.locator('.toolbar__action-button');
    await expect(buttons).toHaveCount(11);
  });

  test('should show preview as html when set initial value property', async () => {
    await setupEditor(ViewMode.MARKDOWN, MARKDOWN_TEXT);
    const htmlValue = await tipTapEditor.innerHTML();

    expect(htmlValue.includes('<ul data-type="taskList">')).toBeTruthy();
    expect(htmlValue.match(/input/gm)).toHaveLength(3);
    HTML_TEXT_TAGS.forEach((tag) => expect(htmlValue).toContain(tag));
  });

  test('should emit a valueChange on textarea blur', async ({ page }) => {
    await setupEditor(ViewMode.MARKDOWN);
    const dummyText = '# Hallo Welt';

    const valueChangePromise = interceptCustomEvent<string>(
      page,
      'valueChange',
    );

    await textArea.fill(dummyText);
    await textArea.blur();
    expect(await valueChangePromise).toBe(dummyText);
  });

  test('should emit a valueChange on editor blur', async ({ page }) => {
    await setupEditor(ViewMode.PREVIEW);
    const dummyText = '# Hallo Welt';
    const valueChangePromise = interceptCustomEvent<ViewMode>(
      page,
      'valueChange',
    );

    await tipTapEditor.pressSequentially(dummyText);
    await tipTapEditor.blur();
    expect(await valueChangePromise).toBe(dummyText);
  });

  test('should change initial value', async () => {
    const initialText = '# Hello World';
    await setupEditor(ViewMode.MARKDOWN, initialText);
    await expect(textArea).toHaveValue(initialText);

    const newInitialText = '# Hello New Welt';
    await inoMarkdownEditor.evaluate((editor, text) => {
      editor.setAttribute('initial-value', text);
    }, newInitialText);
    await expect(textArea).toHaveValue(newInitialText);
  });
});
