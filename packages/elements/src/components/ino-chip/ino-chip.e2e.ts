import { setupPageWithContent } from '../../util/e2etests-setup';

const INO_CHIP = `<ino-chip></ino-chip>`;
const INO_CHIP_REMOVABLE = `<ino-chip ino-removable="true"></ino-chip>`;

describe('InoChip', () => {
  describe('Properties', () => {
    it('should not render with icon when ino-removable is not set', async () => {
      const page = await setupPageWithContent(INO_CHIP);

      const inoIcon = await page.find('ino-icon');
      expect(inoIcon).toBeNull();
    });

    it('should render with icon when ino-removable is set true', async () => {
      const page = await setupPageWithContent(INO_CHIP_REMOVABLE);

      const inoIcon = await page.find('ino-icon');
      expect(inoIcon).not.toBeNull();
      expect(inoIcon.getAttribute('ino-icon')).toEqual('close');
      expect(inoIcon.getAttribute('role')).toEqual('button');
    });

    it('should render selectable chip with default values', async () => {
      const page = await setupPageWithContent(INO_CHIP);

      const inoChipEl = await page.find('ino-chip');
      inoChipEl.setAttribute('ino-selectable', true);
      await page.waitForChanges();
      const checkmarkEl = await page.find('.mdc-chip__checkmark');
      expect(checkmarkEl).not.toBeNull();
    });
  });

  describe('Events', () => {
    it('should fire removeChip event on remove if ino-removable is set true', async () => {
      const page = await setupPageWithContent(INO_CHIP_REMOVABLE);

      const removeChip = await page.spyOnEvent('removeChip');
      expect(removeChip).not.toHaveReceivedEvent();

      await page.click('ino-icon');
      await page.waitForChanges();
      expect(removeChip).toHaveReceivedEvent();
    });

    it('should fire removeChip event with default values', async () => {
      const page = await setupPageWithContent(INO_CHIP_REMOVABLE);

      const removeChip = await page.spyOnEvent('removeChip');
      await page.click('ino-icon');
      expect(removeChip).toHaveReceivedEventDetail({
        removeChip: {},
      });
    });
  });
});
