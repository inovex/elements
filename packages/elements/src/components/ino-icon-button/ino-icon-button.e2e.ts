import { setupPageWithContent } from '../../util/e2etests-setup';

const INO_ICON_BTN = '<ino-icon-button></ino-icon-button>';
const INO_ICON_BTN_SELECTOR = 'ino-icon-button';

describe('InoIconButton', () => {

  describe('Events', () => {
    it('should emit a click event by default', async () => {
      const page = await setupPageWithContent(INO_ICON_BTN);
      const inoIconBtn = await page.find(INO_ICON_BTN_SELECTOR);
      const buttonEl = await inoIconBtn.find('button');

      const clickEvent = await page.spyOnEvent('click');
      await buttonEl.click();
      await page.waitForChanges();

      expect(clickEvent).toHaveReceivedEvent();
    });

    it('should not emit a click event if the button is disabled', async () => {
      const page = await setupPageWithContent(INO_ICON_BTN);
      const inoIconBtn = await page.find(INO_ICON_BTN_SELECTOR);
      await inoIconBtn.setAttribute('disabled', true);
      await page.waitForChanges();

      const buttonEl = await inoIconBtn.find('button');
      const clickEvent = await page.spyOnEvent('click');
      await buttonEl.click();
      await page.waitForChanges();

      expect(clickEvent).not.toHaveReceivedEvent();
    });
  });

});
