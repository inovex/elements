import { setupPageWithContent } from '../../util/e2etests-setup';

const INO_RADIO = `<ino-radio></ino-radio>`;
const INO_RADIO_CHECKED = `<ino-radio checked></ino-radio>`;
const INO_RADIO_DISABLED = `<ino-radio disabled></ino-radio>`;
const INO_RADIO_SELECTOR = 'ino-radio';
const INPUT_SELECTOR = 'ino-radio input';

describe('InoRadio', () => {

  describe('Properties', () => {
    it('should render disabled', async () => {
      const page = await setupPageWithContent(INO_RADIO_CHECKED);
      const inoRadio = await page.find(INO_RADIO_SELECTOR);
      const input = await page.find(INPUT_SELECTOR);

      await inoRadio.setAttribute('disabled', true);
      await page.waitForChanges();

      const innerDiv = await inoRadio.shadowRoot.querySelector('.mdc-radio');
      expect(input).toHaveAttribute('disabled');
      expect(innerDiv).toHaveClass('mdc-radio--disabled');
    });

  });

  describe('Events', () => {
    it('should fire checkedChange event on click with true as detail', async () => {
      const page = await setupPageWithContent(INO_RADIO);

      const checkedChange = await page.spyOnEvent('checkedChange');
      expect(checkedChange).not.toHaveReceivedEvent();
      await page.click(INO_RADIO_SELECTOR);
      await page.waitForChanges();
      expect(checkedChange).toHaveReceivedEvent();
      expect(checkedChange).toHaveReceivedEventDetail(true);
    });

    it('should not fire checkedChange event on click when already checked', async () => {
      const page = await setupPageWithContent(INO_RADIO_CHECKED);

      const checkedChange = await page.spyOnEvent('checkedChange');
      await page.click(INO_RADIO_SELECTOR);
      await page.waitForChanges();
      expect(checkedChange).not.toHaveReceivedEvent();
    });

    it('should not fire checkedChange event on click when disabled', async () => {
      const page = await setupPageWithContent(INO_RADIO_DISABLED);

      const checkedChange = await page.spyOnEvent('checkedChange');
      await page.click(INO_RADIO_SELECTOR);
      await page.waitForChanges();
      expect(checkedChange).not.toHaveReceivedEvent();
    });
  });

});
