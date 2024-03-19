import { expect, Locator, test } from '@playwright/test';
import { goToStory, setAttribute, setProperty } from '../test-utils';

test.describe('ino-currency-input', () => {
  let inoCurrencyInput: Locator;
  let input: Locator;
  let inoInput: Locator;
  let hiddenInput: Locator;

  test.beforeEach(async ({ page }) => {
    await goToStory(page, ['Input', 'ino-currency-input', 'default']);
    inoCurrencyInput = page.locator('ino-currency-input');
    hiddenInput = inoCurrencyInput.locator('input[type=hidden]');
    inoInput = inoCurrencyInput.locator('ino-input');
    input = inoInput.getByRole('textbox');
    await setAttribute(inoCurrencyInput, 'value', '');
  });

  test('should set value attribute', async () => {
    await setAttribute(inoCurrencyInput, 'value', '15000.99');

    await expect(input).toHaveValue('15.000,99');
    await expect(hiddenInput).toHaveValue('15000.99');
  });

  test('should format thousands on blur', async () => {
    await setAttribute(inoCurrencyInput, 'value', '15000.99');

    await inoCurrencyInput.blur();
    await expect(input).toHaveValue('15.000,99');
  });

  test('should render with different locale', async () => {
    await setAttribute(inoCurrencyInput, 'currency-locale', 'en-US');
    await setAttribute(inoCurrencyInput, 'value', '15000.99');

    await expect(input).toHaveValue('15,000.99');
  });

  test('should allow negative inputs', async () => {
    await input.pressSequentially('-1500,00');
    await expect(input).toHaveValue('-1500,00');
    await expect(hiddenInput).toHaveValue('-1500');
  });

  test('should prevent negative inputs on min=0', async () => {
    await setProperty(inoInput, 'min', '0');

    await input.pressSequentially('-1500,00');
    await expect(hiddenInput).toHaveValue('1500');
  });
});
