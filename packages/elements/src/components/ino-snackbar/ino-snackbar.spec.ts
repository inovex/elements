import { newSpecPage, SpecPage } from '@stencil/core/testing';
import { Snackbar } from './ino-snackbar';
import { IconButton } from '../ino-icon-button/ino-icon-button';
import { listenForEvent } from '../../util/test-utils';

describe('InoSnackbar', () => {
  let page: SpecPage;
  let inoSnackbar: HTMLInoSnackbarElement;

  beforeEach(async () => {
    page = await newSpecPage({
      components: [Snackbar, IconButton],
      html: `<ino-snackbar></ino-snackbar>`,
    });
    inoSnackbar = page.body.querySelector('ino-snackbar');
  });

  it('should emit an actionClick event upon clicking the button', async () => {
    const { eventSpy } = listenForEvent(page, 'actionClick');

    inoSnackbar.setAttribute('action-text', 'my action');
    await page.waitForChanges();
    inoSnackbar
      .querySelector<HTMLButtonElement>('.ino-snackbar-action-btn')
      .click();
    await page.waitForChanges();

    expect(eventSpy).toHaveBeenCalled();
  });
});
