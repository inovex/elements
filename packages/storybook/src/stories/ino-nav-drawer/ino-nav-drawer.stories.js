import { boolean, select, text } from '@storybook/addon-knobs';

import componentReadme from '_local-elements/src/components/ino-nav-drawer/readme.md';
import withStencilReadme from '_local-storybookcore/with-stencil-readme';

import './ino-nav-drawer.scss';

// == event block
const openChangedHandle = function (e) {
  const el = e.target;
  if (el.tagName.toLowerCase() !== 'ino-nav-drawer') {
    return;
  }
  el.setAttribute('ino-open', !!e.detail);
};

const clickHandler = function (e) {
  e.preventDefault();
  e.stopPropagation();

  const el = e.target;
  if (el.className.includes('toggle-nav')) {
    // go up to the ino drawer
    const drawer = el.parentElement.parentElement;
    const oldState = drawer.getAttribute('ino-open');
    drawer.setAttribute('ino-open', oldState === 'true' ? 'false' : 'true');
    return;
  }
  // variant: modal, click on scrim
  if (el.className.includes('nav-drawer-modal')) {
    el.setAttribute(
      'ino-open',
      el.getAttribute('ino-open') === 'true' ? 'false' : 'true'
    );
    return;
  }

  if (el.tagName.toLowerCase() === 'ino-list-item') {
    const parentDrawer =
      el.parentElement.parentElement.parentElement.parentElement;
    const navItemNodes = parentDrawer.querySelectorAll('ino-list-item');
    navItemNodes &&
      navItemNodes.forEach((link) => {
        link.setAttribute('ino-activated', false);
      });
    el.setAttribute('ino-activated', true);
    return;
  }
};

function unsubscribeFromComponentEvents() {
  document.removeEventListener('openChanged', openChangedHandle);
  document.removeEventListener('click', clickHandler);
  document.removeEventListener('clickEl', clickHandler);
}

function subscribeToComponentEvents() {
  document.addEventListener('openChanged', openChangedHandle);
  document.addEventListener('click', clickHandler);
  document.addEventListener('clickEl', clickHandler);

  // unsubscribe function will be called by Storybook
  return unsubscribeFromComponentEvents;
}

export default {
  title: 'Structure/<ino-nav-drawer>',
  parameters: {
    actions: {
      handles: [
        'openChanged .customizable-drawer',
        'click .toggle-nav',
        'clickEl ino-nav-item',
      ],
    },
  },
  decorators: [
    (story) => {
      subscribeToComponentEvents();
      return story();
    },
  ],
};

const navContent = /*html*/ `
<ino-img slot="logo"
    src="https://app-uat.james.inma.inovex.io/static/media/james-logo.e7e70758.png"
    width="50"
></ino-img>
<div slot="subtitle">inovex</div>

<ino-list slot="content">
  <ino-nav-item ino-text="Some Link" ino-activated>
    <ino-icon
      ino-icon="onboarding"
    ></ino-icon>
  </ino-nav-item>
  <ino-nav-item ino-text="Some other Link">
    <ino-icon
      ino-icon="calendar"
    ></ino-icon>
  </ino-nav-item>
  <ino-nav-item ino-text="Some other Link">
    <ino-icon
      ino-icon="employee"
    ></ino-icon>
  </ino-nav-item>
  <ino-list-divider></ino-list-divider>
  <ino-nav-item ino-text="Some settings link">
    <ino-icon
      ino-icon="settings"
    ></ino-icon>
  </ino-nav-item>
</ino-list>

<ino-list slot="footer">
  <ino-nav-item ino-text="My Profile">
    <ino-img src="https://picsum.photos/id/1027/250/250.jpg" style="border-radius: 50%" ino-ratio-width="1" ino-ratio-height="1"></ino-img>
  </ino-nav-item>
</ino-list>
`;

const mainContent = /* html */ `
<p>At some point someone will replace this block of text with useful words so customers can learn more about the products and services you offer! Placeholder text is useful when you need to see what a page design looks like, but the actual content isn't available. It's like having someone with identical measurements check the fit of a dress before trying it on yourself. </p> <p>You are currently reading Honest Ipsum, the placeholder text that needs no explanation. Determining whether the typeface works or not is only possible if there is text for it to be applied to. This is just temporary placeholder text; like when a friend saves a spot for you in line, only to be replaced by you when you return. </p> <p>A web developer will often use filler text so they can focus on the design of the web page. It will be replaced with real content later. It is useful for a web developer to use placeholder text so they can easily see what different fonts look like on a realistic paragraph. </p> <p>Once the final copy for the web page has been created, it will go here. You are currently reading some filler text. A web developer will often use filler text so they can focus on the design of the web page. It will be replaced with real content later. </p> <p>We aren't quite sure what to put here yet. Determining whether the typeface works or not is only possible if there is text for it to be applied to. This text is only here to validate the layout. It isn't worth reading. What you are reading now is not what you will be reading in this space once this web page is completed. </p> <p>We aren't quite sure what to put here yet. Determining whether the typeface works or not is only possible if there is text for it to be applied to. This text is only here to validate the layout. It isn't worth reading. What you are reading now is not what you will be reading in this space once this web page is completed. </p>
`;

