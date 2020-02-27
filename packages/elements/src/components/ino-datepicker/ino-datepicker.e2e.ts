import { setupPageWithContent } from '../../util/e2etests-setup';

const INO_DATEPICKER = `<ino-datepicker></ino-datepicker>`;
const INO_DATEPICKER_WITH_MIN_DATE = `<ino-datepicker min='today'></ino-datepicker>`;

describe('InoDatepicker', () => {
  it('should render with default values', async () => {
    const page = await setupPageWithContent(INO_DATEPICKER);

    const inoDatepickerEl = await page.find('ino-datepicker');
    expect(inoDatepickerEl).toBeDefined();

    const inputEl = await page.find('input');
    expect(inputEl).toBeDefined();

    const flatpickrInputEl = await page.find('ino-input > .flatpickr-input');
    expect(flatpickrInputEl).toBeDefined();

    const flatpickrCalEl = await page.find('.flatpickr-calendar');
    expect(flatpickrCalEl).toBeDefined();
    expect(flatpickrCalEl).toHaveClass('animate');
    expect(flatpickrCalEl).not.toHaveClass('noCalendar');
    expect(flatpickrCalEl).not.toHaveClass('hasTime');
  });

  it('should render with autofocus', async () => {
    const page = await setupPageWithContent(INO_DATEPICKER);
    
    const inoDatepickerEl = await page.find('ino-datepicker');
    expect(inoDatepickerEl).toBeDefined();

    const flatpickrInputEl = await page.find('.flatpickr-input');
    expect(flatpickrInputEl).not.toHaveClass('mdc-text-field--focused');

    inoDatepickerEl.setAttribute('autofocus', 'true');
    await page.waitForChanges();

    expect(flatpickrInputEl).toHaveClass('mdc-text-field--focused');
  })

  it('should render with disabled', async () => {
    const page = await setupPageWithContent(INO_DATEPICKER);
    
    const inoDatepickerEl = await page.find('ino-datepicker');
    expect(inoDatepickerEl).toBeDefined();

    const inputEl = await page.find('input');
    expect(inputEl).toBeDefined();
    expect(inputEl).not.toHaveAttribute('disabled')

    inoDatepickerEl.setAttribute('disabled', 'true');
    await page.waitForChanges();

    expect(inputEl).toHaveAttribute('disabled');
  })

  it('should render with required', async () => {
    const page = await setupPageWithContent(INO_DATEPICKER);

    const inoDatepickerEl = await page.find('ino-datepicker');
    expect(inoDatepickerEl).toBeDefined();

    const inoInputEL = await page.find('input');
    expect(inoInputEL).toBeDefined();
    expect(inoInputEL).not.toHaveAttribute('required');

    inoDatepickerEl.setAttribute('required', 'true');
    await page.waitForChanges();
    expect(inoDatepickerEl).toHaveAttribute('required');
  })

  it('should render with inoOutline', async () => {
    const page = await setupPageWithContent(INO_DATEPICKER);

    const inoDatepickerEl = await page.find('ino-datepicker');
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
  })

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
        expect(day).not.toHaveClass('flatpickr-disabled')
        break;
      }
      expect(day).toHaveClass('flatpickr-disabled');
    }
  })

  describe('property date-format', () => {

    it('should render with only date', async () => {
      const page = await setupPageWithContent(INO_DATEPICKER);
      const inoDatepickerEl = await page.find('ino-datepicker');

      inoDatepickerEl.setAttribute('ino-date-format', 'd-Y-m');
      await page.waitForChanges();

      expect(inoDatepickerEl.getAttribute('ino-date-format')).toEqual('d-Y-m');
  
      const flatpickrCalEl = await page.find('.flatpickr-calendar');
      expect(flatpickrCalEl).toBeDefined();
      expect(flatpickrCalEl).toHaveClass('animate');
      expect(flatpickrCalEl).not.toHaveClass('hasTime');
      expect(flatpickrCalEl).not.toHaveClass('noCalendar');
    })
  })
});
