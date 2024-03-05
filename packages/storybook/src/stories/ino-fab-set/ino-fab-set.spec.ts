import { expect, Locator, test } from '@playwright/test';
import { goToStory } from '../test-utils';

test.describe('ino-fab-set', () => {
  let inoFabSet: Locator;

  test.beforeEach(async ({ page }) => {
    await goToStory(page, ['Buttons', 'ino-fab-set', 'default']);
    inoFabSet = page.locator('ino-fab-set');
  });

  test('should not open the dial by click', async () => {
    const { width, height } = await inoFabSet.boundingBox();
    await inoFabSet.click();
    const { width: openWidth, height: openHeight } =
      await inoFabSet.boundingBox();

    expect(openWidth).toEqual(width);
    expect(openHeight).toBeGreaterThan(height * 2);
  });
});
