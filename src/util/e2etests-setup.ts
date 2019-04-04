import { newE2EPage } from '@stencil/core/testing';

export async function setupPageWithContent(content: string) {
  const page = await newE2EPage();
  await page.setContent(content);
  return page;
}
