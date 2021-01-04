import { setupPageWithContent } from '../../util/e2etests-setup';

const INO_CHECKBOX_ITEM = `<ino-list><ino-control-item ino-role="checkbox" ino-text="Some Item"></ino-control-item></ino-list>`;
const INO_CHECKBOX_ITEM_CHECKED = `<ino-list><ino-control-item ino-role="checkbox" ino-text="Some Item" checked></ino-control-item></ino-list>`;
const INO_CHECKBOX_ITEM_DISABLED = `<ino-list><ino-control-item ino-role="checkbox" ino-text="Some Item" ino-disabled></ino-control-item></ino-list>`;
const INO_RADIO_ITEM = `<ino-list><ino-control-item ino-role="radio" ino-text="Some Item"></ino-checkbox-item></ino-list>`;
const INO_RADIO_ITEM_CHECKED = `<ino-list><ino-control-item ino-role="radio" ino-text="Some Item" checked></ino-control-item></ino-list>`;
const INO_RADIO_ITEM_DISABLED = `<ino-list><ino-control-item ino-role="radio" ino-text="Some Item" ino-disabled></ino-control-item></ino-list>`;

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

  describe('Events', () => {
    it('should emit checkedChange event when clicked on checkbox with true as detail', async () => {
      const page = await setupPageWithContent(INO_CHECKBOX_ITEM);

      const clickSpy = await page.spyOnEvent('checkedChange');
      const inoControlItem = await page.find('ino-control-item');
      await inoControlItem.click();
      expect(clickSpy).toHaveReceivedEventTimes(1);
      expect(clickSpy).toHaveReceivedEventDetail(true);
    });

    it('should emit checkedChange event when clicked on radio-button with true as detail', async () => {
      const page = await setupPageWithContent(INO_RADIO_ITEM);

      const clickSpy = await page.spyOnEvent('checkedChange');
      const inoControlItem = await page.find('ino-control-item');
      await inoControlItem.click();
      expect(clickSpy).toHaveReceivedEventTimes(1);
      expect(clickSpy).toHaveReceivedEventDetail(true);
    });

    it('should emit checkedChange event with false as detail (radio)', async () => {
      const page = await setupPageWithContent(INO_CHECKBOX_ITEM_CHECKED);

      const clickSpy = await page.spyOnEvent('checkedChange');
      const inoControlItem = await page.find('ino-control-item');
      await inoControlItem.click();
      expect(clickSpy).toHaveReceivedEventDetail(false);
    });

    it('should emit a checkedChange event with true as detail (radio)', async () => {
      const page = await setupPageWithContent(INO_RADIO_ITEM_CHECKED);

      const clickSpy = await page.spyOnEvent('checkedChange');
      const inoControlItem = await page.find('ino-control-item');
      await inoControlItem.click();
      expect(clickSpy).toHaveReceivedEventDetail(true);
    });

    it('should not emit a checkedChange event if checkbox is disabled', async () => {
      const page = await setupPageWithContent(INO_CHECKBOX_ITEM_DISABLED);

      const clickSpy = await page.spyOnEvent('checkedChange');
      const inoControlItem = await page.find('ino-control-item');
      await inoControlItem.click();
      expect(clickSpy).not.toHaveReceivedEvent();
    });

    it('should not emit a checkedChange event if radio-button is disabled', async () => {
      const page = await setupPageWithContent(INO_RADIO_ITEM_DISABLED);

      const clickSpy = await page.spyOnEvent('checkedChange');
      const inoControlItem = await page.find('ino-control-item');
      await inoControlItem.click();
      expect(clickSpy).not.toHaveReceivedEvent();
    });
  });
});
