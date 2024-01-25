import { E2EElement, E2EPage } from '@stencil/core/testing';
import { setupPageWithContent } from '../../util/e2etests-setup';
import { KeyValue } from '../types';

const OPTIONS: KeyValue[] = [
  {
    key: 'hh',
    value: 'Hamburg',
  },
  {
    key: 'ber',
    value: 'Berlin',
  },
  {
    key: 'k',
    value: 'Karlsruhe',
  },
];

describe('InoAutocomplete', () => {
  let page: E2EPage;
  let inoAutocomplete: E2EElement;
  let inputEl: E2EElement;
  let menu: E2EElement;

  async function openMenu() {
    await page.$eval('input', (e: HTMLElement) => e.focus());
    await page.waitForChanges();
  }

  async function findOptions() {
    return page.findAll('li');
  }

  beforeEach(async () => {
    page = await setupPageWithContent(`
        <ino-autocomplete>
            <ino-input id="my-input"></ino-input>
        </ino-autocomplete>
    `);
    inoAutocomplete = await page.find('ino-autocomplete');
    inoAutocomplete.setProperty('options', OPTIONS);

    await page.waitForChanges();
    inputEl = await page.find('#my-input');
    menu = await page.find('[role="listbox"]');
  });

  it('should hide menu on render', async () => {
    expect(await menu.isVisible()).toBeFalsy();
  });

  it('should show menu if input is clicked', async () => {
    await inputEl.click();
    await page.waitForChanges();
    expect(await menu.isVisible()).toBeTruthy();
  });

  it('should show menu if input is focused', async () => {
    await openMenu();
    await page.waitForChanges();
    expect(await menu.isVisible()).toBeTruthy();
  });

  it('should hide menu on input blur', async () => {
    await openMenu();
    await page.waitForChanges();
    await page.$eval('input', (e: HTMLElement) => e.blur());
    await page.waitForChanges();
    expect(await menu.isVisible()).toBeFalsy();
  });

  it('should show all options if there is no input', async () => {
    await openMenu();
    const visibleListItems = await findOptions();
    expect(visibleListItems.length).toBe(OPTIONS.length);
  });

  it('should show the noOptionText if no options was found', async () => {
    await openMenu();
    await inputEl.type('no match');
    await page.waitForChanges();

    const visibleListItems = await findOptions();
    expect(visibleListItems.length).toBe(0);

    const notFoundMsgEl = await page.find('span');
    expect(notFoundMsgEl).toBeTruthy();
  });

  it('should show only one input when typing "Ham"', async () => {
    await openMenu();
    await inputEl.type('Ham');
    await page.waitForChanges();
    const visibleListItems = await findOptions();
    expect(visibleListItems.length).toBe(1);
  });

  it('should receive key of the first item on ArrowDown and Enter', async () => {
    await openMenu();
    const spy = await page.spyOnEvent('valueChange');
    await inoAutocomplete.press('ArrowDown');
    await inoAutocomplete.press('Enter');
    await page.waitForChanges();
    expect(spy).toHaveReceivedEvent();
    expect(spy).toHaveReceivedEventDetail(OPTIONS[0]);
  });

  it('should receive key of the second item on double ArrowDown and Enter', async () => {
    await openMenu();
    const spy = await page.spyOnEvent('valueChange');
    await inoAutocomplete.press('ArrowDown');
    await inoAutocomplete.press('ArrowDown');
    await inoAutocomplete.press('Enter');
    await page.waitForChanges();
    expect(spy).toHaveReceivedEvent();
    expect(spy).toHaveReceivedEventDetail(OPTIONS[1]);
  });

  it('should receive key of the last item on ArrowUp and Enter', async () => {
    await openMenu();
    const spy = await page.spyOnEvent('valueChange');
    await inoAutocomplete.press('ArrowUp');
    await inoAutocomplete.press('Enter');
    await page.waitForChanges();
    expect(spy).toHaveReceivedEvent();
    expect(spy).toHaveReceivedEventDetail(OPTIONS[OPTIONS.length - 1]);
  });

  it('should clear input on blur if its no option', async () => {
    await inputEl.click();
    await inputEl.type('Option');
    await page.$eval('input', (e: HTMLInputElement) => e.blur());
    await page.waitForChanges();
    const valueProp = await inputEl.getProperty('value');
    expect(valueProp).toEqual('');
  });

  it('should emit null on blur if its a non-matched option', async () => {
    await inputEl.click();
    const spy = await page.spyOnEvent('valueChange');
    await inputEl.type('No Option');
    await page.$eval('input', (e: HTMLInputElement) => e.blur());
    await page.waitForChanges();
    expect(spy).toHaveReceivedEventDetail(null);
  });

  it('should be able to select option that was added afterwards', async () => {
    const newOptions = [...OPTIONS, { key: 'm', value: 'munich' }];

    inoAutocomplete.setProperty('options', newOptions);
    await page.waitForChanges();
    await openMenu();
    const visibleListItems = await findOptions();
    expect(visibleListItems).toHaveLength(newOptions.length);

    const spy = await page.spyOnEvent('valueChange');
    await inoAutocomplete.press('ArrowUp');
    await inoAutocomplete.press('Enter');
    await page.waitForChanges();
    expect(spy).toHaveReceivedEventDetail(newOptions[newOptions.length - 1]);
  });
});
