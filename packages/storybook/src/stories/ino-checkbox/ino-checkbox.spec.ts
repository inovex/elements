import { expect, Locator, test } from "@playwright/test";
import { goToStory } from '../test-utils';

test.describe('ino-checkbox', () => {

  let checkbox: Locator

  test.beforeEach(({ page }) => {
    checkbox = page.getByRole('checkbox');
  });

  test('can be toggled properly', async ({ page }) => {
    await goToStory(page, ['input', 'ino-checkbox', 'default']);

    await expect(checkbox).toBeChecked();

    await checkbox.click();

    await expect(checkbox).not.toBeChecked();
  });

  test('disabling prevents a change of checked', async ({ page }) => {
    await goToStory(page, ['input', 'ino-checkbox', 'disabled']);

    await expect(checkbox).toBeChecked();
    await expect(checkbox).toBeDisabled();
    await checkbox.click({ force: true });

    await expect(checkbox).toBeChecked();
  });
});
