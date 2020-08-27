import { text } from '@storybook/addon-knobs';

import componentReadme from '_local-elements/src/components/ino-header/readme.md';
import withStencilReadme from '_local-storybookcore/with-stencil-readme';

import './ino-header.scss';

export default {
  title: 'Structure/<ino-header>',
  decorators: [withStencilReadme(componentReadme)],
};

export const DefaultUsage = () => /*html*/ `
    <div class="story-header">
      <ino-header ino-title="${text('ino-title', 'TEAM')}"></ino-header>
    </div>
  `;

DefaultUsage.storyName = 'Default usage';
