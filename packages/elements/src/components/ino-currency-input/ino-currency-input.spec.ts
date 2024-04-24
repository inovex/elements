import { newSpecPage, SpecPage } from '@stencil/core/testing';
import { fillInput, listenForEvent } from '../../util/test-utils';
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

  beforeEach(async () => {
    page = await newSpecPage({
      components: [CurrencyInput, Input, Label],
      html: CONTENT,
    });
    inoCurrencyInput = page.body.querySelector('ino-currency-input');
    nativeInput = inoCurrencyInput.querySelector(NATIVE_INPUT_SELECTOR);
  });

  it.only('should fire valueChange on user input', async () => {
    const { eventSpy, assertEventDetails } = listenForEvent(page, 'valueChange');
    expect(eventSpy).not.toHaveBeenCalled();

    await fillInput(page, nativeInput, '5000,99');

    assertEventDetails(5);
    const lastEventIndex = eventSpy.mock.calls.length - 1;
    assertEventDetails(5000.99, lastEventIndex);
  });

  it('should not fire on non numeric values', async () => {
    const { eventSpy, assertEventDetails } = listenForEvent(page, 'valueChange');
    expect(eventSpy).not.toHaveBeenCalled();

    await fillInput(page, nativeInput, '1a');
    assertEventDetails(1);
  });

  it('should not fire on more than two decimals', async () => {
    const { eventSpy, assertEventDetails } = listenForEvent(page, 'valueChange');
    expect(eventSpy).not.toHaveBeenCalled();

    await fillInput(page, nativeInput, '11,119');

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
