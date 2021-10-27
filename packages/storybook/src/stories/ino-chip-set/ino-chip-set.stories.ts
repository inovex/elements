import { Components } from '@inovex.de/elements';
import { Meta, Story } from '@storybook/web-components';
import { html, TemplateResult } from 'lit-html';
import { decorateStoryWithClass } from '../utils';

import './ino-chip-set.scss';

export default {
  title: 'Buttons/<ino-chip-set>',
  component: 'ino-chip-set',
  decorators: [(story) => decorateStoryWithClass(story)],
  parameters: {
    actions: {
      handles: ['removeChip'],
    },
  },
} as Meta;

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
  },
  options: ['', 'choice', 'filter', 'input'],
};

export const Filter = (): TemplateResult => html`
  <ino-chip-set type="filter">
    <ino-chip value="1" label="Chip 1" selectable></ino-chip>
    <ino-chip value="2" label="Chip 2" selectable></ino-chip>
    <ino-chip value="3" label="Chip 3" selectable></ino-chip>
  </ino-chip-set>
`;

export const Choice = (): TemplateResult => html`
  <ino-chip-set type="choice">
    <ino-chip label="Chip 1" value="1" selectable></ino-chip>
    <ino-chip label="Chip 2" value="2" selectable></ino-chip>
    <ino-chip label="Chip 3" value="3" selectable></ino-chip>
  </ino-chip-set>
`;

export const Input = (): TemplateResult => html`
  <ino-chip-set type="input">
    <ino-chip label="Chip 1" value="1"></ino-chip>
    <ino-chip label="Chip 2" value="2"></ino-chip>
    <ino-chip label="Chip 3" value="3"></ino-chip>
  </ino-chip-set>
`;
