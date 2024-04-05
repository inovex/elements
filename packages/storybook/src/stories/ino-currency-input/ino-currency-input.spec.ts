import { expect, Page, test } from '@playwright/test';
import { goToStory, setAttribute, setProperty } from '../test-utils';

test.describe('ino-currency-input', () => {
  function provideLocators(page: Page) {
    const inoCurrencyInput = page.locator('ino-currency-input');
    const hiddenInput = inoCurrencyInput.locator('input[type=hidden]');
    const inoInput = inoCurrencyInput.locator('ino-input');
    const input = inoInput.getByRole('textbox');

    return {
      inoCurrencyInput,
      input,
      inoInput,
      hiddenInput,
    };
  }

  test.beforeEach(async ({ page }) => {
    await goToStory(page, ['Input', 'ino-currency-input', 'default']);
    const inoCurrencyInput = page.locator('ino-currency-input');
    await setAttribute(inoCurrencyInput, 'value', '');
  });

  test('should set value attribute', async ({ page }) => {
    const { input, hiddenInput } = provideLocators(page);
    await input.fill('500,00');
    await input.blur();
    await expect(input).toHaveValue('500,00');
    await expect(hiddenInput).toHaveValue('500');
  });

  test('should format thousands on blur', async ({ page }) => {
    const { input } = provideLocators(page);
    await input.fill('15000,99');
    await input.blur();
    await expect(input).toHaveValue('15.000,99');
  });

  test('should render with different locale', async ({ page }) => {
    const { input, inoCurrencyInput } = provideLocators(page);
    await setAttribute(inoCurrencyInput, 'currency-locale', 'en-US');
    await input.fill('15000.99');
    await input.blur();
    await expect(input).toHaveValue('15,000.99');
  });

  test('should allow negative inputs', async ({ page }) => {
    const { input, hiddenInput } = provideLocators(page);
    await input.fill('-1500,00');
    await expect(input).toHaveValue('-1500,00');
    await expect(hiddenInput).toHaveValue('-1500');
  });

  test('should prevent negative inputs on min=0', async ({ page }) => {
    const { input, hiddenInput, inoInput } = provideLocators(page);
    await setProperty(inoInput, 'min', '0');
    await input.fill('-1500,00');
    await expect(hiddenInput).toHaveValue('1500');
  });
});
