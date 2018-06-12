import { storiesOf } from '@storybook/vue';

//
// Add-Ons
//
import { action } from '@storybook/addon-actions';
import { text, boolean } from '@storybook/addon-knobs/vue';
import { withDocs } from 'storybook-readme';

//
// Component Imports
//
import { Button } from '../../../dist/collection/components/ino-button/ino-button';
import apiDocs from '../../components/ino-button/readme.md';

//
// Helpers
//
import ComponentTemplateRenderer from '../helpers/ComponentTemplateRenderer';

const template = new ComponentTemplateRenderer({ inoButton: Button }, apiDocs).getTemplate();

export default {
  addStory: () => storiesOf('<ino-button>', module)
    .addDecorator(withDocs(template))
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
    })),
};
