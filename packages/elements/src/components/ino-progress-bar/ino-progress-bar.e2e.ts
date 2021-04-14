import { setupPageWithContent } from '../../util/e2etests-setup';

const PROGRESS_BAR = `<ino-progress-bar></ino-progress-bar>`;
const PB_SELECTOR = 'ino-progress-bar';

describe('ino-progress-bar', () => {
  describe('Properties', () => {
    it('should render with indeterminate set to true', async () => {
      const page = await setupPageWithContent(PROGRESS_BAR);
      const pb = await page.find(PB_SELECTOR);

      await pb.setAttribute('indeterminate', true);
      await page.waitForChanges();

      const mdcClass = await pb.shadowRoot.querySelector(
        '.mdc-linear-progress--indeterminate'
      );
      expect(mdcClass).toBeDefined();
    });
  });
});
