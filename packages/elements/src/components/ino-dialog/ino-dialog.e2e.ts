import { setupPageWithContent } from '../../util/e2etests-setup';

const submitButtonText = 'Submit';

const INO_DIALOG = `
  <ino-dialog>
  <button>Focusable Element</button>
  </ino-dialog>
`;
const INO_OPEN_DIALOG = `
  <ino-dialog open action-text="${submitButtonText}"></ino-dialog>
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
});
