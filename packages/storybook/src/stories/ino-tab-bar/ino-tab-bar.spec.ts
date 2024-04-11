import { expect, Locator, test } from '@playwright/test';
import { goToStory } from '../test-utils';

test.describe('ino-tab-bar', () => {
  let inoTab: Locator;
  let inoTabBar: Locator;

  test.beforeEach(async ({ page }) => {
    inoTabBar = page.locator('ino-tab-bar');
    inoTab = inoTabBar.locator('ino-tab');
  });

  test('should render with the inoActiveTab property set correctly', async ({
    page,
  }) => {
    await goToStory(page, ['Structure', 'ino-tab-bar', 'active-tab']);
    const selectedTab = page.getByRole('tab', { selected: true });
    await expect(selectedTab).toContainText('messages', { ignoreCase: true });
  });

  test('should set the clicked ino-tab as the active tab in the ino-tab-bar', async ({
    page,
  }) => {
    await goToStory(page, ['Structure', 'ino-tab-bar', 'default']);
    await inoTab.nth(1).click();
    const selectedTab = page.getByRole('tab', { selected: true });
    await expect(selectedTab).toContainText('messages', { ignoreCase: true });
  });
});
