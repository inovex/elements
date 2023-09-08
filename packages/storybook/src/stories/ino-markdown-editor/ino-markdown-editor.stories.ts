import { Components } from '@inovex.de/elements';
import { useEffect } from '@storybook/client-api';
import { Meta } from '@storybook/web-components';
import { html } from 'lit-html';
import { TemplateGenerator } from '../template-generator';
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
        const viewModeChangeHandler = (e: CustomEvent<string>) => {
          const editor = document.getElementById(
            ID
          ) as HTMLInoMarkdownEditorElement;
          editor.viewMode = e.detail as any;
        };
        document.addEventListener('viewModeChange', viewModeChangeHandler);

        return () => {
          document.removeEventListener('viewModeChange', viewModeChangeHandler);
        };
      });
      return story();
    },
  ],
  args: {
    initialValue: '',
    viewMode: 'preview',
  },
} as Meta;

const template = new TemplateGenerator<Components.InoMarkdownEditor>(
  'ino-markdown-editor',
  (args) => html`
    <ino-markdown-editor
      id="${ID}"
      initial-value="${args.initialValue}"
      view-mode="${args.viewMode}"
    ></ino-markdown-editor>
  `
);
export const Playground = template.generatePlaygroundStory();