export const DefaultUsage = () => /* html */ `
      <style>
        .customizable-drawer {
          --ino-nav-drawer-background: ${text(
            '--ino-nav-drawer-background',
            '#ffffff',
            'Custom Properties'
          )};
          --ino-nav-drawer-text-color: ${text(
            '--ino-nav-drawer-text-color',
            '#003c7e',
            'Custom Properties'
          )};
          --ino-nav-drawer-width-open: ${text(
            '--ino-nav-drawer-width-open',
            '250px',
            'Custom Properties'
          )};
          --ino-nav-drawer-width-closed: ${text(
            '--ino-nav-drawer-width-closed',
            '72px',
            'Custom Properties'
          )};
          --ino-nav-drawer-height: ${text(
            '--ino-nav-drawer-height',
            '100%',
            'Custom Properties'
          )};
          --ino-nav-drawer-transition-duration: ${text(
            '--ino-nav-drawer-transition-duration',
            '0.25s',
            'Custom Properties'
          )};
          --ino-nav-drawer-timing-function: ${text(
            '--ino-nav-drawer-timing-function',
            '(0.4, 0, 0.2, 1)',
            'Custom Properties'
          )};
        }

        ino-nav-item {
          --ino-nav-item-color: ${text(
            '--ino-nav-item-color',
            'gray',
            'Custom Properties'
          )};
          --ino-nav-item-color-active: ${text(
            '--ino-nav-item-color-active',
            '#3d40f5',
            'Custom Properties'
          )};
        }
      </style>

      <div class="story-nav-drawer">
        <h4>Customizable</h4>
        <div class="story-nav-drawer__default">
          <ino-nav-drawer
            ino-open=${boolean('ino-open', false, 'Props')}
            ino-anchor="${select(
              'ino-anchor',
              { left: 'left', right: 'right' },
              'left',
              'Props'
            )}"
            ino-variant="${select(
              'ino-variant',
              { docked: 'docked', dismissible: 'dismissible', modal: 'modal' },
              'docked',
              'Props'
            )}"
            class="customizable-drawer"
          >
            <div slot="header">
              <ino-img
                src="${text(
                  'header - image src',
                  'https://app-uat.james.inma.inovex.io/static/media/james-logo.e7e70758.png',
                  'Slots'
                )}"
                width="50"
              ></ino-img>
              <p>inovex</p>
            </div>
            <ino-list slot="content">
              <ino-nav-item ino-text="${text(
                'default - 1st list item',
                'Some Link',
                'Slots'
              )}" ino-activated>
                <ino-icon
                  ino-icon="onboarding"
                ></ino-icon>
              </ino-nav-item>
            </ino-list>
            <ino-list slot="footer">
              <ino-nav-item ino-text="${text(
                'footer - 1st list item',
                'My Profile',
                'Slots'
              )}">
              <ino-icon ino-icon="employee"></ino-icon>
              </ino-nav-item>
            </ino-list>

            <main slot="app" class="main-content">
              <ino-button ino-fill="outline" ino-dense class="toggle-nav">Toggle Navigation</ino-button>
              <br /> <br />
              ${text('App Content', `Your App goes here 🤘`, 'Slots')}
              ${mainContent}
              <br/><br />
            </main>
          </ino-nav-drawer>
        </div>

        <h4>Variant: Docked, right side</h4>
        <div class="story-nav-drawer__docked_anchor--right">
          <ino-nav-drawer
            ino-open="false"
            ino-anchor="right"
            class="nav-drawer-docked-right"
          >
            ${navContent}
            <main slot="app" class="main-content">
              ${mainContent}
            </main>
          </ino-nav-drawer>
        </div>
      </div>
  `;

DefaultUsage.decorators = [withStencilReadme(componentReadme)];

export const Dismissible = () => {
  return /* html */ `
    <h4>Variant: Dismissble</h4>
    <div class="story-nav-drawer__dismissible">
      <ino-nav-drawer
        ino-open="false"
        ino-variant="dismissible"
        class="nav-drawer-dismissible"
      >
       ${navContent}
       <main slot="app" class="main-content">
         <ino-button ino-fill="outline" ino-dense class="toggle-nav">Toggle Navigation</ino-button>
         ${mainContent}
       </main>
      </ino-nav-drawer>
    </div>
  `;
};

export const Modal = () => {
  return /* html */ `
      <div class="story-nav-drawer__modal">
        <ino-nav-drawer
          ino-open="false"
          ino-variant="modal"
          class="nav-drawer-modal"
        >
        ${navContent}
        <main slot="app" class="main-content">
          <h4>Variant: Modal</h4>
          <ino-button ino-fill="outline" ino-dense class="toggle-nav">Toggle Navigation</ino-button>
           ${mainContent}
         </main>
        </ino-nav-drawer>
      </div>
    `;
};
