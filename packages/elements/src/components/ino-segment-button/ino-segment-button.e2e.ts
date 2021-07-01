import { setupPageWithContent } from '../../util/e2etests-setup';

const INO_SEGMENT_BUTTON =
  '<ino-segment-button value="1"></ino-segment-button>';
const INO_SEGMENT_BUTTON_CHECKED =
  '<ino-segment-button checked></ino-segment-button>';
const INO_SEGMENT_BUTTON_DISABLED =
  '<ino-segment-button disabled></ino-segment-button>';
const BUTTON_SELECTOR = 'ino-segment-button >>> button';

describe('ino-segment-button', () => {
  describe('Properties', () => {
    it('should render as a dense button if inoDense is true', async () => {
      const page = await setupPageWithContent(INO_SEGMENT_BUTTON);
      const segmentBtn = await page.find('ino-segment-button');
      const btn = await page.find(BUTTON_SELECTOR);

      await segmentBtn.setAttribute('dense', true);
      await page.waitForChanges();

      expect(btn).toHaveClass('ino-segment-button--dense');
    });

    it('should render as checked button if checked is true', async () => {
      const page = await setupPageWithContent(INO_SEGMENT_BUTTON);
      const segmentBtn = await page.find('ino-segment-button');
      const btn = await page.find(BUTTON_SELECTOR);

      await segmentBtn.setAttribute('checked', true);
      await page.waitForChanges();

      expect(btn).toHaveClass('ino-segment-button--active');
    });
  });

  describe('Events', () => {
    it('should emit a checkedChange event upon clicking the button', async () => {
      const page = await setupPageWithContent(INO_SEGMENT_BUTTON);
      const button = await page.find('ino-segment-button');
      const clickEl = await page.spyOnEvent('checkedChange');

      await button.click();
      await page.waitForChanges();

      expect(clickEl).toHaveReceivedEvent();
      expect(clickEl).toHaveReceivedEventDetail(true);
    });

    it('should not emit a checkedChange event if the button is disabled', async () => {
      const page = await setupPageWithContent(INO_SEGMENT_BUTTON_DISABLED);
      const button = await page.find('ino-segment-button');
      const clickEl = await page.spyOnEvent('clickEl');

      await button.click();
      await page.waitForChanges();

      expect(clickEl).not.toHaveReceivedEvent();
    });

    it('should not emit a clickEl event if the button is checked', async () => {
      const page = await setupPageWithContent(INO_SEGMENT_BUTTON_CHECKED);
      const button = await page.find('ino-segment-button');
      const clickEl = await page.spyOnEvent('clickEl');

      await button.click();
      await page.waitForChanges();

      expect(clickEl).not.toHaveReceivedEvent();
    });
  });
});
