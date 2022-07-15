import { Components, ViewMode } from '@inovex.de/elements';
import { Meta } from '@storybook/web-components';
import { html } from 'lit-html';
import { TemplateGenerator } from '../template-generator';
import { decorateStoryWithClass } from '../utils';
import './ino-markdown-editor.scss';

export default {
  title: 'Input/ino-markdown-editor',
  component: 'ino-markdown-editor',
  decorators: [
    (story) => decorateStoryWithClass(story, 'story-markdown-editor'),
  ],
  args: {
    initialValue: '',
    viewMode: 'preview',
  },
} as Meta;

const handleViewModeChange = (e: CustomEvent<ViewMode>) => {
  (e.target as HTMLInoMarkdownEditorElement).viewMode = e.detail;
};

const template = new TemplateGenerator<Components.InoMarkdownEditor>(
  'ino-markdown-editor',
  (args) => html`
    <ino-markdown-editor
      initial-value="${args.initialValue}"
      view-mode="${args.viewMode}"
      @viewModeChange="${handleViewModeChange}"
    ></ino-markdown-editor>
  `
);
export const Playground = template.generatePlaygroundStory();
