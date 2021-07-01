import { Components } from '@inovex.de/elements';
import { Story } from '@storybook/web-components';
import { html } from 'lit-html';

import './ino-chip-set.scss';
import { defaultDecorator } from '../utils';

export default {
  title: 'Buttons/<ino-chip-set>',
  component: 'ino-chip-set',
  decorators: [defaultDecorator],
  parameters: {
    actions: {
      handles: ['removeChip'],
    },
  },
};

export const Playground: Story<Components.InoChipSet> = (args) => html`
  <ino-chip-set class="customizable-chip-set" type="${args.type}">
    <ino-chip value="1" label="Chip 1"></ino-chip>
    <ino-chip value="2" label="Chip 2"></ino-chip>
    <ino-chip value="3" label="Chip 3"></ino-chip>
  </ino-chip-set>
`;

Playground.args = {
  type: '',
};

Playground.argTypes = {
  type: {
    type: 'select',
    options: ['', 'choice', 'filter', 'input'],
  },
};

export const Filter = () => html`
  <ino-chip-set type="filter">
    <ino-chip value="1" label="Chip 1"></ino-chip>
    <ino-chip value="2" label="Chip 2" selected></ino-chip>
    <ino-chip value="3" label="Chip 3"></ino-chip>
  </ino-chip-set>
`;

export const Choice = () => html`
  <ino-chip-set type="choice">
    <ino-chip label="Chip 1" value="1"></ino-chip>
    <ino-chip label="Chip 2" value="2" selected></ino-chip>
    <ino-chip label="Chip 3" value="3"></ino-chip>
  </ino-chip-set>
`;

export const Input = () => html`
  <ino-chip-set type="input">
    <ino-chip label="Chip 1" value="1"></ino-chip>
    <ino-chip label="Chip 2" value="2"></ino-chip>
    <ino-chip label="Chip 3" value="3"></ino-chip>
  </ino-chip-set>
`;
