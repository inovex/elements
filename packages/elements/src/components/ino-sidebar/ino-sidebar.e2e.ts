import { setupPageWithContent } from '../../util/e2etests-setup';

const INO_SIDEBAR = `
<ino-sidebar>
</ino-sidebar>
`;

const SIDEBAR_SELECTOR = 'ino-sidebar';
const ASIDE_SELECTOR = 'ino-sidebar >>> aside';

describe('ino-sidebar', () => {
  describe('Properties', () => {
    it('should render on the right side if alignRight is true', async () => {
      const page = await setupPageWithContent(INO_SIDEBAR);
      const sidebar = await page.find(SIDEBAR_SELECTOR);
      const asideEl = await page.find(ASIDE_SELECTOR);

      await sidebar.setAttribute('align-right', true);
      await page.waitForChanges();

      expect(asideEl).toHaveClass('ino-sidebar--right');
    });
  });

  describe('Events', () => {
    it('should emit an openChange event upon changing the open property', async () => {
      const page = await setupPageWithContent(INO_SIDEBAR);
      const sidebar = await page.find(SIDEBAR_SELECTOR);
      const event = await page.spyOnEvent('openChange');

      await sidebar.setAttribute('open', true);
      await page.waitForChanges();

      expect(event).toHaveReceivedEvent();
      expect(event).toHaveReceivedEventDetail(true);
    });
  });
});
