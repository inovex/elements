import { newSpecPage, SpecPage } from '@stencil/core/testing';
import { FabSet } from './ino-fab-set';
import { Fab } from '../ino-fab/ino-fab';
import { listenForEvent } from '../../util/test-utils';

describe('InoFabButton', () => {
  let page: SpecPage;
  let inoFabSet: HTMLInoFabSetElement;

  beforeEach(async () => {
    page = await newSpecPage({
      components: [FabSet, Fab],
      html: `<ino-fab-set><ino-fab></ino-fab><ino-fab></ino-fab></ino-fab-set>`,
    });
    inoFabSet = page.body.querySelector('ino-fab-set');
  });

  it('should be clickable by default', async () => {
    const { eventSpy } = listenForEvent(page, 'click');
    const inoPrimaryFab: HTMLElement = inoFabSet.querySelector('#primary-fab');
    inoPrimaryFab.click();
    expect(eventSpy).toHaveBeenCalled();
  });
});
