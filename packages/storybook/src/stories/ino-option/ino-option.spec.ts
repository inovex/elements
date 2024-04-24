import { expect, Page, test } from '@playwright/test';
import { goToStory, setAttribute } from '../test-utils';

test.describe('ino-option', () => {
  function getOptionUtils(page: Page) {
    const inoSelect = page.locator('ino-select');
    const inoOption = page.locator('ino-option');

    async function selectOptionByText(text: string) {
      const option = page.getByText(text);
      await inoSelect.click();
      await expect(option, `Option "${text}" should be visible after clicking on the select.`).toBeVisible();
      await option.click();
    }

    async function assertSelectedOption(text: string | null) {
      const selectedText = inoSelect.locator('.mdc-select__selected-text');

      if (text === null) {
        await expect(selectedText).toHaveText('');
      } else {
        await expect(selectedText).toHaveText(text);
      }
    }

    return {
      select: inoSelect,
      option: inoOption,
      selectOptionByText,
      assertSelectedOption,
    };
  }

  test.beforeEach(async ({ page }) => {
    await goToStory(page, ['Input', 'ino-option', 'default']);
  });

  test('should be able to select an option', async ({ page }) => {
    const { assertSelectedOption, selectOptionByText } = getOptionUtils(page);

    await selectOptionByText('Content');
    await assertSelectedOption('Content');
  });

  test('should be disabled', async ({ page }) => {
    const { select, option, assertSelectedOption } = getOptionUtils(page);

    await setAttribute(option, 'disabled', 'true');
    await select.click();
    await option.click();
    await assertSelectedOption(null);
  });

  test('should be selected by default', async ({ page }) => {
    await goToStory(page, ['Input', 'ino-option', 'selected-option']);
    const { assertSelectedOption } = getOptionUtils(page);
    await assertSelectedOption('Content');
  });
});
