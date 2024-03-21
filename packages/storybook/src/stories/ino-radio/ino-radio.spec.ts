import { expect, test } from '@playwright/test';
import { goToStory } from '../test-utils';

test.describe('ino-radio', () => {
  test('should able to check radio if disabled', async ({ page }) => {
    await goToStory(page, ['Input', 'ino-radio', 'disabled']);
    const inoRadio = page.locator('ino-radio');
    const input = inoRadio.getByRole('radio')

    await expect(input).toBeDisabled()
    await expect(input).not.toBeChecked()
    await inoRadio.click()
    await expect(input).not.toBeChecked()
  });
});
