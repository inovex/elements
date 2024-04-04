import { newSpecPage, SpecPage } from '@stencil/core/testing';
import { Switch } from './ino-switch';
import { listenForEvent } from '../../util/test-utils';

describe('InoSwitch', () => {
  let page: SpecPage;
  let inoSwitch: HTMLInoSwitchElement;

  beforeEach(async () => {
    page = await newSpecPage({
      components: [Switch],
      html: `<ino-switch></ino-switch>`,
    });
    inoSwitch = page.body.querySelector('ino-switch');
  });

  it('should fire checkedChange event on click', async () => {
    const { eventSpy } = listenForEvent(page, 'checkedChange');
    expect(eventSpy).not.toHaveBeenCalled();
    inoSwitch.click();
    await page.waitForChanges();
    expect(eventSpy).toHaveBeenCalled();
  });

  it('should fire checkedChange event with true if the checked property is not set', async () => {
    const { assertEventDetails } = listenForEvent(page, 'checkedChange');
    inoSwitch.click();
    await page.waitForChanges();
    assertEventDetails(true);
  });

  it('should fire checkedChange event with true if the checked property is set to false', async () => {
    const { assertEventDetails } = listenForEvent(page, 'checkedChange');
    inoSwitch.setAttribute('checked', 'false');
    await page.waitForChanges();
    inoSwitch.click();
    await page.waitForChanges();
    assertEventDetails(true);
  });

  it('should fire checkedChange event with false if the checked property is set to true', async () => {
    const { assertEventDetails } = listenForEvent(page, 'checkedChange');
    inoSwitch.setAttribute('checked', 'true');
    await page.waitForChanges();
    inoSwitch.click();
    await page.waitForChanges();
    assertEventDetails(false);
  });

  it('should not fire a checkedChange event if disabled is true', async () => {
    const { eventSpy } = listenForEvent(page, 'checkedChange');
    inoSwitch.setAttribute('disabled', 'true');
    await page.waitForChanges();
    inoSwitch.click();
    await page.waitForChanges();
    expect(eventSpy).not.toHaveBeenCalled();
  });
});
