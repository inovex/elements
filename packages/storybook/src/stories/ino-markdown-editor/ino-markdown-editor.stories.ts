import { Components } from '@inovex.de/elements';
import { useEffect } from '@storybook/client-api';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { decorateStoryWithClass } from '../utils';
import './ino-markdown-editor.scss';

export default {
  title: 'Input/ino-markdown-editor',
  component: 'ino-markdown-editor',
  parameters: {
    actions: {
      handles: [],
    },
  },
  decorators: [story => decorateStoryWithClass(story, 'story-markdown-editor')],
} as Meta;

export const Playground: Story<Components.InoMarkdownEditor> = args => html`
  <ino-markdown-editor> </ino-markdown-editor>
`;
