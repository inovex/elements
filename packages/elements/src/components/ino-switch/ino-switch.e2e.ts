import { setupPageWithContent } from '../../util/e2etests-setup';

const INO_SWITCH = `<ino-switch></ino-switch>`;

describe('InoSwitch', () => {
  describe('Events', () => {
    it('should fire checkedChange event on click', async () => {
      const page = await setupPageWithContent(INO_SWITCH);

      const checkedChange = await page.spyOnEvent('checkedChange');
      expect(checkedChange).not.toHaveReceivedEvent();
      await page.click('ino-switch');
      await page.waitForChanges();
      expect(checkedChange).toHaveReceivedEvent();
    });

    it('should fire checkedChange event with true if the checked property is not set', async () => {
      const page = await setupPageWithContent(INO_SWITCH);

      const checkedChange = await page.spyOnEvent('checkedChange');
      await page.click('ino-switch');
      await page.waitForChanges();
      expect(checkedChange.firstEvent.detail).toBe(true);
    });

    it('should fire checkedChange event with true if the checked property is set to false', async () => {
      const page = await setupPageWithContent(INO_SWITCH);

      const checkedChange = await page.spyOnEvent('checkedChange');
      const inoSwitchEl = await page.find('ino-switch');
      inoSwitchEl.setAttribute('checked', 'false');
      await page.waitForChanges();
      await page.click('ino-switch');
      await page.waitForChanges();
      expect(checkedChange.firstEvent.detail).toBe(true);
    });

    it('should fire checkedChange event with false if the checked property is set to true', async () => {
      const page = await setupPageWithContent(INO_SWITCH);

      const checkedChange = await page.spyOnEvent('checkedChange');
      const inoSwitchEl = await page.find('ino-switch');
      inoSwitchEl.setAttribute('checked', 'true');
      await page.waitForChanges();
      await page.click('ino-switch');
      await page.waitForChanges();
      expect(checkedChange.firstEvent.detail).toBe(false);
    });
  });
});
