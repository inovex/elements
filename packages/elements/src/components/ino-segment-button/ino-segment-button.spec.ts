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

    let button = inoSegmentButton.querySelector('button') as HTMLButtonElement;

    expect(button.classList.contains('button--dense')).toBe(true);
    expect(button.classList.contains('button--active')).toBe(true);
  });
});
