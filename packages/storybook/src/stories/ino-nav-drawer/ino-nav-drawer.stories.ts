import { Meta } from '@storybook/web-components';
import { html } from 'lit-html';
import { TemplateGenerator } from '../template-generator';
import { Components } from '@inovex.de/elements';
import jamesLogo from '../../assets/images/james-logo.png';
import './ino-nav-drawer.scss';

export default {
  title: `Structure/ino-nav-drawer`,
  component: 'ino-nav-drawer',
  parameters: {
    actions: {
      handles: [
        'openChange .customizable-drawer',
        'click .toggle-nav',
        'clickEl ino-nav-item',
      ],
    },
  },
  args: {
    open: true,
    anchor: 'left',
    variant: 'docked',
  },
} as Meta<Components.InoNavDrawer>;


const openChangeHandle = function (e) {
  const el = e.target;
  if (el.tagName.toLowerCase() !== 'ino-nav-drawer') {
    return;
  }
  el.setAttribute('open', !!e.detail);
};

const toggleNav = (e: PointerEvent) => {
  const drawer = (e.target as HTMLElement).closest('ino-nav-drawer');
  drawer.open = !drawer.open;
  return;
};

const handleNavItemClick = (e: PointerEvent) => {
  const navItem = (e.target as HTMLElement).closest('ino-nav-item');
  document
    .querySelectorAll('ino-nav-item')
    .forEach((navItem) => (navItem.activated = false));
  navItem.activated = true;
};

const template = new TemplateGenerator<Components.InoNavDrawer>(
  'ino-nav-drawer',
  (args) => html`
    <div class="story-nav-drawer__default" @click="">
      <ino-nav-drawer
        open=${args.open}
        anchor="${args.anchor}"
        variant="${args.variant}"
        class="customizable-drawer"
        @openChange="${openChangeHandle}"
      >
        <div slot="header">
          <ino-img slot="logo" src=${jamesLogo} width="50"></ino-img>
          <p>inovex</p>
        </div>
        <ino-list slot="content">
          <ino-nav-item
            text="Some Link"
            activated
            @click="${handleNavItemClick}"
          >
            <ino-icon icon="onboarding"></ino-icon>
          </ino-nav-item>
        </ino-list>
        <ino-list slot="footer">
          <ino-nav-item text="My Profile" @click="${handleNavItemClick}">
            <ino-icon icon="employee"></ino-icon>
          </ino-nav-item>
        </ino-list>

        <main slot="app" class="main-content">
          <ino-button
            fill="outline"
            dense
            class="toggle-nav"
            @click="${toggleNav}"
            >Toggle Navigation
          </ino-button>
          <br />
          <br />
          Your App goes here 🤘
          <br /><br />
        </main>
      </ino-nav-drawer>
    </div>
  `
);

export const Playground = template.generatePlaygroundStory();
export const AnchorRight = template.generateStoryForProp('anchor', 'right');
export const Modal = template.generateStoryForProp('variant', 'modal', {
  open: false,
});
export const Dismissible = template.generateStoryForProp(
  'variant',
  'dismissible'
);
