import { setupPageWithContent } from '../../util/e2etests-setup';

const INO_TAB = `<ino-tab/>`;
const INO_TAB_SELECTOR = 'ino-tab';
const BTN_SELECTOR = 'ino-tab > button';

describe('InoTab', () => {
  describe('Properties', () => {
    it('should render with inoStacked set to true', async () => {
      const page = await setupPageWithContent(INO_TAB);
      const inoTab = await page.find(INO_TAB_SELECTOR);
      const btn = await page.find(BTN_SELECTOR);

      await inoTab.setAttribute('stacked', true);
      await page.waitForChanges();

      expect(btn).toHaveClass('mdc-tab--stacked');
    });
  });

  describe('Events', () => {
    it('should emit an inoInteracted event upon receiving a MDCTab:interacted event', async () => {
      const page = await setupPageWithContent(INO_TAB);
      const inoTab = await page.find(INO_TAB_SELECTOR);
      const inoInteractedEvent = await page.spyOnEvent('interacted');

      await inoTab.triggerEvent('MDCTab:interacted');
      await page.waitForChanges();

      expect(inoInteractedEvent).toHaveReceivedEvent();
    });

    it('should stop the propagation of the MDCTab:interacted event', async () => {
      const page = await setupPageWithContent(INO_TAB);
      const inoTab = await page.find(INO_TAB_SELECTOR);
      const mdcInteractedEvent = await page.spyOnEvent('MDCTab:interacted');

      await inoTab.triggerEvent('MDCTab:interacted');
      await page.waitForChanges();

      expect(mdcInteractedEvent).not.toHaveReceivedEvent();
    });
  });
});
