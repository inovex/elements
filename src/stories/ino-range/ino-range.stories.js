import { storiesOf } from '@storybook/vue';

import { number, boolean, select, text } from '@storybook/addon-knobs/vue';

import renderTemplate from '../core/playground-story/template-renderer';

import componentReadme from '../../components/ino-range/readme.md';
import './ino-range.scss';



storiesOf('<ino-range>', module)
  .addDecorator(renderTemplate(componentReadme))
  .add('Default usage', () => ({
    render: h => (
      <div class="story-range">
        <div class="flex-parent-center">
          <div>
            <h4>Customizable Range</h4>
            <ino-range
              class="customizable-range"
              autofocus={boolean('autofocus', false)}
              disabled={boolean('disabled', false)}
              min={number('min', 0)}
              max={number('max', 100)}
              name={text('name', '')}
              value={number('value', 50)}
              required={boolean('required', false)}
              step={number('step', 1)}
              ino-color-scheme={select(
                'ino-color-scheme',
                ['primary', 'secondary', 'tertiary', 'success', 'warning',
                'danger'
                ],
                'primary'
              )}
            >
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
            <h5>tertiary</h5>
            <ino-range ino-color-scheme="tertiary"></ino-range>
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
            <h5>danger</h5>
            <ino-range ino-color-scheme="danger"></ino-range>
          </div>
        </div>
      </div>
    )
  }));
