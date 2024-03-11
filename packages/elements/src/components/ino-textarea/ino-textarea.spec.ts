import { newSpecPage, SpecPage } from '@stencil/core/testing';
import { Textarea } from './ino-textarea';
import { listenForEvent } from '../../util/test-utils';

describe('ino-textarea', () => {
  let page: SpecPage;
  let inoTextarea: HTMLInoTextareaElement;
  let innerTextarea: HTMLTextAreaElement;

  describe('Events', () => {
    const typeText = async (value: string) => {
      const arr = [...value];
      innerTextarea.value = '';
      arr.forEach((char) => {
        innerTextarea.value += char;
        innerTextarea.dispatchEvent(new Event('input'));
      });
      await page.waitForChanges();
    };

    beforeEach(async () => {
      page = await newSpecPage({
        components: [Textarea],
        html: '<ino-textarea outline="false" value="Some Text"></ino-textarea>',
      });

      inoTextarea = page.body.querySelector('ino-textarea');
      innerTextarea = inoTextarea.querySelector('textarea');
      innerTextarea.setSelectionRange = jest.fn();
    });

    it('should render with an defined value', async () => {
      expect(inoTextarea.value).toEqual('Some Text');
    });

    it('should emit valueChange event while typing in textarea and have the typed string in event.detail', async () => {
      const { assertEventDetails } = listenForEvent(page, 'valueChange');
      await typeText('t');
      await page.waitForChanges();
      assertEventDetails('t');
    });

    it("should emit 4 valueChange events while typing 'test' in textarea", async () => {
      const { eventSpy } = listenForEvent(page, 'valueChange');
      await typeText('test');
      await page.waitForChanges();
      expect(eventSpy).toHaveBeenCalledTimes(4);
    });
  });

  describe('Rendering', () => {
    const checkSettingOfProp = async (property: string, value: number | string) => {
      page = await newSpecPage({
        components: [Textarea],
        html: `<ino-textarea outline="false" ${property}=\'${value}\'>Some Text</ino-textarea>`
      });

      inoTextarea = page.body.querySelector('ino-textarea');
      innerTextarea = inoTextarea.querySelector('textarea');

      expect(innerTextarea.getAttribute(property)).toEqual(value.toString());
    };

    it('should set max length property', async () => {
      await checkSettingOfProp('maxLength', '3');
    });

    it('should set min length property', async () => {
      await checkSettingOfProp('minLength', '3');
    });

    it('should set a placeholder', async () => {
      await checkSettingOfProp('placeholder', 'Sample Placeholder');
    });
  });
});
