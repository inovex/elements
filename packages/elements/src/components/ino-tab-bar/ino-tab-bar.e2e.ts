import { setupPageWithContent } from '../../util/e2etests-setup';

const INO_TAB_BAR = `
    <ino-tab-bar>
        <ino-tab></ino-tab>
    </ino-tab-bar>`;
const INO_TAB_BAR_AUTO_FOCUS = `
    <ino-tab-bar auto-focus>
        <ino-tab></ino-tab>
    </ino-tab-bar>`;
const TAB_BAR_SELECTOR = 'ino-tab-bar';
const TAB_SELECTOR = 'ino-tab-bar ino-tab';

describe('InoTabBar', () => {
  describe('Properties', () => {
    it('should render with the inoActiveTab property set correctly', async () => {
      const page = await setupPageWithContent(INO_TAB_BAR);
      const tabBar = await page.find(TAB_BAR_SELECTOR);

      await tabBar.setAttribute('active-tab', 3);
      await page.waitForChanges();

      const activeTab = await tabBar.getAttribute('active-tab');
      expect(activeTab).toBe('3');
    });

    it('should be focused automatically with the autoFocus property', async () => {
      const emptyElement = {};

      const pageWithDefaultTabBar = await setupPageWithContent(INO_TAB_BAR);
      const focusedElementWithoutAutofocus = await pageWithDefaultTabBar.evaluate(
        () => document.activeElement
      );
      expect(focusedElementWithoutAutofocus).toEqual(emptyElement);

      const pageWithFocusedTabBar = await setupPageWithContent(
        INO_TAB_BAR_AUTO_FOCUS
      );
      const focusedElement = await pageWithFocusedTabBar.evaluate(
        () => document.activeElement
      );
      expect(focusedElement).not.toEqual(emptyElement);
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
