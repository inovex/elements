import { storiesOf } from '@storybook/html';

import { number, boolean, select, text } from '@storybook/addon-knobs';

import withStencilReadme from '_local-storybookcore/with-stencil-readme';

import componentReadme from '_local-elements/src/components/ino-range/readme.md';
import './ino-range.scss';



storiesOf('Input|<ino-range>', module)
  .addDecorator(withStencilReadme(componentReadme))
  .add('Default usage', () => /*html*/`
    <div class="story-range">
      <div class="flex-parent-center">
        <div>
          <h4>Customizable Range</h4>
          <ino-range
            class="customizable-range"
            autofocus="${boolean('autofocus', false)}"
            disabled="${boolean('disabled', false)}"
            min="${number('min', 0)}"
            max="${number('max', 100)}"
            name="${text('name', '')}"
            ino-discrete="${boolean('ino-discrete', false)}"
            ino-markers="${boolean('ino-markers', false)}"
            value="${number('value', 50)}"
            required="${boolean('required', false)}"
            step="${number('step', 1)}"
            ino-color-scheme="${select(
              'ino-color-scheme',
              ['primary', 'secondary', 'success', 'warning',
              'error', 'light', 'dark'
              ],
              'primary'
            )}">
          </ino-range>
        </div>
      </div>

      <h4>Different Colors</h4>

      <div class="flex-parent">
        <div class="flex-child">
          <h5>primary</h5>
          <ino-range ino-color-scheme="primary"></ino-range>
        </div>
        <div class="flex-child">
          <h5>secondary</h5>
          <ino-range ino-color-scheme="secondary"></ino-range>
        </div>
        <div class="flex-child">
          <h5>success</h5>
          <ino-range ino-color-scheme="success"></ino-range>
        </div>
        <div class="flex-child">
          <h5>warning</h5>
          <ino-range ino-color-scheme="warning"></ino-range>
        </div>
        <div class="flex-child">
          <h5>error</h5>
          <ino-range ino-color-scheme="error"></ino-range>
        </div>
        <div class="flex-child">
          <h5>light</h5>
          <ino-range ino-color-scheme="light"></ino-range>
        </div>
        <div class="flex-child">
          <h5>dark</h5>
          <ino-range ino-color-scheme="dark"></ino-range>
        </div>
      </div>

      <h4>Stepped Range</h4>

      <div class="flex-parent stepped-range-container">
        <div class="flex-child">
          <ino-range ino-color-scheme="primary" min="0" max="100" step="20" ino-discrete ino-markers></ino-range>
        </div>
      </div>
    </div>
  `);
