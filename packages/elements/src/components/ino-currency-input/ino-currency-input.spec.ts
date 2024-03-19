import { newSpecPage, SpecPage } from '@stencil/core/testing';
import { listenForEvent } from '../../util/test-utils';
import { CurrencyInput } from './ino-currency-input';
import { Input } from '../ino-input/ino-input';
import { Label } from '../ino-label/ino-label';

const testValue = 0;
const CONTENT = `
  <ino-currency-input value="${testValue}">
    <ino-input type="text"></ino-input>
  </ino-currency-input>
`;

const NATIVE_INPUT_SELECTOR = 'ino-input > .mdc-text-field > input';

describe('InoCurrencyInput - Events', () => {
  let page: SpecPage;
  let inoCurrencyInput: HTMLInoCurrencyInputElement;
  let nativeInput: HTMLInputElement;

  const type = async (value: string) => {
    const arr = [...value];
    nativeInput.value = '';
    arr.forEach((char) => {
      nativeInput.value += char;
      nativeInput.dispatchEvent(new Event('input'));
    });
    await page.waitForChanges();
  };

  beforeEach(async () => {
    page = await newSpecPage({
      components: [CurrencyInput, Input, Label],
      html: CONTENT,
    });
    inoCurrencyInput = page.body.querySelector('ino-currency-input');
    nativeInput = inoCurrencyInput.querySelector(NATIVE_INPUT_SELECTOR);
  });

  it.only('should fire valueChange on user input', async () => {
    const { eventSpy, assertEventDetails } = listenForEvent(
      page,
      'valueChange',
    );
    expect(eventSpy).not.toHaveBeenCalled();

    await type('5000,99');

    assertEventDetails(5);
    const lastEventIndex = eventSpy.mock.calls.length - 1;
    assertEventDetails(5000.99, lastEventIndex);
  });

  it('should not fire on non numeric values', async () => {
    const { eventSpy, assertEventDetails } = listenForEvent(
      page,
      'valueChange',
    );
    expect(eventSpy).not.toHaveBeenCalled();

    await type('1a');
    assertEventDetails(1);
  });

  it('should not fire on more than two decimals', async () => {
    const { eventSpy, assertEventDetails } = listenForEvent(
      page,
      'valueChange',
    );
    expect(eventSpy).not.toHaveBeenCalled();

    await type('11,119');

    const lastEventIndex = eventSpy.mock.calls.length - 1;
    assertEventDetails(11.11, lastEventIndex);
  });

  it('should accept zero values (controlled)', async () => {
    const expected = Intl.NumberFormat('de-DE', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(testValue);

    expect(nativeInput.value).toBe(expected);
  });
});
