import { expect, Locator, test } from '@playwright/test';
import { goToStory } from '../test-utils';

test.describe('ino-card', () => {
  let inoCard: Locator;

  test.beforeEach(async ({ page }) => {
    await goToStory(page, ['Structure', 'ino-card', 'default']);
    inoCard = page.locator('ino-card');
  });

  test('should render with selected set to true', async () => {
    const div = inoCard.locator('div').first();
    await inoCard.evaluate((card) => card.setAttribute('selected', 'true'));

    const classList= await div.evaluate((e) => e.classList);
    await expect(inoCard).toHaveAttribute('selected');
    expect(Object.values(classList)).toContainEqual('ino-card--selected');
  });

  test('should render with check mark if selected', async () => {
    await inoCard.evaluate((card) => card.setAttribute('selected', 'true'));
    const check_mark = inoCard.locator('.ino-card__checkmark');
    await expect(check_mark).toBeVisible();
  });
});
