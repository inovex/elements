import { newSpecPage, SpecPage } from '@stencil/core/testing';
import { InoControlItem } from './ino-control-item';
import { Checkbox } from '../ino-checkbox/ino-checkbox';
import { Radio } from '../ino-radio/ino-radio';
import { ListItem } from '../ino-list-item/ino-list-item';
import { List } from '../ino-list/ino-list';

const INO_CHECKBOX_ITEM = `<ino-list><ino-control-item role="checkbox" text="Some Item"></ino-control-item></ino-list>`;
const INO_CHECKBOX_ITEM_CHECKED = `<ino-list><ino-control-item role="checkbox" text="Some Item" checked></ino-control-item></ino-list>`;
const INO_CHECKBOX_ITEM_DISABLED = `<ino-list><ino-control-item role="checkbox" text="Some Item" disabled></ino-control-item></ino-list>`;
const INO_RADIO_ITEM = `<ino-list><ino-control-item role="radio" text="Some Item"></ino-checkbox-item></ino-list>`;
const INO_RADIO_ITEM_CHECKED = `<ino-list><ino-control-item role="radio" text="Some Item" checked></ino-control-item></ino-list>`;
const INO_RADIO_ITEM_DISABLED = `<ino-list><ino-control-item role="radio" text="Some Item" disabled></ino-control-item></ino-list>`;

describe('InoControlItem', () => {
  let page: SpecPage;
  let inoControlItem: HTMLInoControlItemElement;
  const eventSpy = jest.fn();

  const setupPage = async (html: string) => {
    page = await newSpecPage({
      components: [InoControlItem, List, ListItem, Checkbox, Radio],
      html,
    });
    eventSpy.mockClear();
    inoControlItem = page.body.querySelector('ino-control-item > ino-list-item');
    page.win.addEventListener('checkedChange', eventSpy);
  };

  it('should emit checkedChange event when clicked on checkbox with true as detail', async () => {
    await setupPage(INO_CHECKBOX_ITEM);
    inoControlItem.click();

    expect(eventSpy).toHaveBeenCalledTimes(1);
    expect(eventSpy.mock.calls[0][0]).toHaveProperty('detail', true);
  });

  it('should emit checkedChange event when clicked on radio-button with true as detail', async () => {
    await setupPage(INO_RADIO_ITEM);
    inoControlItem.click();

    expect(eventSpy).toHaveBeenCalledTimes(1);
    expect(eventSpy.mock.calls[0][0]).toHaveProperty('detail', true);
  });

  it('should emit checkedChange event with false as detail (radio)', async () => {
    await setupPage(INO_CHECKBOX_ITEM_CHECKED);
    inoControlItem.click();
    expect(eventSpy.mock.calls[0][0]).toHaveProperty('detail', false);
  });

  it('should emit a checkedChange event with true as detail (radio)', async () => {
    await setupPage(INO_RADIO_ITEM_CHECKED);
    inoControlItem.click();
    expect(eventSpy.mock.calls[0][0]).toHaveProperty('detail', true);
  });

  it('should not emit a checkedChange event if checkbox is disabled', async () => {
    await setupPage(INO_CHECKBOX_ITEM_DISABLED);
    inoControlItem.click();
    expect(eventSpy).not.toHaveBeenCalled();
  });

  it('should not emit a checkedChange event if radio-button is disabled', async () => {
    await setupPage(INO_RADIO_ITEM_DISABLED);
    inoControlItem.click();
    expect(eventSpy).not.toHaveBeenCalled();
  });
});
