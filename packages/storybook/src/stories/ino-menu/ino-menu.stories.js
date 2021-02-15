import { boolean } from '@storybook/addon-knobs';

import withStencilReadme from '_local-storybookcore/with-stencil-readme';

import componentReadme from '_local-elements/src/components/ino-menu/readme.md';
import './ino-menu.scss';

const BTN_ID_CUSTOM_MENU = 'btn-custom-menu';
const BTN_ID_DIVIDED_MENU = 'btn-divided-menu';

const ID_CUSTOM_MENU = 'custom-menu';
const ID_DIVIDED_MENU = 'divided-menu';

function subscribeToComponentEvents() {
  // == event block
  const clickHandler = function (e) {
    const targetId = e.target.id;

    if (targetId !== BTN_ID_CUSTOM_MENU && targetId !== BTN_ID_DIVIDED_MENU) {
      return;
    }

    const menuEl = document.getElementById(
      targetId === BTN_ID_CUSTOM_MENU ? ID_CUSTOM_MENU : ID_DIVIDED_MENU
    );

    if (!menuEl) return;

    const isMenuOpen = menuEl.getAttribute('ino-open');
    menuEl.setAttribute('ino-open', isMenuOpen === 'false' ? 'true' : 'false');
  };

  function closeHandler(evt) {
    evt.target.setAttribute('ino-open', 'false');
  }

  document.addEventListener('click', clickHandler);
  document.addEventListener('menuClose', closeHandler);

  // unsubscribe function will be called by Storybook
  return () => {
    document.removeEventListener('click', clickHandler);
    document.removeEventListener('menuClose', closeHandler);
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
    <h4>As child</h4>
    <ino-icon-button ino-icon="star">
      <ino-menu ino-placement="left-end">
        <ino-list-item tabindex="0" ino-text="Item"></ino-list-item>
        <ino-list-item tabindex="0" ino-text="Item 2"></ino-list-item>
      </ino-menu>
     </ino-icon-button>

    <h4>With target</h4>
    <ino-icon-button id="my-target" ino-icon="star"></ino-icon-button>
    <ino-menu ino-for="my-target" ino-placement="left-end">
      <ino-list-item tabindex="0" ino-text="Item"></ino-list-item>
      <ino-list-item tabindex="0" ino-text="Item 2"></ino-list-item>
    </ino-menu>
    </div>
  `;
