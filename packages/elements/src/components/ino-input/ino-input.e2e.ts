import { setupPageWithContent } from '../../util/e2etests-setup';

const INO_INPUT = `<ino-input></ino-input>`;

describe('InoInput', () => {
  it('should trigger inoFocus-Event when focused', async () => {
    const page = await setupPageWithContent(INO_INPUT);
    const inoInput = await page.find('ino-input');
    const input = await page.find('ino-input > div > input');

    const spyOnFocusEvent = await inoInput.spyOnEvent('inoFocus');
    await input.focus();
    await page.waitForChanges();

    expect(spyOnFocusEvent).toHaveReceivedEvent();
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

  it('should not bubble inoBlur or inoFocus', async () => {
    const page = await setupPageWithContent(INO_INPUT);
    const input = await page.find('ino-input > div > input');

    const spyOnFocusEvent = await page.spyOnEvent('inoFocus');
    const spyOnBlurEvent = await page.spyOnEvent('inoBlur');

    await input.triggerEvent('blur');
    await input.triggerEvent('focus');

    await page.waitForChanges();

    expect(spyOnFocusEvent).not.toHaveReceivedEvent();
    expect(spyOnBlurEvent).not.toHaveReceivedEvent();
  });

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
});
