import { text } from '@storybook/addon-knobs';

import componentReadme from '_local-elements/src/components/ino-header/readme.md';
import withStencilReadme from '_local-storybookcore/with-stencil-readme';

import './ino-header.scss';

export default {
  title: 'Structure/<ino-header>',
  decorators: [withStencilReadme(componentReadme)],
};

export const DefaultUsage = () => /*html*/ `
    <style>
        ino-header.customizable-header {
            --ino-header-color: ${text(
              '--ino-header-color',
              '#525368',
              'Custom Properties'
            )};
            --ino-header-box-color: ${text(
              '--ino-header-box-color',
              'rgba(0, 0, 0, 0.05)',
              'Custom Properties'
            )};
        }
    </style>
    <div class="story-header">
      <ino-header class="customizable-header" ino-title="${text('ino-title', 'TEAM')}"></ino-header>
    </div>
  `;
