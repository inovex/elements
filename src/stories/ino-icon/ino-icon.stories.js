
import { storiesOf } from '@storybook/vue';

import { action } from '@storybook/addon-actions';
import { select } from '@storybook/addon-knobs/vue';

import renderTemplate from '../core/playground-story/template-renderer';

import componentReadme from '../../components/ino-icon/readme.md';
import './ino-icon.scss';



storiesOf('<ino-icon>', module)
  .addDecorator(renderTemplate(componentReadme))
  .add('Default usage', () => ({
    render: h => (
      <div class="story-icon">
        <div class="flex-parent-center">
          <div>
            <h4>Customizable Icon</h4>
            <ino-icon
              class="customizable-icon"
              ino-icon={select(
                'ino-icon',
                ['download3', 'equalizer', 'info', 'question', 'search', 'user', 'users', 'select-arrows', 'cancel'],
                'info'
              )}
            >
            </ino-icon>
          </div>
        </div>

        <h4>Different Icons</h4>

        <div class="flex-parent">
          <div class="flex-child">
            <h5>download3</h5>
            <ino-icon ino-icon="download3"></ino-icon>
          </div>
          <div class="flex-child">
            <h5>equalizer</h5>
            <ino-icon ino-icon="equalizer"></ino-icon>
          </div>
          <div class="flex-child">
            <h5>info</h5>
            <ino-icon ino-icon="info"></ino-icon>
          </div>
          <div class="flex-child">
            <h5>question</h5>
            <ino-icon ino-icon="question"></ino-icon>
          </div>
          <div class="flex-child">
            <h5>search</h5>
            <ino-icon ino-icon="search"></ino-icon>
          </div>
          <div class="flex-child">
            <h5>user</h5>
            <ino-icon ino-icon="user"></ino-icon>
          </div>
          <div class="flex-child">
            <h5>users</h5>
            <ino-icon ino-icon="users"></ino-icon>
          </div>
          <div class="flex-child">
            <h5>select-arrows</h5>
            <ino-icon ino-icon="select-arrows"></ino-icon>
          </div>
          <div class="flex-child">
            <h5>cancel</h5>
            <ino-icon ino-icon="cancel"></ino-icon>
          </div>
        </div>
      </div>
    )
  }));
