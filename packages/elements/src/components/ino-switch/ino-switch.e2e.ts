import {setupPageWithContent} from '../../util/e2etests-setup';
import {E2EElement, E2EPage} from "@stencil/core/testing";

describe('InoSwitch', () => {

  let page: E2EPage;
  let inoSwitch: E2EElement;

  beforeEach(async () => {
    page = await setupPageWithContent(`<ino-switch></ino-switch>`);
    inoSwitch = await page.find('ino-switch');
  });

  it('should fire checkedChange event on click', async () => {
    const checkedChange = await page.spyOnEvent('checkedChange');
    expect(checkedChange).not.toHaveReceivedEvent();
    await inoSwitch.click();
    await page.waitForChanges();
    expect(checkedChange).toHaveReceivedEvent();
  });

  it('should fire checkedChange event with true if the checked property is not set', async () => {
    const checkedChange = await page.spyOnEvent('checkedChange');
    await inoSwitch.click();
    await page.waitForChanges();
    expect(checkedChange).toHaveReceivedEventDetail(true);
  });

  it('should fire checkedChange event with true if the checked property is set to false', async () => {
    const checkedChange = await page.spyOnEvent('checkedChange');
    inoSwitch.setAttribute('checked', false);
    await page.waitForChanges();
    await inoSwitch.click();
    await page.waitForChanges();
    expect(checkedChange).toHaveReceivedEventDetail(true);
  });

  it('should fire checkedChange event with false if the checked property is set to true', async () => {
    const checkedChange = await page.spyOnEvent('checkedChange');
    inoSwitch.setAttribute('checked', true);
    await page.waitForChanges();
    await inoSwitch.click();
    await page.waitForChanges();
    expect(checkedChange).toHaveReceivedEventDetail(false);
  });

  it('should not fire a checkedChange event if disabled is true', async () => {
    const checkedChange = await page.spyOnEvent('checkedChange');
    inoSwitch.setAttribute('disabled', 'true');
    await page.waitForChanges();
    await inoSwitch.click();
    await page.waitForChanges();
    expect(checkedChange).not.toHaveReceivedEvent();
  });
});
