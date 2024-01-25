import AxeBuilder from '@axe-core/playwright';
import { test, expect } from '@playwright/test';

test('should not have any accessibility violations outside of rules with known issues', async ({
  page,
}) => {
  await page.goto(
    '/components/ino-segment-button/ino-segment-button-visual.html',
  );

  const accessibilityScanResults = await new AxeBuilder({ page })
    .disableRules([
      'document-title',
      'html-has-lang',
      'landmark-one-main',
      'page-has-heading-one',
      'landmark-no-duplicate-banner',
      'landmark-no-duplicate-contentinfo', //there are more landmark tags
      'landmark-no-duplicate-main',
      'meta-viewport',
      'region',
      'color-contrast',
    ])
    .analyze();

  expect(accessibilityScanResults.violations).toEqual([]);
});

test('should not have any accessibility violations for AA rules', async ({
  page,
}) => {
  await page.goto(
    '/components/ino-segment-button/ino-segment-button-visual.html',
  );

  const accessibilityScanResults = await new AxeBuilder({ page })
    .withTags(['wcag2aa'])
    .disableRules(['color-contrast'])
    .analyze();

  expect(accessibilityScanResults.violations).toEqual([]);
});
