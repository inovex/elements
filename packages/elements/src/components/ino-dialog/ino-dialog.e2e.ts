import { setupPageWithContent } from '../../util/e2etests-setup';

const INO_DIALOG = `
  <ino-dialog>
  <button>Focusable Element</button>
  </ino-dialog>
`;
const INO_OPEN_DIALOG = `
  <ino-dialog open>
    <button data-ino-dialog-action="message">Focusable Element</button>
  </ino-dialog>
`;
const INO_DIALOG_SELECTOR = 'ino-dialog';
const MDC_SELECTOR = '.mdc-dialog';

describe('InoDialog', () => {
  describe('Properties', () => {
    it('should close the dialog upon setting open to false', async () => {
      const page = await setupPageWithContent(INO_OPEN_DIALOG);
      const inoDialog = await page.find(INO_DIALOG_SELECTOR);

      await inoDialog.setAttribute('open', false);
      await page.waitForChanges();

      const mdcInstance = await inoDialog.shadowRoot.querySelector(
        MDC_SELECTOR
      );
      expect(mdcInstance).toHaveClass('mdc-dialog');
    });

    it('should open the dialog upon setting open to true', async () => {
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
    it('should send a close event having the dialog action', async () => {
      const page = await setupPageWithContent(INO_OPEN_DIALOG);
      const inoChangedEvent = await page.spyOnEvent('close');
      const inoDialogButton = await page.find(`button`);

      await inoDialogButton.click();
      await page.waitForChanges();

      expect(inoChangedEvent).toHaveReceivedEvent();
      expect(inoChangedEvent).toHaveReceivedEventDetail("message");
    });
  });
});
