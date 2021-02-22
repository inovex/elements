import withStencilReadme from '_local-storybookcore/with-stencil-readme';
import { select } from '@storybook/addon-knobs';

import componentReadme from '_local-elements/src/components/ino-menu/readme.md';
import './ino-menu.scss';

export default {
  title: 'Structure/<ino-menu>',
  decorators: [withStencilReadme(componentReadme)],
};

export const DefaultUsage = () => /*html*/ `
    <div class="story-menu">
    <ino-card ino-disable-elevation>
    <div class="row" slot="header">
      <p>Open Menu to the right</p>
      <ino-icon-button  ino-icon="menu">
        <ino-menu ino-placement="${select(
          'ino-placement',
          ['auto', 'top', 'right', 'bottom', 'left'],
          'auto'
        )}">
          <ino-list-item tabindex="0" ino-text="Item"></ino-list-item>
          <ino-list-item tabindex="0" ino-text="Item 2"></ino-list-item>
        </ino-menu>
      </ino-icon-button>
      </div>
     </ino-card>
    </div>
  `;
