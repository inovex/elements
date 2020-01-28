import { setupPageWithContent } from '../../util/e2etests-setup';

const INO_RADIO = `<ino-radio></ino-radio>`;
const INO_RADIO_CHECKED = `<ino-radio checked></ino-radio>`;
const INO_RADIO_DISABLED = `<ino-radio disabled></ino-radio>`;

describe('InoRadio', () => {
  it('should render with default values', async () => {
    const page = await setupPageWithContent(INO_RADIO);
    const inoCheckBoxEl = await page.find('ino-radio');
    expect(inoCheckBoxEl).not.toBeNull();
  });

  it('should render unchecked', async () => {
    const page = await setupPageWithContent(INO_RADIO);
    const input = await page.find('ino-radio');
    const isChecked = await input.getProperty('checked');
    expect(isChecked).toBeFalsy();
  });

  it('should render checked', async () => {
    const page = await setupPageWithContent(INO_RADIO_CHECKED);
    const input = await page.find('ino-radio');
    const isChecked = await input.getProperty('checked');
    expect(isChecked).toBeTruthy();
  });

  it('should fire checkedChange event on click', async () => {
    const page = await setupPageWithContent(INO_RADIO);

    const checkedChange = await page.spyOnEvent('checkedChange');
    expect(checkedChange).not.toHaveReceivedEvent();
    await page.click('ino-radio');
    await page.waitForChanges();
    expect(checkedChange).toHaveReceivedEvent();
  });

  it('should not fire checkedChange event on click when already checked', async () => {
    const page = await setupPageWithContent(INO_RADIO_CHECKED);

    const checkedChange = await page.spyOnEvent('checkedChange');
    await page.click('ino-radio');
    await page.waitForChanges();
    expect(checkedChange).not.toHaveReceivedEvent();
  });

  it('should not fire checkedChange event on click when disabled', async () => {
    const page = await setupPageWithContent(INO_RADIO_DISABLED);

    const checkedChange = await page.spyOnEvent('checkedChange');
    await page.click('ino-radio');
    await page.waitForChanges();
    expect(checkedChange).not.toHaveReceivedEvent();
  });

  it('should receive checkedChanged with true as detail', async () => {
    const page = await setupPageWithContent(INO_RADIO);

    const checkedChange = await page.spyOnEvent('checkedChange');
    expect(checkedChange).not.toHaveReceivedEvent();
    await page.click('ino-radio');
    await page.waitForChanges();
    expect(checkedChange).toHaveReceivedEventDetail(true);
  });
});
