const { join } = require('path');

/**
 * @type {import("puppeteer").Configuration}
 */
module.exports = {
  // Changes the cache location for Puppeteer.
  cacheDirectory: join(__dirname, 'node_modules', '.cache', 'puppeteer'),
  skipChromeHeadlessShellDownload: true,
  downloadBaseUrl: 'https://storage.googleapis.com/chrome-for-testing-public',
  defaultProduct: 'chrome',
};
