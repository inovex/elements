import { newSpecPage, SpecPage } from '@stencil/core/testing';
import { fillInput, listenForEvent } from '../../util/test-utils';
import { Datepicker } from './ino-datepicker';
import { Input } from '../ino-input/ino-input';
import { Label } from '../ino-label/ino-label';

describe('InoDatepicker', () => {
  let page: SpecPage;
  let inoDatepicker: HTMLInoDatepickerElement;
  let inputEl: HTMLInputElement;

  beforeEach(async () => {
    page = await newSpecPage({
      components: [Datepicker, Input, Label],
      html: `<ino-datepicker></ino-datepicker>`,
    });
    inoDatepicker = page.body.querySelector('ino-datepicker');
    inputEl = inoDatepicker.querySelector('input');
  });

  describe('Events', () => {
    it('should emit a valueChange event upon changing the input', async () => {
      const { eventSpy } = listenForEvent(page, 'valueChange');

      await fillInput(page, inputEl, '1');
      expect(eventSpy).toHaveBeenCalled();
    });

    it('should not emit a valueChange event if datepicker is disabled', async () => {
      const { eventSpy } = listenForEvent(page, 'valueChange');

      inoDatepicker.setAttribute('disabled', 'true');
      await page.waitForChanges();

      await fillInput(page, inputEl, '1');
      expect(eventSpy).not.toHaveBeenCalled();
    });
  });

  describe('Properties', () => {
    it('should render with disabled set to true', async () => {
      expect(inputEl).not.toHaveAttribute('disabled');

      inoDatepicker.setAttribute('disabled', 'true');
      await page.waitForChanges();

      expect(inputEl).toHaveAttribute('disabled');
    });

    it('should render with required set to true', async () => {
      expect(inputEl).not.toHaveAttribute('required');

      inoDatepicker.setAttribute('required', 'true');
      await page.waitForChanges();
      expect(inputEl).toHaveAttribute('required');
    });

    it('should render with inoOutline set to true', async () => {
      let mdcLineRipple = page.body.querySelector('.mdc-line-ripple');
      let mdcNotchedOutline = page.body.querySelector('.mdc-notched-outline');
      expect(mdcLineRipple).toBeTruthy();
      expect(mdcNotchedOutline).toBeNull();

      page = await newSpecPage({
        components: [Datepicker, Input, Label],
        html: `<ino-datepicker outline></ino-datepicker>`,
      });

      mdcLineRipple = page.body.querySelector('.mdc-line-ripple');
      mdcNotchedOutline = page.body.querySelector('.mdc-notched-outline');
      expect(mdcLineRipple).toBeNull();
      expect(mdcNotchedOutline).toBeTruthy();
    });
  });
});
