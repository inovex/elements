import { boolean } from '@storybook/addon-knobs';

import withStencilReadme from '_local-storybookcore/with-stencil-readme';

import componentReadme from '_local-elements/src/components/ino-menu/readme.md';
import './ino-menu.scss';

function subscribeToComponentEvents() {
  // == event block
  const eventHandler = function (e) {
    const innerText = e.target.innerText;

    if (!innerText.startsWith('OPEN')) {
      return;
    }

    const clickedMenuId = innerText === 'OPEN MENU' ? 'custom-menu' : 'custom-menu-2';
    const el = document.getElementById(clickedMenuId);

    if (!el) {
      return;
    }

    const isMenuOpen = el.getAttribute('ino-open');
    el.setAttribute('ino-open', isMenuOpen === 'false' ? 'true' : 'false');
  };

  document.addEventListener('click', eventHandler);

  // unsubscribe function will be called by Storybook
  return () => {
    document.removeEventListener('click', eventHandler);
  };
}

export default {
  title: 'Structure/<ino-menu>',

  decorators: [
    withStencilReadme(componentReadme),
    (story) => {
      subscribeToComponentEvents();
      return story();
    },
  ],
};

export const DefaultUsage = () => /*html*/ `
    <div class="story-menu">
      <h4>Customizable Menu</h4>
      <ino-button id="button-custom-menu">Open menu</ino-button>
      <ino-menu
        id="custom-menu"
        ino-for="button"
        ino-open="${boolean('ino-open', false)}"
      >
        <ino-list-item ino-text="Item"></ino-list-item>
        <ino-list-item ino-text="Item 2"></ino-list-item>
      </ino-menu>

      <h4>Variation with divider</h4>
      <ino-button id="menu-2">Open divided menu</ino-button>
      <ino-menu id="custom-menu-2" ino-for="menu-2" ino-open="${boolean('ino-open', false)}">
        <ino-list-item ino-text="Home"></ino-list-item>
        <ino-list-item ino-text="Projects"></ino-list-item>
        <ino-list-divider></ino-list-divider>
        <ino-list-item ino-text="User"></ino-list-item>
        <ino-list-item ino-text="Settings"></ino-list-item>
      </ino-menu>
    </div>
  `;
