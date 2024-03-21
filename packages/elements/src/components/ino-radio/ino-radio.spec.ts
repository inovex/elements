import { newSpecPage, SpecPage } from '@stencil/core/testing';
import { Radio } from './ino-radio';
import { listenForEvent } from '../../util/test-utils';

describe('ino-radio', () => {
  let page: SpecPage;
  let inoRadio: HTMLInoRadioElement;
  let input: HTMLInputElement;

  beforeEach(async () => {
    page = await newSpecPage({
      components: [Radio],
      html: `<ino-radio></ino-radio>`,
    });
    inoRadio = page.body.querySelector('ino-radio');
    input = inoRadio.shadowRoot.querySelector('input.mdc-radio__native-control');
  });

  it('should fire checkedChange event on click with true as detail', async () => {
    const { eventSpy, assertEventDetails } = listenForEvent(
      page,
      'checkedChange',
    );
    expect(eventSpy).not.toHaveBeenCalled();
    input.dispatchEvent(new Event('input'));
    await page.waitForChanges();
    expect(eventSpy).toHaveBeenCalled();
    assertEventDetails(true);
  });

  it('should not fire checkedChange event on click when already checked', async () => {
    const { eventSpy } = listenForEvent(page, 'checkedChange');
    inoRadio.setAttribute('checked', 'true');
    await page.waitForChanges();
    input.dispatchEvent(new Event('input'));
    await page.waitForChanges();
    expect(eventSpy).not.toHaveBeenCalled();
  });

  it('should not fire checkedChange event on click when disabled', async () => {
    const { eventSpy } = listenForEvent(page, 'checkedChange');
    inoRadio.setAttribute('disabled', 'true');
    await page.waitForChanges();

    input.dispatchEvent(new Event('input'));
    await page.waitForChanges();
    expect(eventSpy).not.toHaveBeenCalled();
  });
});
