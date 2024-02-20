import { setupPageWithContent } from '../../util/e2etests-setup';

const INO_CHECKBOX_ITEM = `<ino-list><ino-control-item role="checkbox" text="Some Item"></ino-control-item></ino-list>`;
const INO_CHECKBOX_ITEM_CHECKED = `<ino-list><ino-control-item role="checkbox" text="Some Item" checked></ino-control-item></ino-list>`;
const INO_RADIO_ITEM = `<ino-list><ino-control-item role="radio" text="Some Item"></ino-checkbox-item></ino-list>`;
const INO_RADIO_ITEM_CHECKED = `<ino-list><ino-control-item role="radio" text="Some Item" checked></ino-control-item></ino-list>`;

describe('InoControlItem', () => {
  describe('Properties', () => {
    it('should render with an unchecked checkbox', async () => {
      const page = await setupPageWithContent(INO_CHECKBOX_ITEM);
      const input = await page.find('ino-checkbox');
      expect(input).toBeDefined();
      const checked = await input.getProperty('checked');
      expect(checked).toBeFalsy();
    });

    it('should render with an unchecked radio-button', async () => {
      const page = await setupPageWithContent(INO_RADIO_ITEM);
      const input = await page.find('ino-radio');
      expect(input).toBeDefined();
      const checked = await input.getProperty('checked');
      expect(checked).toBeFalsy();
    });

    it('should render with checked checkbox', async () => {
      const page = await setupPageWithContent(INO_CHECKBOX_ITEM_CHECKED);
      const input = await page.find('ino-checkbox');
      const checked = await input.getProperty('checked');
      expect(checked).toBeTruthy();
    });

    it('should render with checked radio-button', async () => {
      const page = await setupPageWithContent(INO_RADIO_ITEM_CHECKED);
      const input = await page.find('ino-radio');
      const checked = await input.getProperty('checked');
      expect(checked).toBeTruthy();
    });
  });
});
