import { setupPageWithContent } from '../../util/e2etests-setup';

// const INO_NAV_DRAWER = `<ino-nav-drawer></ino-nav-drawer>`;
const createDrawer = (attrs?: string) => /* html */ `
  <ino-nav-drawer ${attrs}>
    <div>
      Nav Content
    </div>
    <div slot="app">
      App Content
    </div>
  </ino-nav-drawer>
`;

describe('InoNavDrawer', () => {
  it('should render with default values', async () => {
    const page = await setupPageWithContent(createDrawer());

    const inoNavDrawerEl = await page.find('ino-nav-drawer');
    expect(inoNavDrawerEl).not.toBeNull();

    const mdcDrawerEl = inoNavDrawerEl.shadowRoot.querySelector('.mdc-drawer');
    expect(mdcDrawerEl).toHaveClasses([
      'mdc-drawer',
      'mdc-drawer--docked',
      'mdc-drawer--dismissible',
      'mdc-drawer--anchor-left',
    ]);

    const elWithDrawerClass = inoNavDrawerEl.shadowRoot.querySelector(
      '.mdc-drawer-app-content'
    );
    expect(elWithDrawerClass).not.toBeNull();

    const elDrawerScrim = inoNavDrawerEl.shadowRoot.querySelector(
      'mdc-drawer-scrim'
    );
    expect(elDrawerScrim).toBeNull();

    const elToggleDrawerBtn = inoNavDrawerEl.shadowRoot.querySelector(
      '.mdc-drawer__toggle'
    );
    expect(elToggleDrawerBtn).not.toBeNull();
  });

  it('should render with customized values', async () => {
    const page = await setupPageWithContent(/*html */ `
    <ino-nav-drawer>
      <div slot="header">
        <img class="header" src="mycoolimage" />
        <span>Some subtitle</span>
      </div>
      <ul>
        <li>Link1</li>
        <li>Link2</li>
      </ul>
      <div slot="footer">
        <span class="footer">Profile</span>
      </div>
      <div slot="app">
        <main>
          My cool App
        </main>
      </div>
    </ino-nav-drawer>
    `);

    const inoNavDrawerEl = await page.find('ino-nav-drawer');
    expect(inoNavDrawerEl).not.toBeNull();

    const mdcDrawerEl = inoNavDrawerEl.shadowRoot.querySelector('.mdc-drawer');
    expect(mdcDrawerEl).toHaveClasses([
      'mdc-drawer',
      'mdc-drawer--docked',
      'mdc-drawer--dismissible',
      'mdc-drawer--anchor-left',
    ]);

    const headerEl = await inoNavDrawerEl.find('.header');
    expect(headerEl).not.toBeNull();

    const navContentEl = await inoNavDrawerEl.find('ul li');
    expect(navContentEl).not.toBeNull();

    const footerEl = await inoNavDrawerEl.find('.footer');
    expect(footerEl).not.toBeNull();

    const appEl = await inoNavDrawerEl.find('main');
    expect(appEl).not.toBeNull();

    const elWithDrawerClass = inoNavDrawerEl.shadowRoot.querySelector(
      '.mdc-drawer-app-content'
    );
    expect(elWithDrawerClass).not.toBeNull();

    const elDrawerScrim = inoNavDrawerEl.shadowRoot.querySelector(
      'mdc-drawer-scrim'
    );
    expect(elDrawerScrim).toBeNull();

    const elToggleDrawerBtn = inoNavDrawerEl.shadowRoot.querySelector(
      '.mdc-drawer__toggle'
    );
    expect(elToggleDrawerBtn).not.toBeNull();
  });

  it('emits openChange event on toggle click', async () => {
    const page = await setupPageWithContent(createDrawer());
    const openChange = await page.spyOnEvent('openChange');

    const elToggleDrawerBtn = await page.find(
      'ino-nav-drawer >>> .mdc-drawer__toggle'
    );

    await elToggleDrawerBtn.click();

    await page.waitForChanges();

    expect(openChange).toHaveReceivedEventDetail(true);

    // reverse open state to check the other way around
    await page.$eval('ino-nav-drawer', (elm: any) => {
      elm.open = true;
    });

    await page.waitForChanges();

    await elToggleDrawerBtn.click();

    await page.waitForChanges();

    expect(openChange).toHaveReceivedEventDetail(false);
  });

  describe('property inoOpen', () => {
    it('should render drawer closed', async () => {
      const page = await setupPageWithContent(createDrawer('open="false"'));

      const inoNavDrawerEl = await page.find('ino-nav-drawer');
      expect(inoNavDrawerEl).not.toBeNull();

      const mdcDrawerEl = inoNavDrawerEl.shadowRoot.querySelector(
        '.mdc-drawer'
      );
      expect(mdcDrawerEl).toHaveClasses([
        'mdc-drawer',
        'mdc-drawer--docked',
        'mdc-drawer--dismissible',
        'mdc-drawer--anchor-left',
      ]);
    });

    it('should render drawer open', async () => {
      const page = await setupPageWithContent(createDrawer('open="true"'));

      const inoNavDrawerEl = await page.find('ino-nav-drawer');
      expect(inoNavDrawerEl).not.toBeNull();

      const mdcDrawerEl = inoNavDrawerEl.shadowRoot.querySelector(
        '.mdc-drawer'
      );
      expect(mdcDrawerEl).toHaveClasses([
        'mdc-drawer',
        'mdc-drawer--docked',
        'mdc-drawer--dismissible',
        'mdc-drawer--anchor-left',
        'mdc-drawer--open',
      ]);
    });
  });

  describe('property variant', () => {
    it('should render with docked', async () => {
      const page = await setupPageWithContent(createDrawer('variant="docked"'));

      const inoNavDrawerEl = await page.find('ino-nav-drawer');
      expect(inoNavDrawerEl).not.toBeNull();

      const mdcDrawerEl = inoNavDrawerEl.shadowRoot.querySelector(
        '.mdc-drawer'
      );
      expect(mdcDrawerEl).toHaveClasses([
        'mdc-drawer',
        'mdc-drawer--docked',
        'mdc-drawer--dismissible',
        'mdc-drawer--anchor-left',
      ]);

      const elWithDrawerClass = inoNavDrawerEl.shadowRoot.querySelector(
        '.mdc-drawer-app-content'
      );
      expect(elWithDrawerClass).not.toBeNull();

      const elDrawerScrim = inoNavDrawerEl.shadowRoot.querySelector(
        '.mdc-drawer-scrim'
      );
      expect(elDrawerScrim).toBeNull();
    });

    it('should render with dismissible', async () => {
      const page = await setupPageWithContent(
        createDrawer('variant="dismissible"')
      );

      const inoNavDrawerEl = await page.find('ino-nav-drawer');
      expect(inoNavDrawerEl).not.toBeNull();

      const mdcDrawerEl = inoNavDrawerEl.shadowRoot.querySelector(
        '.mdc-drawer'
      );
      expect(mdcDrawerEl).toHaveClasses([
        'mdc-drawer',
        'mdc-drawer--dismissible',
        'mdc-drawer--anchor-left',
      ]);

      const elWithDrawerClass = inoNavDrawerEl.shadowRoot.querySelector(
        '.mdc-drawer-app-content'
      );
      expect(elWithDrawerClass).not.toBeNull();

      const elDrawerScrim = inoNavDrawerEl.shadowRoot.querySelector(
        '.mdc-drawer-scrim'
      );
      expect(elDrawerScrim).toBeNull();
    });

    it('should render with modal', async () => {
      const page = await setupPageWithContent(createDrawer('variant="modal"'));

      const inoNavDrawerEl = await page.find('ino-nav-drawer');
      expect(inoNavDrawerEl).not.toBeNull();

      const mdcDrawerEl = inoNavDrawerEl.shadowRoot.querySelector(
        '.mdc-drawer'
      );
      expect(mdcDrawerEl).toHaveClasses([
        'mdc-drawer',
        'mdc-drawer--modal',
        'mdc-drawer--anchor-left',
      ]);

      const elWithDrawerClass = inoNavDrawerEl.shadowRoot.querySelector(
        '.mdc-drawer-app-content'
      );
      expect(elWithDrawerClass).toBeNull();

      const elDrawerScrim = inoNavDrawerEl.shadowRoot.querySelector(
        '.mdc-drawer-scrim'
      );
      expect(elDrawerScrim).not.toBeNull();
    });
  });

  describe('property ino-anchor', () => {
    it('should render drawer on the left', async () => {
      const page = await setupPageWithContent(createDrawer('anchor="left"'));

      const inoNavDrawerEl = await page.find('ino-nav-drawer');
      expect(inoNavDrawerEl).not.toBeNull();

      const mdcDrawerEl = inoNavDrawerEl.shadowRoot.querySelector(
        '.mdc-drawer'
      );
      expect(mdcDrawerEl).toHaveClasses([
        'mdc-drawer',
        'mdc-drawer--docked',
        'mdc-drawer--dismissible',
        'mdc-drawer--anchor-left',
      ]);
    });

    it('should render drawer on the right', async () => {
      const page = await setupPageWithContent(createDrawer('anchor="right"'));

      const inoNavDrawerEl = await page.find('ino-nav-drawer');
      expect(inoNavDrawerEl).not.toBeNull();

      const mdcDrawerEl = inoNavDrawerEl.shadowRoot.querySelector(
        '.mdc-drawer'
      );
      expect(mdcDrawerEl).toHaveClasses([
        'mdc-drawer',
        'mdc-drawer--docked',
        'mdc-drawer--dismissible',
        'mdc-drawer--anchor-right',
      ]);
    });
  });
});
