import { storiesOf } from '@storybook/vue';

//
// Add-Ons
//
import { boolean, text } from '@storybook/addon-knobs/vue';
import { withDocs } from 'storybook-readme';

//
// Component Imports
//
import { Card } from '../../../dist/collection/components/ino-card/ino-card';
import apiDocs from '../../components/ino-card/readme.md';

//
// Helpers
//
import ComponentTemplateRenderer from '../helpers/ComponentTemplateRenderer';

const template = new ComponentTemplateRenderer({ inocard: Card }, apiDocs).getTemplate();

export default {
  addStory: () => storiesOf('<ino-card>', module)
    .addDecorator(withDocs(template))
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
    })),
};
