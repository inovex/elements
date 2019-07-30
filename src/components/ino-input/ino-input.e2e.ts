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

  it('should trigger inoBlur-Event when blurred', async () => {
    const page = await setupPageWithContent(INO_INPUT);
    const inoInput = await page.find('ino-input');
    const input = await page.find('ino-input > div > input');

    const spyOnBlurEvent = await inoInput.spyOnEvent('inoBlur');
    await input.triggerEvent('blur');
    await page.waitForChanges();

    expect(spyOnBlurEvent).toHaveReceivedEvent();
  });

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
});
