
import { storiesOf } from '@storybook/vue';

import { action } from '@storybook/addon-actions';
import { boolean, select } from '@storybook/addon-knobs/vue';

import renderTemplate from '../core/playground-story/template-renderer';

import componentReadme from '../../components/ino-icon/readme.md';
import './ino-icon.scss';

import ICONS from '../../components/ino-icon/icons';

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
              ino-icon={select('ino-icon', ICONS, 'info')}
              ino-clickable={boolean('ino-clickable', false)}
              onInoIconClicked={action('icon click emitted')}>
            </ino-icon>
          </div>
        </div>

        <h4>Different Icons</h4>

        <div class="flex-parent">
          {INO_ICONS.map(name => (
            <div class="flex-child">
                <h5>{name}</h5>
                <ino-icon ino-icon={name}></ino-icon>
            </div>
          ))}
        </div>
      </div>
    )
  }));
