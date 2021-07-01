import { setupPageWithContent } from '../../util/e2etests-setup';

const INO_INPUT_FILE = `<ino-input-file></ino-input-file>`;
const INPUT_FILE_SELECTOR = 'ino-input-file';

describe('InoInputFile', () => {
  describe('Properties', () => {
    it('should render with the correct css classes if inoDragAndDrop is set to false', async () => {
      const page = await setupPageWithContent(INO_INPUT_FILE);

      const dnd_div = await page.find('.ino-input-file__composer');
      expect(dnd_div).toBeDefined();
    });

    it('should render with the correct css classes if inoDragAndDrop is set to true', async () => {
      const page = await setupPageWithContent(INO_INPUT_FILE);
      const inputFile = await page.find(INPUT_FILE_SELECTOR);

      await inputFile.setAttribute('drag-and-drop', true);
      await page.waitForChanges();

      const dnd_div = await page.find('.ino-input-file__dnd');
      expect(dnd_div).toBeDefined();
    });

    it('should render with the correct css classes if inoDragAndDrop and disabled are set to true', async () => {
      const page = await setupPageWithContent(INO_INPUT_FILE);
      const inputFile = await page.find(INPUT_FILE_SELECTOR);

      await inputFile.setAttribute('drag-and-drop', true);
      await inputFile.setAttribute('disabled', true);
      await page.waitForChanges();

      const dnd_div = await page.find('.ino-input-file__dnd');
      expect(dnd_div).toBeDefined();
      expect(dnd_div).toHaveClass('ino-input-file__dnd-disabled');
    });
  });
});
