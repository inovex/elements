import { setupPageWithContent } from '../../util/e2etests-setup';

const INO_FAB_SET = `<ino-fab-set><ino-fab></ino-fab><ino-fab></ino-fab></ino-fab-set>`;
const INO_FAB_SET_SELECTOR = 'ino-fab-set';
const INO_FAB_PRIMARY_SELECTOR = 'ino-fab-set >>> ino-fab >>> #primary-fab';
const DIAL_SELECTOR = 'ino-fab-set >>> .ino-speed-dial';

describe('InoFabButton', () => {
  describe('Properties', () => {
    it('should not open the dial by default', async () => {
      const page = await setupPageWithContent(INO_FAB_SET);

      const dialEl = await page.find(DIAL_SELECTOR);
      const dialElStyle = await dialEl.getComputedStyle();

      expect(dialElStyle.display).toBe('none');
    });

    it('should open the dial', async () => {
      const page = await setupPageWithContent(INO_FAB_SET);
      const inoFabSetEl = await page.find(INO_FAB_SET_SELECTOR);

      inoFabSetEl.setAttribute('ino-open-dial', true);
      await page.waitForChanges();

      const dialEl = await page.find(DIAL_SELECTOR);
      const dialElStyle = await dialEl.getComputedStyle();

      expect(dialElStyle.display).toBe('flex');
    });
  });

  describe('Events', () => {
    it('should be clickable by default', async () => {
      const page = await setupPageWithContent(INO_FAB_SET);
      const inoPrimaryFabEl = await page.find(INO_FAB_PRIMARY_SELECTOR);

      const clickSpy = await page.spyOnEvent('click');
      await inoPrimaryFabEl.click();
      expect(clickSpy).toHaveReceivedEvent();
    });

    it('should not open the dial by click', async () => {
      const page = await setupPageWithContent(INO_FAB_SET);
      const inoPrimaryFabEl = await page.find(INO_FAB_PRIMARY_SELECTOR);

      const dialEl = await page.find(DIAL_SELECTOR);
      let dialElStyle = await dialEl.getComputedStyle();
      expect(dialElStyle.display).toBe('none');

      await inoPrimaryFabEl.click();
      dialElStyle = await dialEl.getComputedStyle();
      expect(dialElStyle.display).toBe('none');
    });
  });
});
