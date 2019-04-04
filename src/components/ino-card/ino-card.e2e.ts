import { setupPageWithContent } from '../../util/e2etests-setup';

const TITEL = 'Titel';
const SUBTITEL = 'Subtitel';
const INO_CARD = `<ino-card></ino-card>`;
const INO_CARD_WITH_TITLES = `<ino-card ino-title=${TITEL} ino-subtitle=${SUBTITEL}></ino-card>`;

describe('InoCard', () => {
  it('should render with default values', async () => {
    const page = await setupPageWithContent(INO_CARD);

    const inoCardEl = await page.find('ino-card');
    expect(inoCardEl).not.toBeNull();
    expect(inoCardEl).not.toHaveClass('ino-card__header');
  });

  it('should render with property header if title is set', async () => {
    const page = await setupPageWithContent(INO_CARD_WITH_TITLES);

    const headerEl = await page.find('.ino-card__header');
    expect(headerEl).not.toBeNull();
  });

  it('should render with correct title', async () => {
    const page = await setupPageWithContent(INO_CARD_WITH_TITLES);

    const titelEl = await page.find('.ino-card__header-title');
    expect(titelEl).not.toBeNull();
    expect(titelEl).toEqualText(TITEL);
  });

  it('should render with correct subtitle', async () => {
    const page = await setupPageWithContent(INO_CARD_WITH_TITLES);

    const subtitelEl = await page.find('.ino-card__header-subtitle');
    expect(subtitelEl).not.toBeNull();
    expect(subtitelEl).toEqualText(SUBTITEL);
  });

  it('should render with property image', async () => {
    const page = await setupPageWithContent(INO_CARD_WITH_TITLES);

    const inoCardEl = await page.find('ino-card');
    inoCardEl.setAttribute('ino-image', 'testpath');
    await page.waitForChanges();
    const mdcMedia = await inoCardEl.find('.mdc-card__media');
    expect(mdcMedia).not.toBeNull();
  });
});
