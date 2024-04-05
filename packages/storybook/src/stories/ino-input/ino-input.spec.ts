import { expect, test } from '@playwright/test';
import { goToStory, setAttribute } from '../test-utils';

test.describe('ino-input', () => {
  test('can be typed in properly', async ({ page }) => {
    await goToStory(page, ['Input', 'ino-input', 'default']);

    const input = page.locator('input');
    await expect(input).toBeEmpty();
    await input.fill('ABC');
    await expect(input).toHaveValue('ABC');
  });

  test('should not be able to input anything if disabled', async ({ page }) => {
    await goToStory(page, ['Input', 'ino-input', 'states']);

    const disabledInput = page.getByRole('textbox', {
      name: 'Disabled',
      exact: true,
    });
    await expect(disabledInput).toBeDisabled();
  });

  test('should display helper text helper-persistent', async ({ page }) => {
    await goToStory(page, ['Input', 'ino-input', 'default']);
    const inoInput = page.locator('ino-input');
    const input = inoInput.getByRole('textbox');
    const helper = inoInput.getByText('Helper message');

    await expect(helper).toBeHidden();
    await input.click();
    await expect(helper).toBeVisible();
    await input.blur();
    await expect(helper).toBeHidden();
  });

  test('should display persistent helper text', async ({ page }) => {
    await goToStory(page, ['Input', 'ino-input', 'default']);
    const inoInput = page.locator('ino-input');
    const helper = inoInput.getByText('Helper message');

    await expect(helper).toBeHidden();
    await setAttribute(inoInput, 'helper-persistent', 'true');
    await inoInput.hover();
    await expect(helper).toBeVisible();
  });

  test('should display optional label hint', async ({ page }) => {
    await goToStory(page, ['Input', 'ino-input', 'default']);
    const inoInput = page.locator('ino-input');
    const label = inoInput.getByText('Input label');
    const getHintContent = () =>
      label.evaluate((el) => window.getComputedStyle(el, ':after').content);

    expect(await getHintContent()).toEqual('none');
    await inoInput.hover();
    await setAttribute(inoInput, 'show-label-hint', 'true');
    await inoInput.hover();
    expect(await getHintContent()).toContain('- Optional');
  });

  test('should display required label hint', async ({ page }) => {
    await goToStory(page, ['Input', 'ino-input', 'default']);
    const inoInput = page.locator('ino-input');
    const label = inoInput.getByText('Input label');
    const getHintContent = () =>
      label.evaluate((el) => window.getComputedStyle(el, ':after').content);

    await setAttribute(inoInput, 'required', 'true');
    await inoInput.hover();
    expect(await getHintContent()).toEqual('none');
    await setAttribute(inoInput, 'show-label-hint', 'true');
    await inoInput.hover();
    expect(await getHintContent()).toContain('*');
  });

  test('should display unit', async ({ page }) => {
    await goToStory(page, ['Input', 'ino-input', 'default']);
    const inoInput = page.locator('ino-input');
    const nativeInput = page.locator('input');
    const unitText = inoInput.getByText('€');
    const getUnitOpacity = () =>
      unitText.evaluate((el) => Number(window.getComputedStyle(el).opacity));

    await setAttribute(inoInput, 'unit', '€');
    expect(await getUnitOpacity()).toBe(0);
    await nativeInput.click();
    expect(await getUnitOpacity()).toBeGreaterThan(0.5);
    await nativeInput.fill('100');
    await nativeInput.blur();
    expect(await getUnitOpacity()).toBe(1);
  });

  test('should have correct input type', async ({ page }) => {
    await goToStory(page, ['Input', 'ino-input', 'default']);
    const inoInput = page.locator('ino-input');
    const nativeInput = inoInput.locator('input');

    await expect(nativeInput).toHaveAttribute('type', 'text');
    await setAttribute(inoInput, 'type', 'email');
    await expect(nativeInput).toHaveAttribute('type', 'email');
    await setAttribute(inoInput, 'type', 'number');
    await expect(nativeInput).toHaveAttribute('type', 'number');
  });

  test('should be able to use arrow keys', async ({ page }) => {
    await goToStory(page, ['Input', 'ino-input', 'type']);

    const inoInput = page.getByTestId('input-test-steps');
    const input = inoInput.locator('input');

    // test steps by keyboard
    await input.press('ArrowUp');
    await input.press('ArrowUp');
    await expect(input).toHaveValue('10');
    await input.press('ArrowDown');
    await input.press('ArrowDown');
    await input.press('ArrowDown');
    await expect(input).toHaveValue('-5');

    // reset to 0
    await input.press('ArrowUp');
    await expect(input).toHaveValue('0');

    // test steps by arrow click
    const arrowUp = inoInput.getByRole('img').first();
    const arrowDown = inoInput.getByRole('img').last();
    await arrowUp.click();
    await expect(input).toHaveValue('5');
    await arrowDown.click();
    await expect(input).toHaveValue('0');
  });

  test('should limit values by min and max', async ({ page }) => {
    await goToStory(page, ['Input', 'ino-input', 'type']);

    const inoInput = page.getByTestId('input-test-steps');
    const input = inoInput.locator('input');

    await setAttribute(inoInput, 'min', '0');
    await setAttribute(inoInput, 'max', '2');
    await setAttribute(inoInput, 'step', '2');

    // test max border by keyboard
    await input.press('ArrowUp');
    await input.press('ArrowUp');
    await expect(input).toHaveValue('2');

    // test min border by keyboard
    await input.press('ArrowDown');
    await input.press('ArrowDown');
    await expect(input).toHaveValue('0');

    const arrowUp = inoInput.getByRole('img').first();
    const arrowDown = inoInput.getByRole('img').last();

    // test max border by arrow click
    await arrowUp.click();
    await arrowUp.click();
    await expect(input).toHaveValue('2');

    // test min border by arrow click
    await arrowDown.click();
    await arrowDown.click();
    await expect(input).toHaveValue('0');
  });
});

test.describe('ino-input - Error', () => {
  test('should display error when input is required', async ({ page }) => {
    await goToStory(page, ['Input', 'ino-input', 'default']);
    const inoInput = page.locator('ino-input');
    const nativeInput = page.locator('input');
    const invalidInput = page.locator('input:invalid');
    await nativeInput.fill('ABC');

    await setAttribute(inoInput, 'required', 'true');
    await expect(invalidInput).toBeHidden();

    await nativeInput.fill('');
    await nativeInput.blur();
    await expect(invalidInput).toBeVisible();
  });

  test('should display validation helper on error', async ({ page }) => {
    await goToStory(page, ['Input', 'ino-input', 'default']);
    const inoInput = page.locator('ino-input');
    const nativeInput = page.locator('input');
    const helper = inoInput.getByText('Helper message');

    await setAttribute(inoInput, 'required', 'true');
    await setAttribute(inoInput, 'helper-validation', 'true');
    await inoInput.hover();
    await expect(helper).toBeHidden();

    await nativeInput.fill('');
    await expect(helper).toBeHidden();
    await nativeInput.blur();
    await expect(helper).toBeVisible();
  });
});
