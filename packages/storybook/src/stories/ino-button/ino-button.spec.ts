import { expect, Locator, test } from '@playwright/test';
import { goToStory } from '../test-utils';

test.describe('ino-button', () => {
  let inoButton: Locator;

  test.beforeEach(async ({ page }) => {
    await goToStory(page, ['Buttons', 'ino-button', 'default']);
    inoButton = page.locator('ino-button');
  });

  test('should keep dimensions if loading state is set', async () => {
    const originalBtn = inoButton.getByRole('button');
    const pxStrToNumber = (x: string) => parseInt(x, 10);

    const { height, width } = await originalBtn.evaluate((btn) =>
      window.getComputedStyle(btn),
    );
    await inoButton.evaluate((btn) => btn.setAttribute('loading', 'true'));

    const { height: newHeight, width: newWidth } = await originalBtn.evaluate(
      (btn) => window.getComputedStyle(btn),
    );

    expect(
      Math.abs(pxStrToNumber(newWidth) - pxStrToNumber(width)),
    ).toBeLessThanOrEqual(1);
    expect(
      Math.abs(pxStrToNumber(newHeight) - pxStrToNumber(height)),
    ).toBeLessThanOrEqual(1);
  });
});
