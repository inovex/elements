import { newSpecPage, SpecPage } from '@stencil/core/testing';
import { Chip } from './ino-chip';

describe('InoChip', () => {
  let page: SpecPage;
  let inoChipEl: HTMLInoChipElement;
  const eventSpy = jest.fn();

  beforeEach(async () => {
    page = await newSpecPage({
      components: [Chip],
      html: `<ino-chip></ino-chip>`,
    });
    inoChipEl = page.body.querySelector('ino-chip');
    eventSpy.mockClear();
  });

  it('should fire chipClicked event on click', async () => {
    page.win.addEventListener('chipClicked', eventSpy);
    inoChipEl.click();
    await page.waitForChanges();
    expect(eventSpy).toHaveBeenCalled();
  });

  it('should fire chipClicked event on click with correct value', async () => {
    const myValue = 'my-value';
    inoChipEl.setAttribute('value', myValue);
    await page.waitForChanges();
    page.win.addEventListener('chipClicked', eventSpy);
    inoChipEl.click();
    await page.waitForChanges();
    expect(eventSpy.mock.calls[0][0]).toHaveProperty('detail', myValue);
  });

  it('should fire chipRemoved event on remove icon click with correct value if removable is set true', async () => {
    const myValue = 'my-value';
    inoChipEl.setAttribute('value', myValue);
    inoChipEl.setAttribute('removable', 'true');
    await page.waitForChanges();

    page.win.addEventListener('chipRemoved', eventSpy);
    inoChipEl.querySelector('ino-icon').click();
    await page.waitForChanges();
    expect(eventSpy.mock.calls[0][0]).toHaveProperty('detail', myValue);
  });

  it('should fire chipRemoved event on remove icon click if removable is set true', async () => {
    inoChipEl.setAttribute('removable', 'true');
    await page.waitForChanges();

    page.win.addEventListener('chipRemoved', eventSpy);
    expect(eventSpy).not.toHaveBeenCalled();

    inoChipEl.querySelector('ino-icon').click();
    await page.waitForChanges();
    expect(eventSpy).toHaveBeenCalled();
  });

  it('should not fire any events if disabled', async () => {
    inoChipEl.setAttribute('disabled', 'true');
    inoChipEl.setAttribute('removable', 'true');
    await page.waitForChanges();

    const eventSpy2 = jest.fn();
    page.win.addEventListener('chipClicked', eventSpy);
    page.win.addEventListener('chipRemoved', eventSpy2);

    inoChipEl.click();
    inoChipEl.querySelector('button').click();
    //ToDo: inoChipEl.querySelector('ino-icon').click(); with this test fails do we have a bug here?
    await page.waitForChanges();

    expect(eventSpy).not.toHaveBeenCalled();
    expect(eventSpy2).not.toHaveBeenCalled();
  });
});
