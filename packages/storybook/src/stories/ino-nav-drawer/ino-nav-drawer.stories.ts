import { Meta } from '@storybook/web-components';
import { Components } from '@inovex.de/elements';
import { html } from 'lit-html';
import { useEffect } from '@storybook/preview-api';
import Story from '../StoryWrapper';
import inovexElementsLogo from '../../assets/images/elements.svg';
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

const InoNavDrawerMeta = {
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
  render: (args) => html`
    <div class="story-nav-drawer__default">
      <ino-nav-drawer
        ?open=${args.open}
        anchor="${args.anchor}"
        variant="${args.variant}"
        class="customizable-drawer"
      >
        <div slot="header">
          <ino-img
            slot="logo"
            src=${inovexElementsLogo}
            width="22"
            height="31"
            alt="inovex Elements Logo"
          ></ino-img>
          <p>inovex Elements</p>
        </div>
        <ino-list
          role="menubar"
          slot="content"
          aria-label=${args.a11yLabels?.content}
        >
          <ino-nav-item role="menuitem" text="Home" activated>
            <ino-icon icon="home"></ino-icon>
          </ino-nav-item>
          <ino-nav-item role="menuitem" text="Discover">
            <ino-icon icon="discover"></ino-icon>
          </ino-nav-item>
          <ino-nav-item role="menuitem" text="First Steps">
            <ino-icon icon="first_steps"></ino-icon>
          </ino-nav-item>
          <ino-nav-item role="menuitem" text="Library">
            <ino-icon icon="library"></ino-icon>
          </ino-nav-item>
          <ino-nav-item role="menuitem" text="About Us">
            <ino-icon icon="employee"></ino-icon>
          </ino-nav-item>
        </ino-list>
        <ino-list
          role="menubar"
          slot="footer"
          aria-label=${args.a11yLabels?.footer}
        >
          <ino-nav-item role="menuitem" text="Contact">
            <ino-icon icon="message"></ino-icon>
          </ino-nav-item>
        </ino-list>

        <main slot="app" class="main-content">
          <ino-button fill="outline" dense class="toggle-nav"
            >${args.a11yLabels?.toggleBtn}</ino-button
          >
          <br />
          <br />
          Your App goes here 🤘
          <br /><br />
        </main>
      </ino-nav-drawer>
    </div>
  `,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['docked', 'dismissible', 'modal', 'mobile'],
      },
    },
  },
  args: {
    open: true,
    anchor: 'left',
    variant: 'docked',
    a11yLabels: {
      content: 'Main Navigation',
      footer: 'Footer Navigation',
      toggleBtn: 'Toggle Navigation',
    },
  },
} as Meta<Components.InoNavDrawer>;

export default InoNavDrawerMeta;

export const Default = Story({
  ...InoNavDrawerMeta,
});

export const AnchorRight = Story({
  ...Default,
  docsFromProperty: 'anchor',
  args: {
    anchor: 'right',
  },
});

export const Modal = Story({
  ...Default,
  docsFromProperty: 'variant',
  args: {
    variant: 'modal',
    open: false,
  },
});

export const Dismissible = Story({
  ...Default,
  docsFromProperty: 'variant',
  args: {
    variant: 'dismissible',
  },
});

export const Mobile = Story({
  ...Default,
  docsFromProperty: 'variant',
  args: {
    variant: 'mobile',
    open: false,
  },
});
