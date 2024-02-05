import { test, expect } from '@playwright/test'

test('Login Form inputs', async ({ page }) => {
  await page.goto('http://localhost:6006/iframe.html?id=input-ino-checkbox--default');

  const checkbox = page.getByRole('checkbox')

  await expect(checkbox).toBeChecked()

  await checkbox.click()

  await expect(checkbox).not.toBeChecked()
});
