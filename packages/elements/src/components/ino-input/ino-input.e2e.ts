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
    labelEl = await page.find('.mdc-text-field');
  });

  async function applyToNativeHtmlElement(
    fn: (input: HTMLInputElement) => void,
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
