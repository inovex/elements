import { useEffect } from '@storybook/client-api';
import { Meta } from '@storybook/web-components';
import { html } from 'lit-html';
import { TemplateGenerator } from '../template-generator';
import { Components } from '@inovex.de/elements';
import jamesLogo from '../../assets/images/james-logo.png';
import './ino-nav-drawer.scss';

const openChangeHandle = function (e) {
  const el = e.target;
  if (el.tagName.toLowerCase() !== 'ino-nav-drawer') {
    return;
  }
  el.setAttribute('open', !!e.detail);
};

const clickHandler = (e) => {
  e.preventDefault();
  e.stopPropagation();
  const el = e.target.parentElement;
  if (el.className.includes('toggle-nav')) {
    // go up to the ino drawer
    const drawer = el.closest('ino-nav-drawer');
    drawer.open = !drawer.open;
    return;
  }

  // variant: modal, click on scrim
  if (el.className.includes('nav-drawer-modal')) {
    el.open = !el.open;
    return;
  }

  // select nav-drawer item
  if (el.tagName.toLowerCase() === 'ino-list-item') {
    const parentDrawer = el.closest('ino-nav-drawer');
    const navItemNodes = parentDrawer.querySelectorAll('ino-list-item');
    navItemNodes &&
      navItemNodes.forEach((link) => {
        link.activated = false;
      });
    el.activated = true;
    return;
  }
};

export default {
  title: 'Structure/ino-nav-drawer',
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
  decorators: [
    (story) => {
      useEffect(() => {
        document.addEventListener('openChange', openChangeHandle);
        document.addEventListener('click', clickHandler);
        document.addEventListener('clickEl', clickHandler);

        return () => {
          document.removeEventListener('openChange', openChangeHandle);
          document.removeEventListener('click', clickHandler);
          document.removeEventListener('clickEl', clickHandler);
        };
      });
      return story();
    },
  ],
  args: {
    open: true,
    anchor: 'left',
    variant: 'docked',
  }
} as Meta<Components.InoNavDrawer>;

const template = new TemplateGenerator<Components.InoNavDrawer>(
  'ino-nav-drawer',
  args => html`
  <div class="story-nav-drawer__default">
    <ino-nav-drawer
      open=${args.open}
      anchor="${args.anchor}"
      variant="${args.variant}"
      class="customizable-drawer"
    >
      <div slot="header">
        <ino-img
          slot="logo"
          src=${jamesLogo}
          width="50"
        ></ino-img>
        <p>inovex</p>
      </div>
      <ino-list slot="content">
        <ino-nav-item text="Some Link" activated>
          <ino-icon icon="onboarding"></ino-icon>
        </ino-nav-item>
      </ino-list>
      <ino-list slot="footer">
        <ino-nav-item text="My Profile">
          <ino-icon icon="employee"></ino-icon>
        </ino-nav-item>
      </ino-list>

      <main slot="app" class="main-content">
        <ino-button fill="outline" dense class="toggle-nav"
          >Toggle Navigation</ino-button
        >
        <br />
        <br />
        Your App goes here 🤘
        <br /><br />
      </main>
    </ino-nav-drawer>
  </div>
`);

export const Playground = template.generatePlaygroundStory();
export const AnchorRight = template.generateStoryForProp('anchor', 'right');
export const Modal = template.generateStoryForProp('variant', 'modal', {open: false});
export const Dismissible = template.generateStoryForProp('variant', 'dismissible');
