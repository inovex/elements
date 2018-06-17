import { storiesOf } from '@storybook/vue';
import { boolean, text } from '@storybook/addon-knobs/vue';

import renderTemplate from '../core/playground-story/template-renderer';

import { Card } from '../../../dist/collection/components/ino-card/ino-card';
import componentReadme from '../../components/ino-card/readme.md';


storiesOf('<ino-card>', module)
  .addDecorator(renderTemplate(componentReadme))
  .add('Simple', () => ({
    render(h) {
      return (
        <ino-card ino-raised={boolean('ino-raised', false)}>
          {text('<slot />', 'Here comes your content.')}
        </ino-card>
      );
    },
  }))
  .add('Simple, raised', () => ({
    render(h) {
      return (
        <ino-card ino-raised={boolean('ino-raised', true)}>
          {text('<slot />', 'Here comes your content.')}
        </ino-card>
      );
    },
  }))
