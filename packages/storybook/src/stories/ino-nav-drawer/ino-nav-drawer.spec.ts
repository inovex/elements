import { expect, test } from '@playwright/test';
import { goToStory } from '../test-utils';

test.describe('ino-nav-drawer', () => {
  test('can be opened properly', async ({ page }) => {
    await goToStory(page, ['Structure', 'ino-nav-drawer', 'default']);
    const navDrawer = page.locator('ino-nav-drawer');
    const expandButton = page.locator('button:has-text("Toggle Navigation")');

    await expect(navDrawer).toHaveAttribute('open', '');
    await expandButton.click();
    await expect(navDrawer).toHaveAttribute('open', 'false');
  });
});
