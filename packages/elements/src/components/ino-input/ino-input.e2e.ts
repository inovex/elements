import { setupPageWithContent } from '../../util/e2etests-setup';
import { E2EElement, E2EPage } from '@stencil/core/testing';

const INO_INPUT = `<ino-input></ino-input>`;
const INO_EMAIL_INPUT = `<ino-input type="email"></ino-input>`;
const INO_INPUT_SELECTOR = 'ino-input';
const INPUT_SELECTOR = 'ino-input > label > input';
const MDC_TEXTFIELD_SELECTOR = 'ino-input > label';

describe('InoInput', () => {
  let page: E2EPage;
  let inoInputEl: E2EElement;
  let inputEl: E2EElement;

  beforeEach(async () => {
    page = await setupPageWithContent(INO_INPUT);
    inoInputEl = await page.find('ino-input');
    inputEl = await page.find('input');
  });

  async function getNativeHtmlValue(): Promise<string> {
    const htmlInputEl = await page.$('input')
    return await page.evaluate((el) => el.value, htmlInputEl);
  }

  it('should not update value on typing', async () => {
    let value = await getNativeHtmlValue();
    expect(value).toEqual('');
    await inputEl.type('5');
    await page.waitForChanges();
    value = await getNativeHtmlValue();
    expect(value).toEqual('');
  });

  it('should update internal value on property change', async () => {
    inoInputEl.setAttribute('value', 5);
    await page.waitForChanges();
    const value = await getNativeHtmlValue();
    expect(value).toEqual("5");
  });

  describe('Input interaction', () => {
    it('should be focused automatically', async () => {
      const emptyElement = {};

      const pageWithDefaultInput = await setupPageWithContent(INO_INPUT);
      const focusedElementWithoutAutofocus = await pageWithDefaultInput.evaluate(
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
      const page = await setupPageWithContent(`
      <ino-input
        type="number"
      >
      </ino-input>
    `);

      const valueChangedSpy = await page.spyOnEvent('valueChange');

      await page.evaluate(() => {
        (document.querySelector('.up') as HTMLElement).click();
      });

      expect(valueChangedSpy).toHaveReceivedEventDetail('1');
    });

    it('should decrease the value when clicking on down arrow', async () => {
      const page = await setupPageWithContent(`
      <ino-input
        type="number"
      >
      </ino-input>
    `);

      const valueChangedSpy = await page.spyOnEvent('valueChange');

      await page.evaluate(() => {
        (document.querySelector('.down') as HTMLElement).click();
      });

      expect(valueChangedSpy).toHaveReceivedEventDetail('-1');
    });
  });

  describe('Input validation', () => {
    it('should not be invalid by default', async () => {
      const page = await setupPageWithContent(INO_INPUT);
      const inputContainer = await page.find(MDC_TEXTFIELD_SELECTOR);
      expect(inputContainer).not.toHaveClass('mdc-text-field--invalid');
    });

    it('should be marked as invalid when provided with error', async () => {
      const page = await setupPageWithContent(`<ino-input error></ino-input>`);
      const inputContainer = await page.find(MDC_TEXTFIELD_SELECTOR);
      expect(inputContainer).toHaveClass('mdc-text-field--invalid');
    });

    describe('Pattern', () => {
      it('should be marked as invalid when pattern matches correctly but error is provided', async () => {
        const page = await setupPageWithContent(
          `<ino-input error pattern="a" value="a"></ino-input>`
        );
        const inputContainer = await page.find(MDC_TEXTFIELD_SELECTOR);
        expect(inputContainer).toHaveClass('mdc-text-field--invalid');
      });

      it('should not be invalid on disabled inputs', async () => {
        const page = await setupPageWithContent(
          `<ino-input pattern="a" disabled></ino-input>`
        );
        await page.evaluate(async () => {
          const nativeInputElement = await document
            .querySelector('ino-input')
            .getInputElement();
          nativeInputElement.value = 'b';
          nativeInputElement.blur();
        });
        const inputContainer = await page.find(MDC_TEXTFIELD_SELECTOR);
        expect(inputContainer).not.toHaveClass('mdc-text-field--invalid');
      });
    });

    describe('Required', () => {
      it('should not be invalid on required', async () => {
        const page = await setupPageWithContent(
          `<ino-input required></ino-input>`
        );
        await page.evaluate(async () => {
          const nativeInputElement = await document
            .querySelector('ino-input')
            .getInputElement();
          nativeInputElement.blur();
        });
        const inputContainer = await page.find(MDC_TEXTFIELD_SELECTOR);
        expect(inputContainer).not.toHaveClass('mdc-text-field--invalid');
      });
      it('should not be invalid on required disabled inputs', async () => {
        const page = await setupPageWithContent(
          `<ino-input required disabled></ino-input>`
        );
        await page.evaluate(async () => {
          const nativeInputElement = await document
            .querySelector('ino-input')
            .getInputElement();
          nativeInputElement.blur();
        });
        const inputContainer = await page.find(MDC_TEXTFIELD_SELECTOR);
        expect(inputContainer).not.toHaveClass('mdc-text-field--invalid');
      });
    });
  });

  describe('Properties', () => {
    it('should render with disabled property set to true', async () => {
      const page = await setupPageWithContent(INO_INPUT);
      const inoInput = await page.find(INO_INPUT_SELECTOR);
      await inoInput.setAttribute('disabled', true);
      await page.waitForChanges();

      const div = await page.find(MDC_TEXTFIELD_SELECTOR);
      const input = await page.find(INPUT_SELECTOR);
      expect(input).toHaveAttribute('disabled');
      expect(div).toHaveClass('mdc-text-field--disabled');
    });
  });

  describe('Events', () => {
    // see https://github.com/inovex/elements/issues/56
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

    it('should not emit a valueChange event if disabled is set to true', async () => {
      const page = await setupPageWithContent(INO_INPUT);
      const inoInput = await page.find(INO_INPUT_SELECTOR);
      const valueChangeEvent = await page.spyOnEvent('valueChange');

      await inoInput.setAttribute('disabled', true);
      await page.waitForChanges();

      const input = await page.find(INPUT_SELECTOR);
      await input.type('5');
      await page.waitForChanges();

      expect(valueChangeEvent).not.toHaveReceivedEvent();
    });
  });

  describe('Methods', () => {
    it('should be focused after calling focus()', async () => {
      const emptyElement = {};

      const page = await setupPageWithContent(INO_INPUT);
      const activeElement = await page.evaluate(() => document.activeElement);
      expect(activeElement).toEqual(emptyElement);

      await page.evaluate(
        async () => await document.querySelector('ino-input').setFocus()
      );

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

      const page = await setupPageWithContent(INO_INPUT);

      await page.evaluate(
        async () => await document.querySelector('ino-input').setFocus()
      );
      await page.evaluate(async () => {
        const nativeInputElement = await document
          .querySelector('ino-input')
          .getInputElement();
        nativeInputElement.blur();
      });

      const activeElement = await page.evaluate(() => document.activeElement);
      expect(activeElement).toEqual(emptyElement);
    });
  });

  describe('Email validation', () => {
    it('should mark the email as valid if the domain consists of multiple dots separated by at least one character', async () => {
      const page = await setupPageWithContent(INO_EMAIL_INPUT);
      await page.evaluate(
        async () => await document.querySelector('ino-input').focus()
      );
      await page.evaluate(async () => {
        const nativeInputElement = await document
          .querySelector('ino-input')
          .getInputElement();
        nativeInputElement.value = 'test@test.test.com';
        nativeInputElement.blur();
      });
      await page.waitForChanges();

      const div = await page.find(MDC_TEXTFIELD_SELECTOR);
      expect(div).not.toHaveClass('mdc-text-field--invalid');
    });
    it('should mark the email as valid if the domain comprises of two single characters separated by a dot', async () => {
      const page = await setupPageWithContent(INO_EMAIL_INPUT);
      await page.evaluate(
        async () => await document.querySelector('ino-input').focus()
      );
      await page.evaluate(async () => {
        const nativeInputElement = await document
          .querySelector('ino-input')
          .getInputElement();
        nativeInputElement.value = 'test@t.t';
        nativeInputElement.blur();
      });
      await page.waitForChanges();

      const div = await page.find(MDC_TEXTFIELD_SELECTOR);
      expect(div).not.toHaveClass('mdc-text-field--invalid');
    });
    it('should mark the email as invalid if it ends with a dot', async () => {
      const page = await setupPageWithContent(INO_EMAIL_INPUT);
      await page.evaluate(
        async () => await document.querySelector('ino-input').focus()
      );
      await page.evaluate(async () => {
        const nativeInputElement = await document
          .querySelector('ino-input')
          .getInputElement();
        nativeInputElement.value = 'test@d.';
        nativeInputElement.blur();
      });
      await page.waitForChanges();

      const div = await page.find(MDC_TEXTFIELD_SELECTOR);
      expect(div).toHaveClass('mdc-text-field--invalid');
    });
    it('should mark the email as invalid if it does not contain an @ symbol', async () => {
      const page = await setupPageWithContent(INO_EMAIL_INPUT);
      await page.evaluate(
        async () => await document.querySelector('ino-input').focus()
      );
      await page.evaluate(async () => {
        const nativeInputElement = await document
          .querySelector('ino-input')
          .getInputElement();
        nativeInputElement.value = 'test';
        nativeInputElement.blur();
      });
      await page.waitForChanges();

      const div = await page.find(MDC_TEXTFIELD_SELECTOR);
      expect(div).toHaveClass('mdc-text-field--invalid');
    });
    it('should mark the email as invalid if it contains multiple @ symbols', async () => {
      const page = await setupPageWithContent(INO_EMAIL_INPUT);
      await page.evaluate(
        async () => await document.querySelector('ino-input').focus()
      );
      await page.evaluate(async () => {
        const nativeInputElement = await document
          .querySelector('ino-input')
          .getInputElement();
        nativeInputElement.value = 'test@@test';
        nativeInputElement.blur();
      });
      await page.waitForChanges();

      const div = await page.find(MDC_TEXTFIELD_SELECTOR);
      expect(div).toHaveClass('mdc-text-field--invalid');
    });
    it('should mark the email as invalid if the domain contains multiple dots that are not separated by a character', async () => {
      const page = await setupPageWithContent(INO_EMAIL_INPUT);
      await page.evaluate(
        async () => await document.querySelector('ino-input').focus()
      );
      await page.evaluate(async () => {
        const nativeInputElement = await document
          .querySelector('ino-input')
          .getInputElement();
        nativeInputElement.value = 'test@test..com';
        nativeInputElement.blur();
      });
      await page.waitForChanges();

      const div = await page.find(MDC_TEXTFIELD_SELECTOR);
      expect(div).toHaveClass('mdc-text-field--invalid');
    });
    it('should mark the email as invalid if it does not conform to the given pattern', async () => {
      const page = await setupPageWithContent(INO_EMAIL_INPUT);
      const inoInput = await page.find(INO_INPUT_SELECTOR);

      await inoInput.setAttribute('pattern', '.+@inovex.de');
      await page.waitForChanges();

      await page.evaluate(
        async () => await document.querySelector('ino-input').focus()
      );
      await page.evaluate(async () => {
        const nativeInputElement = await document
          .querySelector('ino-input')
          .getInputElement();
        nativeInputElement.value = 'test@inoflex.com';
        nativeInputElement.blur();
      });
      await page.waitForChanges();

      const div = await page.find(MDC_TEXTFIELD_SELECTOR);
      expect(div).toHaveClass('mdc-text-field--invalid');
    });
  });
});
