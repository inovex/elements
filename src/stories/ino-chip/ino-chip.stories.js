import { storiesOf } from '@storybook/vue';

import { action } from '@storybook/addon-actions';
import { text, boolean } from '@storybook/addon-knobs/vue';

import renderTemplate from '../core/stencil-template-renderer';

import { Chip } from '../../../dist/collection/components/ino-chip/ino-chip';
import componentReadme from '../../components/ino-chip/readme.md';

storiesOf('<ino-chip>', module)
  .addDecorator(renderTemplate(componentReadme))
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
  }));