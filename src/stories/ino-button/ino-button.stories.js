import { storiesOf } from '@storybook/vue';

import { action } from '@storybook/addon-actions';
import { text, boolean } from '@storybook/addon-knobs/vue';

import renderTemplate from '../core/playground-story/template-renderer';

import { Button } from '../../../dist/collection/components/ino-button/ino-button';
import componentReadme from '../../components/ino-button/readme.md';


storiesOf('<ino-button>', module)
  .addDecorator(renderTemplate(componentReadme))
  .add('Simple', () => ({
    render(h) {
      return (
        <ino-button
          onClick={action('button clicked')}
          disabled={boolean('disabled', false)}
        >
          {text('<slot />', 'Simple Button')}
        </ino-button>
      );
    },
  }))
