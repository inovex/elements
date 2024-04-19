import { Components } from '@inovex.de/elements';
import { Meta } from '@storybook/web-components';
import { html } from 'lit-html';
import Story from '../StoryWrapper';
import './ino-progress-bar.scss';

const InoProgressBarMeta = {
  title: 'Notification/ino-progress-bar',
  component: 'ino-progress-bar',
  argTypes: {
    buffer: {
      control: { min: 0, max: 1, step: 0.1 },
    },
    progress: {
      control: { min: 0, max: 1, step: 0.1 },
    },
  },
  render: args => html`
    <ino-progress-bar buffer="${args.buffer}" progress="${args.progress}" indeterminate="${args.indeterminate}">
    </ino-progress-bar>
  `,
  args: {
    indeterminate: false,
    buffer: 0.9,
    progress: 0.4,
  },
} as Meta<Components.InoProgressBar>;

export default InoProgressBarMeta;

export const Default = Story({
  ...InoProgressBarMeta,
});

export const Progress = Story({
  ...Default,
  docsFromProperty: 'progress',
  args: {
    progress: 0.5,
  },
});

export const Buffer = Story({
  ...Default,
  docsFromProperty: 'buffer',
  args: {
    buffer: 0.5,
  },
});

export const Indeterminate = Story({
  ...Default,
  docsFromProperty: 'indeterminate',
  args: {
    indeterminate: true,
  },
});
