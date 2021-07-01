import { setupPageWithContent } from '../../util/e2etests-setup';

const INO_CHECKBOX = `<ino-checkbox></ino-checkbox>`;
const MDC_SELECTOR = 'ino-checkbox >>> .mdc-checkbox';

describe('InoCheckbox', () => {
  describe('Properties', () => {
    it('should render as a disabled checkbox if disabled is set to true', async () => {
      const page = await setupPageWithContent(INO_CHECKBOX);
      const inoCheckBoxEl = await page.find('ino-checkbox');

      inoCheckBoxEl.setAttribute('disabled', true);
      await page.waitForChanges();

      const mdcCheckbox = await page.find(MDC_SELECTOR);
      expect(mdcCheckbox).toHaveClass('mdc-checkbox--disabled');
    });

    it('should render as an indeterminate checkbox if inoIndeterminate is set to true', async () => {
      const page = await setupPageWithContent(INO_CHECKBOX);
      const inoCheckBoxEl = await page.find('ino-checkbox');

      inoCheckBoxEl.setAttribute('indeterminate', true);
      await page.waitForChanges();

      const mdcCheckbox = await page.find(MDC_SELECTOR);
      expect(mdcCheckbox).toHaveClass('ino-checkbox--indeterminate');
    });

    it('should render as a selection checkbox if inoSelection is set to true', async () => {
      const page = await setupPageWithContent(INO_CHECKBOX);
      const inoCheckBoxEl = await page.find('ino-checkbox');

      inoCheckBoxEl.setAttribute('selection', true);
      await page.waitForChanges();

      const mdcCheckbox = await page.find(MDC_SELECTOR);
      expect(mdcCheckbox).toHaveClass('ino-checkbox-selection');
    });
  });

  describe('Events', () => {
    it('should fire checkedChange event on click', async () => {
      const page = await setupPageWithContent(INO_CHECKBOX);

      const checkedChange = await page.spyOnEvent('checkedChange');
      expect(checkedChange).not.toHaveReceivedEvent();
      await page.click('ino-checkbox');
      await page.waitForChanges();
      expect(checkedChange).toHaveReceivedEvent();
    });

    it('should fire checkedChange event with true if the checked property is not set', async () => {
      const page = await setupPageWithContent(INO_CHECKBOX);

      const checkedChange = await page.spyOnEvent('checkedChange');
      await page.click('ino-checkbox');
      await page.waitForChanges();
      expect(checkedChange.firstEvent.detail).toBe(true);
    });

    it('should fire checkedChange event with true if the checked property is set to false', async () => {
      const page = await setupPageWithContent(INO_CHECKBOX);

      const checkedChange = await page.spyOnEvent('checkedChange');
      const inoCheckBoxEl = await page.find('ino-checkbox');
      inoCheckBoxEl.setAttribute('checked', 'false');
      await page.waitForChanges();
      await page.click('ino-checkbox');
      await page.waitForChanges();
      expect(checkedChange.firstEvent.detail).toBe(true);
    });

    it('should fire checkedChange event with false if the checked property is set to true', async () => {
      const page = await setupPageWithContent(INO_CHECKBOX);

      const checkedChange = await page.spyOnEvent('checkedChange');
      const inoCheckBoxEl = await page.find('ino-checkbox');
      inoCheckBoxEl.setAttribute('checked', 'true');
      await page.waitForChanges();
      await page.click('ino-checkbox');
      await page.waitForChanges();
      expect(checkedChange.firstEvent.detail).toBe(false);
    });

    it('should not fire a checkChange event if disabled is set to true', async () => {
      const page = await setupPageWithContent(INO_CHECKBOX);
      const checkedChange = await page.spyOnEvent('checkedChange');
      const inoCheckBoxEl = await page.find('ino-checkbox');

      inoCheckBoxEl.setAttribute('disabled', true);
      await page.waitForChanges();
      await page.click('ino-checkbox');
      await page.waitForChanges();

      expect(checkedChange).not.toHaveReceivedEvent();
    });
  });
});
