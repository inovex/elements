import { setupPageWithContent } from '../../util/e2etests-setup';

const INO_DATEPICKER = `<ino-datepicker></ino-datepicker>`;
const INO_DATEPICKER_WITH_SIBLING = `<ino-datepicker></ino-datepicker><button>Click Me</button>`;
const INO_DATEPICKER_WITH_MIN_DATE = `<ino-datepicker min='today'></ino-datepicker>`;
const INO_DATEPICKER_WITH_FORMAT = `<ino-datepicker ino-date-format='m-Y-d'></ino-datepicker>`;
const DATEPICKER = 'ino-datepicker';
const INPUT = 'input';

describe('InoDatepicker', () => {

  describe('Properties', () => {
    it('should render with default values', async () => {
      const page = await setupPageWithContent(INO_DATEPICKER);

      const inoDatepickerEl = await page.find(DATEPICKER);
      expect(inoDatepickerEl).toBeDefined();

      const inputEl = await page.find(INPUT);
      expect(inputEl).toBeDefined();

      const flatpickrInputEl = await page.find('ino-input > .flatpickr-input');
      expect(flatpickrInputEl).toBeDefined();

      const flatpickrCalEl = await page.find('.flatpickr-calendar');
      expect(flatpickrCalEl).toBeDefined();
      expect(flatpickrCalEl).toHaveClass('animate');
      expect(flatpickrCalEl).not.toHaveClass('noCalendar');
      expect(flatpickrCalEl).not.toHaveClass('hasTime');
    });

    it('should render with autofocus set to true', async () => {
      const page = await setupPageWithContent(INO_DATEPICKER);

      const inoDatepickerEl = await page.find(DATEPICKER);
      expect(inoDatepickerEl).toBeDefined();

      const flatpickrInputEl = await page.find('.flatpickr-input');
      expect(flatpickrInputEl).not.toHaveClass('mdc-text-field--focused');

      inoDatepickerEl.setAttribute('autofocus', 'true');
      await page.waitForChanges();

      expect(flatpickrInputEl).toHaveClass('mdc-text-field--focused');
    });

    it('should render with disabled set to true', async () => {
      const page = await setupPageWithContent(INO_DATEPICKER);

      const inoDatepickerEl = await page.find(DATEPICKER);
      expect(inoDatepickerEl).toBeDefined();

      const inputEl = await page.find(INPUT);
      expect(inputEl).toBeDefined();
      expect(inputEl).not.toHaveAttribute('disabled');

      inoDatepickerEl.setAttribute('disabled', 'true');
      await page.waitForChanges();

      expect(inputEl).toHaveAttribute('disabled');
    });

    it('should render with required set to true', async () => {
      const page = await setupPageWithContent(INO_DATEPICKER);

      const inoDatepickerEl = await page.find(DATEPICKER);
      expect(inoDatepickerEl).toBeDefined();

      const inoInputEL = await page.find(INPUT);
      expect(inoInputEL).toBeDefined();
      expect(inoInputEL).not.toHaveAttribute('required');

      inoDatepickerEl.setAttribute('required', 'true');
      await page.waitForChanges();
      expect(inoDatepickerEl).toHaveAttribute('required');
    });

    it('should render with inoOutline set to true', async () => {
      const page = await setupPageWithContent(INO_DATEPICKER);

      const inoDatepickerEl = await page.find(DATEPICKER);
      expect(inoDatepickerEl).toBeDefined();

      let mdcLineRipple = await page.find('.mdc-line-ripple');
      let mdcNotchedOutline = await page.find('.mdc-notched-outline');
      expect(mdcLineRipple).toBeDefined();
      expect(mdcNotchedOutline).toBeNull();

      inoDatepickerEl.setAttribute('ino-outline', 'true');
      await page.waitForChanges();

      mdcLineRipple = await page.find('.mdc-line-ripple');
      mdcNotchedOutline = await page.find('.mdc-notched-outline');
      expect(mdcLineRipple).toBeNull();
      expect(mdcNotchedOutline).toBeDefined();
    });

    it('should render with min date', async () => {
      let page = await setupPageWithContent(INO_DATEPICKER);

      let flatpickrCalEl = await page.find('.flatpickr-calendar');
      expect(flatpickrCalEl).toBeDefined();

      page = await setupPageWithContent(INO_DATEPICKER_WITH_MIN_DATE);
      flatpickrCalEl = await page.find('.flatpickr-calendar');
      expect(flatpickrCalEl).toBeDefined();

      const days = await page.findAll('.flatpickr-day');
      for(const day of days) {
        if(day.classList.contains('today')) {
          expect(day).not.toHaveClass('flatpickr-disabled');
          break;
        }
        expect(day).toHaveClass('flatpickr-disabled');
      }
    });

    it('should render with min and max date', async () => {
      const page = await setupPageWithContent(INO_DATEPICKER);
      const datepicker = await page.find(DATEPICKER);

      await datepicker.setAttribute('max', 'today');
      await datepicker.setAttribute('min', 'today');
      await page.waitForChanges();

      const days = await page.findAll('.flatpickr-day');
      for(const day of days) {
        if (day.classList.contains('today')) {
          expect(day).not.toHaveClass('flatpickr-disabled');
          break;
        }
        expect(day).toHaveClass('flatpickr-disabled');
      }
    });

    it('should render with inoRange set to true', async () => {
      const page = await setupPageWithContent(INO_DATEPICKER);
      const datepicker = await page.find(DATEPICKER);

      await datepicker.setAttribute('ino-range', true);
      await page.waitForChanges();

      expect(datepicker).toHaveAttribute('ino-range');
    });

    it('should render with inoShowLabelHint set to true', async () => {
      const page = await setupPageWithContent(INO_DATEPICKER);
      const datepicker = await page.find(DATEPICKER);

      await datepicker.setAttribute('ino-show-label-hint', true);
      await page.waitForChanges();

      expect(datepicker).toHaveAttribute('ino-show-label-hint');
    });

    it.only('should set invalid state for required inputs', async () => {
      const page = await setupPageWithContent(INO_DATEPICKER_WITH_SIBLING);
      const inoDatepickerEl = await page.find(DATEPICKER);
      const buttonEl = await page.find('button');
      const flatpickrInputEl = await page.find('.flatpickr-input');
    
      inoDatepickerEl.setAttribute('required', true);
      await page.waitForChanges();

      expect(flatpickrInputEl).not.toHaveClass('mdc-text-field--invalid');
      
      inoDatepickerEl.click();
      await page.waitForChanges();
      buttonEl.click();
      await page.waitForChanges();

      expect(flatpickrInputEl).toHaveClass('mdc-text-field--invalid');
    })
  });

  describe('Events', () => {
    it('should emit a valueChange event upon changing the input', async () => {
      let page = await setupPageWithContent(INO_DATEPICKER);
      const input = await page.find(INPUT);
      const valueChangeEvent = await page.spyOnEvent('valueChange');

      await input.type('1');
      await page.waitForChanges();
      
      expect(valueChangeEvent).toHaveReceivedEvent();
    });
    
    it('should not emit a valueChange event if datepicker is disabled', async () => {
      let page = await setupPageWithContent(INO_DATEPICKER);
      const datepicker = await page.find(DATEPICKER);
      const input = await page.find(INPUT);
      const valueChangeEvent = await page.spyOnEvent('valueChange');

      await datepicker.setAttribute('disabled', true);
      await page.waitForChanges();

      await input.type('1');
      await page.waitForChanges();

      expect(valueChangeEvent).not.toHaveReceivedEvent();
    });
  });

  describe('property date-format', () => {

    it('should render with only date', async () => {
      const page = await setupPageWithContent(INO_DATEPICKER);
      const inoDatepickerEl = await page.find(DATEPICKER);

      inoDatepickerEl.setAttribute('ino-date-format', 'd-Y-m');
      await page.waitForChanges();

      expect(inoDatepickerEl.getAttribute('ino-date-format')).toEqual('d-Y-m');

      const flatpickrCalEl = await page.find('.flatpickr-calendar');
      expect(flatpickrCalEl).toBeDefined();
      expect(flatpickrCalEl).toHaveClass('animate');
      expect(flatpickrCalEl).not.toHaveClass('hasTime');
      expect(flatpickrCalEl).not.toHaveClass('noCalendar');
    })

    it('should set invalid state', async () => {
      const page = await setupPageWithContent(INO_DATEPICKER_WITH_FORMAT);
      const inoDatepickerEl = await page.find(DATEPICKER);
      const flatpickrInputEl = await page.find('.flatpickr-input');
    
      inoDatepickerEl.setAttribute('value','01-1970-01');
      await page.waitForChanges();

      expect(flatpickrInputEl).not.toHaveClass('mdc-text-field--invalid');
      
      inoDatepickerEl.setAttribute('value', '01.03.1970');
      await page.waitForChanges();

      expect(flatpickrInputEl).toHaveClass('mdc-text-field--invalid');
    });

    it('should set invalid state only if value is set', async () => {
      const page = await setupPageWithContent(INO_DATEPICKER_WITH_FORMAT);
      const inoDatepickerEl = await page.find(DATEPICKER);
      const flatpickrInputEl = await page.find('.flatpickr-input');
    
      inoDatepickerEl.setAttribute('ino-date-format', 'd-Y-m');
      inoDatepickerEl.setAttribute('required',false);
      inoDatepickerEl.setAttribute('value','');
      await page.waitForChanges();

      expect(flatpickrInputEl).not.toHaveClass('mdc-text-field--invalid');
    });

  
  })
});
