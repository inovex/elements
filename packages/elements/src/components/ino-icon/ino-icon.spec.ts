import { newSpecPage, SpecPage } from '@stencil/core/testing';
import { Icon } from './ino-icon';
import { listenForEvent } from '../../util/test-utils';
import { SvgParser } from '../../util/svg-parser';

const svgMock =
  '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle r="10" cx="12" cy="12" fill="red" /></svg>';

describe('ino-icon', () => {
  let page: SpecPage;
  let inoIconEl: HTMLInoIconElement;
  let iEl: HTMLElement;

  jest
    .spyOn(global, 'fetch')
    .mockReturnValue(Promise.resolve(new Response(svgMock)));
  jest.spyOn(SvgParser, 'removeSvgTitle').mockReturnValue(svgMock);

  beforeEach(async () => {
    page = await newSpecPage({
      components: [Icon],
      html: `<ino-icon icon="add"></ino-icon>`,
    });
    inoIconEl = page.body.querySelector('ino-icon');
    iEl = inoIconEl.shadowRoot.querySelector('i');
  });

  it('should emit a clickEl event if a clickable icon has been clicked', async () => {
    const { eventSpy } = listenForEvent(page, 'clickEl');

    inoIconEl.setAttribute('clickable', 'true');
    await page.waitForChanges();
    iEl.click();
    await page.waitForChanges();

    expect(eventSpy).toHaveBeenCalled();
  });

  it('should not emit a clickEl event if the icon is not clickable', async () => {
    const { eventSpy } = listenForEvent(page, 'clickEl');

    iEl.click();
    await page.waitForChanges();

    expect(eventSpy).not.toHaveBeenCalled();
  });
});
