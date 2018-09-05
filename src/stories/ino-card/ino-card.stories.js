import { storiesOf } from '@storybook/vue';
import { boolean, text, select } from '@storybook/addon-knobs/vue';

import renderTemplate from '../core/playground-story/template-renderer';

import componentReadme from '../../components/ino-card/readme.md';
import './ino-card.scss';

storiesOf('<ino-card>', module)
  .addDecorator(renderTemplate(componentReadme))
  .add('Default usage', () => ({
    render: h => (
      <div class="story-card">
        <ino-card class="customizable-card" 
          ino-title={text('ino-title', 'Customizable Title')}
          ino-subtitle={text('ino-subtitle', 'Use the knobs to try different cards')}
          ino-outline={boolean('ino-outline', false)}
          ino-color-scheme={select(
            'ino-color-scheme',
            ['', 'primary', 'secondary', 'tertiary', 'success', 'warning',
            'error', 'light', 'dark'
            ],
            ''
          )}>
          {text('<slot />', 'Here comes your content.')}
        </ino-card>

        <h4>Variations</h4>
        <div class="flex-cards">
          <ino-card>A plain card without title or subtitle.</ino-card>
          <ino-card ino-title="Title only">A card with a title only.</ino-card>
          <ino-card ino-title="Title" ino-subtitle="and subtitle">A card with title, subtitle and content</ino-card>
        </div>

        <h4>Outlined</h4>
        <ino-card ino-title="An outline input" ino-subtitle="With subtitle" ino-outline>Here comes the content.</ino-card>
      </div>
    )
  }))
