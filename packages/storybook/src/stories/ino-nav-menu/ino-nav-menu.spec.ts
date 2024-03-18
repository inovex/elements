import { expect, Locator, test } from '@playwright/test';
import { goToStory } from '../test-utils';

test.describe('ino-nav-menu', () => {
  let menuSections: Locator;
  let sections: Locator;

  async function assertActive(menuItem: Locator) {
    return expect(menuItem).toHaveAttribute('aria-checked', 'true');
  }

  async function assertInactive(menuItem: Locator) {
    return expect(menuItem).toHaveAttribute('aria-checked', 'false');
  }

  test.beforeEach(({ page }) => {
    const navMenu = page.locator('ino-nav-menu');
    menuSections = navMenu.getByRole('menuitemradio');
    const sectionsContainer = page.locator('main');
    sections = sectionsContainer.getByText(/Section \d/);
  });

  test('sections are initialized properly', async ({ page }) => {
    await goToStory(page, ['structure', 'ino-nav-menu', 'default']);

    await expect(page.getByText('Sections', { exact: true })).toBeVisible();
    await expect(menuSections).toHaveCount(3);
    await expect(sections).toHaveCount(3);
  });

  test('scrolling feature is working properly', async ({ page }) => {
    await goToStory(page, ['structure', 'ino-nav-menu', 'default']);

    // initially only the first section should be visible
    await expect(sections.nth(0)).toBeInViewport();
    await expect(sections.nth(1)).not.toBeInViewport();
    await expect(sections.nth(2)).not.toBeInViewport();

    // after clicking on Section 2, it should be visible while all the others should be hidden
    await menuSections.nth(1).click();
    await expect(sections.nth(0)).not.toBeInViewport();
    await expect(sections.nth(1)).toBeInViewport();
    await expect(sections.nth(2)).not.toBeInViewport();

    // same for Section 3
    await menuSections.nth(2).click();
    await expect(sections.nth(0)).not.toBeInViewport();
    await expect(sections.nth(1)).not.toBeInViewport();
    await expect(sections.nth(2)).toBeInViewport();
  });

  test('scrolling state is updated correctly', async ({ page }) => {
    await goToStory(page, ['structure', 'ino-nav-menu', 'default']);

    // wait for sections to be rendered
    await expect(menuSections).toHaveCount(3);

    await assertActive(menuSections.nth(0));
    await assertInactive(menuSections.nth(1));
    await assertInactive(menuSections.nth(2));

    await menuSections.nth(1).click();
    await assertInactive(menuSections.nth(0)); // FIXME sections do not update on scroll
    await assertActive(menuSections.nth(1));
    await assertInactive(menuSections.nth(2));

    await menuSections.nth(2).click();
    await assertInactive(menuSections.nth(0));
    await assertInactive(menuSections.nth(1));
    await assertActive(menuSections.nth(2));
  });

  test('active sections can be set', async ({ page }) => {
    await goToStory(page, ['structure', 'ino-nav-menu', 'active-section']);

    // wait for sections to be rendered
    await expect(menuSections).toHaveCount(3)
    await assertActive(menuSections.nth(1));
  });

  test('menu title can be set', async ({ page }) => {
    await goToStory(page, ['structure', 'ino-nav-menu', 'menu-title']);
    await expect(page.getByText('Contents', { exact: true })).toBeVisible();
  });
});
