import { newE2EPage } from '@stencil/core/testing';

/**
 * Helper function to create a new E2E page with the given content.
 * Waits for the page to load before resolving.
 * @param content HTML content to create the page from (e.g. `<ino-button>My Button</ino-button>`)
 */
export async function setupPageWithContent(content: string) {
  const page = await newE2EPage();
  await page.setContent(content);
  await page.waitForChanges();

  return page;
}
