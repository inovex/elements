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
  ({ key, text }) => `<ino-option value="${key}">${text}</ino-option>`
);

const NO_OPTIONS_TEXT = 'NO_OPTIONS_FOUND';

const INO_AUTOCOMPLETE_SELECTOR = 'ino-autocomplete';
const INO_AUTOCOMPLETE = `
    <ino-autocomplete debounce-timeout="0" no-options-text="${NO_OPTIONS_TEXT}">
      <ino-input id="my-input" slot="input"></ino-input>
      ${OPTION_ELS.join('\n')}
    </ino-autocomplete>
`;

const asyncFilter = async (arr, predicate) => {
  const results = await Promise.all(arr.map(predicate));
  return arr.filter((_v, index) => results[index]);
};

describe('InoAutocomplete', () => {
  let page: E2EPage;
  let inoAutocomplete: E2EElement;
  let inputEl: E2EElement;
  const getMenuEl = () => inoAutocomplete.shadowRoot.querySelector('.menu');

  async function openMenu() {
    await page.$eval('input', (e: HTMLElement) => e.focus());
    await page.waitForChanges();
  }

  async function findVisibleListItems(): Promise<E2EElement[]> {
    const allListItems = await inoAutocomplete.findAll('ino-option');
    return asyncFilter(allListItems, (listItem: E2EElement) =>
      listItem.isVisible()
    );
  }

  beforeEach(async () => {
    page = await setupPageWithContent(INO_AUTOCOMPLETE);
    inoAutocomplete = await page.find(INO_AUTOCOMPLETE_SELECTOR);
    inputEl = await page.find('#my-input');
  });

  it('should hide menu on render', () => {
    expect(getMenuEl()).toHaveClass('menu-hidden');
  });

  it('should open menu if input is clicked', async () => {
    await inputEl.click();
    await page.waitForChanges();
    expect(getMenuEl()).toHaveClass('menu-shown');
  });

  it('should hide menu on input blur', async () => {
    await openMenu();
    expect(getMenuEl()).toHaveClass('menu-shown');
    await page.$eval('input', (e: HTMLElement) => e.blur());
    await page.waitForChanges();
    expect(getMenuEl()).toHaveClass('menu-hidden');
  });

  it('should open menu if input is focused', async () => {
    await openMenu();
    expect(getMenuEl()).toHaveClass('menu-shown');
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
    let noOptionsText = getMenuEl().querySelector('p');
    expect(noOptionsText).toBeFalsy();

    await inputEl.type('no match');
    await page.waitForChanges();

    const visibleListItems = await findVisibleListItems();
    expect(visibleListItems.length).toBe(0);

    noOptionsText = getMenuEl().querySelector('p');
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
    const spy = await page.spyOnEvent('valueChange');
    await inoAutocomplete.press('ArrowDown');
    await inoAutocomplete.press('Enter');
    await page.waitForChanges();
    expect(spy).toHaveReceivedEvent();
    expect(spy).toHaveReceivedEventDetail(OPTIONS[0].key);
  });

  it('should receive key of the second item on double ArrowDown and Enter', async () => {
    await openMenu();
    const spy = await page.spyOnEvent('valueChange');
    await inoAutocomplete.press('ArrowDown');
    await inoAutocomplete.press('ArrowDown');
    await inoAutocomplete.press('Enter');
    await page.waitForChanges();
    expect(spy).toHaveReceivedEvent();
    expect(spy).toHaveReceivedEventDetail(OPTIONS[1].key);
  });

  it('should receive key of the last item on ArrowUp and Enter', async () => {
    await openMenu();
    const spy = await page.spyOnEvent('valueChange');
    await inoAutocomplete.press('ArrowUp');
    await inoAutocomplete.press('Enter');
    await page.waitForChanges();
    expect(spy).toHaveReceivedEvent();
    expect(spy).toHaveReceivedEventDetail(OPTIONS[OPTIONS.length - 1].key);
  });

  it('should write the selected item to the input', async () => {
    await openMenu();
    await inoAutocomplete.press('ArrowDown');
    await inoAutocomplete.press('Enter');
    await page.waitForChanges();
    const valueProp = await inputEl.getProperty('value');
    expect(valueProp).toEqual(OPTIONS[0].text);
  });

  it('should clear input on blur if its no option', async () => {
    await inputEl.click();
    const spy = await page.spyOnEvent('valueChange');
    await inputEl.type('Option');
    await page.$eval('input', (e: HTMLInputElement) => e.blur());
    await page.waitForChanges();
    const valueProp = await inputEl.getProperty('value');
    expect(valueProp).toEqual('');
    expect(spy).not.toHaveReceivedEvent();
  });

  it('should be able to select option that was added afterwards', async () => {
    const newOptionKey = 'Key of Option F';

    await page.$eval(INO_AUTOCOMPLETE_SELECTOR, (el) => {
      const inoOption = document.createElement('ino-option');
      inoOption.value = 'Key of Option F';
      inoOption.innerText = 'Option F';
      el.appendChild<HTMLInoOptionElement>(inoOption);
    });

    await openMenu();
    const visibleListItems = await findVisibleListItems();
    expect(visibleListItems).toHaveLength(OPTIONS.length + 1);

    const spy = await page.spyOnEvent('valueChange');
    await inoAutocomplete.press('ArrowUp');
    await inoAutocomplete.press('Enter');
    await page.waitForChanges();
    expect(spy).toHaveReceivedEvent();
    expect(spy).toHaveReceivedEventDetail(newOptionKey);
  });

  it('should emit null on blur if its invalid option', async () => {
    const spy = await page.spyOnEvent('valueChange');

    await inputEl.click();
    await inputEl.type(OPTIONS[0].text);
    await page.$eval('input', (e: HTMLInputElement) => e.blur());
    await page.waitForChanges();
    expect(spy).toHaveReceivedEvent();
    expect(spy).toHaveReceivedEventDetail(OPTIONS[0].key);

    await inputEl.click();
    await inputEl.type('Option');
    await page.$eval('input', (e: HTMLInputElement) => e.blur());
    await page.waitForChanges();
    expect(spy).toHaveReceivedEvent();
    expect(spy).toHaveReceivedEventDetail(null);
  });
});
