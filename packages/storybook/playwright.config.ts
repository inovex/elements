import { defineConfig, devices } from '@playwright/test';
import { nxE2EPreset } from '@nx/playwright/preset';
import { fileURLToPath } from 'url';
import { workspaceRoot } from '@nx/devkit';

// @ts-expect-error we probably need a custom tsconfig for the playwright environment
const __filename = fileURLToPath(import.meta.url);
const STORYBOOK_URL = 'http://localhost:6007';
// For CI, you may want to set BASE_URL to the deployed application.
const baseURL = process.env['BASE_URL'] || STORYBOOK_URL; // storybook URL
/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();
/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  ...nxE2EPreset(__filename, { testDir: './src' }),
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    baseURL,
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-all-retries',
  },
  expect: {
    timeout: process.env.CI ? 30000 : 10000,
  },
  reporter: process.env.CI ? 'dot' : 'list',
  /* Run your local dev server before starting the tests */
  webServer: {
    command: 'yarn nx run storybook:preview',
    url: STORYBOOK_URL,
    reuseExistingServer: !process.env.CI,
    cwd: workspaceRoot,
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    // { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    // { name: 'webkit', use: { ...devices['Desktop Safari'] } },
  ],
});
