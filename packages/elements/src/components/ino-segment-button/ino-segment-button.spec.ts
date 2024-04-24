import { newSpecPage, SpecPage } from '@stencil/core/testing';
import { listenForEvent } from '../../util/test-utils';
import { InoSegmentButton } from './ino-segment-button';

describe('ino-segment-button', () => {
  let page: SpecPage;
  let segmentBtn: HTMLInoSegmentButtonElement;

  beforeEach(async () => {
    page = await newSpecPage({
      components: [InoSegmentButton],
      html: '<ino-segment-button value="1"></ino-segment-button>',
    });
    segmentBtn = page.body.querySelector('ino-segment-button');
  });

  it('should emit a checkedChange event upon clicking the button', async () => {
    const { assertEventDetails } = listenForEvent(page, 'checkedChange');
    segmentBtn.click();
    await page.waitForChanges();
    assertEventDetails(true);
  });

  it('should not emit a checkedChange event if the button is disabled', async () => {
    const { eventSpy } = listenForEvent(page, 'checkedChange');
    segmentBtn.setAttribute('disabled', 'true');
    await page.waitForChanges();

    segmentBtn.click();
    await page.waitForChanges();
    expect(eventSpy).not.toHaveBeenCalled();
  });

  it('should not emit a checkedChange event if the button is checked', async () => {
    const { eventSpy } = listenForEvent(page, 'checkedChange');
    segmentBtn.setAttribute('checked', 'true');
    await page.waitForChanges();

    segmentBtn.click();
    await page.waitForChanges();
    expect(eventSpy).not.toHaveBeenCalled();
  });
});
