import { expect, Locator, test } from '@playwright/test';
import { goToStory, setAttribute } from '../test-utils';

test.describe('ino-card', () => {
  let inoCard: Locator;

  test.beforeEach(async ({ page }) => {
    await goToStory(page, ['Structure', 'ino-card', 'default']);
    inoCard = page.locator('ino-card');
  });

  test('should render with check mark if selected', async () => {
    await setAttribute(inoCard, 'selected', 'true');
    const check_mark = inoCard.locator('.ino-card__checkmark');
    await expect(check_mark).toBeVisible();
  });
});
