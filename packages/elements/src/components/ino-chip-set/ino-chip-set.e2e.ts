import { setupPageWithContent } from '../../util/e2etests-setup';

const INO_CHIP_SET = `
      <ino-chip-set ino-type="choice">
        <ino-chip id="one"></ino-chip>
        <ino-chip id="two"></ino-chip>
      </ino-chip-set>`;

describe('InoChipSet', () => {
  describe('Events', () => {
    // FIXME: Test schlägt periodisch fehl
    it('should fire updateChipSet event on click', async () => {
      const page = await setupPageWithContent(INO_CHIP_SET);

      const updateChipSetEvent = await page.spyOnEvent('updateChipSet');

      const chip = await page.find('ino-chip');
      await chip.click();
      await page.waitForChanges();

      expect(updateChipSetEvent).toHaveReceivedEvent();
    });
  });
});
