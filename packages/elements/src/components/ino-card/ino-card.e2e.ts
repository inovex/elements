import { setupPageWithContent } from '../../util/e2etests-setup';

const INO_CARD = `<ino-card></ino-card>`;
const CARD_SELECTOR = 'ino-card';
const DIV_SELECTOR = 'ino-card div';

describe('InoCard', () => {
  describe('Properties', () => {
    it('should render with selected set to true', async () => {
      const page = await setupPageWithContent(INO_CARD);
      const card = await page.find(CARD_SELECTOR);

      await card.setAttribute('ino-selected', true);
      await page.waitForChanges();

      const div = await page.find(DIV_SELECTOR);
      expect(div).toHaveClass('ino-card--selected');
      expect(card).toHaveAttribute('ino-selected');
    });

    it('should render with check mark if selected', async () => {
      const page = await setupPageWithContent(INO_CARD);
      const card = await page.find(CARD_SELECTOR);

      await card.setAttribute('ino-selected', true);
      await page.waitForChanges();

      const check_mark = await page.find('.ino-card__checkmark');
      expect(check_mark).toBeDefined();
    });
  });

  describe('Events', () => {
    it('should emit a clickEl event upon interacting with the card', async () => {
      const page = await setupPageWithContent(INO_CARD);
      const card = await page.find(CARD_SELECTOR);
      const event = await page.spyOnEvent('click');

      await card.click();
      await page.waitForChanges();

      expect(event).toHaveReceivedEvent();
    });
  });

});
