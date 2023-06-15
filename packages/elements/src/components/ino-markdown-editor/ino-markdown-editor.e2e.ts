import { E2EElement, E2EPage } from '@stencil/core/testing';
import { setupPageWithContent } from '../../util/e2etests-setup';
import { ViewMode } from '../types';

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

const INO_MARKDOWN_EDITOR_SELECTOR = 'ino-markdown-editor';
const INO_MARKDOWN_EDITOR = (initialValue: string, viewMode: ViewMode) =>
  initialValue
    ? `<ino-markdown-editor initial-value="${initialValue}" view-mode="${viewMode}"></ino-markdown-editor>`
    : `<ino-markdown-editor view-mode="${viewMode}"></ino-markdown-editor>`;

describe('InoMarkdownEditor', () => {
  let page: E2EPage;
  let inoMarkdownEditor: E2EElement;
  let textArea: E2EElement;
  let tipTapEditor: E2EElement;
  let textFormatToolbar: E2EElement;

  async function setUpTest(initialValue: string, viewMode: ViewMode) {
    page = await setupPageWithContent(
      INO_MARKDOWN_EDITOR(initialValue, viewMode)
    );
    inoMarkdownEditor = await page.find(INO_MARKDOWN_EDITOR_SELECTOR);
    textArea = await inoMarkdownEditor.find('textarea');
    tipTapEditor = await inoMarkdownEditor.find('.ProseMirror');
    textFormatToolbar = await inoMarkdownEditor.find('.toolbar__text-format');
  }

  it('should show preview mode correctly', async () => {
    await setUpTest('', ViewMode.PREVIEW);
    const isTextareaVisible = await textArea.isIntersectingViewport();
    expect(isTextareaVisible).toBeFalsy();

    const isEditorVisible = await tipTapEditor.isIntersectingViewport();
    expect(isEditorVisible).toBeTruthy();

    const isTextFormatToolbarVisible = await textFormatToolbar.isVisible();
    expect(isTextFormatToolbarVisible).toBeTruthy();
  });

  it('should show markdown mode correctly', async () => {
    await setUpTest('', ViewMode.MARKDOWN);
    const isTextareaVisible = await textArea.isIntersectingViewport();
    expect(isTextareaVisible).toBeTruthy();

    const isEditorVisible = await tipTapEditor.isIntersectingViewport();
    expect(isEditorVisible).toBeFalsy();

    const isTextFormatToolbarVisible = await textFormatToolbar.isVisible();
    expect(isTextFormatToolbarVisible).toBeFalsy();
  });

  it('should emit view mode change', async () => {
    await setUpTest('', ViewMode.PREVIEW);
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
    await setUpTest('', ViewMode.PREVIEW);
    const buttons = await textFormatToolbar.findAll('.toolbar__action-button');
    expect(buttons).toHaveLength(11);

    const spy = await page.spyOnEvent('click');
    for (const btn of buttons) {
      await btn.click();
      expect(spy).toHaveReceivedEvent();
    }
  });

  it('should show preview as html when set initial value property', async () => {
    await setUpTest(MARKDOWN_TEXT, ViewMode.MARKDOWN);
    const textValue = await textArea.getProperty('value');
    const htmlValue = tipTapEditor.innerHTML;

    expect(textValue).toBe(MARKDOWN_TEXT);
    expect(htmlValue.includes('<ul data-type="taskList">')).toBeTruthy();
    expect(htmlValue.match(/input/gm)).toHaveLength(3);
    HTML_TEXT_TAGS.forEach((tag) => expect(htmlValue).toContain(tag));
  });

  it('should emit a valueChange on textarea blur', async () => {
    await setUpTest('', ViewMode.MARKDOWN);
    const dummyText = '# Hallo Welt';
    await textArea.type(dummyText);

    const spy = await page.spyOnEvent('valueChange');
    await page.$eval('textarea', (el: HTMLElement) => el.blur());

    expect(spy).toHaveReceivedEvent();
    expect(spy).toHaveReceivedEventDetail(dummyText);
  });

  it('should emit a valueChange on editor blur', async () => {
    await setUpTest('', ViewMode.PREVIEW);
    const dummyText = '# Hallo Welt';
    const spy = await page.spyOnEvent('valueChange');

    await tipTapEditor.type(dummyText);
    await page.$eval('.ProseMirror', (el: HTMLElement) => el.blur());

    expect(spy).toHaveReceivedEvent();
    expect(spy).toHaveReceivedEventDetail(dummyText);
  });

  it('should change initial value', async () => {
    const initialText = '# Hello World';
    await setUpTest(initialText, ViewMode.MARKDOWN);
    expect(await textArea.getProperty('value')).toBe(initialText);

    const newInitialText = '# Hallo Welt';
    inoMarkdownEditor.setProperty('initialValue', newInitialText);
    await page.waitForChanges();
    expect(await textArea.getProperty('value')).toBe(newInitialText);
  });
});
