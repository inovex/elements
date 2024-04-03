import { expect, test } from '@playwright/test';
import { goToStory, setAttribute } from '../test-utils';

test.describe('ino-textarea', () => {
  test.beforeEach(async ({ page }) => {
    await goToStory(page, ['Input', 'ino-textarea', 'default']);
  });

  test.describe('Component Behaviour', () => {
    test('should be not focused after render', async ({ page }) => {
      const inoTextArea = page.locator('ino-textarea');
      await expect(inoTextArea).not.toBeFocused();
    });

    test('should render with an above floating label after focus', async ({
      page,
    }) => {
      const inoTextArea = page.locator('ino-textarea');
      const sampleText = 'Some Label';
      await setAttribute(inoTextArea, 'label', sampleText);
      await inoTextArea.click();
      const label = inoTextArea.locator('label');
      await expect(label).toHaveClass(/mdc-floating-label--float-above/);
    });

    test('should have higher height after increasing the rows', async ({
      page,
    }) => {
      const inoTextArea = page.locator('ino-textarea');
      await setAttribute(inoTextArea, 'rows', '1');
      const { height: oneRowHeight } = await inoTextArea.boundingBox();

      await setAttribute(inoTextArea, 'rows', '10');
      const { height: tenRowsHeight } = await inoTextArea.boundingBox();

      expect(oneRowHeight).toBeLessThan(tenRowsHeight);
    });

    /**
     * This test encounters a race condition as it doesn't wait for the textarea to finish resizing.
     * Instead, it immediately tests the size after changing the value, which might not reflect the new size yet.
     */
    test.fixme('should have wider widths after increasing the columns', async ({
      page,
    }) => {
      const inoTextArea = page.locator('ino-textarea');
      await setAttribute(inoTextArea, 'cols', '1');
      await inoTextArea.hover();
      const { width: oneColWidth } = await inoTextArea.boundingBox();

      await setAttribute(inoTextArea, 'cols', '10');
      await inoTextArea.hover();
      const { width: tenColsWidth } = await inoTextArea.boundingBox();

      expect(oneColWidth).toBeLessThan(tenColsWidth);
    });

    test('should NOT increase width when input exceeds width and autogrow not set', async ({
      page,
    }) => {
      const inoTextArea = page.locator('ino-textarea');
      await setAttribute(inoTextArea, 'rows', '2');
      await setAttribute(inoTextArea, 'cols', '2');

      const bBoxBefore = await inoTextArea.boundingBox();
      await setAttribute(inoTextArea, 'value', 'aaaaaaaaaaaaaaaaaaaaaaaaaaaa');
      const bBoxAfter = await inoTextArea.boundingBox();

      expect(bBoxAfter.height).toEqual(bBoxBefore.height);
    });

    test('should increase width when input exceeds width and autogrow set', async ({
      page,
    }) => {
      const inoTextArea = page.locator('ino-textarea');
      await setAttribute(inoTextArea, 'rows', '2');
      await setAttribute(inoTextArea, 'cols', '2');
      await setAttribute(inoTextArea, 'autogrow', 'true');

      const bBoxBefore = await inoTextArea.boundingBox();
      await setAttribute(inoTextArea, 'value', 'aaaaaaaaaaaaaaaaaaaaaaaaaaaa');
      const bBoxAfter = await inoTextArea.boundingBox();

      expect(bBoxAfter.height).toBeGreaterThan(bBoxBefore.height);
    });

    test('should not enter more than max length', async ({ page }) => {
      const inoTextArea = page.locator('ino-textarea');
      const nativeTextarea = inoTextArea.locator('textarea');
      await setAttribute(inoTextArea, 'maxlength', '3');

      await nativeTextarea.fill('ABC');
      await expect(nativeTextarea).toHaveValue('ABC');

      await nativeTextarea.fill('DEFG');
      await expect(nativeTextarea).toHaveValue('DEF');
    });
  });
});
