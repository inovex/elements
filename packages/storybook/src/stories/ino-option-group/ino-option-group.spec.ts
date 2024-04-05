import { expect, Locator, test } from '@playwright/test';
import { goToStory } from '../test-utils';

test.describe('ino-option-group', () => {
  let inoOptionGroup: Locator;

  test.beforeEach(async ({ page }) => {
    await goToStory(page, ['Input', 'ino-option-group', 'default']);
    inoOptionGroup = page.locator('ino-option-group');
  });

  test('should be select an option', async () => {
    await expect(inoOptionGroup).toHaveCount(2);
    const firstGroup = inoOptionGroup.first();
    const inoOptions = firstGroup.locator('ino-option');
    await expect(inoOptions).toHaveCount(4);
    await expect(inoOptions.first()).toHaveText(
      await firstGroup.getAttribute('label'),
    );
  });
});
