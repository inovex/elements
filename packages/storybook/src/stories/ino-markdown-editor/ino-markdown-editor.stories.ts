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

        const openDialogHandler = (e) => {
          const el = e.target;
          if (el.id === 'open-dialog-btn') {
            const dialog = document.getElementById(
              `${ID}-dialog`
            ) as HTMLInoDialogElement;
            dialog.open = true;
          }
          if (el.id === 'close-dialog-btn') {
            const dialog = document.getElementById(
              `${ID}-dialog`
            ) as HTMLInoDialogElement;
            dialog.open = false;
          }
        };

        document.addEventListener('click', openDialogHandler);
        document.addEventListener('clickEl', openDialogHandler);
        document.addEventListener('valueChange', eventHandler);
        document.addEventListener('viewModeChange', viewModeChangeHandler);

        return () => {
          document.removeEventListener('click', openDialogHandler);
          document.removeEventListener('clickEl', openDialogHandler);
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
    value="${args.value}"
    view-mode="${args.viewMode}"
  ></ino-markdown-editor>
`;

Playground.args = {
  value: '',
  viewMode: 'preview' as any,
};

export const Dialog = () => html`
  <ino-button id="open-dialog-btn">Open Dialog</ino-button>
  <ino-dialog id="${ID + '-dialog'}" open="false">
    <ino-markdown-editor
      id="${ID + '-2'}"
      value="# Hallo welt"
    ></ino-markdown-editor>
    <div class="ino-dialog-footer" slot="footer">
      <ino-button icon="remove" id="close-dialog-btn">Cancel </ino-button>
    </div>
  </ino-dialog>
`;
