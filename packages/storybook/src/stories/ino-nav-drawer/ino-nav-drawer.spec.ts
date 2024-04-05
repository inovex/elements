import { expect, test } from '@playwright/test';
import { goToStory } from '../test-utils';

test.describe('ino-nav-drawer', () => {
  test('can be opened properly', async ({ page }) => {
    await goToStory(page, ['Structure', 'ino-nav-drawer', 'default']);
    const home = page.getByText('Home');
    const expandButton = page.getByRole('button', {
      name: 'Toggle Navigation',
    });

    await expect(home).toBeVisible();
    await expandButton.click();
    await expect(home).toBeHidden();
  });
});
