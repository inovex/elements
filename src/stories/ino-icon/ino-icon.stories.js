
import { storiesOf } from '@storybook/vue';

import { action } from '@storybook/addon-actions';
import { select } from '@storybook/addon-knobs/vue';

import renderTemplate from '../core/playground-story/template-renderer';

import componentReadme from '../../components/ino-icon/readme.md';
import './ino-icon.scss';


const icons = [
  'add', 
  'date_range', 
  'equalizer', 
  'info', 
  'help', 
  'search', 
  'person', 
  'users', 
  'cancel'
];

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
              ino-icon={select('ino-icon', icons, 'info')}>
            </ino-icon>
          </div>
        </div>

        <h4>Different Icons</h4>

        <div class="flex-parent">
          {icons.map(name => (
            <div class="flex-child">
                <h5>{name}</h5>
                <ino-icon ino-icon={name}></ino-icon>
            </div>
          ))}
        </div>
      </div>
    )
  }));
