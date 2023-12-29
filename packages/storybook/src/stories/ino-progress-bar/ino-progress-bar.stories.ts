import { Components } from '@inovex.de/elements';
import { Meta } from '@storybook/web-components';
import { html } from 'lit-html';
import { cssColor, decorateStoryWithClass, setArgs } from '../utils';
import { TemplateGenerator } from '../template-generator';
import { CssProperties } from '../types';

import './ino-progress-bar.scss';

const PROGRESS_BAR_CSS_PROPS: CssProperties = {
  barColor: cssColor(
    '--progress-bar--bar-color',
    'Color of the progress bar.',
    '#4655ff',
  ),
};

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
  `,
);

export const Playground = template.generatePlaygroundStory(
  PROGRESS_BAR_CSS_PROPS,
);
setArgs(Playground, {
  buffer: 0.9,
  progress: 0.4,
});

export const Progress = template.generateStoryForProp('progress', 0.5);

export const Buffer = template.generateStoryForProp('buffer', 0.5);

export const Indeterminate = template.generateStoryForProp(
  'indeterminate',
  true,
);
