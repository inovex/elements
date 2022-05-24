import { Components } from '@inovex.de/elements';
import { Meta } from '@storybook/web-components';
import { html } from 'lit-html';
import { TemplateGenerator } from '../template-generator';
import { decorateStoryWithClass } from '../utils';

import './ino-header.scss';

export default {
  title: 'Structure/ino-header',
  component: 'ino-header',
  decorators: [(story) => decorateStoryWithClass(story)],
  args: {
    text: 'Headline Text',
    
  }
} as Meta<Components.InoHeader>;

const template = new TemplateGenerator<Components.InoHeader>(
  'ino-header',
  args => html`
  <ino-header text="${args.text}"></ino-header>
`);

export const Playground = template.generatePlaygroundStory();


