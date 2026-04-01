import { expect, test } from '@playwright/test';
import { goToStory } from '../test-utils';

test.describe('ino-nav-drawer', () => {
  test('can be opened properly', async ({ page }) => {
    await goToStory(page, ['Structure', 'ino-nav-drawer', 'default']);
    const home = page.getByText('Home');
    const expandButton = page.getByRole('button', {
      name: 'Toggle Navigation',
    });

    await expect(home).toBeVisible();
    await expandButton.click();
    await expect(home).toBeHidden();
  });

  test('emits openChange with false when toggle is clicked while open', async ({ page }) => {
    await goToStory(page, ['Structure', 'ino-nav-drawer', 'default']);
    const navDrawer = page.locator('ino-nav-drawer');
    const expandButton = page.getByRole('button', { name: 'Toggle Navigation' });

    // Open the drawer first
    await navDrawer.evaluate((el: any) => (el.open = true));

    // Capture the openChange event detail
    const openChangeDetail = page.evaluate(
      () =>
        new Promise<boolean>(resolve => {
          document.querySelector('ino-nav-drawer').addEventListener('openChange', (e: CustomEvent) => resolve(e.detail), { once: true });
        }),
    );

    await expandButton.click();
    expect(await openChangeDetail).toBe(false);
  });

  test('emits openChange with true when toggle is clicked while closed', async ({ page }) => {
    await goToStory(page, ['Structure', 'ino-nav-drawer', 'default']);
    const navDrawer = page.locator('ino-nav-drawer');
    const expandButton = page.getByRole('button', { name: 'Toggle Navigation' });

    // Ensure drawer is closed
    await navDrawer.evaluate((el: any) => (el.open = false));

    const openChangeDetail = page.evaluate(
      () =>
        new Promise<boolean>(resolve => {
          document.querySelector('ino-nav-drawer').addEventListener('openChange', (e: CustomEvent) => resolve(e.detail), { once: true });
        }),
    );

    await expandButton.click();
    expect(await openChangeDetail).toBe(true);
  });
});
