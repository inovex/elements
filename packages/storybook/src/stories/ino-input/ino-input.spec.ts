import { expect, Page, test } from '@playwright/test';
import { assertAfterContent, goToStory, setAttribute } from '../test-utils';

function getInputUtilities(page: Page, testId?: string) {
  const inoInput = testId ? page.getByTestId(testId) : page.locator('ino-input');
  const input = inoInput.getByRole('textbox');
  const hiddenInput = inoInput.locator('input');
  const invalidInput = inoInput.locator('input:invalid');
  const helperText = inoInput.getByText('Helper message');
  const unitText = inoInput.locator('.mdc-text-field__affix--suffix');
  const label = inoInput.getByText('Input label');
  const arrowUp = inoInput.getByRole('img').first();
  const arrowDown = inoInput.getByRole('img').last();

  async function assertUnitVisible() {
    const unitOpacity = await unitText.evaluate(el => Number(window.getComputedStyle(el).opacity));
    expect(unitOpacity).toBeGreaterThan(0);
  }

  async function assertState(state: 'valid' | 'invalid') {
    const invalidInput = inoInput.locator('input:invalid');

    if (state === 'valid') await expect(invalidInput).toBeHidden();
    if (state === 'invalid') await expect(invalidInput).toBeVisible();
  }

  return {
    inoInput,
    input,
    hiddenInput,
    invalidInput,
    helperText,
    label,
    arrowUp,
    arrowDown,
    isInputReady: async () => expect(inoInput).toHaveClass(/hydrated/),
    assertUnitVisible,
    assertState,
  };
}

test.describe('ino-input', () => {
  test('can be typed in properly', async ({ page }) => {
    await goToStory(page, ['Input', 'ino-input', 'default']);
    const { input } = getInputUtilities(page);

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
    const { input, helperText } = getInputUtilities(page);

    await expect(helperText).toBeHidden();
    await input.click();
    await expect(helperText).toBeVisible();
    await input.blur();
    await expect(helperText).toBeHidden();
  });

  test('should display persistent helper text', async ({ page }) => {
    await goToStory(page, ['Input', 'ino-input', 'default']);
    const { inoInput, helperText } = getInputUtilities(page);

    await expect(helperText).toBeHidden();
    await setAttribute(inoInput, 'helper-persistent', 'true');
    await inoInput.hover();
    await expect(helperText).toBeVisible();
  });

  test('should display optional label hint', async ({ page }) => {
    await goToStory(page, ['Input', 'ino-input', 'default']);
    const { inoInput, label } = getInputUtilities(page);

    await assertAfterContent(label, null);
    await inoInput.hover();
    await setAttribute(inoInput, 'show-label-hint', 'true');
    await inoInput.hover();
    await assertAfterContent(label, '- Optional');
  });

  test('should display required label hint', async ({ page }) => {
    await goToStory(page, ['Input', 'ino-input', 'default']);
    const { inoInput, label } = getInputUtilities(page);

    await setAttribute(inoInput, 'required', 'true');
    await inoInput.hover();
    await assertAfterContent(label, null);
    await setAttribute(inoInput, 'show-label-hint', 'true');
    await inoInput.hover();
    await assertAfterContent(label, '*');
  });

  test('should display unit', async ({ page }) => {
    await goToStory(page, ['Input', 'ino-input', 'meta-data']);
    const { assertUnitVisible } = getInputUtilities(page);
    await assertUnitVisible();
  });

  test('should have correct input type', async ({ page }) => {
    await goToStory(page, ['Input', 'ino-input', 'default']);
    const { inoInput, hiddenInput } = getInputUtilities(page);

    await expect(hiddenInput).toHaveAttribute('type', 'text');
    await setAttribute(inoInput, 'type', 'email');
    await expect(hiddenInput).toHaveAttribute('type', 'email');
    await setAttribute(inoInput, 'type', 'number');
    await expect(hiddenInput).toHaveAttribute('type', 'number');
  });

  test('should be able to use arrow keys', async ({ page }) => {
    await goToStory(page, ['Input', 'ino-input', 'type']);
    const { hiddenInput: input, arrowUp, arrowDown } = getInputUtilities(page, 'input-test-steps');

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
    await arrowUp.click();
    await expect(input).toHaveValue('5');
    await arrowDown.click();
    await expect(input).toHaveValue('0');
  });

  test.fixme('should limit values by min and max', async ({ page }) => {
    await goToStory(page, ['Input', 'ino-input', 'type']);

    const {
      inoInput,
      hiddenInput: input,
      arrowUp,
      arrowDown,
      isInputReady,
    } = getInputUtilities(page, 'input-test-steps');

    await isInputReady();
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

    // test max border by arrow click
    await arrowUp.click();
    await arrowUp.click();
    await expect(input).toHaveValue('2');

    // test min border by arrow click
    await arrowDown.click();
    await arrowDown.click();
    await expect(input).toHaveValue('0');
  });

  test('should display error when input is required', async ({ page }) => {
    await goToStory(page, ['Input', 'ino-input', 'default']);
    const { inoInput, input, assertState } = getInputUtilities(page);

    await input.fill('ABC');

    await setAttribute(inoInput, 'required', 'true');
    await assertState('valid');

    await input.fill('');
    await input.blur();
    await assertState('invalid');
  });

  test('should display validation helper on error', async ({ page }) => {
    await goToStory(page, ['Input', 'ino-input', 'default']);
    const { inoInput, input, helperText, assertState } = getInputUtilities(page);

    await setAttribute(inoInput, 'required', 'true');
    await setAttribute(inoInput, 'helper-validation', 'true');
    await inoInput.hover();
    await expect(helperText).toBeHidden();

    await input.fill('');
    await expect(helperText).toBeHidden();
    await input.blur();
    await expect(helperText).toBeVisible();
  });
});
