import { newSpecPage, SpecPage } from '@stencil/core/testing';
import { Fab } from './ino-fab';
import { listenForEvent } from '../../util/test-utils';

describe('InoFabButton', () => {
  let page: SpecPage;
  let inoFab: HTMLInoFabElement;
  let innerButton: HTMLButtonElement;

  beforeEach(async () => {
    page = await newSpecPage({
      components: [Fab],
      html: `<ino-fab></ino-fab>`,
    });

    inoFab = page.body.querySelector('ino-fab');
    innerButton = inoFab.querySelector('button');
  });

  it('should be clickable by default', async () => {
    const { eventSpy } = listenForEvent(page, 'click');
    innerButton.click();
    await page.waitForChanges();

    expect(eventSpy).toHaveBeenCalled();
  });

  it('should not be clickable in disabled state', async () => {
    const { eventSpy } = listenForEvent(page, 'click');
    inoFab.setAttribute('disabled', 'true');
    await page.waitForChanges();

    innerButton.click();
    await page.waitForChanges();

    expect(eventSpy).not.toHaveBeenCalled();
  });
});
