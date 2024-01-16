import { Meta } from '@storybook/web-components';
import { html } from 'lit-html';
import Story from '../StoryWrapper';
import { useEffect } from '@storybook/preview-api';
import './ino-markdown-editor.scss';

const ID = 'editor-playground';

const InoMarkdownEditorMeta = {
  title: 'Input/ino-markdown-editor',
  component: 'ino-markdown-editor',
  parameters: {
    actions: {
      handles: [],
    },
  },
  decorators: [
    (story) => {
      useEffect(() => {
        const viewModeChangeHandler = (e: CustomEvent<string>) => {
          const editor = document.getElementById(
            ID,
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
  render: (args) => html`
    <ino-markdown-editor
      id="${ID}"
      initial-value="${args.initialValue}"
      view-mode="${args.viewMode}"
    ></ino-markdown-editor>
  `,
  args: {
    initialValue: '',
    viewMode: 'preview',
  },
} as Meta;

export default InoMarkdownEditorMeta;

export const Default = Story({
  ...InoMarkdownEditorMeta,
});