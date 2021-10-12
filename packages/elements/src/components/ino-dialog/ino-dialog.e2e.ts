import { setupPageWithContent } from '../../util/e2etests-setup';

const INO_DIALOG = `
  <ino-dialog>
  </ino-dialog>
`;
const INO_OPEN_DIALOG = `
  <ino-dialog open>
  </ino-dialog>
`;
const INO_DIALOG_SELECTOR = 'ino-dialog';
const MDC_SELECTOR = '.mdc-dialog';

describe('InoDialog', () => {
  describe('Properties', () => {
    it('should close the dialog upon setting inoOpen to false', async () => {
      const page = await setupPageWithContent(INO_OPEN_DIALOG);
      const inoDialog = await page.find(INO_DIALOG_SELECTOR);

      await inoDialog.setAttribute('open', false);
      await page.waitForChanges();

      const mdcInstance = await inoDialog.shadowRoot.querySelector(
        MDC_SELECTOR
      );
      expect(mdcInstance).toHaveClass('mdc-dialog');
    });

    it('should open the dialog upon setting inoOpen to true', async () => {
      const page = await setupPageWithContent(INO_DIALOG);
      const inoDialog = await page.find(INO_DIALOG_SELECTOR);

      await inoDialog.setAttribute('open', true);
      await page.waitForChanges();

      const mdcInstance = await inoDialog.shadowRoot.querySelector(
        MDC_SELECTOR
      );
      expect(mdcInstance).toHaveClass('mdc-dialog--open');
    });
  });

  describe('Events', () => {
    it('should emit an openChange event upon changing the state of inoOpen', async () => {
      const page = await setupPageWithContent(INO_DIALOG);
      const inoDialog = await page.find(INO_DIALOG_SELECTOR);
      const inoChangedEvent = await page.spyOnEvent('openChange');

      await inoDialog.setAttribute('open', true);
      await page.waitForChanges();

      expect(inoChangedEvent).toHaveReceivedEvent();
      expect(inoChangedEvent).toHaveReceivedEventDetail(true);

      await inoDialog.setAttribute('open', false);
      await page.waitForChanges();

      expect(inoChangedEvent).toHaveReceivedEvent();
      expect(inoChangedEvent).toHaveReceivedEventDetail(false);
    });
  });
});
