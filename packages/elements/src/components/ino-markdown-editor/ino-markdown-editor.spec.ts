import { newSpecPage, SpecPage } from '@stencil/core/testing';
import { MarkdownEditor } from './ino-markdown-editor';
import { ViewMode } from '../types';
import { Textarea } from '../ino-textarea/ino-textarea';
import { Label } from '../ino-label/ino-label';

describe('InoMarkdownEditor', () => {
  let page: SpecPage;
  let inoMarkdownEditor: HTMLInoMarkdownEditorElement;
  let textArea: HTMLTextAreaElement;

  beforeEach(async () => {
    page = await newSpecPage({
      components: [MarkdownEditor, Textarea, Label],
      html: '<ino-markdown-editor></ino-markdown-editor>'
    });

    inoMarkdownEditor = page.body.querySelector('ino-markdown-editor');
    textArea = inoMarkdownEditor.querySelector('textarea');
  });

  test('should emit a valueChange on textarea blur', async () => {
    const dummyText = '# Hallo Welt';
    const valueChangeSpy = jest.fn();

    inoMarkdownEditor.setAttribute('view-mode', ViewMode.MARKDOWN);
    await page.waitForChanges();

    page.win.addEventListener('valueChange', valueChangeSpy);
    textArea.setAttribute('value', dummyText);
    textArea.blur();

    await page.waitForChanges();
    expect(valueChangeSpy).toHaveBeenCalled();
    expect(valueChangeSpy.mock.calls[0][0]).toHaveProperty('detail', dummyText);
  });
})
