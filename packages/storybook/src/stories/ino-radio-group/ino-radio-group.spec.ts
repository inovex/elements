import { expect, test } from '@playwright/test';
import { goToStory } from '../test-utils';

test.describe('ino-radio-group', () => {
  test.beforeEach(async ({ page }) => {
    await goToStory(page, ['Input', 'ino-radio-group', 'default']);
  });

  test('should have grouped three radios', async ({ page }) => {
    const inoRadioGroup = page.locator('ino-radio-group');
    const radios = inoRadioGroup.getByRole('radio');
    await expect(radios).toHaveCount(3);
    await expect(inoRadioGroup).toHaveAttribute('value', 'opt-2');
  });

  test('should check radios with arrow keys', async ({ page }) => {
    const inoRadioGroup = page.locator('ino-radio-group');
    await expect(inoRadioGroup).toHaveAttribute('value', 'opt-2');
    await inoRadioGroup.press('Tab');

    await inoRadioGroup.press('ArrowUp');
    await expect(inoRadioGroup).toHaveAttribute('value', 'opt-1');
    await inoRadioGroup.press('ArrowUp');
    await expect(inoRadioGroup).toHaveAttribute('value', 'opt-3');
    await inoRadioGroup.press('ArrowDown');
    await expect(inoRadioGroup).toHaveAttribute('value', 'opt-1');
    await inoRadioGroup.press('ArrowRight');
    await expect(inoRadioGroup).toHaveAttribute('value', 'opt-2');
    await inoRadioGroup.press('ArrowRight');
    await expect(inoRadioGroup).toHaveAttribute('value', 'opt-3');
    await inoRadioGroup.press('ArrowLeft');
    await expect(inoRadioGroup).toHaveAttribute('value', 'opt-2');
  });
});
