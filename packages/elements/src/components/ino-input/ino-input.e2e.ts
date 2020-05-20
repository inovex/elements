import { setupPageWithContent } from '../../util/e2etests-setup';

const INO_INPUT = `<ino-input></ino-input>`;
const INO_INPUT_SELECTOR = 'ino-input';
const INPUT_SELECTOR = 'ino-input > div > input';
const DIV_SELECTOR = 'ino-input > div';

describe('InoInput', () => {

  it('should render with default values', async () => {
    const page = await setupPageWithContent(INO_INPUT);
    const inoInput = await page.find(INO_INPUT_SELECTOR);
    const input = await page.find(INPUT_SELECTOR);

    expect(inoInput).toBeDefined();
    expect(input).toBeDefined();
  });

  // see https://jira.inovex.de/browse/ELEMENTS-419
  /*
  it('should trigger inoBlur-Event when blurred', async () => {
    const page = await setupPageWithContent(INO_INPUT);
    const inoInput = await page.find('ino-input');
    const input = await page.find('ino-input > div > input');

    const spyOnBlurEvent = await inoInput.spyOnEvent('inoBlur');
    await input.triggerEvent('blur');
    await page.waitForChanges();

    expect(spyOnBlurEvent).toHaveReceivedEvent();
  });
   */

  it('should be focused automatically', async () => {
    const emptyElement = {};

    const pageWithDefaultInput = await setupPageWithContent(INO_INPUT);
    const focusedElementWithoutAutofocus = await pageWithDefaultInput.evaluate(() => document.activeElement);
    expect(focusedElementWithoutAutofocus).toEqual(emptyElement);

    const pageWithFocusedInput = await setupPageWithContent(`<ino-input autofocus></ino-input>`);
    const focusedElement = await pageWithFocusedInput.evaluate(() => document.activeElement);
    expect(focusedElement).not.toEqual(emptyElement);
  });

  it('should be formatted to a decimal with two decimal places', async () => {
    const page = await setupPageWithContent(`
      <ino-input
        ino-decimal-places="2"
      >
      </ino-input>
    `);

    const inoInput = await page.find('ino-input');
    const input = await page.find('ino-input > div > input');
    inoInput.setProperty('value', 1);
    await page.waitForChanges();
    const value = await input.getProperty('value');

    expect(value).toEqual('1,00');
  });

  it('should be formatted to have a dot as a thousand separator', async () => {
    const page = await setupPageWithContent(`
      <ino-input
        ino-thousands-separator
      >
      </ino-input>
    `);

    const inoInput = await page.find('ino-input');
    const input = await page.find('ino-input > div > input');
    inoInput.setProperty('value', 1000);
    await page.waitForChanges();
    const value = await input.getProperty('value');

    expect(value).toEqual('1.000');
  });

  it('should be formatted to have two dots as a thousand separator', async () => {
    const page = await setupPageWithContent(`
      <ino-input
        ino-thousands-separator
      >
      </ino-input>
    `);

    const inoInput = await page.find('ino-input');
    const input = await page.find('ino-input > div > input');
    inoInput.setProperty('value', 1000000);
    await page.waitForChanges();
    const value = await input.getProperty('value');

    expect(value).toEqual('1.000.000');
  });

  it('should not be invalid by default', async () => {
    const page = await setupPageWithContent(INO_INPUT);
    const inputContainer = await page.find('ino-input > div');
    expect(inputContainer).not.toHaveClass('mdc-text-field--invalid');
  });

  it('should be marked as invalid when provided with ino-error', async () => {
    const page = await setupPageWithContent(`<ino-input ino-error></ino-input>`);
    const inputContainer = await page.find('ino-input > div');
    expect(inputContainer).toHaveClass('mdc-text-field--invalid');
  });

  it('should be marked as invalid when provided with wrong input according to pattern', async () => {
    const page = await setupPageWithContent(`<ino-input pattern="a" value="b"></ino-input>`);
    const inputContainer = await page.find('ino-input > div');
    expect(inputContainer).toHaveClass('mdc-text-field--invalid');
  });

  it('should be marked as invalid when pattern matches correctly but ino-error is provided', async () => {
    const page = await setupPageWithContent(`<ino-input ino-error pattern="a" value="a"></ino-input>`);
    const inputContainer = await page.find('ino-input > div');
    expect(inputContainer).toHaveClass('mdc-text-field--invalid');
  });

  describe('Properties', () => {

    it('should render with autocomplete property', async () => {
      const page = await setupPageWithContent(INO_INPUT);
      const inoInput = await page.find(INO_INPUT_SELECTOR);
      await inoInput.setAttribute('autocomplete', true);
      await page.waitForChanges();

      const input = await page.find(INPUT_SELECTOR);
      expect(input).toHaveAttribute('autocomplete');
    });

    it('should render with disabled property set to true', async () => {
      const page = await setupPageWithContent(INO_INPUT);
      const inoInput = await page.find(INO_INPUT_SELECTOR);
      await inoInput.setAttribute('disabled', true);
      await page.waitForChanges();

      const div = await page.find(DIV_SELECTOR);
      const input = await page.find(INPUT_SELECTOR);
      expect(input).toHaveAttribute('disabled');
      expect(div).toHaveClass('mdc-text-field--disabled');
    });

    it('should render with max property', async () => {
      const page = await setupPageWithContent(INO_INPUT);
      const inoInput = await page.find(INO_INPUT_SELECTOR);
      await inoInput.setAttribute('max', '30');
      await page.waitForChanges();

      const input = await page.find(INPUT_SELECTOR);
      expect(input).toHaveAttribute('max');

      const inputMinVal = await input.getAttribute('max');
      expect(inputMinVal).toBe('30');
    });

    it('should render with min property', async () => {
      const page = await setupPageWithContent(INO_INPUT);
      const inoInput = await page.find(INO_INPUT_SELECTOR);
      await inoInput.setAttribute('min', '30');
      await page.waitForChanges();

      const input = await page.find(INPUT_SELECTOR);
      expect(input).toHaveAttribute('min');

      const inputMinVal = await input.getAttribute('min');
      expect(inputMinVal).toBe('30');
    });

    it('should render with maxLength property', async () => {
      const page = await setupPageWithContent(INO_INPUT);
      const inoInput = await page.find(INO_INPUT_SELECTOR);
      await inoInput.setAttribute('maxLength', '5');
      await page.waitForChanges();

      const input = await page.find(INPUT_SELECTOR);
      expect(input).toHaveAttribute('maxLength');

      const inputMinVal = await input.getAttribute('maxLength');
      expect(inputMinVal).toBe('5');
    });

    it('should render with pattern property', async () => {
      const page = await setupPageWithContent(INO_INPUT);
      const inoInput = await page.find(INO_INPUT_SELECTOR);
      const pattern = '[A-Z]{5}';
      await inoInput.setAttribute('pattern', pattern);
      await page.waitForChanges();

      const input = await page.find(INPUT_SELECTOR);
      expect(input).toHaveAttribute('pattern');

      const inputMinVal = await input.getAttribute('pattern');
      expect(inputMinVal).toBe(pattern);
    });

    it('should render with placeholder property', async () => {
      const page = await setupPageWithContent(INO_INPUT);
      const inoInput = await page.find(INO_INPUT_SELECTOR);
      const placeholder = "test";
      await inoInput.setAttribute('placeholder', placeholder);
      await page.waitForChanges();

      const input = await page.find(INPUT_SELECTOR);
      expect(input).toHaveAttribute('placeholder');

      const inputMinVal = await input.getAttribute('placeholder');
      expect(inputMinVal).toBe(placeholder);
    });

    it('should render with required property', async () => {
      const page = await setupPageWithContent(INO_INPUT);
      const inoInput = await page.find(INO_INPUT_SELECTOR);
      await inoInput.setAttribute('required', true);
      await page.waitForChanges();

      const input = await page.find(INPUT_SELECTOR);
      expect(input).toHaveAttribute('required');
    });

    it('should render with step property', async () => {
      const page = await setupPageWithContent(INO_INPUT);
      const inoInput = await page.find(INO_INPUT_SELECTOR);
      await inoInput.setAttribute('step', '2');
      await page.waitForChanges();

      const input = await page.find(INPUT_SELECTOR);
      expect(input).toHaveAttribute('step');

      const inputMinVal = await input.getAttribute('step');
      expect(inputMinVal).toBe('2');
    });
  });

  describe('Events', () => {

    it('should trigger inoFocus-Event when focused', async () => {
      const page = await setupPageWithContent(INO_INPUT);
      const inoInput = await page.find(INO_INPUT_SELECTOR);
      const input = await page.find(INPUT_SELECTOR);

      const spyOnFocusEvent = await inoInput.spyOnEvent('inoFocus');
      await input.focus();
      await page.waitForChanges();

      expect(spyOnFocusEvent).toHaveReceivedEvent();
    });

    it('should not bubble inoBlur or inoFocus', async () => {
      const page = await setupPageWithContent(INO_INPUT);
      const input = await page.find(INPUT_SELECTOR);

      const spyOnFocusEvent = await page.spyOnEvent('inoFocus');
      const spyOnBlurEvent = await page.spyOnEvent('inoBlur');

      await input.triggerEvent('blur');
      await input.triggerEvent('focus');

      await page.waitForChanges();

      expect(spyOnFocusEvent).not.toHaveReceivedEvent();
      expect(spyOnBlurEvent).not.toHaveReceivedEvent();
    });

    it('should emit a valueChange event upon changing the input value', async () => {
      const page = await setupPageWithContent(INO_INPUT);
      const input = await page.find(INPUT_SELECTOR);
      const valueChangeEvent = await page.spyOnEvent('valueChange');

      await input.type('5');
      await page.waitForChanges();

      expect(valueChangeEvent).toHaveReceivedEvent();
      expect(valueChangeEvent).toHaveReceivedEventDetail('5');
    });

    it('should not emit a change or input event upon changing the input value', async () => {
      const page = await setupPageWithContent(INO_INPUT);
      const input = await page.find(INPUT_SELECTOR);
      const changeEvent = await page.spyOnEvent('change');
      const inputEvent = await page.spyOnEvent('input');

      await input.type('5');
      await page.waitForChanges();

      expect(changeEvent).not.toHaveReceivedEvent();
      expect(inputEvent).not.toHaveReceivedEvent();
    });
  });
  describe('Methods', () => {
    it('should be focused after calling focus()', async () => {
      const emptyElement = {};

      const page = await setupPageWithContent(INO_INPUT);
      const activeElement = await page.evaluate(() => document.activeElement);
      expect(activeElement).toEqual(emptyElement);

      await page.evaluate(async () => await document.querySelector('ino-input').focus());

      const activeElementProps = await page.evaluate(() => ({
        tagName: document.activeElement.tagName,
        parentClassName: document.activeElement.parentElement.className
      }));

      expect(activeElementProps.tagName).toEqual('INPUT');
      expect(activeElementProps.parentClassName).toContain('mdc-text-field--focused');
    });

    it('should be blurred after calling blur() on the native input element', async () => {
      const emptyElement = {};

      const page = await setupPageWithContent(INO_INPUT);

      await page.evaluate(async () => await document.querySelector('ino-input').focus());
      await page.evaluate(async () => {
        const nativeInputElement = await document.querySelector('ino-input').getInputElement();
        nativeInputElement.blur();
      });

      const activeElement = await page.evaluate(() => document.activeElement);
      expect(activeElement).toEqual(emptyElement);
    });
  });
});
