import { Components } from '@inovex.de/elements';
import { useEffect } from '@storybook/client-api';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { decorateStoryWithClass } from '../utils';
import './ino-markdown-editor.scss';

const ID = 'editor-playground';

export default {
  title: 'Input/ino-markdown-editor',
  component: 'ino-markdown-editor',
  parameters: {
    actions: {
      handles: [],
    },
  },
  decorators: [
    (story) => decorateStoryWithClass(story, 'story-markdown-editor'),
    (story) => {
      useEffect(() => {
        const eventHandler = (e: CustomEvent<string>) => {
          console.log(e.detail);
        };

        const viewModeChangeHandler = (e: CustomEvent<string>) => {
          const editor = document.getElementById(
            ID
          ) as HTMLInoMarkdownEditorElement;
          editor.viewMode = e.detail as any;
        };

        document.addEventListener('valueChange', eventHandler);
        document.addEventListener('viewModeChange', viewModeChangeHandler);

        return () => {
          document.removeEventListener('valueChange', eventHandler);
          document.removeEventListener('viewModeChange', viewModeChangeHandler);
        };
      });
      return story();
    },
  ],
} as Meta;

export const Playground: Story<Components.InoMarkdownEditor> = (args) => html`
  <ino-markdown-editor
    id="${ID}"
    initial-value="${args.initialValue}"
    view-mode="${args.viewMode}"
  ></ino-markdown-editor>
`;

Playground.args = {
  initialValue: '',
  viewMode: 'preview' as any,
};
