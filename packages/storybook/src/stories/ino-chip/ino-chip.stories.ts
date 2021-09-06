import { Components } from '@inovex.de/elements';
import { Meta, Story } from '@storybook/web-components';
import { html, TemplateResult } from 'lit-html';
import { defaultDecorator, withColorScheme } from '../utils';

import './ino-chip.scss';

export default {
  title: 'Buttons/<ino-chip>',
  component: 'ino-chip',
  decorators: [defaultDecorator],
  parameters: {
    actions: {
      handles: ['removeChip'],
    },
  },
} as Meta;

export const Playground: Story<Components.InoChip> = (args) => html`
  <ino-chip
    class="customizable-chip"
    color-scheme="${args.colorScheme}"
    fill="${args.fill}"
    label="${args.label}"
    removable="${args.removable}"
    selectable="${args.selectable}"
    selected="${args.selected}"
    value="${args.value}"
  </ino-chip>
`;

Playground.args = {
  colorScheme: 'primary',
  fill: 'solid',
  label: 'Label',
  removable: false,
  selectable: false,
  selected: false,
  value: '',
};

withColorScheme(Playground, 'colorScheme', 'primary');

Playground.argTypes.fill = {
  control: {
    type: 'select',
  },
  options: ['solid', 'outline'],
};

export const ColorsAndFill = (): TemplateResult => html`
  <ino-chip-set>
    <ino-chip label="Default"></ino-chip>
    <ino-chip color-scheme="primary" label="Primary"></ino-chip>
    <ino-chip color-scheme="secondary" label="Secondary"></ino-chip>
    <ino-chip color-scheme="success" label="Success"></ino-chip>
    <ino-chip color-scheme="warning" label="Warning"></ino-chip>
    <ino-chip color-scheme="error" label="Error"></ino-chip>
    <ino-chip color-scheme="light" label="Light"></ino-chip>
    <ino-chip color-scheme="dark" label="Dark"></ino-chip>
  </ino-chip-set>
  <ino-chip-set>
    <ino-chip fill="outline" label="Outline"></ino-chip>
    <ino-chip fill="outline" label="Primary" color-scheme="primary"></ino-chip>
    <ino-chip
      fill="outline"
      label="Secondary"
      color-scheme="secondary"
    ></ino-chip>
    <ino-chip fill="outline" color-scheme="success" label="Success"></ino-chip>
    <ino-chip fill="outline" color-scheme="warning" label="Warning"></ino-chip>
    <ino-chip fill="outline" color-scheme="error" label="Error"></ino-chip>
    <ino-chip fill="outline" color-scheme="light" label="Light"></ino-chip>
    <ino-chip fill="outline" color-scheme="dark" label="Dark"></ino-chip>
  </ino-chip-set>
`;

export const Icons = (): TemplateResult => html`
  <ino-chip-set>
    <ino-chip color-scheme="primary" label="Leading">
      <ino-icon slot="icon-leading" icon="checkmark"></ino-icon>
    </ino-chip>
    <ino-chip color-scheme="primary" label="Trailing">
      <ino-icon slot="icon-trailing" icon="checkmark"></ino-icon>
    </ino-chip>
    <ino-chip color-scheme="primary" label="Leading & Trailing">
      <ino-icon slot="icon-leading" icon="checkmark"></ino-icon>
      <ino-icon slot="icon-trailing" icon="checkmark"></ino-icon>
    </ino-chip>
  </ino-chip-set>
`;

export const States = (): TemplateResult => html`
  <h4>Removable and states</h4>
  <ino-chip-set>
    <ino-chip color-scheme="primary" removable label="Removable"></ino-chip>
    <ino-chip color-scheme="primary" selected label="Selected"></ino-chip>
    <ino-chip color-scheme="primary" selected label="Selected with Checkmark" selectable></ino-chip>
  </ino-chip-set>
  </div>
`;
