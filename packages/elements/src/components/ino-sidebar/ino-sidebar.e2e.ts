import { setupPageWithContent } from '../../util/e2etests-setup';

const INO_SIDEBAR = `
<ino-sidebar>
</ino-sidebar>
`;

const SIDEBAR_SELECTOR = 'ino-sidebar';

describe('ino-sidebar', () => {
  it('should render with default values', async () => {
    const page = await setupPageWithContent(INO_SIDEBAR);
    const sidebar = await page.find(SIDEBAR_SELECTOR);

    expect(sidebar).toBeDefined();
  });

  describe('Properties', async () => {

    it('should render with ino-open set to true', async () => {
      const page = await setupPageWithContent(INO_SIDEBAR);
      const sidebar = await page.find(SIDEBAR_SELECTOR);

      await sidebar.setAttribute('ino-open', true);
      await page.waitForChanges();

      expect(sidebar).toHaveAttribute('ino-open');
    });

    it('should render with ino-align-right set to true', async () => {
      const page = await setupPageWithContent(INO_SIDEBAR);
      const sidebar = await page.find(SIDEBAR_SELECTOR);

      await sidebar.setAttribute('ino-align-right', true);
      await page.waitForChanges();

      expect(sidebar).toHaveAttribute('ino-align-right');
    });

  });

  describe('Events', async () => {

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
