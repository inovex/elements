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
    text: '',
    defaultSlot: 'Headline Text'
  }
} as Meta<Components.InoHeader>;

type InoHeaderExtended = Components.InoHeader & {
  defaultSlot: string,
}
const template = new TemplateGenerator<InoHeaderExtended>(
  'ino-header',
  args => html`
  <ino-header text="${args.text}">${args.defaultSlot}</ino-header>
`);

export const Playground = template.generatePlaygroundStory();


