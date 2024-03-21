import { expect, test } from '@playwright/test';
import { goToStory } from '../test-utils';

test.describe('ino-input', () => {

  test('can be typed in proparly', async ({ page }) => {
    await goToStory(page, ['Input', 'ino-input', 'default']);

    const input = page.locator('input');
    await expect(input).toBeEmpty();
    await input.fill('ABC');
    await expect(input).toHaveValue('ABC');
  });

  test('should not be able to input anything if disabled', async ({ page }) => {
    await goToStory(page, ['Input', 'ino-input', 'states']);

    const disabledInput = page.getByRole('textbox', { name: 'Disabled', exact: true })
    await expect(disabledInput).toBeDisabled();
  });

  test('should not be able to input anything if disabled', async ({ page }) => {
    await goToStory(page, ['Input', 'ino-input', 'states']);

    const disabledInput = page.getByRole('textbox', { name: 'Disabled', exact: true })
    await expect(disabledInput).toBeDisabled();
  });

  test('should be able to use arrow keys', async ({ page }) => {
    await goToStory(page, ['Input', 'ino-input', 'type']);

    const inoInput = page.getByTestId('input-test-steps')
    const input = inoInput.locator('input')

    // test steps by keyboard
    await input.press('ArrowUp')
    await input.press('ArrowUp')
    await expect(input).toHaveValue('10')
    await input.press('ArrowDown')
    await input.press('ArrowDown')
    await input.press('ArrowDown')
    await expect(input).toHaveValue('-5')

    // reset to 0
    await input.press('ArrowUp')
    await expect(input).toHaveValue('0')

    // test steps by arrow click
    const arrowUp = inoInput.getByRole('img').first()
    const arrowDown = inoInput.getByRole('img').last()
    await arrowUp.click()
    await expect(input).toHaveValue('5')
    await arrowDown.click()
    await expect(input).toHaveValue('0')
  });
});
