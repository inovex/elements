import { newE2EPage } from '@stencil/core/testing';

describe('example', () => {
  it('should render a ino-button', async () => {
    const page = await newE2EPage();
    await page.setContent(`<ino-button></ino-button>`);

    const el = await page.find('ino-button');
    expect(el).toBeDefined();
  });
});
