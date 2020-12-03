import { setupPageWithContent } from '../../util/e2etests-setup';

const INO_ICON = `<ino-icon ino-icon="add"></ino-icon>`;
const INO_ICON_SELECTOR = 'ino-icon';

describe('InoIcon', () => {

  describe('Events', () => {

    it('should emit a clickEl event if a clickable icon has been clicked', async () => {
      const page = await setupPageWithContent(INO_ICON);
      const inoIcon = await page.find(INO_ICON_SELECTOR);
      const clickEvent = await page.spyOnEvent('clickEl');
      await inoIcon.setAttribute('ino-clickable', true);
      await page.waitForChanges();

      await inoIcon.click();
      await page.waitForChanges();

      expect(clickEvent).toHaveReceivedEvent();
    });

    it('should not emit a clickEl event if the icon is not clickable', async () => {
      const page = await setupPageWithContent(INO_ICON);
      const clickEvent = await page.spyOnEvent('clickEl');
      const inoIcon = await page.find(INO_ICON_SELECTOR);

      await inoIcon.click();
      await page.waitForChanges();

      expect(clickEvent).not.toHaveReceivedEvent();
    });

  });

});
