import { setupPageWithContent } from '../../util/e2etests-setup';
import {E2EElement, E2EPage} from "@stencil/core/testing";

const LIST_ITEM = `<ino-list-item/>`;
const LIST_ITEM_SELECTOR = 'ino-list-item';
const LI_SELECTOR = 'ino-list-item li';

describe('InoListItem', () => {

  let page: E2EPage;
  let inoListItem: E2EElement;
  let liElement: E2EElement;

   beforeEach( async () => {
     page = await setupPageWithContent(LIST_ITEM);
     inoListItem = await page.find(LIST_ITEM_SELECTOR);
     liElement = await page.find(LI_SELECTOR);
   })

  describe('Properties', () => {
    it('should disable the list-item if disabled property is set to true', async () => {
      await inoListItem.setAttribute('disabled', true);
      await page.waitForChanges();
      expect(liElement).toHaveClass('mdc-deprecated-list-item--disabled');
    });

    it('should render with the selected property set to true', async () => {
      await inoListItem.setAttribute('selected', true);
      await page.waitForChanges();

      expect(liElement).toHaveClass('mdc-deprecated-list-item--selected');
    });

    it('should render with the activated property set to true', async () => {
      await inoListItem.setAttribute('activated', true);
      await page.waitForChanges();

      expect(liElement).toHaveClass('mdc-deprecated-list-item--activated');
    });
  });

  describe('Events', () => {
    it('should emit a clickEl event upon clicking a list item', async () => {
      const clickElEvent = await page.spyOnEvent('clickEl');

      await inoListItem.click();
      await page.waitForChanges();

      expect(clickElEvent).toHaveReceivedEvent();
    });

    it('should not emit a clickEl event upon clicking a list item if inoDisabled is true', async () => {
      const clickElEvent = await page.spyOnEvent('clickEl');

      await inoListItem.setAttribute('disabled', true);
      await page.waitForChanges();

      await inoListItem.click();
      await page.waitForChanges();

      expect(clickElEvent).not.toHaveReceivedEvent();
    });
  });
});
