import { storiesOf } from '@storybook/vue';

import { action } from '@storybook/addon-actions';
import { text, boolean, select } from '@storybook/addon-knobs/vue';

import renderTemplate from '../core/playground-story/template-renderer';

import componentReadme from '../../components/ino-chip/readme.md';
import './ino-chip.scss';

storiesOf('<ino-chip>', module)
  .addDecorator(renderTemplate(componentReadme))
  .add('Default usage', () => ({
    render: h => (
      <div class="story-chip">
        <ino-chip
          ino-color-scheme={select(
            'ino-color-scheme',
            ['primary', 'secondary', 'tertiary', 'success', 'warning', 
             'error', 'light', 'dark'
            ],
            'primary'
          )}
          ino-fill={select('ino-fill', ['solid', 'outline'], 'solid')}
          ino-icon={text('ino-icon', '')}
          ino-removable={boolean('ino-removable', true)}
          ino-selected={boolean('ino-selected', false)}

          ino-checkmark={boolean('ino-checkmark', false)}
          onInoRemove={action('removable clicked')}>
          {text('<slot />', 'Customizable chip')}
        </ino-chip>

        <h4>Colors</h4>
        <ino-chip>Default</ino-chip>
        <ino-chip ino-color-scheme="primary">Primary</ino-chip>
        <ino-chip ino-color-scheme="secondary" ino-removable>Secondary</ino-chip>
        <ino-chip ino-color-scheme="tertiary" ino-icon="users">Tertiary</ino-chip>
        <ino-chip ino-color-scheme="success">Success</ino-chip>
        <ino-chip ino-color-scheme="warning">Warning</ino-chip>
        <ino-chip ino-color-scheme="error">Error</ino-chip>
        <ino-chip ino-color-scheme="light">Light</ino-chip>
        <ino-chip ino-color-scheme="dark">Dark</ino-chip>

        <h4>Outline</h4>
        <ino-chip ino-fill="outline">Outline</ino-chip>

        <h4>Removable and states</h4>
        <ino-chip ino-removable>Removable</ino-chip>
        <ino-chip ino-selected>Selected</ino-chip>
      </div>
    )
  }));