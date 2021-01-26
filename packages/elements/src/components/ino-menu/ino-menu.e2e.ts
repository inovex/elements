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
    });
  });

  describe('Events', () => {
    it("should emit 'menuClose' event on outside click while menu open", async () => {
      const btnId = 'id-btn';

      const page = await setupPageWithContent(`
        <div id="container">
            <button id="${btnId}">Open menu</button>
            <ino-menu ino-for="${btnId}" ino-open="true">
                <ino-list-item id="item-1" ino-text="item-1"></ino-list-item>
                <ino-list-item id="item-1" ino-text="item-2"></ino-list-item>
            </ino-menu>
        </div>
      `);

      const menuCloseSpy = await page.spyOnEvent('menuClose');

      await page.click(`#${btnId}`);
      await page.waitForChanges();

      expect(menuCloseSpy).toHaveReceivedEvent();
    });

    it("should not emit 'menuClose' event on outside click while menu closed", async () => {
      const btnId = 'id-btn';

      const page = await setupPageWithContent(`
        <div id="container">
            <button id="${btnId}">Open menu</button>
            <ino-menu ino-for="${btnId}" ino-open="false">
                <ino-list-item id="item-1" ino-text="item-1"></ino-list-item>
                <ino-list-item id="item-1" ino-text="item-2"></ino-list-item>
            </ino-menu>
        </div>
      `);

      const menuCloseSpy = await page.spyOnEvent('menuClose');

      await page.click(`#${btnId}`);
      await page.waitForChanges();

      expect(menuCloseSpy).not.toHaveReceivedEvent();
    });

    it("should not emit 'menuClose' event on inside item click", async () => {
      const btnId = 'id-btn';
      const listItemId = 'item-1';

      const page = await setupPageWithContent(`
        <div id="container">
            <button id="${btnId}">Open menu</button>
            <ino-menu ino-for="${btnId}" ino-open="true">
                <ino-list-item id="${listItemId}" ino-text="item-1"></ino-list-item>
                <ino-list-item id="item-1" ino-text="item-2"></ino-list-item>
            </ino-menu>
        </div>
      `);

      const menuCloseSpy = await page.spyOnEvent('menuClose');

      await page.click(`#${listItemId}`);
      await page.waitForChanges();

      expect(menuCloseSpy).not.toHaveReceivedEvent();
    });
  });
});
