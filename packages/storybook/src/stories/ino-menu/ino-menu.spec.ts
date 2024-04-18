import { expect, test } from '@playwright/test';
import { goToStory } from '../test-utils';

test.describe('InoMenu', () => {
  test('should be able to toggle ', async ({ page }) => {
    await goToStory(page, ['Structure', 'ino-menu', 'default']);
    const button = page.getByRole('button');
    const anyListItem = page.getByText('Item 1');

    await expect(anyListItem).toBeHidden();
    await button.click();
    await expect(anyListItem).toBeVisible();
    await button.click();
    await expect(anyListItem).toBeHidden();
  });
});
