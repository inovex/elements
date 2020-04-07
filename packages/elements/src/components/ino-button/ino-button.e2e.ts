import { setupPageWithContent } from '../../util/e2etests-setup';

const INO_BUTTON = `<ino-button></ino-button>`;

describe('InoButton', () => {
  it('should render with default values', async () => {
    const page = await setupPageWithContent(INO_BUTTON);

    const inoButtonEl = await page.find('ino-button');
    expect(inoButtonEl).not.toBeNull();

    const mdcButtonEl = inoButtonEl.shadowRoot.querySelector('button');
    expect(mdcButtonEl).toEqualAttribute('type', 'button');
    expect(mdcButtonEl).toHaveClasses(['mdc-button', 'mdc-button--unelevated']);
  });

  it('should render with property ino-dense', async () => {
    const page = await setupPageWithContent(INO_BUTTON);

    const inoButtonEl = await page.find('ino-button');
    inoButtonEl.setAttribute('ino-dense', true);
    await page.waitForChanges();
    const mdcButtonEl = inoButtonEl.shadowRoot.querySelector('button');
    expect(mdcButtonEl).toHaveClass('ino-button--dense');
  });

  it('should render with property disabled', async () => {
    const page = await setupPageWithContent(INO_BUTTON);

    const inoButtonEl = await page.find('ino-button');
    inoButtonEl.setAttribute('disabled', true);
    await page.waitForChanges();
    const mdcButtonEl = inoButtonEl.shadowRoot.querySelector('button');
    expect(mdcButtonEl).toHaveAttribute('disabled');
  });

  describe('property ino-fill', () => {
    it('should render with solid', async () => {
      const page = await setupPageWithContent(INO_BUTTON);

      const inoButtonEl = await page.find('ino-button');
      inoButtonEl.setAttribute('ino-fill', 'solid');
      await page.waitForChanges();
      const mdcButtonEl = inoButtonEl.shadowRoot.querySelector('button');
      expect(mdcButtonEl).toHaveClass('mdc-button--unelevated');
    });

    it('should render with outline', async () => {
      const page = await setupPageWithContent(INO_BUTTON);

      const inoButtonEl = await page.find('ino-button');
      inoButtonEl.setAttribute('ino-fill', 'outline');
      await page.waitForChanges();
      const mdcButtonEl = inoButtonEl.shadowRoot.querySelector('button');
      expect(mdcButtonEl).toHaveClass('mdc-button--outlined');
    });

    it('should render with raised', async () => {
      const page = await setupPageWithContent(INO_BUTTON);

      const inoButtonEl = await page.find('ino-button');
      inoButtonEl.setAttribute('ino-fill', 'raised');
      await page.waitForChanges();
      const mdcButtonEl = inoButtonEl.shadowRoot.querySelector('button');
      expect(mdcButtonEl).toHaveClass('mdc-button--raised');
    });

    it('should render with transparent', async () => {
      const page = await setupPageWithContent(INO_BUTTON);

      const inoButtonEl = await page.find('ino-button');
      inoButtonEl.setAttribute('ino-fill', 'transparent');
      await page.waitForChanges();
      const mdcButtonEl = inoButtonEl.shadowRoot.querySelector('button');
      expect(mdcButtonEl).not.toHaveClasses([
        'mdc-button--unelevated',
        'mdc-button--outlined',
        'mdc-button--raised'
      ]);
    });
  });

  describe('property type', () => {
    it('should render with button', async () => {
      const page = await setupPageWithContent(INO_BUTTON);

      const inoButtonEl = await page.find('ino-button');
      inoButtonEl.setAttribute('type', 'button');
      await page.waitForChanges();
      const mdcButtonEl = inoButtonEl.shadowRoot.querySelector('button');
      expect(mdcButtonEl).toEqualAttribute('type', 'button');
    });

    it('should render with reset', async () => {
      const page = await setupPageWithContent(INO_BUTTON);

      const inoButtonEl = await page.find('ino-button');
      inoButtonEl.setAttribute('type', 'reset');
      await page.waitForChanges();
      const mdcButtonEl = inoButtonEl.shadowRoot.querySelector('button');
      expect(mdcButtonEl).toEqualAttribute('type', 'reset');
    });

    it('should render with submit', async () => {
      const page = await setupPageWithContent(INO_BUTTON);

      const inoButtonEl = await page.find('ino-button');
      inoButtonEl.setAttribute('type', 'submit');
      await page.waitForChanges();
      const mdcButtonEl = inoButtonEl.shadowRoot.querySelector('button');
      expect(mdcButtonEl).toEqualAttribute('type', 'submit');
    });
  });
});
