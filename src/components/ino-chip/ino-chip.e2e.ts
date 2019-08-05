import { setupPageWithContent } from '../../util/e2etests-setup';

const INO_CHIP = `<ino-chip></ino-chip>`;
const INO_CHIP_REMOVABLE = `<ino-chip ino-removable="true"></ino-chip>`;

describe('InoChip', () => {
  it('should render with default values', async () => {
    const page = await setupPageWithContent(INO_CHIP);

    const inoChipEl = await page.find('ino-chip');
    expect(inoChipEl).not.toBeNull();
    expect(inoChipEl.getAttribute('class')).toEqual('hydrated');

    const mdcChipSetEl = await page.find('ino-chip > .mdc-chip');
    expect(mdcChipSetEl).not.toBeNull();
  });

  it('should not render with icon when ino-removable is not set', async () => {
    const page = await setupPageWithContent(INO_CHIP);

    const inoIcon = await page.find('ino-icon');
    expect(inoIcon).toBeNull();
  });

  it('should render with icon when ino-removable is set true', async () => {
    const page = await setupPageWithContent(INO_CHIP_REMOVABLE);

    const inoIcon = await page.find('ino-icon');
    expect(inoIcon).not.toBeNull();
  });

  it('should render removable chip with default values', async () => {
    const page = await setupPageWithContent(INO_CHIP_REMOVABLE);

    const inoIcon = await page.find('ino-icon');
    expect(inoIcon.getAttribute('ino-icon')).toEqual('cancel');
    expect(inoIcon.getAttribute('role')).toEqual('button');
  });

  it('should fire removeChip event on remove if ino-removable is set true', async () => {
    const page = await setupPageWithContent(INO_CHIP_REMOVABLE);

    const removeChip = await page.spyOnEvent('removeChip');
    expect(removeChip).not.toHaveReceivedEvent();

    await page.click('ino-icon');
    await page.waitForChanges();
    expect(removeChip).toHaveReceivedEvent();
  });

  it('should fire removeChip event with default values', async () => {
    const page = await setupPageWithContent(INO_CHIP_REMOVABLE);

    const removeChip = await page.spyOnEvent('removeChip');
    await page.click('ino-icon');
    expect(removeChip).toHaveReceivedEventDetail({
      inoFill: 'solid',
      removeChip: {}
    });
  });

  it('should render selectable chip with default values', async () => {
    const page = await setupPageWithContent(INO_CHIP);

    const inoChipEl = await page.find('ino-chip');
    inoChipEl.setAttribute('ino-selectable', true);
    await page.waitForChanges();
    const checkmarkEl = await page.find('.mdc-chip__checkmark');
    expect(checkmarkEl).not.toBeNull();
  });
});
