import { Components } from '@inovex.de/elements';
import { Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { defaultDecorator } from '../utils';

import './ino-header.scss';

export default {
  title: 'Structure/ino-header',
  component: 'ino-header',
  decorators: [defaultDecorator],
};

export const Playground: Story<Components.InoHeader> = (args) => html`
  <ino-header text="${args.text}"></ino-header>
`;

Playground.args = {
  text: 'Text',
};
