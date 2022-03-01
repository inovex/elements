import { E2EElement, E2EPage } from '@stencil/core/testing';
import { setupPageWithContent } from '../../util/e2etests-setup';

describe('InoChip', () => {
  let page: E2EPage;
  let inoChipEl: E2EElement;

  beforeEach(async () => {
    page = await setupPageWithContent(`<ino-chip></ino-chip>`);
    inoChipEl = await page.find('ino-chip');
  });

  describe('Properties', () => {
    it('should render chip', async () => {
      expect(inoChipEl).toBeDefined();
    });

    it('should not render remove icon when removable is not set', async () => {
      const inoIcon = await page.find('ino-icon');
      expect(inoIcon).toBeNull();
    });

    it('should render remove icon when removable is set true', async () => {
      inoChipEl.setAttribute('removable', true);
      await page.waitForChanges();
      const inoIcon = await page.find('ino-icon');
      expect(inoIcon).not.toBeNull();
    });

    it('should render checkmark if selectable and selected is set', async () => {
      inoChipEl.setAttribute('selectable', true);
      inoChipEl.setAttribute('selected', true);
      await page.waitForChanges();
      const checkmarkEl = await page.find('svg');
      expect(checkmarkEl).not.toBeNull();
    });
  });

  describe('Events', () => {
    it('should fire chipClicked event on click', async () => {
      const chipClickedSpy = await page.spyOnEvent('chipClicked');
      await inoChipEl.click();
      await page.waitForChanges();
      expect(chipClickedSpy).toHaveReceivedEvent();
    });

    it('should fire chipClicked event on click with correct value', async () => {
      const myValue = 'my-value';
      inoChipEl.setAttribute('value', myValue);
      await page.waitForChanges();
      const chipClickedSpy = await page.spyOnEvent('chipClicked');
      await inoChipEl.click();
      await page.waitForChanges();
      expect(chipClickedSpy).toHaveReceivedEventDetail(myValue);
    });

    it('should fire chipRemoved event on remove icon click with correct value if removable is set true', async () => {
      const myValue = 'my-value';
      inoChipEl.setAttribute('value', myValue);
      inoChipEl.setAttribute('removable', true);
      await page.waitForChanges();

      const removeChip = await page.spyOnEvent('chipRemoved');
      await page.click('ino-icon');
      await page.waitForChanges();
      expect(removeChip).toHaveReceivedEventDetail(myValue);
    });

    it('should fire chipRemoved event on remove icon click if removable is set true', async () => {
      inoChipEl.setAttribute('removable', true);
      await page.waitForChanges();

      const removeChip = await page.spyOnEvent('chipRemoved');
      expect(removeChip).not.toHaveReceivedEvent();

      await page.click('ino-icon');
      await page.waitForChanges();
      expect(removeChip).toHaveReceivedEvent();
    });

    it('should fire chipRemoved event on remove icon click with correct value if removable is set true', async () => {
      const myValue = 'my-value';
      inoChipEl.setAttribute('value', myValue);
      inoChipEl.setAttribute('removable', true);
      await page.waitForChanges();

      const removeChip = await page.spyOnEvent('chipRemoved');
      await page.click('ino-icon');
      await page.waitForChanges();
      expect(removeChip).toHaveReceivedEventDetail(myValue);
    });

    it('should not fire any events if disabled', async () => {
      inoChipEl.setAttribute('disabled', true);
      inoChipEl.setAttribute('removable', true);
      await page.waitForChanges();

      const chipClickedSpy = await page.spyOnEvent('chipClicked');
      const chipRemovedSpy = await page.spyOnEvent('chipRemoved');

      await inoChipEl.click();
      await page.click('ino-icon');
      await page.waitForChanges();

      expect(chipClickedSpy).not.toHaveReceivedEvent();
      expect(chipRemovedSpy).not.toHaveReceivedEvent();
    });
  });
});
