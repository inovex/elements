import { expect, Locator, test } from '@playwright/test';
import { goToStory, setAttribute } from '../test-utils';

test.describe('ino-textarea', () => {
  let inoTextArea: Locator;

  test.beforeEach(async ({ page }) => {
    await goToStory(page, ['Input', 'ino-textarea', 'default']);
    inoTextArea = page.locator('ino-textarea');
  });

  test.describe('Component Behaviour', () => {
    test('should be not focused after render', async () => {
      await expect(inoTextArea).not.toBeFocused();
    });

    test('should render with an above floating label after focus', async () => {
      const sampleText = 'Some Label';
      await setAttribute(inoTextArea, 'label', sampleText);
      await inoTextArea.click();
      const label = inoTextArea.locator('label');
      await expect(label).toHaveClass(/mdc-floating-label--float-above/);
    });

    test('should have higher height after increasing the rows', async () => {
      await setAttribute(inoTextArea, 'rows', '1');
      const { height: oneRowHeight } = await inoTextArea.boundingBox();

      await setAttribute(inoTextArea, 'rows', '10');
      const { height: tenRowsHeight } = await inoTextArea.boundingBox();

      expect(oneRowHeight).toBeLessThan(tenRowsHeight);
    });

    test('should have wider widths after increasing the columns', async () => {
      await setAttribute(inoTextArea, 'cols', '1');
      const { width: oneColWidth } = await inoTextArea.boundingBox();

      await setAttribute(inoTextArea, 'cols', '10');
      const { width: tenColsWidth } = await inoTextArea.boundingBox();

      expect(oneColWidth).toBeLessThan(tenColsWidth);
    });

    test('should NOT increase width when input exceeds width and autogrow not set', async () => {
      await setAttribute(inoTextArea, 'rows', '2');
      await setAttribute(inoTextArea, 'cols', '2');

      const bBoxBefore = await inoTextArea.boundingBox();
      await setAttribute(inoTextArea, 'value', 'aaaaaaaaaaaaaaaaaaaaaaaaaaaa');
      const bBoxAfter = await inoTextArea.boundingBox();

      expect(bBoxAfter.height).toEqual(bBoxBefore.height);
    });

    test('should increase width when input exceeds width and autogrow set', async () => {
      await setAttribute(inoTextArea, 'rows', '2');
      await setAttribute(inoTextArea, 'cols', '2');
      await setAttribute(inoTextArea, 'autogrow', 'true');

      const bBoxBefore = await inoTextArea.boundingBox();
      await setAttribute(inoTextArea, 'value', 'aaaaaaaaaaaaaaaaaaaaaaaaaaaa');
      const bBoxAfter = await inoTextArea.boundingBox();

      expect(bBoxAfter.height).toBeGreaterThan(bBoxBefore.height);
    });
  });
});
