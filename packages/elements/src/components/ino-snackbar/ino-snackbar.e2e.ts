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
      await inoSnackbar.setAttribute('action-text', 'my action');
      await page.waitForChanges();
      const actionButton = await page.find('.ino-snackbar-action-btn');
      await actionButton.click();
      await page.waitForChanges();

      expect(actionEvent).toHaveReceivedEvent();
    });

    it('should emit a hideEl event upon closing the snackbar', async () => {
      const hideEvent = await page.spyOnEvent('hideEl');
      const closeButton = await page.find('.ino-snackbar-close-btn');
      await inoSnackbar.hover();
      await page.waitForChanges();
      await closeButton.hover();
      await closeButton.click();

      expect(hideEvent).toHaveReceivedEvent();
    });
  });
});
