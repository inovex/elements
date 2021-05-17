import { setupPageWithContent } from '../../util/e2etests-setup';

const INO_SNACKBAR = `<ino-snackbar></ino-snackbar>`;
const INO_SNACKBAR_SELECTOR = 'ino-snackbar';
const INO_BTN_SELECTOR = 'ino-snackbar ino-button';
const INO_ICON_BTN_SELECTOR = 'ino-snackbar ino-icon-button';

describe('InoSnackbar', () => {
  describe('Events', () => {
    it('should emit an actionClick event upon clicking the button', async () => {
      const page = await setupPageWithContent(INO_SNACKBAR);
      const inoSnackbar = await page.find(INO_SNACKBAR_SELECTOR);
      await inoSnackbar.setAttribute('action-text', 'test');
      await page.waitForChanges();

      const inoBtn = await page.find(INO_BTN_SELECTOR);
      const actionEvent = await page.spyOnEvent('actionClick');

      await inoBtn.click();
      await page.waitForChanges();

      expect(actionEvent).toHaveReceivedEvent();
    });

    it('should emit a hideEl event upon closing the snackbar', async () => {
      const page = await setupPageWithContent(INO_SNACKBAR);
      const inoBtn = await page.find(INO_ICON_BTN_SELECTOR);
      const hideEvent = await page.spyOnEvent('hideEl');

      await inoBtn.click();
      await page.waitForChanges();

      expect(hideEvent).toHaveReceivedEvent();
      expect(hideEvent).toHaveReceivedEventDetail(true);
    });
  });
});
