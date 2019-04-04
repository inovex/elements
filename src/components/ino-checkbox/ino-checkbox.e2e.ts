import { setupPageWithContent } from '../../util/e2etests-setup';

const INO_CHECKBOX = `<ino-checkbox></ino-checkbox>`;

describe('InoCheckbox', () => {
  it('should render with default values', async () => {
    const page = await setupPageWithContent(INO_CHECKBOX);

    const inoCheckBoxEl = await page.find('ino-checkbox');
    expect(inoCheckBoxEl).not.toBeNull();
  });

  it('should fire checkedChange event on click', async () => {
    const page = await setupPageWithContent(INO_CHECKBOX);

    const checkedChange = await page.spyOnEvent('checkedChange');
    expect(checkedChange).not.toHaveReceivedEvent();
    await page.click('ino-checkbox');
    await page.waitForChanges();
    expect(checkedChange).toHaveReceivedEvent();
  });

  it('should fire checkedChange event with true if the checked property is not set', async () => {
    const page = await setupPageWithContent(INO_CHECKBOX);

    const checkedChange = await page.spyOnEvent('checkedChange');
    await page.click('ino-checkbox');
    await page.waitForChanges();
    expect(checkedChange.firstEvent.detail).toBe(true);
  });

  it('should fire checkedChange event with true if the checked property is set to false', async () => {
    const page = await setupPageWithContent(INO_CHECKBOX);

    const checkedChange = await page.spyOnEvent('checkedChange');
    const inoCheckBoxEl = await page.find('ino-checkbox');
    inoCheckBoxEl.setAttribute('checked', 'false');
    await page.waitForChanges();
    await page.click('ino-checkbox');
    await page.waitForChanges();
    expect(checkedChange.firstEvent.detail).toBe(true);
  });

  it('should fire checkedChange event with false if the checked property is set to true', async () => {
    const page = await setupPageWithContent(INO_CHECKBOX);

    const checkedChange = await page.spyOnEvent('checkedChange');
    const inoCheckBoxEl = await page.find('ino-checkbox');
    inoCheckBoxEl.setAttribute('checked', 'true');
    await page.waitForChanges();
    await page.click('ino-checkbox');
    await page.waitForChanges();
    expect(checkedChange.firstEvent.detail).toBe(false);
  });
});
