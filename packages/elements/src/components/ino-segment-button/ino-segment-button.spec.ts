import { newSpecPage } from '@stencil/core/testing';
import { InoSegmentButton } from './ino-segment-button';

describe('InoSegmentButton', () => {
  let page;
  beforeEach(async () => {
    page = await newSpecPage({
      components: [InoSegmentButton],
      html: '<ino-segment-button></ino-segment-button>',
    });
  });

  it('should render InoSegmentButton with slot inserted in Button', async () => {
    const slotpage = await newSpecPage({
      components: [InoSegmentButton],
      html: `<ino-segment-button><span>My Button</span></ino-segment-button>`,
    });
    const button = slotpage.root.querySelector('button') as HTMLButtonElement;
    expect(button.innerHTML).toContain('<span>My Button</span>');
  });

  it('should set the expected root class', async () => {
    const inoSegmentButton = page.root as HTMLInoSegmentButtonElement;
    inoSegmentButton.disabled = true;
    await page.waitForChanges();

    expect(
      inoSegmentButton.classList.contains('ino-segment-button--disabled'),
    ).toBe(true);
  });

  it('should set the expected button classes', async () => {
    const inoSegmentButton = page.root as HTMLInoSegmentButtonElement;
    inoSegmentButton.dense = true;
    inoSegmentButton.checked = true;

    await page.waitForChanges();

    const button = inoSegmentButton.querySelector(
      'button',
    ) as HTMLButtonElement;

    expect(button.classList.contains('button--dense')).toBe(true);
    expect(button.classList.contains('button--active')).toBe(true);
  });

  it('should handle click event', async () => {
    const inoSegmentButton = page.root as HTMLInoSegmentButtonElement;

    const eventSpy = jest.fn();
    inoSegmentButton.addEventListener('checkedChange', eventSpy);

    inoSegmentButton.click();
    expect(eventSpy).toHaveBeenCalled();
  });

  it('click should not emit on disabled or checked', async () => {
    const inoSegmentButton = page.root as HTMLInoSegmentButtonElement;

    inoSegmentButton.disabled = true;
    const eventSpy = jest.fn();
    inoSegmentButton.addEventListener('checkedChange', eventSpy);

    inoSegmentButton.click();
    expect(eventSpy).not.toHaveBeenCalled();

    inoSegmentButton.disabled = false;
    inoSegmentButton.checked = true;

    inoSegmentButton.click();
    expect(eventSpy).not.toHaveBeenCalled();
  });
});
