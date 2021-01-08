import { setupPageWithContent } from '../../util/e2etests-setup';

const INO_TAB_BAR = `
    <ino-tab-bar>
        <ino-tab></ino-tab>
    </ino-tab-bar>`;
const TAB_BAR_SELECTOR = 'ino-tab-bar';
const TAB_SELECTOR = 'ino-tab-bar ino-tab';

describe('InoTabBar', () => {
  describe('Properties', () => {
    it('should render with the inoActiveTab property set correctly', async () => {
      const page = await setupPageWithContent(INO_TAB_BAR);
      const tabBar = await page.find(TAB_BAR_SELECTOR);

      await tabBar.setAttribute('ino-active-tab', 3);
      await page.waitForChanges();

      const activeTab = await tabBar.getAttribute('ino-active-tab');
      expect(activeTab).toBe('3');
    });
  });

  describe('Events', () => {
    it('should emit an activeTabChange event upon clicking on ino-tab component', async () => {
      const page = await setupPageWithContent(INO_TAB_BAR);
      const tab = await page.find(TAB_SELECTOR);
      const tabChangeEvent = await page.spyOnEvent('activeTabChange');

      await tab.click();
      await page.waitForChanges();

      expect(tabChangeEvent).toHaveReceivedEvent();
      expect(tabChangeEvent).toHaveReceivedEventDetail(0);
    });
  });
});
