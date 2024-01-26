import { E2EElement, E2EPage } from '@stencil/core/testing';
import { setupPageWithContent } from '../../util/e2etests-setup';

describe('InoSnackbar', () => {
  let page: E2EPage;
  let inoSnackbar: E2EElement;

  beforeEach(async () => {
    page = await setupPageWithContent(`<ino-snackbar></ino-snackbar>`);
    inoSnackbar = await page.find('ino-snackbar');
  });

  describe('Events', () => {
    it('should emit an actionClick event upon clicking the button', async () => {
      const actionEvent = await page.spyOnEvent('actionClick');
      inoSnackbar.setAttribute('action-text', 'my action');
      await page.waitForChanges();
      const actionButton = await page.find('.ino-snackbar-action-btn');
      await actionButton.click();
      await page.waitForChanges();

      expect(actionEvent).toHaveReceivedEvent();
    });

    it('should emit a hideEl event upon closing the snackbar', async () => {
      const hideEvent = await page.spyOnEvent('hideEl');
      await page.evaluate(() => {
        document
          .querySelector('ino-snackbar')
          .dispatchEvent(new Event('hover'));
        const btn = document.querySelector('.ino-snackbar-close-btn');
        btn.dispatchEvent(new Event('hover'));
        btn.dispatchEvent(new Event('click'));
      });

      expect(hideEvent).toHaveReceivedEvent();
    });

    it('should close snackbar on pressing ESC key', async () => {
      const hideEvent = await page.spyOnEvent('hideEl');
      page.keyboard.press('Escape');
      await page.waitForChanges();
      expect(hideEvent).toHaveReceivedEvent();
    });
  });
});
