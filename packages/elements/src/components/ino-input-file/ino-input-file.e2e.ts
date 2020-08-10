import { setupPageWithContent } from '../../util/e2etests-setup';

const INO_INPUT_FILE = `<ino-input-file></ino-input-file>`;
const INPUT_FILE_SELECTOR = 'ino-input-file';
const INPUT_SELECTOR = 'ino-input-file input';
const BTN_SELECTOR = 'ino-input-file ino-button >>> button';

describe('InoInputFile', () => {
  it('should render with default values', async () => {
    const page = await setupPageWithContent(INO_INPUT_FILE);
    const inoInput = await page.find(INPUT_FILE_SELECTOR);

    expect(inoInput).toBeDefined();
  });

  describe('Properties', () => {

    it('should disable the element if disabled property is set to true', async () => {
      const page = await setupPageWithContent(INO_INPUT_FILE);
      const inoInput = await page.find(INPUT_FILE_SELECTOR);
      const btn = await page.find(BTN_SELECTOR);
      const input = await page.find(INPUT_SELECTOR);

      await inoInput.setAttribute('disabled', true);
      await page.waitForChanges();

      expect(btn).toHaveAttribute('disabled');
      expect(input).toHaveAttribute('disabled');
    });

    it('should allow multiple files if multiple property is set to true', async () => {
      const page = await setupPageWithContent(INO_INPUT_FILE);
      const inoInput = await page.find(INPUT_FILE_SELECTOR);
      const input = await page.find(INPUT_SELECTOR);

      await inoInput.setAttribute('multiple', true);
      await page.waitForChanges();

      expect(input).toHaveAttribute('multiple');
    });

    it('should render with the required attribute set to true', async () => {
      const page = await setupPageWithContent(INO_INPUT_FILE);
      const inoInput = await page.find(INPUT_FILE_SELECTOR);
      const input = await page.find(INPUT_SELECTOR);

      await inoInput.setAttribute('required', true);
      await page.waitForChanges();

      expect(input).toHaveAttribute('required');
    });

    it('should enable autofocus if autofocus property is set to true', async () => {
      const page = await setupPageWithContent(INO_INPUT_FILE);
      const inoInput = await page.find(INPUT_FILE_SELECTOR);
      const btn = await page.find(BTN_SELECTOR);

      await inoInput.setAttribute('autoFocus', true);
      await page.waitForChanges();

      expect(btn).toHaveAttribute('autoFocus');
    });

  });

});
