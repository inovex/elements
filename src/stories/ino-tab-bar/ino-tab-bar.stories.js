import { storiesOf } from '@storybook/html';

import { action } from '@storybook/addon-actions';
import { text, boolean, number, select } from '@storybook/addon-knobs';

import withStencilReadme from '../core/with-stencil-readme';

import tabBarReadme from '../../components/ino-tab-bar/readme.md';
import tabReadme from '../../components/ino-tab/readme.md';
import ICONS from '../../components/ino-icon/icons';

import './ino-tab-bar.scss';

storiesOf('<ino-tab-bar>', module)
  .addDecorator(withStencilReadme(tabBarReadme))
  .add('Default usage', () => /*html*/`
    <div class="story-tab">
      <ino-tab-bar ino-active-tab="${number('ino-active-tab', 0)}">
        <ino-tab ino-label="Label1" ino-icon="users" ino-stacked="${boolean('ino-stacked', false)}" ino-indicator-content-width="${boolean('ino-indicator-content-width', false)}"></ino-tab>
        <ino-tab ino-label="Label2" ino-icon="info" ino-stacked="${boolean('ino-stacked', false)}" ino-indicator-content-width="${boolean('ino-indicator-content-width', false)}"></ino-tab>
        <ino-tab ino-label="Label3" ino-icon="star" ino-stacked="${boolean('ino-stacked', false)}" ino-indicator-content-width="${boolean('ino-indicator-content-width', false)}"></ino-tab>
        <ino-tab ino-label="Label4" ino-icon="help" ino-stacked="${boolean('ino-stacked', false)}" ino-indicator-content-width="${boolean('ino-indicator-content-width', false)}"></ino-tab>
      </ino-tab-bar>
    </div>
  `);

storiesOf('<ino-tab-bar>', module)
  .addDecorator(withStencilReadme(tabReadme))
  .add('Tab', () => /*html*/`
    <div class="story-tab">
      <ino-tab
        ino-label="${text('ino-label', 'Label')}" 
        ino-icon="${select('ino-icon', ICONS, 'info')}"
        ino-stacked="${boolean('ino-stacked', false)}">
      </ino-tab>
    </div>
  `);