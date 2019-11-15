import { storiesOf } from '@storybook/html';
import { text, boolean, select } from '@storybook/addon-knobs';

import withStencilReadme from '_local-storybookcore/with-stencil-readme';

import componentReadme from '_local-elements/src/components/ino-fab/readme.md';

import ICONS from '_local-elements/src/components/ino-icon/icons';
import './ino-fab.scss';

storiesOf('<ino-fab>', module)
  .addDecorator(withStencilReadme(componentReadme))
  .add('Default usage', () => /*html*/`
    <div class="story-fab">
      <ino-fab 
      ino-color-scheme="${select(
        'ino-color-scheme',
        ['', 'primary', 'secondary', 'tertiary', 'success', 'warning', 
          'error', 'light', 'dark'
        ],
        'primary'
      )}"
      ino-icon="${select('ino-leading-icon', ICONS, 'add')}"
      ino-label="${text('ino-label', 'Label')}"
      ino-extended="${boolean('ino-extended', false)}"
      ino-mini="${boolean('ino-mini', false)}"></ino-fab>
    </div>
  `);
