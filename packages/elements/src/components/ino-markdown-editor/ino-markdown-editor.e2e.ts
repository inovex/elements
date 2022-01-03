import { E2EElement, E2EPage } from '@stencil/core/testing';
import { setupPageWithContent } from '../../util/e2etests-setup';
import { ViewMode } from '../types';

const MARKDOWN_TEXT = `# Headline 1`;
const INO_MARKDOWN_EDITOR_SELECTOR = 'ino-markdown-editor';
const INO_MARKDOWN_EDITOR = (
  initialValue: string = '',
  viewMode: ViewMode = ViewMode.PREVIEW
) =>
  `<ino-markdown-editor
    initial-value="${initialValue}"
    view-mode="${viewMode}"
  ></ino-markdown-editor>`;

describe('InoMarkdownEditor', () => {
  let page: E2EPage;
  let inoMarkdownEditor: E2EElement;
  let inoTextArea: E2EElement;
  let editor: E2EElement;

  beforeEach(async () => {
    page = await setupPageWithContent(INO_MARKDOWN_EDITOR());
    inoMarkdownEditor = await page.find(INO_MARKDOWN_EDITOR_SELECTOR);
    inoTextArea = await inoMarkdownEditor.find(`ino-textarea`);
    editor = await inoMarkdownEditor.find(
      `.markdown-editor__content__container`
    );
  });

  it('should show preview mode correctly', async () => {
    const isTextareaVisible = await inoTextArea.isVisible();
    expect(isTextareaVisible).toBeFalsy();
    const textFormatToolbar = await inoMarkdownEditor.find(
      '.toolbar__text-format'
    );
    const isTextFormatToolbarVisible = await textFormatToolbar.isVisible();
    expect(isTextFormatToolbarVisible).toBeTruthy();
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

  it('should show preview as html when set value property', async () => {
    await page.waitForChanges();
    page = await setupPageWithContent(INO_MARKDOWN_EDITOR(MARKDOWN_TEXT));
    await page.waitForChanges();
    inoTextArea = await inoMarkdownEditor.find(`ino-textarea`);
    inoMarkdownEditor = await page.find(INO_MARKDOWN_EDITOR_SELECTOR);
    console.log(await inoTextArea.getProperty('value'));
    const content = await editor.find('.ProseMirror');
    console.log(content.innerHTML);
    expect(content.innerHTML).toBeDefined();
  });
});
