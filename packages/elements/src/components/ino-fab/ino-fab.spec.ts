import { newSpecPage, SpecPage } from '@stencil/core/testing';
import { Fab } from './ino-fab';

describe('InoFabButton', () => {
  let page: SpecPage;
  let inoFab: HTMLInoFabElement;
  let innerButton: HTMLButtonElement;
  const eventSpy = jest.fn();

  beforeEach(async () => {
    page = await newSpecPage({
      components: [Fab],
      html: `<ino-fab></ino-fab>`,
    });

    eventSpy.mockClear();
    inoFab = page.body.querySelector('ino-fab');
    innerButton = inoFab.shadowRoot.querySelector('button');
    page.win.addEventListener('click', eventSpy);
  });

  it('should be clickable by default', async () => {
    innerButton.click();
    await page.waitForChanges();

    expect(eventSpy).toHaveBeenCalled();
  });

  it('should not be clickable in disabled state', async () => {
    inoFab.setAttribute('disabled', 'true');
    await page.waitForChanges();

    innerButton.click();
    await page.waitForChanges();

    expect(eventSpy).not.toHaveBeenCalled();
  });
});
