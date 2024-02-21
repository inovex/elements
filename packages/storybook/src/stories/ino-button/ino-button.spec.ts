import { expect, Locator, test } from '@playwright/test';
import { goToStory, setAttribute } from '../test-utils';

test.describe('ino-button', () => {
  let inoButton: Locator;

  async function getButtonDimensions() {
    const { height, width } = await inoButton
      .getByRole('button')
      .evaluate((btn) => window.getComputedStyle(btn));

    return {
      height: parseInt(height, 10),
      width: parseInt(width, 10),
    };
  }

  test.beforeEach(async ({ page }) => {
    await goToStory(page, ['buttons', 'ino-button', 'default']);
    inoButton = page.locator('ino-button');
  });

  test('should keep dimensions if loading state is set', async () => {
    const spinnerEl = inoButton.locator('ino-spinner');

    const { height, width } = await getButtonDimensions();

    // set loading and wait for spinner to show
    await setAttribute(inoButton, 'loading', 'true');
    await expect(spinnerEl).toBeVisible();

    // disable loading and wait for spinner to disappear
    await setAttribute(inoButton, 'loading', 'false');
    await expect(spinnerEl).toBeHidden();

    const { height: newHeight, width: newWidth } = await getButtonDimensions();

    expect(Math.abs(newHeight - height)).toBeLessThanOrEqual(1);
    expect(Math.abs(newWidth - width)).toBeLessThanOrEqual(1);
  });
});
