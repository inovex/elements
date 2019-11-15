import { setupPageWithContent } from '../../util/e2etests-setup';

const INO_CHECKBOX_ITEM = `<ino-list><ino-control-item ino-role="checkbox" ino-text="Some Item"></ino-control-item></ino-list>`;
const INO_CHECKBOX_ITEM_CHECKED = `<ino-list><ino-control-item ino-role="checkbox" ino-text="Some Item" checked></ino-control-item></ino-list>`;
const INO_CHECKBOX_ITEM_DISABLED = `<ino-list><ino-control-item ino-role="checkbox" ino-text="Some Item" ino-disabled></ino-control-item></ino-list>`;
const INO_RADIO_ITEM = `<ino-list><ino-control-item ino-role="radio" ino-text="Some Item"></ino-checkbox-item></ino-list>`;
const INO_RADIO_ITEM_CHECKED = `<ino-list><ino-control-item ino-role="radio" ino-text="Some Item" checked></ino-control-item></ino-list>`;
const INO_RADIO_ITEM_DISABLED = `<ino-list><ino-control-item ino-role="radio" ino-text="Some Item" ino-disabled></ino-control-item></ino-list>`;

describe('InoControlItem', () => {
  it('should render a checkbox with default values', async () => {
    const page = await setupPageWithContent(INO_CHECKBOX_ITEM);

    const inoControlItem = await page.find('ino-control-item');
    expect(inoControlItem).not.toBeNull();
    expect(inoControlItem.getAttribute('class')).toEqual('hydrated');

    const mdcListItem = await page.find('.mdc-list-item');
    expect(mdcListItem).not.toBeNull();
  });

  it('should render a radio-button with default values', async () => {
    const page = await setupPageWithContent(INO_RADIO_ITEM);

    const inoControlItem = await page.find('ino-control-item');
    expect(inoControlItem).not.toBeNull();
    expect(inoControlItem.getAttribute('class')).toEqual('hydrated');

    const mdcListItem = await page.find('.mdc-list-item');
    expect(mdcListItem).not.toBeNull();
  });

  it('should render with a checkbox', async () => {
    const page = await setupPageWithContent(INO_CHECKBOX_ITEM);
    const input = await page.find('input');
    expect(input).toEqualAttribute('type', 'checkbox');
  });

  it('should render with a radio-button', async () => {
    const page = await setupPageWithContent(INO_RADIO_ITEM);
    const input = await page.find('input');
    expect(input).toEqualAttribute('type', 'radio');
  });

  it('should render with unchecked checkbox', async () => {
    const page = await setupPageWithContent(INO_CHECKBOX_ITEM);
    const input = await page.find('input');
    const checked = await input.getProperty('checked');
    expect(checked).toBeFalsy();
  });

  it('should render with unchecked radio-button', async () => {
    const page = await setupPageWithContent(INO_RADIO_ITEM);
    const input = await page.find('input');
    const checked = await input.getProperty('checked');
    expect(checked).toBeFalsy();
  });

  it('should render with checked checkbox', async () => {
    const page = await setupPageWithContent(INO_CHECKBOX_ITEM_CHECKED);
    const input = await page.find('input');
    const checked = await input.getProperty('checked');
    expect(checked).toBeTruthy();
  });

  it('should render with checked radio-button', async () => {
    const page = await setupPageWithContent(INO_RADIO_ITEM_CHECKED);
    const input = await page.find('input');
    const checked = await input.getProperty('checked');
    expect(checked).toBeTruthy();
  });

  it('should emit checkedChange event when clicked on checkbox', async () => {
    const page = await setupPageWithContent(INO_CHECKBOX_ITEM);

    const clickSpy = await page.spyOnEvent('checkedChange');
    const inoControlItem = await page.find('ino-control-item');
    await inoControlItem.click();
    expect(clickSpy).toHaveReceivedEventTimes(1);
  });

  it('should emit checkedChange event when clicked on radio-button', async () => {
    const page = await setupPageWithContent(INO_RADIO_ITEM);

    const clickSpy = await page.spyOnEvent('checkedChange');
    const inoControlItem = await page.find('ino-control-item');
    await inoControlItem.click();
    expect(clickSpy).toHaveReceivedEventTimes(1);
  });

  it('should emit checkedChange event with true as detail (checkbox)', async () => {
    const page = await setupPageWithContent(INO_CHECKBOX_ITEM);

    const clickSpy = await page.spyOnEvent('checkedChange');
    const inoControlItem = await page.find('ino-control-item');
    await inoControlItem.click();
    expect(clickSpy).toHaveReceivedEventDetail(true);
  });

  it('should emit checkedChange event with true as detail (radio)', async () => {
    const page = await setupPageWithContent(INO_RADIO_ITEM);

    const clickSpy = await page.spyOnEvent('checkedChange');
    const inoControlItem = await page.find('ino-control-item');
    await inoControlItem.click();
    expect(clickSpy).toHaveReceivedEventDetail(true);
  });

  it('should emit checkedChange event with false as detail (radio)', async () => {
    const page = await setupPageWithContent(INO_CHECKBOX_ITEM_CHECKED);

    const clickSpy = await page.spyOnEvent('checkedChange');
    const inoControlItem = await page.find('ino-control-item');
    await inoControlItem.click();
    expect(clickSpy).toHaveReceivedEventDetail(false);
  });

  it('should emit checkedChange event with true as detail (radio)', async () => {
    const page = await setupPageWithContent(INO_RADIO_ITEM_CHECKED);

    const clickSpy = await page.spyOnEvent('checkedChange');
    const inoControlItem = await page.find('ino-control-item');
    await inoControlItem.click();
    expect(clickSpy).toHaveReceivedEventDetail(true);
  });

  it('should emit no checkedChange event when checkbox is disabled', async () => {
    const page = await setupPageWithContent(INO_CHECKBOX_ITEM_DISABLED);

    const clickSpy = await page.spyOnEvent('checkedChange');
    const inoControlItem = await page.find('ino-control-item');
    await inoControlItem.click();
    expect(clickSpy).not.toHaveReceivedEvent();
  });

  it('should emit no checkedChange event when radio-button is disabled', async () => {
    const page = await setupPageWithContent(INO_RADIO_ITEM_DISABLED);

    const clickSpy = await page.spyOnEvent('checkedChange');
    const inoControlItem = await page.find('ino-control-item');
    await inoControlItem.click();
    expect(clickSpy).not.toHaveReceivedEvent();
  });
});
