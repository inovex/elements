import { setupPageWithContent } from '../../util/e2etests-setup';

const INO_RANGE = `<ino-range max="1" min="0"/>`;
const INO_RANGE_SELECTOR = 'ino-range';
const MDC_SELECTOR = 'ino-range .mdc-slider';

describe('InoRange', () => {
  describe('Properties', () => {
    it('should disable the range component if disabled property is set to true', async () => {
      const page = await setupPageWithContent(INO_RANGE);
      const inoRange = await page.find(INO_RANGE_SELECTOR);
      const mdcSlider = await page.find(MDC_SELECTOR);

      await inoRange.setAttribute('disabled', true);
      await page.waitForChanges();

      expect(mdcSlider).toHaveAttribute('aria-disabled');
      expect(mdcSlider).toHaveClass('mdc-slider--disabled');
    });

    it('should set the min and max value of the range component', async () => {
      const page = await setupPageWithContent(INO_RANGE);
      const inoRange = await page.find(INO_RANGE_SELECTOR);
      const mdcSlider = await page.find('.mdc-slider__thumb');

      await inoRange.setAttribute('min', 20);
      await inoRange.setAttribute('max', 400);
      await page.waitForChanges();

      const min = await mdcSlider.getAttribute('aria-valuemin');
      const max = await mdcSlider.getAttribute('aria-valuemax');

      expect(min).toBe('20');
      expect(max).toBe('400');
    });

    it('should set the step value of the range component', async () => {
      const page = await setupPageWithContent(INO_RANGE);
      const inoRange = await page.find(INO_RANGE_SELECTOR);
      const mdcSlider = await page.find(MDC_SELECTOR);

      await inoRange.setAttribute('step', 5);
      await page.waitForChanges();

      const step = await mdcSlider.getAttribute('data-step');

      expect(step).toBe('5');
    });

    it('should render as a discrete slider if inoDiscrete is true', async () => {
      const page = await setupPageWithContent(INO_RANGE);
      const inoRange = await page.find(INO_RANGE_SELECTOR);
      const mdcSlider = await page.find(MDC_SELECTOR);

      await inoRange.setAttribute('ino-discrete', true);
      await page.waitForChanges();

      expect(mdcSlider).toHaveClass('mdc-slider--discrete');
    });

    it('should render with tick marks if inoMarkers is true', async () => {
      const page = await setupPageWithContent(INO_RANGE);
      const inoRange = await page.find(INO_RANGE_SELECTOR);
      const mdcSlider = await page.find(MDC_SELECTOR);

      await inoRange.setAttribute('ino-markers', true);
      await page.waitForChanges();

      expect(mdcSlider).toHaveClass('mdc-slider--tick-marks');
    });
  });

  describe('Events', () => {
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
