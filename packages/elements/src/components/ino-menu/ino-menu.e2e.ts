import { setupPageWithContent } from '../../util/e2etests-setup';

const INO_MENU = `<ino-menu></ino-menu>`;
const INO_MENU_SELECTOR = 'ino-menu';

describe('InoMenu', () => {
  describe('Properties', () => {
    it('should render opened', async () => {
      const page = await setupPageWithContent(INO_MENU);
      const inoMenu = await page.find(INO_MENU_SELECTOR);

      await inoMenu.setAttribute('ino-open', true);
      await page.waitForChanges();

      const innerDiv = await page.find('.mdc-menu');
      expect(innerDiv).toHaveClass('mdc-menu-surface--open');
    });

    it('should render closed', async () => {
      const page = await setupPageWithContent(INO_MENU);
      const innerDiv = await page.find('.mdc-menu');

      expect(innerDiv).not.toHaveClass('mdc-menu-surface--open');
    })
  });
});
