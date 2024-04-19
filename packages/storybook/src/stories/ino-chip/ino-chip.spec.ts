import { expect, Locator, test } from '@playwright/test';
import { goToStory, setAttribute } from '../test-utils';

test.describe('ino-chip', () => {
  let chip: Locator;

  test.beforeEach(async ({ page }) => {
    await goToStory(page, ['Buttons', 'ino-chip', 'default']);
    chip = page.locator('ino-chip');
  });

  test('should render chip', async () => {
    await expect(chip).toBeVisible();
  });

  test('should not render remove icon when removable is not set', async () => {
    await expect(chip.getByRole('button')).toHaveCount(1);
    await expect(chip.locator('ino-icon')).toBeHidden();
  });

  test('should render remove icon when removable is set true', async () => {
    await setAttribute(chip, 'removable', 'true');

    await expect(chip.getByRole('button')).toHaveCount(4);
    await expect(chip.locator('ino-icon')).toBeVisible();
  });

  test('should render checkmark if selectable and selected is set', async () => {
    await setAttribute(chip, 'selectable', 'true');
    await setAttribute(chip, 'selected', 'true');

    const selectedOption = chip.getByRole('option').and(chip.locator('[aria-selected]'));

    await expect(selectedOption).toBeVisible();
    await expect(chip.locator('svg')).toBeVisible();
  });
});
