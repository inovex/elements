import { newSpecPage, SpecPage } from '@stencil/core/testing';
import { Checkbox } from './ino-checkbox';
import { listenForEvent } from '../../util/test-utils';

describe('InoCheckbox - Events', () => {
  let page: SpecPage;
  let inoCheckbox: HTMLInoCheckboxElement;
  let checkbox: HTMLInputElement;

  beforeEach(async () => {
    page = await newSpecPage({
      components: [Checkbox],
      html: `<ino-checkbox></ino-checkbox>`,
    });
    inoCheckbox = page.body.querySelector('ino-checkbox');
    checkbox = inoCheckbox.shadowRoot.querySelector('input');
  });

  it('should fire checkedChange event on click', async () => {
    const { eventSpy } = listenForEvent(page, 'checkedChange');

    expect(eventSpy).not.toHaveBeenCalled();
    checkbox.dispatchEvent(new Event('input'));
    await page.waitForChanges();

    expect(eventSpy).toHaveBeenCalled();
  });

  it('should fire checkedChange event with true if the checked property is not set', async () => {
    const { assertEventDetails } = listenForEvent(page, 'checkedChange');

    checkbox.dispatchEvent(new Event('input'));
    await page.waitForChanges();
    assertEventDetails(true);
  });

  it('should fire checkedChange event with true if the checked property is set to false', async () => {
    const { assertEventDetails } = listenForEvent(page, 'checkedChange');

    inoCheckbox.setAttribute('checked', 'false');
    await page.waitForChanges();
    checkbox.dispatchEvent(new Event('input'));
    await page.waitForChanges();

    assertEventDetails(true);
  });

  it('should fire checkedChange event with false if the checked property is set to true', async () => {
    const { assertEventDetails } = listenForEvent(page, 'checkedChange');

    inoCheckbox.setAttribute('checked', 'true');
    await page.waitForChanges();
    checkbox.dispatchEvent(new Event('input'));
    await page.waitForChanges();

    assertEventDetails(false);
  });

  it('should not fire a checkChange event if disabled is set to true', async () => {
    const { eventSpy } = listenForEvent(page, 'checkedChange');

    inoCheckbox.setAttribute('disabled', 'true');
    await page.waitForChanges();
    checkbox.dispatchEvent(new Event('input'));
    await page.waitForChanges();

    expect(eventSpy).not.toHaveBeenCalled();
  });
});
