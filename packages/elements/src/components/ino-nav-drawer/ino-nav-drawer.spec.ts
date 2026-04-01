import { newSpecPage } from '@stencil/core/testing';
import { NavDrawer } from './ino-nav-drawer';
import { IconButton } from '../ino-icon-button/ino-icon-button';

// MDCDrawer is instantiated in componentDidLoad and tries to attach to real DOM.
// Mock it to avoid JSDOM errors while keeping the open property accessible.
jest.mock('@material/drawer', () => ({
  MDCDrawer: jest.fn().mockImplementation(() => ({
    open: false,
    destroy: jest.fn(),
  })),
}));

const createDrawerHtml = (attrs = '') => `
  <ino-nav-drawer ${attrs}>
    <div slot="content">
      <ino-list-item>Nav Item</ino-list-item>
    </div>
    <div slot="footer">
      <ino-list-item>Footer Item</ino-list-item>
    </div>
    <div slot="app">App Content</div>
  </ino-nav-drawer>
`;

async function setup(attrs = '') {
  const page = await newSpecPage({
    components: [NavDrawer, IconButton],
    html: createDrawerHtml(attrs),
  });
  const inoNavDrawer = page.body.querySelector('ino-nav-drawer');
  const shadowRoot = inoNavDrawer.shadowRoot;
  return { page, inoNavDrawer, shadowRoot };
}

describe('ino-nav-drawer', () => {
  describe('default rendering', () => {
    it('should render the component', async () => {
      const { inoNavDrawer } = await setup();
      expect(inoNavDrawer).not.toBeNull();
    });

    it('should have default dismissible + docked + anchor-left classes', async () => {
      const { shadowRoot } = await setup();
      const drawer = shadowRoot.querySelector('.mdc-drawer');
      expect(drawer).toHaveClasses([
        'mdc-drawer',
        'mdc-drawer--docked',
        'mdc-drawer--dismissible',
        'mdc-drawer--anchor-left',
      ]);
    });

    it('should render the app-content wrapper', async () => {
      const { shadowRoot } = await setup();
      expect(shadowRoot.querySelector('.mdc-drawer-app-content')).not.toBeNull();
    });

    it('should render the toggle button', async () => {
      const { shadowRoot } = await setup();
      expect(shadowRoot.querySelector('.mdc-drawer__toggle')).not.toBeNull();
    });

    it('should NOT render a scrim for the default (docked) variant', async () => {
      const { shadowRoot } = await setup();
      expect(shadowRoot.querySelector('.mdc-drawer-scrim')).toBeNull();
    });
  });

  describe('property: open', () => {
    it('should add mdc-drawer--open class when open="true"', async () => {
      const { shadowRoot } = await setup('open="true"');
      const drawer = shadowRoot.querySelector('.mdc-drawer');
      expect(drawer).toHaveClass('mdc-drawer--open');
    });

    it('should not have mdc-drawer--open class when open is not set', async () => {
      const { shadowRoot } = await setup();
      const drawer = shadowRoot.querySelector('.mdc-drawer');
      expect(drawer).not.toHaveClass('mdc-drawer--open');
    });
  });

  describe('property: variant', () => {
    it('should render docked variant with correct classes', async () => {
      const { shadowRoot } = await setup('variant="docked"');
      const drawer = shadowRoot.querySelector('.mdc-drawer');
      expect(drawer).toHaveClasses(['mdc-drawer--docked', 'mdc-drawer--dismissible']);
      expect(shadowRoot.querySelector('.mdc-drawer-app-content')).not.toBeNull();
      expect(shadowRoot.querySelector('.mdc-drawer-scrim')).toBeNull();
    });

    it('should render dismissible variant with correct classes', async () => {
      const { shadowRoot } = await setup('variant="dismissible"');
      const drawer = shadowRoot.querySelector('.mdc-drawer');
      expect(drawer).toHaveClasses(['mdc-drawer--dismissible']);
      expect(drawer).not.toHaveClass('mdc-drawer--docked');
      expect(shadowRoot.querySelector('.mdc-drawer-app-content')).not.toBeNull();
      expect(shadowRoot.querySelector('.mdc-drawer-scrim')).toBeNull();
    });

    it('should render modal variant with correct classes and scrim', async () => {
      const { shadowRoot } = await setup('variant="modal"');
      const drawer = shadowRoot.querySelector('.mdc-drawer');
      expect(drawer).toHaveClasses(['mdc-drawer--modal']);
      expect(drawer).not.toHaveClass('mdc-drawer--dismissible');
      expect(shadowRoot.querySelector('.mdc-drawer-app-content')).toBeNull();
      expect(shadowRoot.querySelector('.mdc-drawer-scrim')).not.toBeNull();
    });
  });

  describe('property: anchor', () => {
    it('should render on the left by default', async () => {
      const { shadowRoot } = await setup();
      expect(shadowRoot.querySelector('.mdc-drawer')).toHaveClass('mdc-drawer--anchor-left');
    });

    it('should render on the left with anchor="left"', async () => {
      const { shadowRoot } = await setup('anchor="left"');
      expect(shadowRoot.querySelector('.mdc-drawer')).toHaveClass('mdc-drawer--anchor-left');
    });

    it('should render on the right with anchor="right"', async () => {
      const { shadowRoot } = await setup('anchor="right"');
      const drawer = shadowRoot.querySelector('.mdc-drawer');
      expect(drawer).toHaveClass('mdc-drawer--anchor-right');
      expect(drawer).not.toHaveClass('mdc-drawer--anchor-left');
    });
  });
});
