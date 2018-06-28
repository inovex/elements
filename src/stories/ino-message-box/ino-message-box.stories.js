import { storiesOf } from '@storybook/vue';

import { boolean, select, text } from '@storybook/addon-knobs/vue';

import renderTemplate from '../core/playground-story/template-renderer';

import componentReadme from '../../components/ino-message-box/readme.md';
import './ino-message-box.scss';



storiesOf('<ino-message-box>', module)
  .addDecorator(renderTemplate(componentReadme))
  .add('Default usage', () => ({
    render: h => (
      <div class="story-message-box">
        <div class="flex-parent-center">
          <div>
            <h4>Customizable Message Box</h4>
            <ino-message-box
              class="customizable-message-box"
              ino-heading={text('ino-heading', 'My Header')}
              ino-icon={select(
                'ino-icon',
                ['download3', 'equalizer', 'info', 'question', 'search', 'user', 'users', 'select-arrows', 'cancel'],
                'info'
              )}
              ino-removable={boolean('ino-removable', true)}
              ino-color-scheme={select(
                'ino-color-scheme',
                ['primary', 'secondary', 'tertiary', 'success', 'warning',
                'error', 'light', 'dark'
                ],
                'primary'
              )}
              ino-modal={boolean('ino-modal', false)}
            >
              {text('<slot />', 'Customizable message box')}
            </ino-message-box>
          </div>
        </div>

        <h4>Color Scheme</h4>

        <div class="flex-parent">
          <div class="flex-child">
            <h5>primary</h5>
            <ino-message-box ino-header="primary" ino-color-scheme="primary">
              primary
            </ino-message-box>
          </div>
          <div class="flex-child">
            <h5>secondary</h5>
            <ino-message-box ino-header="secondary" ino-color-scheme="secondary">
              secondary
            </ino-message-box>
          </div>
          <div class="flex-child">
            <h5>tertiary</h5>
            <ino-message-box ino-header="tertiary" ino-color-scheme="tertiary">
              tertiary
            </ino-message-box>
          </div>
          <div class="flex-child">
            <h5>success</h5>
            <ino-message-box ino-header="success" ino-color-scheme="success">
              success
            </ino-message-box>
          </div>
          <div class="flex-child">
            <h5>warning</h5>
            <ino-message-box ino-header="warning" ino-color-scheme="warning">
              warning
            </ino-message-box>
          </div>
          <div class="flex-child">
            <h5>error</h5>
            <ino-message-box ino-header="error" ino-color-scheme="error">
              error
            </ino-message-box>
          </div>
          <div class="flex-child">
            <h5>light</h5>
            <ino-message-box ino-header="light" ino-color-scheme="light">
              light
            </ino-message-box>
          </div>
          <div class="flex-child">
            <h5>dark</h5>
            <ino-message-box ino-header="dark" ino-color-scheme="dark">
              dark
            </ino-message-box>
          </div>
        </div>

      </div>
    )
  }))
  .add('As modal', () => ({
    render: h => (
      <div class="story-button">
        <ino-message-box ino-modal ino-color-scheme="success" ino-heading="The Header">
          Message in a modal box
        </ino-message-box>
      </div>
    )
  })
);
