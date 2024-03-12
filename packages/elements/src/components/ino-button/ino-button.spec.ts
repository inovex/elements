import { newSpecPage, SpecPage } from '@stencil/core/testing';
import { Button } from './ino-button';

describe('InoButton', () => {
  let page: SpecPage;
  let inoButtonEl: HTMLInoButtonElement;

  beforeEach(async () => {
    page = await newSpecPage({
      components: [Button],
      html: `<ino-button></ino-button>`,
    });

    inoButtonEl = page.body.querySelector('ino-button');
  });

  it('should render', async () => {
    expect(inoButtonEl).toBeDefined();
  });

  it('fires an event on click', async () => {
    let clickEventSpy = jest.fn();
    page.win.addEventListener('click', clickEventSpy);

    inoButtonEl.click();
    await page.waitForChanges();
    expect(clickEventSpy).toHaveBeenCalled();
  });

  it('should not fire an event if disabled', async () => {
    let clickEventSpy = jest.fn();
    page.win.addEventListener('click', clickEventSpy);

    inoButtonEl.setAttribute('disabled', 'true');
    await page.waitForChanges();

    inoButtonEl.click();
    await page.waitForChanges();
    expect(clickEventSpy).not.toHaveBeenCalled();
  });
});
