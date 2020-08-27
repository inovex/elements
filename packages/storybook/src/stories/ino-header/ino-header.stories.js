import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/html';

import componentReadme from '_local-elements/src/components/ino-header/readme.md';
import withStencilReadme from '_local-storybookcore/with-stencil-readme';

import './ino-header.scss';

storiesOf('Structure/<ino-header>', module)
  .addDecorator(withStencilReadme(componentReadme))
  .add('Default usage', () => /*html*/`
    <div class="story-header">
      <ino-header ino-title="${text('ino-title', 'TEAM')}"></ino-header>
    </div>
  `);
