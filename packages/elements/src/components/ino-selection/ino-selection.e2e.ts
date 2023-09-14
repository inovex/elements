import { E2EPage } from '@stencil/core/testing';
import { setupPageWithContent } from '../../util/e2etests-setup';
import { KeyValue } from '../types';
import { ElementHandle } from 'puppeteer';

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

describe('InoSelection', () => {
    let page: E2EPage;
    let inoSelection: ElementHandle;
    let popoverContent: ElementHandle;
    let optionList: ElementHandle;
    let inoChipEl: ElementHandle;
    let addOptionBtnEl: ElementHandle;
    let inoInputEl: ElementHandle;
  
    //click slot-trigger to open Menu
    async function openSelection() {
      await inoChipEl.click();
      await page.waitForChanges();
    }
  
    beforeEach(async () => {
      page = await setupPageWithContent(`
        <ino-selection label="Select label">
            <ino-chip id="trigger" slot="popover-trigger">open selection</ino-chip>
        </ino-selection>
      `);

      inoSelection = await page.$('ino-selection');
      await page.$eval('ino-selection', (e: any, OPTIONS) => {
        e.options = OPTIONS
      }, OPTIONS);
      await page.waitForChanges();

      inoChipEl = await page.$('ino-chip');
    });

    it('should render', async () => {
      expect(inoSelection).toBeDefined();
      expect(inoChipEl).not.toBeNull();
    })

    it('should hide the popover on render', async () => {
      popoverContent = await page.$('[data-tippy-root]'); 
      await page.waitForChanges();
      expect(popoverContent).toBeNull();
    });

    it('should open the popover on trigger click', async () => {
      openSelection();
      await page.waitForSelector('[data-tippy-root]');
      popoverContent = await page.$('[data-tippy-root]');
      await page.waitForChanges();
      expect(popoverContent).not.toBeNull();
    })

    it('should not render option list if selection is closed', async() => {
      //check if there are result elements before opening
      optionList = await inoSelection.$('.optionList');
      await page.waitForChanges();
      expect(optionList).toBeNull();
    })

    it('should render option list Elements when ino-selection is open', async () => {
      openSelection()
      //check for result elements after opening
      await page.waitForSelector('.optionList');
      optionList = await inoSelection.$('.optionList');
      await page.waitForChanges();
      expect(optionList).not.toBeNull();
    })

    it('should remove any result Elements if ino-selection is closed', async () => {
      openSelection();
      // calling again to close Selection
      openSelection();
      // check after closing element if there are any result Elements left
      optionList = await inoSelection.$('.optionList');
      await page.waitForChanges();
      expect(optionList).toBeNull();
    })

    it('should show an addOption button on render with default string "Type to add new option"', async () => {
      openSelection();
      // check if button exists on selection
      await page.waitForSelector('ino-button');
      addOptionBtnEl = await page.$('ino-button');
      await page.waitForChanges();
      expect(addOptionBtnEl).not.toBeNull();

      // check if label is correct
      const addOptionTextContent = await page.$eval('ino-button', (e: any) => e.textContent);
      await page.waitForChanges();
      expect(addOptionTextContent).toEqualText('Type to add new option');
    })

    it('should hide addOption button if displayAddOption is false', async () => {
      await page.$eval('ino-selection', (e: any) => e.displayAddOption = false);
      openSelection();
      // check if button doesn't exist on selection
      addOptionBtnEl = (await page.$('ino-button'));
      await page.waitForChanges();
      expect(addOptionBtnEl).toBeNull();
    })

    it('should emit new option after clicking addOption button', async () => {
      const spy = await page.spyOnEvent('optionCreated');
      openSelection();
      // input some text to be add
      await page.waitForSelector('input');
      inoInputEl = await page.$('input');
      await inoInputEl.press('KeyH');
      await inoInputEl.press('KeyI');
      await page.waitForChanges();
     
      // click add option Button
      await page.waitForSelector('ino-button');
      addOptionBtnEl = (await page.$('ino-button'));
      await page.waitForChanges();
      await addOptionBtnEl.click();
      await page.waitForChanges();

      // check if event was emitted
      expect(spy).toHaveReceivedEvent();
      expect(spy).toHaveReceivedEventDetail('hi');
    })

    it('should show all options if there is no input', async () => {
      openSelection();

      // get optionList with resultElements
      await page.waitForSelector('.ino-selection__list-item');
      const resultItems = await page.$$('ino-selection__list-item');

      resultItems.forEach(async (item, index) => {
        // check if resultElement are the same as the options
        const textValue = await item.getProperty('text-content');
        expect(textValue).toEqualText(OPTIONS[index].value);
      })
    })

    it('should show noOptionText if no option was found', async () => {
      openSelection();
      // input some text which should show no results
      await page.waitForSelector('input');
      inoInputEl = await page.$('input');
      await inoInputEl.press('KeyC');
      await page.waitForChanges();
      
      // check for a no-match element
      await page.waitForSelector('.ino-selection__list-item--no-match');
      const noMatchEL = await page.$('.ino-selection__list-item--no-match');
      await page.waitForChanges();

      expect(noMatchEL).not.toBeNull();

      const noOptionsText = await page.$eval('.ino-selection__list-item--no-match', (e:any)=> e.textContent);
      await page.waitForChanges();

      expect(noOptionsText).toBe('Found No Results');
    });
      
    it('should show only one input when typing "Ham"', async () => { 
      openSelection();
      // input 'Ham'
      await page.waitForSelector('input');
      inoInputEl = await page.$('input');
      await inoInputEl.press('KeyH');
      await inoInputEl.press('KeyA');
      await inoInputEl.press('KeyM');
      await page.waitForChanges();

      // get optionList with resultElements
      await page.waitForSelector('.ino-selection__list-item');
      const resultItems = await page.$$('.ino-selection__list-item');
      await page.waitForChanges();
      expect(resultItems.length).toBe(1);
    })

    it('should receive the key and value of the first item on ArrowDown and Enter', async () => {
      openSelection();
      const spy = await page.spyOnEvent('valueChange');
      await page.$('ino-selection');
      await page.waitForChanges();
      await inoSelection.press('ArrowDown');
      await inoSelection.press('Enter');
      await page.waitForChanges();

      // check if event was emitted
      expect(spy).toHaveReceivedEvent();
      expect(spy).toHaveReceivedEventDetail(OPTIONS[0]);
    })

    it('should receive key and value of the second item on double ArrowDown and Enter', async () => { 
      openSelection();
      const spy = await page.spyOnEvent('valueChange');
      await page.$('ino-selection');
      await page.waitForChanges();
      await inoSelection.press('ArrowDown');
      await inoSelection.press('ArrowDown');
      await inoSelection.press('Enter');
      await page.waitForChanges();

      // check if event was emitted
      expect(spy).toHaveReceivedEvent();
      expect(spy).toHaveReceivedEventDetail(OPTIONS[1]);
    })

    it('should receive key of the last item on ArrowUp and Enter', async () => {
      openSelection();
      const spy = await page.spyOnEvent('valueChange');
      await page.$('ino-selection');
      await page.waitForChanges();
      await inoSelection.press('ArrowUp');
      await inoSelection.press('Enter');
      await page.waitForChanges();

      // check if event was emitted
      expect(spy).toHaveReceivedEvent();
      expect(spy).toHaveReceivedEventDetail(OPTIONS[2]);
    })

    it('should clear input on blur if its no option', async () => {
      openSelection();
      // Input something with will trigger a no match
      await page.waitForSelector('input');
      const inputEl = await page.$('input');
      await inputEl.press('KeyC');
      await page.waitForChanges();

      // blur input 
      await page.$eval('input', (e: HTMLInputElement) => e.blur());
      await page.waitForChanges();
      // check for empty input
      const inputValue = await page.$eval('input', (e: any) => e.blur());
      await page.waitForChanges();
      expect(inputValue).not.toBeDefined();
    });

    it('should emit null on blur if its a non-matched option', async () => {
      openSelection();
      const spy = await page.spyOnEvent('valueChange');
      // Input something with will trigger a no match
      await page.waitForSelector('input');
      const inputEl = await page.$('input');
      await inputEl.press('KeyC');
      await page.waitForChanges();

      // blur input 
      await page.$eval('input', (e: HTMLInputElement) => e.blur());
      await page.waitForChanges();
      // check for empty input
      expect(spy).toHaveReceivedEvent();
      expect(spy).toHaveReceivedEventDetail(null);
    });

    it('should be able to select option that was added afterwards', async () => {
      // expand options
      const spy = await page.spyOnEvent('valueChange');
      const newOptions = [...OPTIONS, { key: 'm', value: 'munich' }];

      openSelection();
  
      await page.$eval('ino-selection', (e: any, newOptions) => {
        e.options = newOptions
      }, newOptions);
      await page.waitForChanges();
      inoSelection = await page.$('ino-selection');
      await page.waitForChanges();

      // select new element
      await inoSelection.press('ArrowUp');
      await inoSelection.press('Enter');
      await page.waitForChanges();

      // check for if new element was selected
      expect(spy).toHaveReceivedEvent();
      expect(spy).toHaveReceivedEventDetail({ key: 'm', value: 'munich' });
    })

    it('should stay open after selection if stayOpen is true', async () => {
      await page.$eval('ino-selection', (e: any) => e.stayOpen = true);
      openSelection();
      await page.waitForChanges();

      await page.waitForSelector('ino-selection');
      inoSelection = await page.$('ino-selection');
      await page.waitForChanges();

      // select a element
      await inoSelection.press('ArrowDown');
      await inoSelection.press('Enter');
      await page.waitForChanges();

      // check if popover is still open
      await page.waitForSelector('[data-tippy-root]');
      popoverContent = await page.$('[data-tippy-root]');
      await page.waitForChanges();
      expect(popoverContent).not.toBeNull();
    })

    it('should hide ino-selection on click out of popover', async () => {
      openSelection();
      // calling again to close Selection
      openSelection();
      // check if popover is not open
      popoverContent = await page.$('[data-tippy-root]');
      await page.waitForChanges();
      expect(popoverContent).toBeNull();
    })

    it('should not open if trigger is clicked in controlled mode', async () => {
      await page.$eval('ino-selection', (e: any) => e.controlled = true);
      await page.waitForChanges();
      openSelection();

      // check if popover is not open
      popoverContent = await page.$('[data-tippy-root]');
      await page.waitForChanges();
      expect(popoverContent).toBeNull();
    })

    it('should emit visibleValueChange event in controlled mode if popover wants to open', async () => {
      const spy = await page.spyOnEvent('selectionVisibleChanged');
      await page.waitForChanges();
      await page.$eval('ino-selection', (e: any) => e.controlled = true);
      await page.waitForChanges();

      // click trigger
      await inoChipEl.click();
      await page.waitForChanges();
      
      // check if event was emitted
      expect(spy).toHaveReceivedEvent();
      expect(spy).toHaveReceivedEventDetail(true);
    })

    it('should debounce resultList in given ms', async () => {
      const debounce = 200;
      await page.$eval('ino-selection', (e: any, debounce) => {e.debounce = debounce}, debounce);

      openSelection();
      await page.waitForChanges();

      await page.waitForSelector('ino-selection');
      inoSelection = await page.$('ino-selection');
      await page.waitForChanges();

      // Input 'h' 
      await page.waitForSelector('input');
      const inputEl = await page.$('input');
      inputEl.press('KeyK');

      // check immediately after input, if results stay the same
      let resultItems = await page.$$('.ino-selection__list-item');
      await page.waitForChanges();
      expect(resultItems.length).toBe(3);

      await page.waitForChanges();

      // wait for 200ms after input
      setTimeout(() => {}, debounce);
      // check if there is only one result 'karlsruhe'
      await page.waitForSelector('.ino-selection__list-item');
      resultItems = await page.$$('.ino-selection__list-item');
      await page.waitForChanges();
      expect(resultItems.length).toBe(1);
      // check if result element contains mark
      await page.waitForSelector('mark');
      const markEL = await page.$$('mark');
      expect(markEL).not.toBeNull();
    })
});