import { E2EElement, E2EPage } from '@stencil/core/testing';
import { setupPageWithContent } from '../../util/e2etests-setup';

describe('InoRadioGroup', () => {
  let page: E2EPage;
  let radioGroup: E2EElement;
  let radioGroupWrapper: E2EElement;

  beforeEach(async () => {
    page = await setupPageWithContent(`
    <ino-radio-group>
      <ino-radio value="a"></ino-radio>
      <ino-radio value="b"></ino-radio>
      <ino-radio value="c"></ino-radio>
    </ino-radio-group>
    `);
    radioGroup = await page.find('ino-radio-group');
    radioGroupWrapper = await page.find('ino-radio-group > div');
  });

  async function simulateArrow(
    arrow: 'ArrowUp' | 'ArrowDown' | 'ArrowRight' | 'ArrowLeft'
  ): Promise<void> {
    await radioGroupWrapper.press(arrow);
    return page.waitForChanges();
  }

  it('should check first radio in group on ArrowDown', async () => {
    const eventSpy = await page.spyOnEvent('valueChange');
    await simulateArrow('ArrowDown');
    expect(eventSpy).toHaveReceivedEventDetail('a');
  });

  it('should check second radio in group on ArrowDown if first one is checked', async () => {
    radioGroup.setAttribute('value', 'a');
    await page.waitForChanges();
    const eventSpy = await page.spyOnEvent('valueChange');
    await simulateArrow('ArrowDown');
    expect(eventSpy).toHaveReceivedEventDetail('b');
  });

  it('should check first radio in group on ArrowDown if last one is checked', async () => {
    radioGroup.setAttribute('value', 'c');
    await page.waitForChanges();
    const eventSpy = await page.spyOnEvent('valueChange');
    await simulateArrow('ArrowDown');
    expect(eventSpy).toHaveReceivedEventDetail('a');
  });

  it('should check last radio in group on ArrowUp if first one is checked', async () => {
    radioGroup.setAttribute('value', 'a');
    await page.waitForChanges();
    const eventSpy = await page.spyOnEvent('valueChange');
    await simulateArrow('ArrowUp');
    expect(eventSpy).toHaveReceivedEventDetail('c');
  });
});
