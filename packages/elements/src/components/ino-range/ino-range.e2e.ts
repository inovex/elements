import { setupPageWithContent } from '../../util/e2etests-setup';


const INO_RANGE = `<ino-range/>`;
const INO_RANGE_SELECTOR = 'ino-range';
const MDC_SELECTOR = 'ino-range .mdc-slider';

describe('InoRange', () => {

  it('should render with defaul values', async () => {
    const page = await setupPageWithContent(INO_RANGE);
    const inoRange = await page.find(INO_RANGE_SELECTOR);

    expect(inoRange).toBeDefined();
  });

  describe('Properties', () => {

    it('should disabled the range component if disabled property is set to true', async () => {
      const page = await setupPageWithContent(INO_RANGE);
      const inoRange = await page.find(INO_RANGE_SELECTOR);
      const mdcSlider = await page.find(MDC_SELECTOR);

      await inoRange.setAttribute('disabled', true);
      await page.waitForChanges();

      expect(mdcSlider).toHaveAttribute('aria-disabled');
    });

    it('should set the min and max value of the range component', async () => {
      const page = await setupPageWithContent(INO_RANGE);
      const inoRange = await page.find(INO_RANGE_SELECTOR);
      const mdcSlider = await page.find(MDC_SELECTOR);

      await inoRange.setAttribute('min', 20);
      await inoRange.setAttribute('max', 400);
      await page.waitForChanges();

      const min = await mdcSlider.getAttribute('aria-valuemin');
      const max = await mdcSlider.getAttribute('aria-valuemax');

      expect(min).toBe("20");
      expect(max).toBe("400");
    });

    it('should set the step value of the range component', async () => {
      const page = await setupPageWithContent(INO_RANGE);
      const inoRange = await page.find(INO_RANGE_SELECTOR);
      const mdcSlider = await page.find(MDC_SELECTOR);

      await inoRange.setAttribute('step', 5);
      await page.waitForChanges();

      const step = await mdcSlider.getAttribute('data-step');

      expect(step).toBe("5");
    });

  });

  describe('Events', () => {

    it('should emit a valueChange event upon receiving MDCSlider:input event', async () => {


    });

    it('should prevent the propagation of the MDCSlider:change event', async () => {
      const page = await setupPageWithContent(INO_RANGE);
      const mdcSlider = await page.find(MDC_SELECTOR);
      const valueChangeEvent = await page.spyOnEvent('MDCSlider:change');

      await mdcSlider.triggerEvent('MDCSlider:change');
      await page.waitForChanges();

      expect(valueChangeEvent).not.toHaveReceivedEvent();
    });

  });

});
