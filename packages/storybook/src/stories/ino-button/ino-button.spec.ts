import { expect, Locator, test } from '@playwright/test';
import { goToStory, setAttribute } from '../test-utils';

test.describe('ino-button', () => {
  let inoButton: Locator;

  test.beforeEach(async ({ page }) => {
    await goToStory(page, ['Buttons', 'ino-button', 'default']);
    inoButton = page.locator('ino-button');
  });

  test('should keep dimensions if loading state is set', async () => {
    const spinnerEl = inoButton.locator('ino-spinner');

    const { height, width } = await inoButton.boundingBox();

    // set loading and wait for spinner to show
    await setAttribute(inoButton, 'loading', 'true');
    await expect(spinnerEl).toBeVisible();

    // disable loading and wait for spinner to disappear
    await setAttribute(inoButton, 'loading', 'false');
    await expect(spinnerEl).toBeHidden();
    await expect(inoButton).toHaveText(/Label/i);

    await expect(async () => {
      const box = await inoButton.boundingBox();

      if (box) {
        const { height: newHeight, width: newWidth } = box;
        expect(Math.abs(newHeight - height)).toBeLessThanOrEqual(1);
        expect(Math.abs(newWidth - width)).toBeLessThanOrEqual(1);
      }
    }).toPass({ timeout: 10_000 });
  });
});
