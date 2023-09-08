import { setupPageWithContent } from '../../util/e2etests-setup';
import { E2EElement, E2EPage } from '@stencil/core/testing';

const invalidTextFieldClass = 'mdc-text-field--invalid';

describe('InoInput', () => {
  let page: E2EPage;
  let inoInputEl: E2EElement;
  let nativeInputEl: E2EElement;
  let labelEl: E2EElement;

  beforeEach(async () => {
    page = await setupPageWithContent(`<ino-input></ino-input>`);
    inoInputEl = await page.find('ino-input');
    nativeInputEl = await page.find('input');
    labelEl = await page.find('label');
  });

  async function applyToNativeHtmlElement(
    fn: (input: HTMLInputElement) => void
  ): Promise<void> {
    const htmlInputEl = await page.$('input');
    await page.evaluate(fn, htmlInputEl);
  }

  async function getNativeHtmlValue(): Promise<string> {
    const htmlInputEl = await page.$('input');
    return await page.evaluate((el) => el.value, htmlInputEl);
  }

  async function blurNativeInputEl(): Promise<void> {
    await applyToNativeHtmlElement((el) => el.blur());
  }

  async function focusNativeInputEl(): Promise<void> {
    await applyToNativeHtmlElement((el) => el.focus());
  }

  it('should not update value on typing', async () => {
    let value = await getNativeHtmlValue();
    expect(value).toEqual('');
    await nativeInputEl.type('5');
    await page.waitForChanges();
    value = await getNativeHtmlValue();
    expect(value).toEqual('');
  });

  it('should update internal value on property change', async () => {
    inoInputEl.setAttribute('value', 5);
    await page.waitForChanges();
    const value = await getNativeHtmlValue();
    expect(value).toEqual('5');
  });

  describe('Input interaction', () => {
    it('should be focused automatically', async () => {
      const emptyElement = {};

      const focusedElementWithoutAutofocus = await page.evaluate(
        () => document.activeElement
      );
      expect(focusedElementWithoutAutofocus).toEqual(emptyElement);

      const pageWithFocusedInput = await setupPageWithContent(
        `<ino-input auto-focus></ino-input>`
      );
      const focusedElement = await pageWithFocusedInput.evaluate(
        () => document.activeElement
      );
      expect(focusedElement).not.toEqual(emptyElement);
    });

    it('should increase the value when clicking on up arrow', async () => {
      inoInputEl.setAttribute('type', 'number');
      await page.waitForChanges();

      const valueChangedSpy = await page.spyOnEvent('valueChange');

      await page.evaluate(() => {
        (document.querySelector('.up') as HTMLElement).click();
      });

      expect(valueChangedSpy).toHaveReceivedEventDetail('1');
    });

    it('should decrease the value when clicking on down arrow', async () => {
      inoInputEl.setAttribute('type', 'number');
      await page.waitForChanges();

      const valueChangedSpy = await page.spyOnEvent('valueChange');

      await page.evaluate(() => {
        (document.querySelector('.down') as HTMLElement).click();
      });

      expect(valueChangedSpy).toHaveReceivedEventDetail('-1');
    });
  });

  describe('Input validation', () => {
    it('should not be invalid by default', async () => {
      expect(labelEl).not.toHaveClass(invalidTextFieldClass);
    });

    it('should be marked as invalid when provided with error', async () => {
      inoInputEl.setAttribute('error', true);
      await page.waitForChanges();
      expect(labelEl).toHaveClass(invalidTextFieldClass);
    });

    describe('Pattern', () => {
      it('should be marked as invalid when pattern matches correctly but error is provided', async () => {
        inoInputEl.setAttribute('error', true);
        inoInputEl.setAttribute('pattern', 'a');
        await page.waitForChanges();
        inoInputEl.setAttribute('value', 'a');
        await page.waitForChanges();

        expect(labelEl).toHaveClass(invalidTextFieldClass);
      });

      it('should not be invalid on disabled inputs', async () => {
        inoInputEl.setAttribute('pattern', 'a');
        inoInputEl.setAttribute('disabled', true);
        await page.waitForChanges();
        await applyToNativeHtmlElement((el) => {
          el.value = 'b';
          el.blur();
        });
        expect(labelEl).not.toHaveClass(invalidTextFieldClass);
      });
    });

    describe('Required', () => {
      it('should not be invalid on required', async () => {
        inoInputEl.setAttribute('required', true);
        await page.waitForChanges();
        await blurNativeInputEl();
        expect(labelEl).not.toHaveClass(invalidTextFieldClass);
      });
      it('should not be invalid on required disabled inputs', async () => {
        inoInputEl.setAttribute('disabled', true);
        inoInputEl.setAttribute('required', true);
        await page.waitForChanges();
        await blurNativeInputEl();
        expect(labelEl).not.toHaveClass(invalidTextFieldClass);
      });
    });
  });

  describe('Properties', () => {
    it('should render with disabled property set to true', async () => {
      await inoInputEl.setAttribute('disabled', true);
      await page.waitForChanges();

      expect(nativeInputEl).toHaveAttribute('disabled');
      expect(labelEl).toHaveClass('mdc-text-field--disabled');
    });
  });

  describe('Events', () => {
    it('should trigger inoFocus-Event when focused', async () => {
      const spyOnFocusEvent = await inoInputEl.spyOnEvent('inoFocus');
      await nativeInputEl.focus();
      await page.waitForChanges();

      expect(spyOnFocusEvent).toHaveReceivedEvent();
    });

    it('should not bubble inoBlur or inoFocus', async () => {
      const spyOnFocusEvent = await page.spyOnEvent('inoFocus');
      const spyOnBlurEvent = await page.spyOnEvent('inoBlur');

      await nativeInputEl.triggerEvent('blur');
      await nativeInputEl.triggerEvent('focus');

      await page.waitForChanges();

      expect(spyOnFocusEvent).not.toHaveReceivedEvent();
      expect(spyOnBlurEvent).not.toHaveReceivedEvent();
    });

    it('should emit a valueChange event upon changing the input value', async () => {
      const valueChangeEvent = await page.spyOnEvent('valueChange');

      await nativeInputEl.type('5');
      await page.waitForChanges();

      expect(valueChangeEvent).toHaveReceivedEvent();
      expect(valueChangeEvent).toHaveReceivedEventDetail('5');
    });

    it('should not emit a change or input event upon changing the input value', async () => {
      const changeEvent = await page.spyOnEvent('change');
      const inputEvent = await page.spyOnEvent('input');

      await nativeInputEl.type('5');
      await page.waitForChanges();

      expect(changeEvent).not.toHaveReceivedEvent();
      expect(inputEvent).not.toHaveReceivedEvent();
    });

    it('should not emit a valueChange event if disabled is set to true', async () => {
      const valueChangeEvent = await page.spyOnEvent('valueChange');

      await inoInputEl.setAttribute('disabled', true);
      await page.waitForChanges();

      await nativeInputEl.type('5');
      await page.waitForChanges();

      expect(valueChangeEvent).not.toHaveReceivedEvent();
    });
  });

  describe('Methods', () => {
    it('should be focused after calling focus()', async () => {
      const emptyElement = {};

      const activeElement = await page.evaluate(() => document.activeElement);
      expect(activeElement).toEqual(emptyElement);

      await focusNativeInputEl();

      const activeElementProps = await page.evaluate(() => ({
        tagName: document.activeElement.tagName,
        parentClassName: document.activeElement.parentElement.className,
      }));

      expect(activeElementProps.tagName).toEqual('INPUT');
      expect(activeElementProps.parentClassName).toContain(
        'mdc-text-field--focused'
      );
    });

    it('should be blurred after calling blur() on the native input element', async () => {
      const emptyElement = {};

      await focusNativeInputEl();
      await blurNativeInputEl();

      const activeElement = await page.evaluate(() => document.activeElement);
      expect(activeElement).toEqual(emptyElement);
    });
  });

  describe('Email validation', () => {
    async function setEmailType(): Promise<void> {
      inoInputEl.setAttribute('type', 'email');
      await page.waitForChanges();
    }

    it('should mark the email as valid if the domain consists of multiple dots separated by at least one character', async () => {
      await setEmailType();
      await focusNativeInputEl();
      await applyToNativeHtmlElement((el) => {
        el.value = 'test@test.test.com';
        el.blur();
      });
      await page.waitForChanges();

      expect(labelEl).not.toHaveClass(invalidTextFieldClass);
    });
    it('should mark the email as valid if the domain comprises of two single characters separated by a dot', async () => {
      await setEmailType();
      await focusNativeInputEl();

      await applyToNativeHtmlElement((el) => {
        el.value = 'test@t.t';
        el.blur();
      });
      await page.waitForChanges();

      expect(labelEl).not.toHaveClass(invalidTextFieldClass);
    });
    it('should mark the email as invalid if it ends with a dot', async () => {
      await setEmailType();
      await focusNativeInputEl();

      await applyToNativeHtmlElement((el) => {
        el.value = 'test@d.';
        el.blur();
      });
      await page.waitForChanges();

      expect(labelEl).toHaveClass(invalidTextFieldClass);
    });
    it('should mark the email as invalid if it does not contain an @ symbol', async () => {
      await setEmailType();
      await focusNativeInputEl();

      await applyToNativeHtmlElement((el) => {
        el.value = 'test';
        el.blur();
      });

      await page.waitForChanges();

      expect(labelEl).toHaveClass(invalidTextFieldClass);
    });
    it('should mark the email as invalid if it contains multiple @ symbols', async () => {
      await setEmailType();
      await focusNativeInputEl();

      await applyToNativeHtmlElement((el) => {
        el.value = 'test@@test';
        el.blur();
      });
      await page.waitForChanges();

      expect(labelEl).toHaveClass(invalidTextFieldClass);
    });
    it('should mark the email as invalid if the domain contains multiple dots that are not separated by a character', async () => {
      await setEmailType();
      await focusNativeInputEl();

      await applyToNativeHtmlElement((el) => {
        el.value = 'test@test..com';
        el.blur();
      });
      await page.waitForChanges();

      expect(labelEl).toHaveClass(invalidTextFieldClass);
    });
    it('should mark the email as invalid if it does not conform to the given pattern', async () => {
      await setEmailType();

      await inoInputEl.setAttribute('pattern', '.+@inovex.de');
      await page.waitForChanges();

      await focusNativeInputEl();
      await applyToNativeHtmlElement((el) => {
        el.value = 'test@inoflex.com';
        el.blur();
      });
      await page.waitForChanges();

      expect(labelEl).toHaveClass(invalidTextFieldClass);
    });
  });
});
