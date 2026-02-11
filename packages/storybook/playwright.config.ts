import { defineConfig, devices } from '@playwright/test';
import type { GitHubActionOptions } from '@estruyf/github-actions-reporter';

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: 'src',

  fullyParallel: true,

  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,

  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,

  reporter: process.env.CI
    ? [
        ['html', { open: 'never' }],
        [
          '@estruyf/github-actions-reporter',
          <GitHubActionOptions>{
            includeResults: ['fail', 'flaky', 'skipped'],
          },
        ],
      ]
    : [['list'], ['html', { open: 'never' }]],

  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    trace: 'retain-on-failure',
    video: process.env.ci ? 'off' : 'retain-on-failure',
  },
  expect: {
    timeout: process.env.CI ? 30000 : 10000,
  },
  /* Run your local dev server before starting the tests */
  webServer: {
    command: 'pnpm run start:prod',
    port: 6007,
    reuseExistingServer: !process.env.CI,
    timeout: 120000,
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    // { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    // { name: 'webkit', use: { ...devices['Desktop Safari'] } },
  ],
});
