import { newSpecPage, SpecPage } from '@stencil/core/testing';
import { Textarea } from './ino-textarea';

(global as any).MutationObserver = class {
  constructor(callback) {}
  disconnect() {}
  observe(element, initObject) {}
};

describe('ino-textarea', () => {
  let page: SpecPage;
  let inoTextarea: HTMLInoTextareaElement;
  const eventSpy = jest.fn();

  const typeText = async (value: string) => {
    const arr = [...value];
    arr.forEach((char) => {
      page.win.dispatchEvent(new KeyboardEvent('keydown', { key: char }))
    });
    await page.waitForChanges();
  }
  beforeEach(async () => {
    page = await newSpecPage({
      components: [Textarea],
      html: '<ino-textarea outline="false">Some Text</ino-textarea>'
    });

    eventSpy.mockClear();
    inoTextarea = page.body.querySelector('ino-textarea');
    page.win.addEventListener('valueChange', eventSpy);
  })

    it.only('should render with an defined text inside', async () => {
      expect(inoTextarea.textContent).toEqual('Some Text');
      expect(inoTextarea.value).toEqual('Some Text');
    });
/*
    it('should NOT have the after pseudo-class within the label', async () => {
      const page = await setupPageWithContent(
        createTextarea(`label=\'SomeLabel'`),
      );
      const label = await page.find('ino-label');
      const afterElement = await label.getComputedStyle(':after');

      expect(afterElement.content).toEqual('none');
    });
*/

    it('should emit valueChange event while typing in textarea', async () => {
      const value = 'My text';
      inoTextarea.value = value;
      inoTextarea.blur();
      await page.waitForChanges();

      expect(eventSpy).toHaveBeenCalled();
      expect(eventSpy.mock.calls[0][0]).toHaveProperty('detail', value);
    });

      it('should emit valueChange event while typing in textarea and have the typed string in event.detail', async () => {
        inoTextarea.focus();
        await typeText('t');
        await page.waitForChanges();
        expect(eventSpy).toHaveBeenCalled();
        expect(eventSpy.mock.calls[0][0]).toHaveProperty('detail', 't');
      });
  /*
      it("should emit 4 valueChange events while typing 'test' in textarea", async () => {
        await typeText('test');
        await page.waitForChanges();
        expect(eventSpy).toHaveBeenCalledTimes(4);
      });

      it('should not emit any events while typing when disabled', async () => {
        inoTextarea.setAttribute('disabled', 'true');
        await page.waitForChanges();

        await typeText('t');
        expect(eventSpy).not.toHaveBeenCalled();
      });
      // */
});
