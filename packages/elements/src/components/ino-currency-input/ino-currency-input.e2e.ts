import { setupPageWithContent } from '../../util/e2etests-setup';
const CONTENT = `
  <ino-currency-input>
    <ino-input type="text"></ino-input>
  </ino-currency-input>
`;
const NATIVE_INPUT_SELECTOR = 'ino-input > label > input';
const HIDDEN_INPUT_SELECTOR = 'input[type="hidden"]';

describe('InoCurrencyInput', () => {
  describe('Properties', () => {
    it('should render without value', async () => {
      const page = await setupPageWithContent(CONTENT);
      const input = await page.find(NATIVE_INPUT_SELECTOR);
      expect(await input.getProperty('value')).toBe('');
    });

    it('should setup without default value', async () => {
      const page = await setupPageWithContent(CONTENT);
      const currencyInput = await page.find('ino-currency-input');
      currencyInput.setAttribute('value', 15000.99);
      await page.waitForChanges();

      const input = await page.find(NATIVE_INPUT_SELECTOR);
      expect(await input.getProperty('value')).toBe('15.000,99');

      const hiddenInput = await page.find(HIDDEN_INPUT_SELECTOR);
      expect(await hiddenInput.getProperty('value')).toBe('15000.99');
    });

    it('should format thousands on focus and blur', async () => {
      const page = await setupPageWithContent(CONTENT);
      const currencyInput = await page.find('ino-currency-input');
      currencyInput.setAttribute('value', 15000.99);
      await page.waitForChanges();

      // Focus
      const inoInput = await page.find('ino-input');
      inoInput.triggerEvent('inoFocus');
      await page.waitForChanges();
      let input = await page.find(NATIVE_INPUT_SELECTOR);
      expect(await input.getProperty('value')).toBe('15000,99');

      // Blur
      inoInput.triggerEvent('inoBlur');
      await page.waitForChanges();
      input = await page.find(NATIVE_INPUT_SELECTOR);
      expect(await input.getProperty('value')).toBe('15.000,99');
    });

    it('should render with different locale', async () => {
      const page = await setupPageWithContent(CONTENT);
      const currencyInput = await page.find('ino-currency-input');
      currencyInput.setAttribute('currency-locale', 'en-US');
      currencyInput.setAttribute('value', 15000.99);
      await page.waitForChanges();

      const input = await page.find(NATIVE_INPUT_SELECTOR);
      expect(await input.getProperty('value')).toBe('15,000.99');
    });

    it('should allow negative inputs', async () => {
      const page = await setupPageWithContent(CONTENT);
      const input = await page.find(NATIVE_INPUT_SELECTOR);
      await input.type('-1500,00');
      await page.waitForChanges();
      const hiddenInput = await page.find(HIDDEN_INPUT_SELECTOR);
      expect(await hiddenInput.getProperty('value')).toBe('-1500');
    });

    it('should render with 0', async () => {
      const page = await setupPageWithContent(CONTENT);
      const input = await page.find(NATIVE_INPUT_SELECTOR);
      await input.type('0');
      await page.waitForChanges();
      const hiddenInput = await page.find(HIDDEN_INPUT_SELECTOR);
      expect(await hiddenInput.getProperty('value')).toBe('0');
    });

    it('should prevent negative inputs on min=0', async () => {
      const page = await setupPageWithContent(CONTENT);
      const inoInput = await page.find('ino-input');
      inoInput.setProperty('min', '0');
      await page.waitForChanges();

      const input = await page.find(NATIVE_INPUT_SELECTOR);
      await input.type('-1500,00');
      await page.waitForChanges();
      const hiddenInput = await page.find(HIDDEN_INPUT_SELECTOR);
      expect(await hiddenInput.getProperty('value')).toBe('1500');
    });
  });

  describe('Events', () => {
    it('should fire valueChange on user input', async () => {
      const page = await setupPageWithContent(CONTENT);
      const valueChange = await page.spyOnEvent('valueChange');
      expect(valueChange).not.toHaveReceivedEvent();

      const input = await page.find(NATIVE_INPUT_SELECTOR);
      await input.type('5000,99');
      await page.waitForChanges();
      expect(valueChange.firstEvent.detail).toBe(5);
      expect(valueChange.lastEvent.detail).toBe(5000.99);
    });

    it('should not fire on non numeric values', async () => {
      const page = await setupPageWithContent(CONTENT);
      const valueChange = await page.spyOnEvent('valueChange');
      expect(valueChange).not.toHaveReceivedEvent();

      const input = await page.find(NATIVE_INPUT_SELECTOR);
      await input.type('1a');
      await page.waitForChanges();
      expect(valueChange.lastEvent.detail).toBe(1);
    });

    it('should not fire on more than two decimals', async () => {
      const page = await setupPageWithContent(CONTENT);
      const valueChange = await page.spyOnEvent('valueChange');
      expect(valueChange).not.toHaveReceivedEvent();

      const input = await page.find(NATIVE_INPUT_SELECTOR);
      await input.type('11,119');
      await page.waitForChanges();
      expect(valueChange.lastEvent.detail).toBe(11.11);
    });

    it('should accept zero values (controlled)', async () => {
      const testValue = 0;
      const expected =  Intl.NumberFormat('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(testValue);
     
      const page = await setupPageWithContent(`
      <ino-currency-input value="${testValue}">
        <ino-input type="text"></ino-input>
      </ino-currency-input>
    `);
    const input = await page.find(NATIVE_INPUT_SELECTOR);
    expect(await input.getProperty('value')).toBe(expected);
    });
  });
});
