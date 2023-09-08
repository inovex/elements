import { Components } from '@inovex.de/elements';
import { Meta } from '@storybook/web-components';
import { html } from 'lit-html';
import { decorateStoryWithClass } from '../utils';
import './ino-progress-bar.scss';
import { TemplateGenerator } from '../template-generator';

export default {
  title: 'Notification/ino-progress-bar',
  component: 'ino-progress-bar',
  decorators: [(s) => decorateStoryWithClass(s, 'story-ino-progress-bar')],
  argTypes: {
    buffer: {
      control: { min: 0, max: 1, step: 0.1 },
    },
    progress: {
      control: { min: 0, max: 1, step: 0.1 },
    },
  },
  args: {
    indeterminate: false,
  },
} as Meta;

const template = new TemplateGenerator<Components.InoProgressBar>(
  'ino-progress-bar',
  (args) => html`
    <ino-progress-bar
      buffer="${args.buffer}"
      progress="${args.progress}"
      indeterminate="${args.indeterminate}"
    >
    </ino-progress-bar>
  `
);

export const Playground = template.generatePlaygroundStory();
Playground.args = {
  buffer: 0.9,
  progress: 0.4,
};

export const Progress = template.generateStoryForProp('progress', 0.5);

export const Buffer = template.generateStoryForProp('buffer', 0.5);

export const Indeterminate = template.generateStoryForProp(
  'indeterminate',
  true
);
