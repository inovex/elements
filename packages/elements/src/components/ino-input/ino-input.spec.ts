import { newSpecPage, SpecPage } from '@stencil/core/testing';
import { Input } from './ino-input';
import { Label } from '../ino-label/ino-label';
import { listenForEvent } from '../../util/test-utils';

describe('InoInput', () => {
  let page: SpecPage;
  let inoInputEl: HTMLInoInputElement;
  let nativeInputEl: HTMLInputElement;
  //let labelEl: HTMLInoLabelElement;

  const type = async (value: string) => {
    const arr = [...value];
    nativeInputEl.value = '';
    arr.forEach((char) => {
      nativeInputEl.value += char;
      nativeInputEl.dispatchEvent(new Event('input'));
    });
    await page.waitForChanges();
  };

  beforeEach(async () => {
    page = await newSpecPage({
      components: [Input, Label],
      html: '<ino-input></ino-input>',
    });

    inoInputEl = page.body.querySelector('ino-input');
    nativeInputEl = inoInputEl.querySelector('input.mdc-text-field__input');
    //labelEl = inoInputEl.querySelector('ino-label');
  });

  describe('Events', () => {
    it('should trigger inoFocus-Event when focused', async () => {
      const eventSpy = jest.fn();
      inoInputEl.addEventListener('inoFocus', eventSpy);

      nativeInputEl.focus();
      await page.waitForChanges();

      expect(eventSpy).toHaveBeenCalled();
    });

    it('should not bubble inoBlur or inoFocus', async () => {
      const { eventSpy: focusSpy } = listenForEvent(page, 'inoFocus');
      const { eventSpy: blurSpy } = listenForEvent(page, 'inoBlur');

      nativeInputEl.dispatchEvent(new Event('blur'));
      nativeInputEl.dispatchEvent(new Event('focus'));
      await page.waitForChanges();

      expect(focusSpy).not.toHaveBeenCalled();
      expect(blurSpy).not.toHaveBeenCalled();
    });

    it('should emit a valueChange event upon changing the input value', async () => {
      const { assertEventDetails } = listenForEvent(page, 'valueChange');

      await type('5');
      assertEventDetails('5');
    });

    it('should not emit a change or input event upon changing the input value', async () => {
      const { eventSpy: changeSpy } = listenForEvent(page, 'change');
      const { eventSpy: inputSpy } = listenForEvent(page, 'input');

      await type('5');
      expect(changeSpy).not.toHaveBeenCalled();
      expect(inputSpy).not.toHaveBeenCalled();
    });

    it('should not emit a valueChange event if disabled is set to true', async () => {
      const { eventSpy } = listenForEvent(page, 'valueChange');

      inoInputEl.setAttribute('disabled', 'true');
      await page.waitForChanges();
      await type('5');

      expect(eventSpy).not.toHaveBeenCalled();
    });

    it('should emit a valueChange event', async () => {
      const { eventSpy } = listenForEvent(page, 'valueChange');
      await type('5');
      expect(eventSpy).toHaveBeenCalled();
    });
  });
});
