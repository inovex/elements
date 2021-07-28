import { E2EElement, E2EPage } from '@stencil/core/testing';
import { setupPageWithContent } from '../../util/e2etests-setup';

const OPTIONS = [
  {
    key: 'Key of value A',
    text: 'Option A',
  },
  {
    key: 'Key of value B',
    text: 'Option B',
  },
  {
    key: 'Key of value C',
    text: 'Option C',
  },
  {
    key: 'Key of value D',
    text: 'Option D',
  },
  {
    key: 'Key of value E',
    text: 'Option E',
  },
];

// TODO key value
const OPTION_ELS = OPTIONS.map(
  (option) => `<ino-option value="${option.key}">${option.text}</ino-option>`
);

const NO_OPTIONS_TEXT = 'NO_OPTIONS_FOUND';

const INO_AUTOCOMPLETE = `
    <ino-autocomplete debounce-timeout="0" no-options-text="${NO_OPTIONS_TEXT}">
      <ino-input id="my-input" slot="input" />
      <ino-list id="my-list" slot="list">
        ${OPTION_ELS.join('\n')}
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
    const allListItems = await listEl.findAll('ino-option');

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
    expect(visibleListItems.length).toBe(OPTION_ELS.length);
  });

  it('should show all options if all options match the input', async () => {
    await openMenu();
    await inputEl.type('Option');
    await page.waitForChanges();
    const visibleListItems = await findVisibleListItems();
    expect(visibleListItems.length).toBe(OPTION_ELS.length);
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
    await inputEl.type('Option A');
    await page.waitForChanges();
    const visibleListItems = await findVisibleListItems();
    expect(visibleListItems.length).toBe(1);
  });

  it('should receive key of the first item on ArrowDown and Enter', async () => {
    await openMenu();
    const spy = await page.spyOnEvent('optionSelected');
    await inputEl.press('ArrowDown');
    await inputEl.press('Enter');
    await page.waitForChanges();
    expect(spy).toHaveReceivedEvent();
    expect(spy).toHaveReceivedEventDetail(OPTIONS[0].key);
  });

  it('should receive key of the second item on double ArrowDown and Enter', async () => {
    await openMenu();
    const spy = await page.spyOnEvent('optionSelected');
    await inputEl.press('ArrowDown');
    await inputEl.press('ArrowDown');
    await inputEl.press('Enter');
    await page.waitForChanges();
    expect(spy).toHaveReceivedEvent();
    expect(spy).toHaveReceivedEventDetail(OPTIONS[1].key);
  });

  it('should receive key of the last item on ArrowUp and Enter', async () => {
    await openMenu();
    const spy = await page.spyOnEvent('optionSelected');
    await inputEl.press('ArrowUp');
    await inputEl.press('Enter');
    await page.waitForChanges();
    expect(spy).toHaveReceivedEvent();
    expect(spy).toHaveReceivedEventDetail(OPTIONS[OPTIONS.length - 1].key);
  });

  it('should write the selected item to the input', async () => {
    await openMenu();
    await inputEl.press('ArrowDown');
    await inputEl.press('Enter');
    await page.waitForChanges();
    const valueProp = await inputEl.getProperty('value');
    expect(valueProp).toEqual(OPTIONS[0].text);
  });

  it('should clear input on blur if its no option', async () => {
    await inputEl.click();
    const spy = await page.spyOnEvent('optionSelected');
    await inputEl.type('Option');
    await page.$eval('input', (e: HTMLElement) => e.blur());
    await page.waitForChanges();
    const valueProp = await inputEl.getProperty('value');
    expect(valueProp).toEqual('');
    expect(spy).not.toHaveReceivedEvent();
  });

  it('should be able to select option that was added afterwards', async () => {
    const newOptionsKey = 'Key of Option F';

    await page.$eval('ul', (el: HTMLElement) => {
      const newOption: any = document.createElement('ino-option');
      newOption.value = 'Key of Option F';
      newOption.innerText = 'Option F';
      el.appendChild(newOption);
    });

    const spy = await page.spyOnEvent('optionSelected');
    await inputEl.press('ArrowUp');
    await inputEl.press('Enter');
    await page.waitForChanges();
    expect(spy).toHaveReceivedEventDetail(newOptionsKey);
  });
});
