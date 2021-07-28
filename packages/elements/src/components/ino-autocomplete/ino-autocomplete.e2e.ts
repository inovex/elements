import { E2EElement, E2EPage } from '@stencil/core/testing';
import { setupPageWithContent } from '../../util/e2etests-setup';

const OPTIONS = ['Item A', 'Item B', 'Item C', 'Item D', 'Item E'];

const LIST_ITEMS = OPTIONS.map(
  (option) => `<ino-list-item text="${option}"></ino-list-item>`
);

const NO_OPTIONS_TEXT = 'NO_OPTIONS_FOUND';

const INO_AUTOCOMPLETE = `
    <ino-autocomplete debounce-timeout="0" no-options-text="${NO_OPTIONS_TEXT}">
      <ino-input id="my-input" slot="input" />
      <ino-list id="my-list" slot="list">
        ${LIST_ITEMS.join('\n')}
      </ino-list>
    </ino-autocomplete>
`;

const asyncFilter = async (arr, predicate) => {
  const results = await Promise.all(arr.map(predicate));

  return arr.filter((_v, index) => results[index]);
};

describe('InoAutocomplete', () => {
  let page: E2EPage;
  let inputEl: E2EElement;
  let menuEl: E2EElement;
  let listEl: E2EElement;

  beforeEach(async () => {
    page = await setupPageWithContent(INO_AUTOCOMPLETE);
    inputEl = await page.find('#my-input');
    menuEl = await page.find('.menu');
    listEl = await page.find('#my-list');
  });

  it('should hide menu on render', async () => {
    const isVisible = await menuEl.isVisible();
    expect(isVisible).toBeFalsy();
  });

  async function openMenu() {
    await inputEl.focus();
    await page.waitForChanges();
  }

  async function findVisibleListItems(): Promise<E2EElement[]> {
    const allListItems = await listEl.findAll('ino-list-item');

    return asyncFilter(allListItems, (listItem) => {
      const isVisible = listItem.isVisible();
      return isVisible;
    });
  }

  it('should open menu if input is clicked', async () => {
    await inputEl.click();
    await page.waitForChanges();
    const isVisible = await menuEl.isVisible();
    expect(isVisible).toBeTruthy();
  });

  it('should hide menu on input blur', async () => {
    await inputEl.click();
    await page.$eval('input', (e: HTMLElement) => e.blur());
    await page.waitForChanges();
    const isVisible = await menuEl.isVisible();
    expect(isVisible).toBeFalsy();
  });

  it('should open menu if input is focused', async () => {
    await openMenu();
    const isVisible = await menuEl.isVisible();
    expect(isVisible).toBeTruthy();
  });

  it('should show all options if there is no input', async () => {
    await openMenu();
    const visibleListItems = await findVisibleListItems();
    expect(visibleListItems.length).toBe(LIST_ITEMS.length);
  });

  it('should show all options if all options match the input', async () => {
    await openMenu();
    await inputEl.type('Item');
    await page.waitForChanges();
    const visibleListItems = await findVisibleListItems();
    expect(visibleListItems.length).toBe(LIST_ITEMS.length);
  });

  it('should show the noOptionText if no options was found', async () => {
    await openMenu();
    let noOptionsText = await page.find('p');
    expect(noOptionsText).toBeFalsy();

    await inputEl.type('no match');
    await page.waitForChanges();

    const visibleListItems = await findVisibleListItems();
    expect(visibleListItems.length).toBe(0);

    noOptionsText = await page.find('p');
    expect(noOptionsText).toEqualText(NO_OPTIONS_TEXT);
  });

  it('should show only one input when typing "Item A"', async () => {
    await openMenu();
    await inputEl.type('Item A');
    await page.waitForChanges();
    const visibleListItems = await findVisibleListItems();
    expect(visibleListItems.length).toBe(1);
  });

  it('should select the first item on ArrowDown and Enter', async () => {
    await openMenu();
    const spy = await page.spyOnEvent('optionSelected');
    await inputEl.press('ArrowDown');
    await inputEl.press('Enter');
    await page.waitForChanges();
    expect(spy).toHaveReceivedEvent();
    expect(spy).toHaveReceivedEventDetail(OPTIONS[0]);
  });

  it('should select the second item on double ArrowDown and Enter', async () => {
    await openMenu();
    const spy = await page.spyOnEvent('optionSelected');
    await inputEl.press('ArrowDown');
    await inputEl.press('ArrowDown');
    await inputEl.press('Enter');
    await page.waitForChanges();
    expect(spy).toHaveReceivedEvent();
    expect(spy).toHaveReceivedEventDetail(OPTIONS[1]);
  });

  it('should select the last item on ArrowUp and Enter', async () => {
    await openMenu();
    const spy = await page.spyOnEvent('optionSelected');
    await inputEl.press('ArrowUp');
    await inputEl.press('Enter');
    await page.waitForChanges();
    expect(spy).toHaveReceivedEvent();
    expect(spy).toHaveReceivedEventDetail(OPTIONS[OPTIONS.length - 1]);
  });

  it('should write the selected item to the input', async () => {
    await openMenu();
    await inputEl.press('ArrowDown');
    await inputEl.press('Enter');
    await page.waitForChanges();
    const valueProp = await inputEl.getProperty('value');
    expect(valueProp).toEqual(OPTIONS[0]);
  });

  it('should clear input on blur if its no option', async () => {
    await inputEl.click();
    const spy = await page.spyOnEvent('optionSelected');
    await inputEl.type('Item');
    await page.$eval('input', (e: HTMLElement) => e.blur());
    await page.waitForChanges();
    const valueProp = await inputEl.getProperty('value');
    expect(valueProp).toEqual('');
    expect(spy).not.toHaveReceivedEvent();
  });

  it('should be able to select option that was added afterwards', async () => {
    const newOptionText = 'Item F';

    await page.$eval('ul', (el: HTMLElement) => {
      const newOption: any = document.createElement('ino-list-item');
      newOption.text = 'Item F';
      el.appendChild(newOption);
    });

    const spy = await page.spyOnEvent('optionSelected');
    await inputEl.press('ArrowUp');
    await inputEl.press('Enter');
    await page.waitForChanges();
    expect(spy).toHaveReceivedEventDetail(newOptionText);
  });
});
