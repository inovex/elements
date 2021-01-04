import { setupPageWithContent } from '../../util/e2etests-setup';

const LIST_ITEM = `<ino-list-item/>`;
const LIST_ITEM_SELECTOR = 'ino-list-item';
const LI_SELECTOR = 'ino-list-item li';

describe('InoListItem', () => {

  describe('Properties', () => {
    it('should disable the list-item if disabled property is set to true', async () => {
      const page = await setupPageWithContent(LIST_ITEM);
      const inoListItem = await page.find(LIST_ITEM_SELECTOR);
      const liElem = await page.find(LI_SELECTOR);

      await inoListItem.setAttribute('ino-disabled', true);
      await page.waitForChanges();

      expect(liElem).toHaveClass('mdc-list-item--disabled');
    });

    it('should render with the selected property set to true', async () => {
      const page = await setupPageWithContent(LIST_ITEM);
      const inoListItem = await page.find(LIST_ITEM_SELECTOR);
      const liElem = await page.find(LI_SELECTOR);

      await inoListItem.setAttribute('ino-selected', true);
      await page.waitForChanges();

      expect(liElem).toHaveClass('mdc-list-item--selected');
    });

    it('should render with the activated property set to true', async () => {
      const page = await setupPageWithContent(LIST_ITEM);
      const inoListItem = await page.find(LIST_ITEM_SELECTOR);
      const liElem = await page.find(LI_SELECTOR);

      await inoListItem.setAttribute('ino-activated', true);
      await page.waitForChanges();

      expect(liElem).toHaveClass('mdc-list-item--activated');
    });
  });

  describe('Events', () => {
    it('should emit a clickEl event upon clicking a list item', async () => {
      const page = await setupPageWithContent(LIST_ITEM);
      const inoListItem = await page.find(LIST_ITEM_SELECTOR);
      const clickElEvent = await page.spyOnEvent('clickEl');

      await inoListItem.click();
      await page.waitForChanges();

      expect(clickElEvent).toHaveReceivedEvent();
    });

    it('should not emit a clickEl event upon clicking a list item if inoDisabled is true', async () => {
      const page = await setupPageWithContent(LIST_ITEM);
      const inoListItem = await page.find(LIST_ITEM_SELECTOR);
      const clickElEvent = await page.spyOnEvent('clickEl');

      await inoListItem.setAttribute('ino-disabled', true);
      await page.waitForChanges();

      await inoListItem.click();
      await page.waitForChanges();

      expect(clickElEvent).not.toHaveReceivedEvent();
    });
  });

});
