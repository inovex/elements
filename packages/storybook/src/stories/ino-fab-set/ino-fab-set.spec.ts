import { expect, Locator, test } from '@playwright/test';
import { goToStory, setAttribute } from '../test-utils';

test.describe('ino-fab-set', () => {
  let inoFabSet: Locator;

  test.beforeEach(async ({ page }) => {
    await goToStory(page, ['Buttons', 'ino-fab-set', 'extended']);
    inoFabSet = page.locator('ino-fab-set');
  });

  test('should not open the dial by click', async () => {
    const inoFabLocator = inoFabSet.locator('ino-speed-dial > ino-fab');
    for (const inoFab of await inoFabLocator.all()) {
      await expect(inoFab).toBeHidden();
    }
    await inoFabSet.click();

    for (const inoFab of await inoFabLocator.all()) {
      await expect(inoFab).toBeVisible();
    }
  });

  test('should correctly change dial direction based on orientation', async ({ page }) => {
    const inoFabSetWrapper = page.locator('.ino-fab-set-wrapper');
    await inoFabSet.click();
    await expect(inoFabSetWrapper).toHaveClass('ino-fab-set-wrapper ino-direction-top');
    await inoFabSet.click();
    await setAttribute(inoFabSet, 'orientation', 'horizontal');
    await inoFabSet.click();
    await expect(inoFabSetWrapper).toHaveClass('ino-fab-set-wrapper ino-direction-right');
  });
});
