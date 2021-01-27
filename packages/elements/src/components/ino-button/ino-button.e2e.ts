import { setupPageWithContent } from '../../util/e2etests-setup';

const INO_BUTTON = `<ino-button></ino-button>`;

const INO_BTN_WITH_LEADING_ICON = `
  <ino-button>
    <ino-icon ino-icon="info" slot="ino-icon-leading"></ino-icon>
  </ino-button>
`;

const INO_BTN_WITH_TRAILING_ICON = `
  <ino-button>
    <ino-icon ino-icon="info" slot="ino-icon-trailing"></ino-icon>
  </ino-button>
`;

describe('InoButton', () => {
  it('should render with default values', async () => {
    const page = await setupPageWithContent(INO_BUTTON);

    const inoButtonEl = await page.find('ino-button');
    expect(inoButtonEl).not.toBeNull();

    const mdcButtonEl = await inoButtonEl.shadowRoot.querySelector('button');
    expect(mdcButtonEl).toEqualAttribute('type', 'button');
    expect(mdcButtonEl).toHaveClasses(['mdc-button', 'mdc-button--unelevated']);
  });

  it('should render with property ino-dense', async () => {
    const page = await setupPageWithContent(INO_BUTTON);

    const inoButtonEl = await page.find('ino-button');
    inoButtonEl.setAttribute('ino-dense', true);
    await page.waitForChanges();
    const mdcButtonEl = await inoButtonEl.shadowRoot.querySelector('button');
    expect(mdcButtonEl).toHaveClass('ino-button--dense');
  });

  describe('property ino-fill', () => {
    it('should render with solid', async () => {
      const page = await setupPageWithContent(INO_BUTTON);

      const inoButtonEl = await page.find('ino-button');
      inoButtonEl.setAttribute('ino-fill', 'solid');
      await page.waitForChanges();
      const mdcButtonEl = await inoButtonEl.shadowRoot.querySelector('button');
      expect(mdcButtonEl).toHaveClass('mdc-button--unelevated');
    });

    it('should render with outline', async () => {
      const page = await setupPageWithContent(INO_BUTTON);

      const inoButtonEl = await page.find('ino-button');
      inoButtonEl.setAttribute('ino-fill', 'outline');
      await page.waitForChanges();
      const mdcButtonEl = await inoButtonEl.shadowRoot.querySelector('button');
      expect(mdcButtonEl).toHaveClass('mdc-button--outlined');
    });

    it('should render with inverse', async () => {
      const page = await setupPageWithContent(INO_BUTTON);

      const inoButtonEl = await page.find('ino-button');
      inoButtonEl.setAttribute('ino-fill', 'inverse');
      await page.waitForChanges();
      const mdcButtonEl = await inoButtonEl.shadowRoot.querySelector('button');
      expect(mdcButtonEl).not.toHaveClasses([
        'mdc-button--outlined',
        'mdc-button--raised',
      ]);
    });
  });

  describe('property type', () => {
    it('should render with button', async () => {
      const page = await setupPageWithContent(INO_BUTTON);

      const inoButtonEl = await page.find('ino-button');
      inoButtonEl.setAttribute('type', 'button');
      await page.waitForChanges();
      const mdcButtonEl = await inoButtonEl.shadowRoot.querySelector('button');
      expect(mdcButtonEl).toEqualAttribute('type', 'button');
    });

    it('should render with reset', async () => {
      const page = await setupPageWithContent(INO_BUTTON);

      const inoButtonEl = await page.find('ino-button');
      inoButtonEl.setAttribute('type', 'reset');
      await page.waitForChanges();
      const mdcButtonEl = await inoButtonEl.shadowRoot.querySelector('button');
      expect(mdcButtonEl).toEqualAttribute('type', 'reset');
    });

    it('should render with submit', async () => {
      const page = await setupPageWithContent(INO_BUTTON);

      const inoButtonEl = await page.find('ino-button');
      inoButtonEl.setAttribute('type', 'submit');
      await page.waitForChanges();
      const mdcButtonEl = await inoButtonEl.shadowRoot.querySelector('button');
      expect(mdcButtonEl).toEqualAttribute('type', 'submit');
    });

    it('should render with a leading icon', async () => {
      const page = await setupPageWithContent(INO_BTN_WITH_LEADING_ICON);

      const icon = await page.find('ino-icon');
      expect(icon).toBeTruthy();
    });

    it('should render with a trailing icon', async () => {
      const page = await setupPageWithContent(INO_BTN_WITH_TRAILING_ICON);

      const icon = await page.find('ino-icon');
      expect(icon).toBeTruthy();
    });
  });

  describe('Events', () => {
    it('should not fire an event if disabled', async () => {
      const page = await setupPageWithContent(INO_BUTTON);
      const clickEvent = await page.spyOnEvent('click');

      const inoButtonEl = await page.find('ino-button');
      inoButtonEl.setAttribute('disabled', true);
      await page.waitForChanges();
      await inoButtonEl.click();
      await page.waitForChanges();
      expect(clickEvent).not.toHaveReceivedEvent();
    });
  });
});
