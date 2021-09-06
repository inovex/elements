import { Components } from '@inovex.de/elements';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { decorateStoryWithClass } from '../utils';

import './ino-header.scss';

export default {
  title: 'Structure/ino-header',
  component: 'ino-header',
  decorators: [(story) => decorateStoryWithClass(story)],
} as Meta;

export const Playground: Story<Components.InoHeader> = (args) => html`
  <ino-header text="${args.text}"></ino-header>
`;

Playground.args = {
  text: 'Text',
};
