import { setupPageWithContent } from '../../util/e2etests-setup';

const INO_FAB_BUTTON = `<ino-fab></ino-fab>`;
const INO_FAB_SELECTOR = 'ino-fab';

describe('InoFabButton', () => {
  it('should render with default values', async () => {
    const page = await setupPageWithContent(INO_FAB_BUTTON);

    const inoFabEl = await page.find(INO_FAB_SELECTOR);
    expect(inoFabEl).toBeDefined();

    const buttonEl = await inoFabEl.find('button');
    expect(buttonEl).toBeDefined();
  });

  describe('Properties', () => {

    it('should render with property ino-mini', async () => {
      const page = await setupPageWithContent(INO_FAB_BUTTON);

      const inoFabEl = await page.find(INO_FAB_SELECTOR);
      inoFabEl.setAttribute('ino-mini', true);
      await page.waitForChanges();

      const buttonEl = await inoFabEl.find('button');
      expect(buttonEl).toHaveClass('mdc-fab--mini');
    });

    it('should render with property ino-extended', async () => {
      const page = await setupPageWithContent(INO_FAB_BUTTON);

      const inoFabEl = await page.find(INO_FAB_SELECTOR);
      inoFabEl.setAttribute('ino-extended', true);
      await page.waitForChanges();

      const buttonEl = await inoFabEl.find('button');
      expect(buttonEl).toHaveClass('mdc-fab--extended');
    });

    it('should render in an disabled state', async () => {
      const page = await setupPageWithContent(INO_FAB_BUTTON);

      const inoFabEl = await page.find(INO_FAB_SELECTOR);
      inoFabEl.setAttribute('ino-disabled', true);
      await page.waitForChanges();

      const buttonEl = await inoFabEl.find('button');
      expect(buttonEl).toHaveAttribute('disabled');

      const disabledSpy = await page.spyOnEvent('click');
      await buttonEl.click();
      expect(disabledSpy).not.toHaveReceivedEvent();
    });
  });

  describe('Events', () => {
    it('should be clickable by default', async () => {
      const page = await setupPageWithContent(INO_FAB_BUTTON);
      const inoFabEl = await page.find(INO_FAB_SELECTOR);
      const buttonEl = await inoFabEl.find('button');
      const disabledSpy = await page.spyOnEvent('click');
      await buttonEl.click();
      expect(disabledSpy).toHaveReceivedEvent();
    });

    it('should not be clickable in disabled state', async () => {
      const page = await setupPageWithContent(INO_FAB_BUTTON);

      const inoFabEl = await page.find(INO_FAB_SELECTOR);
      inoFabEl.setAttribute('ino-disabled', true);
      await page.waitForChanges();
      const buttonEl = await inoFabEl.find('button');
      const disabledSpy = await page.spyOnEvent('click');
      await buttonEl.click();
      expect(disabledSpy).not.toHaveReceivedEvent();
    });
  });
});
