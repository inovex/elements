import { expect, Locator, test } from '@playwright/test';
import { goToStory } from '../test-utils';

test.describe('ino-fab-set', () => {
  let inoFabSet: Locator;

  test.beforeEach(async ({ page }) => {
    await goToStory(page, ['Buttons', 'ino-fab-set', 'default']);
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
});
