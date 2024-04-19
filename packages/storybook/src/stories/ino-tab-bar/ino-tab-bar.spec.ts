import { expect, Page, test } from '@playwright/test';
import { goToStory } from '../test-utils';

function getTabBarUtilities(page: Page) {
  const tabBar = page.locator('ino-tab-bar');
  const tabs = tabBar.locator('ino-tab');
  const selectedTab = page.getByRole('tab', { selected: true });

  async function assertSelectedTab(tab: string) {
    return expect(selectedTab).toContainText(tab, { ignoreCase: true });
  }

  return { tabBar, tabs, assertSelectedTab };
}

test.describe('ino-tab-bar', () => {
  test('should render with the inoActiveTab property set correctly', async ({ page }) => {
    await goToStory(page, ['Structure', 'ino-tab-bar', 'active-tab']);
    const { assertSelectedTab } = getTabBarUtilities(page);
    await assertSelectedTab('messages');
  });

  test('should set the clicked ino-tab as the active tab in the ino-tab-bar', async ({ page }) => {
    await goToStory(page, ['Structure', 'ino-tab-bar', 'default']);
    const { tabs, assertSelectedTab } = getTabBarUtilities(page);

    await tabs.nth(1).click();
    await assertSelectedTab('messages');
  });

  test('should be able to select tabs with keyboard', async ({ page }) => {
    await goToStory(page, ['Structure', 'ino-tab-bar', 'default']);
    const { tabBar, assertSelectedTab } = getTabBarUtilities(page);

    await tabBar.press('Tab'); // initial focus
    await assertSelectedTab('user');
    await tabBar.press('Tab');
    await tabBar.press('Enter');
    await assertSelectedTab('messages');
  });
});
