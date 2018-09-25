
import { storiesOf } from '@storybook/html';

import { withActions } from '@storybook/addon-actions';
import { boolean, select } from '@storybook/addon-knobs';

import withStencilReadme from '../core/with-stencil-readme';

import componentReadme from '../../components/ino-icon/readme.md';
import './ino-icon.scss';

import ICONS from '../../components/ino-icon/icons';

storiesOf('<ino-icon>', module)
  .addDecorator(withStencilReadme(componentReadme))
  .addDecorator(withActions('inoIconClicked .customizable-icon'))
  .add('Default usage', () => /*html*/`
    <div class="story-icon">
      <div class="flex-parent-center">
        <div>
          <h4>Customizable Icon</h4>
          <ino-icon
            class="customizable-icon"
            ino-icon="${select('ino-icon', ICONS, 'info')}"
            ino-clickable="${boolean('ino-clickable', false)}">
          </ino-icon>
        </div>
      </div>

      <h4>Different Icons</h4>

      <div class="flex-parent">
        ${ICONS.map(name => /*html*/`
          <div class="flex-child">
            <h5>${name}</h5>
            <ino-icon ino-icon="${name}"></ino-icon>
          </div>
        `)}
      </div>
    </div>
  `);