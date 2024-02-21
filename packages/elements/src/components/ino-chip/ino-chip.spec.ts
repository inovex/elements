import { newSpecPage, SpecPage } from '@stencil/core/testing';
import { Chip } from './ino-chip';
import { listenForEvent } from '../../util/test-utils';

describe('InoChip', () => {
  let page: SpecPage;
  let inoChipEl: HTMLInoChipElement;

  beforeEach(async () => {
    page = await newSpecPage({
      components: [Chip],
      html: `<ino-chip></ino-chip>`,
    });
    inoChipEl = page.body.querySelector('ino-chip');
  });

  it('should fire chipClicked event on click', async () => {
    const { eventSpy } = listenForEvent(page, 'chipClicked');
    inoChipEl.click();
    expect(eventSpy).toHaveBeenCalled();
  });

  it('should fire chipClicked event on click with correct value', async () => {
    const { assertEventDetails } = listenForEvent(page, 'chipClicked');

    const myValue = 'my-value';
    inoChipEl.setAttribute('value', myValue);
    inoChipEl.click();
    assertEventDetails(myValue)
  });

  it('should fire chipRemoved event on remove icon click with correct value if removable is set true', async () => {
    const { assertEventDetails } = listenForEvent(page, 'chipRemoved');

    const myValue = 'my-value';
    inoChipEl.setAttribute('value', myValue);
    inoChipEl.setAttribute('removable', 'true');
    await page.waitForChanges();

    inoChipEl.querySelector('ino-icon').click();
    await page.waitForChanges();

    assertEventDetails(myValue)
  });

  it('should fire chipRemoved event on remove icon click if removable is set true', async () => {
    const { eventSpy } = listenForEvent(page, 'chipRemoved');

    inoChipEl.setAttribute('removable', 'true');
    await page.waitForChanges();
    expect(eventSpy).not.toHaveBeenCalled();

    inoChipEl.querySelector('ino-icon').click();
    expect(eventSpy).toHaveBeenCalled();
  });

  it('should not fire any events if disabled', async () => {
    const { eventSpy: clickSpy } = listenForEvent(page, 'chipClicked');
    const { eventSpy: removeSpy } = listenForEvent(page, 'chipRemoved');

    inoChipEl.setAttribute('disabled', 'true');
    inoChipEl.setAttribute('removable', 'true');
    await page.waitForChanges();

    inoChipEl.click();
    inoChipEl.querySelector('button').click();

    expect(clickSpy).not.toHaveBeenCalled();
    expect(removeSpy).not.toHaveBeenCalled();
  });
});
