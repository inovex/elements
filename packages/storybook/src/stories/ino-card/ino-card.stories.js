import { boolean, select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/html';

import componentReadme from '_local-elements/src/components/ino-card/readme.md';
import withStencilReadme from '_local-storybookcore/with-stencil-readme';

import './ino-card.scss';

storiesOf('Structure|<ino-card>', module)
  .addDecorator(withStencilReadme(componentReadme))
  .add('Default usage', () => /*html*/`
    <div class="story-card">
      <ino-card class="customizable-card"
        ino-title="${text('ino-title', 'Customizable Title')}"
        ino-subtitle="${text('ino-subtitle', 'Use the knobs to try different cards')}"
        ino-outline="${boolean('ino-outline', false)}"
        ino-image="${text('ino-image', 'https://cdn-images-1.medium.com/max/1600/1*HP8l7LMMt7Sh5UoO1T-yLQ.png')}"
        ino-aspect-ratio="${select('ino-aspect-ratio', ['16-9', 'square'], '16-9')}"
        ino-media-title="${boolean('ino-media-title', false)}"
        ino-color-scheme="${select(
          'ino-color-scheme',
          ['', 'primary', 'secondary', 'tertiary', 'success', 'warning',
           'error', 'light', 'dark'
          ],
          ''
        )}">
        <div slot="content">${text('<slot />', 'Here comes your content.')}</div>
        <ino-button ino-fill="inverse" slot="action-buttons">Read</ino-button>
        <ino-button ino-fill="inverse" slot="action-buttons">Bookmark</ino-button>
        <ino-icon-button ino-icon="favorite" slot="action-icons"></ino-icon-button>
        <ino-icon-button ino-icon="info" slot="action-icons"></ino-icon-button>
        <ino-icon-button ino-icon="help" slot="action-icons"></ino-icon-button>
      </ino-card>

      <h4>Variations</h4>
      <div class="flex-cards">
        <ino-card><div slot="content">A plain card without title or subtitle.</div></ino-card>
        <ino-card ino-title="Title only"><div slot="content">A card with a title only.</div></ino-card>
        <ino-card ino-title="Title" ino-subtitle="and subtitle"><div slot="content">A card with title, subtitle and content</div></ino-card>
      </div>

      <h4>Outlined</h4>
      <ino-card ino-title="An outline input" ino-subtitle="With subtitle" ino-outline><div slot="content">Here comes the content.</div></ino-card>
    </div>
  `);
