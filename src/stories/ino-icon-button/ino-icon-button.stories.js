
import { storiesOf } from '@storybook/html';

import { action } from '@storybook/addon-actions';
import { boolean, select } from '@storybook/addon-knobs';

import withStencilReadme from '../core/with-stencil-readme';

import componentReadme from '../../components/ino-icon-button/readme.md';
import './ino-icon-button.scss';

import ICONS from '../../components/ino-icon/icons';

ICONS.push(''); // additionally: allow no icon

storiesOf('<ino-icon-button>', module)
  .addDecorator(withStencilReadme(componentReadme))
  .add('Default usage', () => /*html*/`
    <div class="story-icon-button">
      <div class="customizable-icon-button">
        <h4>Customizable icon button</h4>
        <ino-icon-button
          ino-icon="${select('ino-icon', ICONS, 'star_border')}"
          ino-icon-checked="${select('ino-icon-checked', ICONS, 'star')}"
          ino-state-checked="${boolean('ino-state-checked', false)}"
          ino-color-scheme="${select(
            'ino-color-scheme',
            ['', 'primary', 'secondary', 'tertiary', 'success', 'warning',
            'error', 'light', 'dark'
            ],
            ''
          )}"
          disabled="${boolean('disabled', false)}">
        </ino-icon-button>
      </div>

      <h4>Toggle icon Button</h4>
      <div class="flex-parent-center">
        <div class="flex-child">
          <h5>icon state is off (ino-state-checked="false")</h5>
          <ino-icon-button ino-icon="favorite_border" ino-icon-checked="favorite"></ino-icon-button>
        </div>

        <div class="flex-child">
          <h5>icon state is on (ino-state-checked="true")</h5>
          <ino-icon-button ino-icon="favorite_border" ino-icon-checked="favorite" ino-state-checked></ino-icon-button>
        </div>
      </div>

      <h4>Colors</h4>
      <div class="flex-parent-center">
        <div class="flex-child">
          <h5>Primary</h5>
          <ino-icon-button ino-icon="add" ino-color-scheme="primary"></ino-icon-button>
        </div>
        <div class="flex-child">
          <h5>Secondary</h5>
          <ino-icon-button ino-icon="add" ino-color-scheme="secondary"></ino-icon-button>
        </div>
        <div class="flex-child">
          <h5>Tertiary</h5>
          <ino-icon-button ino-icon="add" ino-color-scheme="tertiary"></ino-icon-button>
        </div>
        <div class="flex-child">
          <h5>Success</h5>
          <ino-icon-button ino-icon="add" ino-color-scheme="success"></ino-icon-button>
        </div>
        <div class="flex-child">
          <h5>Warning</h5>
          <ino-icon-button ino-icon="add" ino-color-scheme="warning"></ino-icon-button>
        </div>
        <div class="flex-child">
          <h5>Error</h5>
          <ino-icon-button ino-icon="add" ino-color-scheme="error"></ino-icon-button>
        </div>
      </div>
    </div>
  `);
