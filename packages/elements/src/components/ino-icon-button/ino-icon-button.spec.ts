import { newSpecPage, SpecPage } from '@stencil/core/testing';
import { Icon } from '../ino-icon/ino-icon';
import { listenForEvent } from '../../util/test-utils';
import { SvgParser } from '../../util/svg-parser';
import { IconButton } from './ino-icon-button';

const svgMock =
  '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle r="10" cx="12" cy="12" fill="red" /></svg>';

describe('ino-icon-button', () => {
  let page: SpecPage;
  let inoIconBtn: HTMLInoIconButtonElement;

  jest
    .spyOn(global, 'fetch')
    .mockReturnValue(Promise.resolve(new Response(svgMock)));
  jest.spyOn(SvgParser, 'removeSvgTitle').mockReturnValue(svgMock);

  beforeEach(async () => {
    page = await newSpecPage({
      components: [IconButton, Icon],
      html: `<ino-icon-button icon="add"></ino-icon-button>`,
    });
    inoIconBtn = page.body.querySelector('ino-icon-button');
  });

  it('should emit a click event by default', async () => {
    const { eventSpy } = listenForEvent(page, 'click');
    inoIconBtn.click();
    await page.waitForChanges();
    expect(eventSpy).toHaveBeenCalled();
  });

  it('should not emit a click event if the button is disabled', async () => {
    const { eventSpy } = listenForEvent(page, 'click');

    inoIconBtn.setAttribute('disabled', 'true');
    await page.waitForChanges();
    inoIconBtn.click();
    await page.waitForChanges();

    expect(eventSpy).not.toHaveBeenCalled();
  });
});
