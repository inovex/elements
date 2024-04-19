import { newSpecPage, SpecPage } from '@stencil/core/testing';
import { InoControlItem } from './ino-control-item';
import { Checkbox } from '../ino-checkbox/ino-checkbox';
import { Radio } from '../ino-radio/ino-radio';
import { ListItem } from '../ino-list-item/ino-list-item';
import { List } from '../ino-list/ino-list';
import { listenForEvent } from '../../util/test-utils';

const INO_CHECKBOX_ITEM = `<ino-list><ino-control-item role="checkbox" text="Some Item"></ino-control-item></ino-list>`;
const INO_CHECKBOX_ITEM_CHECKED = `<ino-list><ino-control-item role="checkbox" text="Some Item" checked></ino-control-item></ino-list>`;
const INO_CHECKBOX_ITEM_DISABLED = `<ino-list><ino-control-item role="checkbox" text="Some Item" disabled></ino-control-item></ino-list>`;
const INO_RADIO_ITEM = `<ino-list><ino-control-item role="radio" text="Some Item"></ino-checkbox-item></ino-list>`;
const INO_RADIO_ITEM_DISABLED = `<ino-list><ino-control-item role="radio" text="Some Item" disabled></ino-control-item></ino-list>`;

describe('InoControlItem', () => {
  let page: SpecPage;
  let inoControlItem: HTMLInoControlItemElement;

  const setupPage = async (html: string) => {
    page = await newSpecPage({
      components: [InoControlItem, List, ListItem, Checkbox, Radio],
      html,
    });
    inoControlItem = page.body.querySelector('ino-control-item > ino-list-item');
  };

  it('should emit checkedChange event when clicked on checkbox with true as detail', async () => {
    await setupPage(INO_CHECKBOX_ITEM);
    const { assertEventDetails } = listenForEvent(page, 'checkedChange');
    inoControlItem.click();
    assertEventDetails(true);
  });

  it('should emit checkedChange event when clicked on radio-button with true as detail', async () => {
    await setupPage(INO_RADIO_ITEM);
    const { assertEventDetails } = listenForEvent(page, 'checkedChange');
    inoControlItem.click();
    assertEventDetails(true);
  });

  it('should emit checkedChange event with false as detail (radio)', async () => {
    await setupPage(INO_CHECKBOX_ITEM_CHECKED);
    const { assertEventDetails } = listenForEvent(page, 'checkedChange');
    inoControlItem.click();
    assertEventDetails(false);
  });

  it('should not emit a checkedChange event if checkbox is disabled', async () => {
    await setupPage(INO_CHECKBOX_ITEM_DISABLED);
    const { eventSpy } = listenForEvent(page, 'checkedChange');
    inoControlItem.click();
    expect(eventSpy).not.toHaveBeenCalled();
  });

  it('should not emit a checkedChange event if radio-button is disabled', async () => {
    await setupPage(INO_RADIO_ITEM_DISABLED);
    const { eventSpy } = listenForEvent(page, 'checkedChange');
    inoControlItem.click();
    expect(eventSpy).not.toHaveBeenCalled();
  });
});
