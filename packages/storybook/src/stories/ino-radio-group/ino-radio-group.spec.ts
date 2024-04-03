import { expect, Locator, test } from '@playwright/test';
import { goToStory } from '../test-utils';

test.describe('ino-radio-group', () => {
  let inoRadioGroup: Locator;
  let radios: Locator;

  test.beforeEach(async ({ page }) => {
    await goToStory(page, ['Input', 'ino-radio-group', 'default']);
    inoRadioGroup = page.locator('ino-radio-group');
    radios = inoRadioGroup.getByRole('radio');
  });

  test('should have grouped three radios', async () => {
    await expect(radios).toHaveCount(3);
    await expect(inoRadioGroup).toHaveAttribute('value', 'opt-2');
  });

  test('should check radios with arrow keys', async () => {
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
