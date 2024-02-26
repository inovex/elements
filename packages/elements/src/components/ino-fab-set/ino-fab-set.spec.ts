import { newSpecPage, SpecPage } from '@stencil/core/testing';
import { FabSet } from './ino-fab-set';
import { Fab } from '../ino-fab/ino-fab';

describe('InoFabButton', () => {
  let page: SpecPage;
  let inoFabSet: HTMLInoFabSetElement;
  const eventSpy = jest.fn();

  beforeEach(async () => {
    page = await newSpecPage({
      components: [FabSet, Fab],
      html: `<ino-fab-set><ino-fab></ino-fab><ino-fab></ino-fab></ino-fab-set>`,
    });

    eventSpy.mockClear();
    inoFabSet = page.body.querySelector('ino-fab-set');
    page.win.addEventListener('click', eventSpy);
  });

  it('should be clickable by default', async () => {
    const inoPrimaryFab: HTMLElement = inoFabSet.querySelector('#primary-fab');
    inoPrimaryFab.click();
    expect(eventSpy).toHaveBeenCalled();
  });
});
