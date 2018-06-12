import { storiesOf } from '@storybook/vue';

//
// Add-Ons
//
import { text, boolean } from '@storybook/addon-knobs/vue';
import { withDocs } from 'storybook-readme';

//
// Component Imports
//
import { Checkbox } from '../../../dist/collection/components/ino-checkbox/ino-checkbox';
import apiDocs from '../../components/ino-checkbox/readme.md';

//
// Helpers
//
import ComponentTemplateRenderer from '../helpers/ComponentTemplateRenderer';

const template = new ComponentTemplateRenderer({ inoCheckbox: Checkbox }, apiDocs).getTemplate();

export default {
  addStory: () => storiesOf('<ino-checkbox>', module)
    .addDecorator(withDocs(template))
    .add('Simple', () => ({
      render(h) {
        return (
          <ino-checkbox
            checked={boolean('checked', false)}
            disabled={boolean('disabled', false)}
          >
            {text('<slot />', 'A simple checkbox')}
          </ino-checkbox>
        );
      },
    }))
    .add('Checked', () => ({
      render(h) {
        return (
          <ino-checkbox
            checked={boolean('checked', true)}
            disabled={boolean('disabled', false)}
          >
            {text('<slot />', 'A simple checkbox')}
          </ino-checkbox>
        );
      },
    }))
    .add('Disabled', () => ({
      render(h) {
        return (
          <ino-checkbox
            checked={boolean('checked', false)}
            disabled={boolean('disabled', true)}
          >
            {text('<slot />', 'A simple checkbox')}
          </ino-checkbox>
        );
      },
    }))
    .add('Checked + disabled', () => ({
      render(h) {
        return (
          <ino-checkbox
            checked={boolean('checked', true)}
            disabled={boolean('disabled', true)}
          >
            {text('<slot />', 'A simple checkbox')}
          </ino-checkbox>
        );
      },
    })),
};
