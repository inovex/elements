import { newSpecPage } from '@stencil/core/testing';
import { Range } from './ino-range';

describe('InoRange', () => {
  let page;
  beforeEach(async () => {
    page = await newSpecPage({
      components: [Range],
      html: '<ino-range max=100></ino-range>',
    });
  });

  it('disable property logic', async () => {
    const inoRange = page.root as HTMLInoRangeElement;
    inoRange.disabled = true;
    const container = inoRange.querySelector('div') as HTMLDivElement;
    await page.waitForChanges();

    expect(container.classList.contains('mdc-slider--disabled')).toBe(true);
  });

  it('discrete property logic', async () => {
    const inoRange = page.root as HTMLInoRangeElement;
    inoRange.discrete = true;
    const container = inoRange.querySelector('div') as HTMLDivElement;
    inoRange.value = 50;
    await page.waitForChanges();
    const valueIndicatorText = inoRange.querySelector(
      '.mdc-slider__value-indicator-text',
    ) as HTMLSpanElement;

    expect(container.classList.contains('mdc-slider--discrete')).toBe(true);
    expect(valueIndicatorText.textContent).toBe('50');
  });

  /*  it('ranged property logic', async () => {
    const inoRange = page.root as HTMLInoRangeElement;
    inoRange.ranged = true;
    inoRange.discrete = true;
    inoRange.max = 100;
    await page.waitForChanges();
    inoRange.valueStart = 4;
    inoRange.valueEnd = 56;
    const container = inoRange.querySelector('div') as HTMLDivElement;
    const valueIndicatorTextElements = document.querySelectorAll(
      '.mdc-slider__value-indicator-text',
    );
    await page.waitForChanges();

    expect(container.classList.contains('mdc-slider--range')).toBe(true);
    expect(valueIndicatorTextElements.length).toBe(2);
    expect(valueIndicatorTextElements[0].textContent).toBe('4');
    expect(valueIndicatorTextElements[1].textContent).toBe('56');
  }); 
  TODO: SET valuestart valueend klappt in mehreren stages nicht
  */

  it('marker property logic', async () => {
    const inoRange = page.root as HTMLInoRangeElement;
    inoRange.markers = true;
    await page.waitForChanges();
    const marker = inoRange.querySelector(
      '.mdc-slider__tick-marks',
    ) as HTMLDivElement;

    expect(marker.classList.contains('mdc-slider__tick-marks')).toBe(true);
  });

  it('value property is set', async () => {
    const inoRange = page.root as HTMLInoRangeElement;
    inoRange.discrete = true;
    inoRange.value = 10;
    await page.waitForChanges();
    const valueIndicatorText = inoRange.querySelector(
      '.mdc-slider__value-indicator-text',
    ) as HTMLSpanElement;

    expect(valueIndicatorText.textContent).toBe('10');
  });
});
