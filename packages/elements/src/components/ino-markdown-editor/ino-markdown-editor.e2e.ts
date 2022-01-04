import { E2EElement, E2EPage } from '@stencil/core/testing';
import { setupPageWithContent } from '../../util/e2etests-setup';
import { ViewMode } from '../types';

const MARKDOWN_TEXT = [
  '# Headline 1\n',
  '## Headline 2\n',
  '_italic_',
  '**bold**',
  '~~strikethrough~~',
  '[elements](https://github.com/inovex/elements)',
  '`inline code`',
  '\n```\nthis should be a code block\n```',
].join('\n');

const HTML_TEXT_TAGS = [
  '<h1>Headline 1</h1>',
  '<h2>Headline 2</h2>',
  '<em>italic</em>',
  '<strong>bold</strong>',
  '<s>strikethrough</s>',
  '<a target="_blank" rel="noopener noreferrer nofollow" href="https://github.com/inovex/elements">elements</a>',
  '<code>inline code</code>',
  '<pre><code>this should be a code block</code></pre>',
];

const INO_MARKDOWN_EDITOR_SELECTOR = 'ino-markdown-editor';
const INO_MARKDOWN_EDITOR = (initialValue: string, viewMode: ViewMode) =>
  initialValue
    ? `<ino-markdown-editor initial-value="${initialValue}" view-mode="${viewMode}"></ino-markdown-editor>`
    : `<ino-markdown-editor view-mode="${viewMode}"></ino-markdown-editor>`;

describe('InoMarkdownEditor', () => {
  let page: E2EPage;
  let inoMarkdownEditor: E2EElement;
  let inoTextArea: E2EElement;
  let editor: E2EElement;

  async function setUpTest(initialValue: string, viewMode: ViewMode) {
    page = await setupPageWithContent(
      INO_MARKDOWN_EDITOR(initialValue, viewMode)
    );
    inoMarkdownEditor = await page.find(INO_MARKDOWN_EDITOR_SELECTOR);
    inoTextArea = await inoMarkdownEditor.find(`ino-textarea`);
    editor = await inoMarkdownEditor.find(
      `.markdown-editor__content__container`
    );
  }

  beforeEach(async () => {
    await setUpTest('', ViewMode.PREVIEW);
  });

  it('should show preview mode correctly', async () => {
    const isTextareaVisible = await inoTextArea.isVisible();
    expect(isTextareaVisible).toBeFalsy();

    const isEditorVisible = await editor.isVisible();
    expect(isEditorVisible).toBeTruthy();

    const textFormatToolbar = await inoMarkdownEditor.find(
      '.toolbar__text-format'
    );
    const isTextFormatToolbarVisible = await textFormatToolbar.isVisible();
    expect(isTextFormatToolbarVisible).toBeTruthy();
  });

  it('should show markdown mode correctly', async () => {
    await setUpTest('', ViewMode.MARKDOWN);

    const isTextareaVisible = await inoTextArea.isVisible();
    expect(isTextareaVisible).toBeTruthy();

    const isEditorVisible = await editor.isVisible();
    expect(isEditorVisible).toBeFalsy();

    const textFormatToolbar = await inoMarkdownEditor.find(
      '.toolbar__text-format'
    );
    const isTextFormatToolbarVisible = await textFormatToolbar.isVisible();
    expect(isTextFormatToolbarVisible).toBeFalsy();
  });

  it('should emit view mode change', async () => {
    const viewModeChangeBtn = await page.findAll('.toolbar__view-mode');
    expect(viewModeChangeBtn).toHaveLength(2);
    const spy = await page.spyOnEvent('viewModeChange');

    await viewModeChangeBtn[0].click();
    expect(spy).toHaveReceivedEvent();
    expect(spy).toHaveReceivedEventDetail(ViewMode.PREVIEW);

    await viewModeChangeBtn[1].click();
    expect(spy).toHaveReceivedEvent();
    expect(spy).toHaveReceivedEventDetail(ViewMode.MARKDOWN);
  });

  it('should display all text format buttons', async () => {
    const textFormatToolbar = await inoMarkdownEditor.find(
      '.toolbar__text-format'
    );
    const buttons = await textFormatToolbar.findAll('.toolbar__action-button');
    expect(buttons).toHaveLength(10);

    const spy = await page.spyOnEvent('click');
    for (const btn of buttons) {
      await btn.click();
      expect(spy).toHaveReceivedEvent();
    }
  });

  it('should show preview as html when set initial value property', async () => {
    await setUpTest(MARKDOWN_TEXT, ViewMode.MARKDOWN);
    const textValue = await inoTextArea.getProperty('value');
    const htmlValue = (await editor.find('.ProseMirror'))?.innerHTML;

    expect(textValue).toBe(MARKDOWN_TEXT);
    HTML_TEXT_TAGS.forEach((tag) => expect(htmlValue).toContain(tag));
  });
});
