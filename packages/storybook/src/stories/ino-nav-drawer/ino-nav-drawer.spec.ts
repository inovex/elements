import { expect, Locator, test } from '@playwright/test';
import { goToStory } from '../test-utils';

test.describe('ino-nav-drawer', () => {
  let expandButton: Locator;

  test.beforeEach(({ page }) => {
    expandButton = page.locator('button:has-text("Toggle Navigation")');
  });

  test('can be opened properly', async ({ page }) => {
    await goToStory(page, ['structure', 'ino-nav-drawer', 'default']);

    const navDrawer = page.locator('ino-nav-drawer');

    await expect(navDrawer).toHaveAttribute('open', '');

    await expandButton.click();

    await expect(navDrawer).toHaveAttribute('open', 'false');
  });
});
