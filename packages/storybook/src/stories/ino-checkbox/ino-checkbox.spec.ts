import { expect, test } from '@playwright/test';
import { goToStory } from '../test-utils';

test.describe('ino-checkbox', () => {
  test('checkbox can be changed by click', async ({ page }) => {
    await goToStory(page, ['input', 'ino-checkbox', 'default']);

    const checkbox = page.getByRole('checkbox');

    await expect(checkbox).toBeChecked();

    await checkbox.click();

    await expect(checkbox).not.toBeChecked();
  });
});
