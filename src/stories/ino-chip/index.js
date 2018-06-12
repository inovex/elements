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
import { Chip } from '../../../dist/collection/components/ino-chip/ino-chip';
import apiDocs from '../../components/ino-chip/readme.md';

//
// Helpers
//
import ComponentTemplateRenderer from '../helpers/ComponentTemplateRenderer';

const template = new ComponentTemplateRenderer({ inoChip: Chip }, apiDocs).getTemplate();

export default {
  addStory: () => storiesOf('<ino-chip>', module)
    .addDecorator(withDocs(template))
    .add('Primary solid', () => ({
      render(h) {
        return (
          <ino-chip
            ino-color-scheme={text('ino-color-scheme', 'primary')}
            ino-fill={text('ino-fill', 'solid')}
            ino-icon={text('ino-icon', '')}
            ino-label={text('ino-label', 'This is the label')}
            ino-removable={boolean('ino-removable', true)}
            onInoRemove={action('removable clicked')}
          >
          </ino-chip>

        );
      },
    }))
    .add('Primary outline', () => ({
      render(h) {
        return (
          <ino-chip
            ino-color-scheme={text('ino-color-scheme', 'primary')}
            ino-fill={text('ino-fill', 'outline')}
            ino-icon={text('ino-icon', '')}
            ino-label={text('ino-label', 'This is the label')}
            ino-removable={boolean('ino-removable', true)}
            onInoRemove={action('removable clicked')}
          >
          </ino-chip>

        );
      },
    }))
    .add('Secondary solid', () => ({
      render(h) {
        return (
          <ino-chip
            ino-color-scheme={text('ino-color-scheme', 'secondary')}
            ino-fill={text('ino-fill', 'solid')}
            ino-icon={text('ino-icon', '')}
            ino-label={text('ino-label', 'This is the label')}
            ino-removable={boolean('ino-removable', true)}
            onInoRemove={action('removable clicked')}
          >
          </ino-chip>

        );
      },
    }))
    .add('Secondary outline', () => ({
      render(h) {
        return (
          <ino-chip
            ino-color-scheme={text('ino-color-scheme', 'secondary')}
            ino-fill={text('ino-fill', 'outline')}
            ino-icon={text('ino-icon', '')}
            ino-label={text('ino-label', 'This is the label')}
            ino-removable={boolean('ino-removable', true)}
            onInoRemove={action('removable clicked')}
          >
          </ino-chip>

        );
      },
    }))
    .add('Tertiary solid', () => ({
      render(h) {
        return (
          <ino-chip
            ino-color-scheme={text('ino-color-scheme', 'tertiary')}
            ino-fill={text('ino-fill', 'solid')}
            ino-icon={text('ino-icon', '')}
            ino-label={text('ino-label', 'This is the label')}
            ino-removable={boolean('ino-removable', true)}
            onInoRemove={action('removable clicked')}
          >
          </ino-chip>

        );
      },
    }))
    .add('Tertiary outline', () => ({
      render(h) {
        return (
          <ino-chip
            ino-color-scheme={text('ino-color-scheme', 'tertiary')}
            ino-fill={text('ino-fill', 'outline')}
            ino-icon={text('ino-icon', '')}
            ino-label={text('ino-label', 'This is the label')}
            ino-removable={boolean('ino-removable', true)}
            onInoRemove={action('removable clicked')}
          >
          </ino-chip>

        );
      },
    })),
};
