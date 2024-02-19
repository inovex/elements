import { expect, Locator, test } from '@playwright/test';
import { goToStory } from '../test-utils';

test.describe('ino-chip', () => {
  let chip: Locator;

  test.beforeEach(async ({ page }) => {
    await goToStory(page, ['buttons', 'ino-chip', 'default']);
    chip = page.locator('ino-chip');
  });

  test('should render chip', async () => {
    await expect(chip).toBeInViewport();
  });

  test('should not render remove icon when removable is not set', async () => {
    await expect(chip.locator('ino-icon')).not.toBeInViewport();
  });

  test('should render remove icon when removable is set true', async () => {
    await chip.evaluate((el) => el.setAttribute('removable', 'true'));
    await expect(chip.locator('ino-icon')).toBeInViewport();
  });

  test('should render checkmark if selectable and selected is set', async () => {
    await chip.evaluate((el) => {
      el.setAttribute('selectable', 'true');
      el.setAttribute('selected', 'true');
    });

    await expect(chip.locator('svg')).toBeInViewport();
  });
});
