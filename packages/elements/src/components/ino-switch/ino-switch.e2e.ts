import { setupPageWithContent } from '../../util/e2etests-setup';

const INO_SWITCH = `<ino-switch></ino-switch>`;
const DIV_SELECTOR = 'ino-switch > div';

describe('InoSwitch', () => {
  describe('Properties', () => {
    it('should render correctly if disabled is set to true', async () => {
      const page = await setupPageWithContent(INO_SWITCH);

      const inoSwitchEl = await page.find('ino-switch');
      inoSwitchEl.setAttribute('disabled', 'true');
      await page.waitForChanges();

      const div = await page.find(DIV_SELECTOR);
      expect(div).toHaveClass('mdc-switch--disabled');
    });

    it('should render correctly if checked is set to true', async () => {
      const page = await setupPageWithContent(INO_SWITCH);

      const inoSwitchEl = await page.find('ino-switch');
      inoSwitchEl.setAttribute('checked', 'true');
      await page.waitForChanges();

      const div = await page.find(DIV_SELECTOR);
      expect(div).toHaveClass('mdc-switch--checked');
    });
  });

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

    it('should not fire a checkedChange event if disabled is true', async () => {
      const page = await setupPageWithContent(INO_SWITCH);

      const checkedChange = await page.spyOnEvent('checkedChange');
      const inoSwitchEl = await page.find('ino-switch');

      inoSwitchEl.setAttribute('disabled', 'true');
      await page.waitForChanges();

      await page.click('ino-switch');
      await page.waitForChanges();
      expect(checkedChange).not.toHaveReceivedEvent();
    });
  });
});
