import { newSpecPage, SpecPage } from '@stencil/core/testing';
import { FabSet } from './ino-fab-set';
import { Fab } from '../ino-fab/ino-fab';
import { Icon } from '../ino-icon/ino-icon';

describe('InoFabButton', () => {
  let page: SpecPage;
  let inoFabSet: HTMLInoFabSetElement;
  const eventSpy = jest.fn();

  beforeEach(async () => {
    page = await newSpecPage({
      components: [FabSet, Fab, Icon],
      html: `<ino-fab-set><ino-fab></ino-fab><ino-fab></ino-fab></ino-fab-set>`,
    });

    eventSpy.mockClear();
    inoFabSet = page.body.querySelector('ino-fab-set');
    page.win.addEventListener('click', eventSpy);
  });

  it('should be clickable by default', async () => {
    const inoPrimaryFab: HTMLElement = inoFabSet.shadowRoot.querySelector(
      'ino-fab >>> #primary-fab',
    );
    inoPrimaryFab.click();
    expect(eventSpy).toHaveBeenCalled();
  });
});
