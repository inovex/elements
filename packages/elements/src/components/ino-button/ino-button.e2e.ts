import { E2EElement, E2EPage } from '@stencil/core/testing';
import { setupPageWithContent } from '../../util/e2etests-setup';

describe('InoButton', () => {
  let page: E2EPage;
  let inoButtonEl: E2EElement;

  beforeEach(async () => {
    page = await setupPageWithContent(`<ino-button>Label</ino-button>`);
    inoButtonEl = await page.find('ino-button');
  });

  function pxStrToNumber(x: string): number {
    return parseInt(x, 10);
  }

  it('should render', async () => {
    expect(inoButtonEl).toBeDefined();
  });

  it('should keep dimensions if loading state is set', async () => {
    const originalBtn = await inoButtonEl.find('button');
    const { height, width } = await originalBtn.getComputedStyle();

    inoButtonEl.setAttribute('loading', true);
    await page.waitForChanges();

    const newBtn = await inoButtonEl.find('button');
    const {
      height: newHeight,
      width: newWidth,
    } = await newBtn.getComputedStyle();

    expect(
      Math.abs(pxStrToNumber(newWidth) - pxStrToNumber(width))
    ).not.toBeGreaterThanOrEqual(1);
    expect(
      Math.abs(pxStrToNumber(newHeight) - pxStrToNumber(height))
    ).not.toBeGreaterThanOrEqual(1);
  });

  it('should not fire an event if disabled', async () => {
    const clickEventSpy = await page.spyOnEvent('click');
    inoButtonEl.setAttribute('disabled', true);
    await page.waitForChanges();

    await inoButtonEl.click();
    await page.waitForChanges();
    expect(clickEventSpy).not.toHaveReceivedEvent();
  });
});
