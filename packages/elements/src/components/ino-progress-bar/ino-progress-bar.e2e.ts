import { setupPageWithContent } from '../../util/e2etests-setup';

const PROGRESS_BAR = `<ino-progress-bar></ino-progress-bar>`;
const PB_SELECTOR = 'ino-progress-bar';
const MDC_SELECTOR = 'ino-progress-bar >>> .mdc-linear-progress';

describe('ino-progress-bar', () => {
  it('should render with default values', async () => {
    const page = await setupPageWithContent(PROGRESS_BAR);
    const pb = await page.find(PB_SELECTOR);
    const mdc = await page.find(MDC_SELECTOR);

    expect(pb).toBeDefined();
    expect(mdc).toBeDefined();
  });

  describe('Properties', () => {
    it('should render with inoReversed set to true', async () => {
      const page = await setupPageWithContent(PROGRESS_BAR);
      const pb = await page.find(PB_SELECTOR);

      await pb.setAttribute('ino-reversed', true);
      await page.waitForChanges();

      const mdcClass = await pb.shadowRoot.querySelector('.mdc-linear-progress--reversed');
      expect(mdcClass).toBeDefined();
    });

    it('should render with inoIndeterminate set to true', async () => {
      const page = await setupPageWithContent(PROGRESS_BAR);
      const pb = await page.find(PB_SELECTOR);

      await pb.setAttribute('ino-indeterminate', true);
      await page.waitForChanges();

      const mdcClass = await pb.shadowRoot.querySelector('.mdc-linear-progress--indeterminate');
      expect(mdcClass).toBeDefined();
    });

    it('should render with a custom buffer value', async () => {
      const page = await setupPageWithContent(PROGRESS_BAR);
      const pb = await page.find(PB_SELECTOR);

      await pb.setAttribute('ino-buffer', 0.5);
      await page.waitForChanges();

      const bufferVal = await pb.getAttribute('ino-buffer');

      expect(bufferVal).toBe("0.5");
    });

    it('should render with a custom progress value', async () => {
      const page = await setupPageWithContent(PROGRESS_BAR);
      const pb = await page.find(PB_SELECTOR);

      await pb.setAttribute('ino-progress', 0.5);
      await page.waitForChanges();

      const progressVal = await pb.getAttribute('ino-progress');

      expect(progressVal).toBe("0.5");
    });
  });
});
