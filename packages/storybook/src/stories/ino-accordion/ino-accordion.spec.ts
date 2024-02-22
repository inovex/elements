import { expect, Locator, test } from '@playwright/test';
import { goToStory } from '../test-utils';

test.describe('ino-accordion', () => {
  let expandButton: Locator;

  test.beforeEach(({ page }) => {
    expandButton = page.getByRole('button');
  });

  test('can be expanded properly', async ({ page }) => {
    await goToStory(page, ['structure', 'ino-accordion', 'default']);

    const title = page.getByText('Accordion Title')
    const text = page.getByText('Lorem ipsum dolor sit amet');

    await expect(title).toBeVisible();
    await expect(expandButton).toHaveAttribute('aria-expanded', 'false');
    await expect(text).toBeHidden();

    await expandButton.click();

    await expect(expandButton).toHaveAttribute('aria-expanded', 'true');
    await expect(text).toBeVisible();
  });
});
