import { useEffect } from '@storybook/client-api';
import { Meta } from '@storybook/web-components';
import { html } from 'lit-html';
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

  const el = e.target;
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
} as Meta;

const navContent = html`
  <ino-img
    slot="logo"
    src=${jamesLogo}
    width="50"
  ></ino-img>
  <div slot="subtitle">inovex</div>

  <ino-list slot="content">
    <ino-nav-item text="Some Link" activated>
      <ino-icon icon="onboarding"></ino-icon>
    </ino-nav-item>
    <ino-nav-item text="Some other Link">
      <ino-icon icon="calendar"></ino-icon>
    </ino-nav-item>
    <ino-nav-item text="Some other Link">
      <ino-icon icon="employee"></ino-icon>
    </ino-nav-item>
    <ino-list-divider></ino-list-divider>
    <ino-nav-item text="Some settings link">
      <ino-icon icon="settings"></ino-icon>
    </ino-nav-item>
  </ino-list>

  <ino-list slot="footer">
    <ino-nav-item text="My Profile">
      <ino-img
        src="https://picsum.photos/id/1027/250/250.jpg"
        style="border-radius: 50%"
        ratio-width="1"
        ratio-height="1"
      >
      </ino-img>
    </ino-nav-item>
  </ino-list>
`;

const mainContent = html`
  <p>
    At some point someone will replace this block of text with useful words so
    customers can learn more about the products and services you offer!
    Placeholder text is useful when you need to see what a page design looks
    like, but the actual content isn't available. It's like having someone with
    identical measurements check the fit of a dress before trying it on
    yourself.
  </p>
  <p>
    You are currently reading Honest Ipsum, the placeholder text that needs no
    explanation. Determining whether the typeface works or not is only possible
    if there is text for it to be applied to. This is just temporary placeholder
    text; like when a friend saves a spot for you in line, only to be replaced
    by you when you return.
  </p>
  <p>
    A web developer will often use filler text so they can focus on the design
    of the web page. It will be replaced with real content later. It is useful
    for a web developer to use placeholder text so they can easily see what
    different fonts look like on a realistic paragraph.
  </p>
  <p>
    Once the final copy for the web page has been created, it will go here. You
    are currently reading some filler text. A web developer will often use
    filler text so they can focus on the design of the web page. It will be
    replaced with real content later.
  </p>
  <p>
    We aren't quite sure what to put here yet. Determining whether the typeface
    works or not is only possible if there is text for it to be applied to. This
    text is only here to validate the layout. It isn't worth reading. What you
    are reading now is not what you will be reading in this space once this web
    page is completed.
  </p>
  <p>
    We aren't quite sure what to put here yet. Determining whether the typeface
    works or not is only possible if there is text for it to be applied to. This
    text is only here to validate the layout. It isn't worth reading. What you
    are reading now is not what you will be reading in this space once this web
    page is completed.
  </p>
`;

export const Playground = (args) => html`
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
        Your App goes here 🤘 ${mainContent}
        <br /><br />
      </main>
    </ino-nav-drawer>
  </div>
`;
Playground.args = {
  open: true,
  anchor: 'left',
  variant: 'docked',
};
Playground.argTypes = {
  anchor: {
    control: {
      type: 'select',
    },
    options: ['left', 'right'],
  },
  variant: {
    control: {
      type: 'select',
    },
    options: ['docked', 'dismissible', 'modal'],
  },
};

export const Dismissible = () => {
  return html`
    <div class="story-nav-drawer__dismissible">
      <ino-nav-drawer
        variant="dismissible"
        class="nav-drawer-dismissible"
        anchor="left"
      >
        ${navContent}
        <main slot="app" class="main-content">
          <ino-button fill="outline" dense class="toggle-nav"
            >Toggle Navigation</ino-button
          >
          ${mainContent}
        </main>
      </ino-nav-drawer>
    </div>
  `;
};

export const Modal = () => {
  return html`
    <div class="story-nav-drawer__modal">
      <ino-nav-drawer variant="modal" class="nav-drawer-modal" anchor="left">
        ${navContent}
        <main slot="app" class="main-content">
          <ino-button fill="outline" dense class="toggle-nav"
            >Toggle Navigation</ino-button
          >
          ${mainContent}
        </main>
      </ino-nav-drawer>
    </div>
  `;
};
