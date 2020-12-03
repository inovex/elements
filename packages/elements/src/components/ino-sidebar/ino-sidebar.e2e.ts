import { setupPageWithContent } from '../../util/e2etests-setup';

const INO_SIDEBAR = `
<ino-sidebar>
</ino-sidebar>
`;

const SIDEBAR_SELECTOR = 'ino-sidebar';

describe('ino-sidebar', () => {
  describe('Events',  () => {
    it('should emit an openChange event upon changing the ino-open property', async () => {
      const page = await setupPageWithContent(INO_SIDEBAR);
      const sidebar = await page.find(SIDEBAR_SELECTOR);
      const event = await page.spyOnEvent('openChange');

      await sidebar.setAttribute('ino-open', true);
      await page.waitForChanges();

      expect(event).toHaveReceivedEvent();
      expect(event).toHaveReceivedEventDetail(true);
    });

  });
});
