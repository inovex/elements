import { setupPageWithContent } from '../../util/e2etests-setup';

describe('InoChipSet', () => {
  it('should render with default values', async () => {
    const page = await setupPageWithContent(`
      <ino-chip-set>
      </ino-chip-set>`);

    const inoChipSetEl = await page.find('ino-chip-set');
    expect(inoChipSetEl).not.toBeNull();
  });

  it('should fire updateChipSet event on click', async () => {
    const page = await setupPageWithContent(`
      <ino-chip-set ino-type="choice">
        <ino-chip id="one"></ino-chip>
        <ino-chip id="two"></ino-chip>
      </ino-chip-set>`);

    const updateChipSet = await page.spyOnEvent('updateChipSet');
    expect(updateChipSet).not.toHaveReceivedEvent();
    await page.click('#one');
    await page.waitFor(300);
    await page.waitForChanges();
    expect(updateChipSet).toHaveReceivedEvent();
  });
});
