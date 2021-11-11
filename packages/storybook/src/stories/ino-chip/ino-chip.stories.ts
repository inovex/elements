import { Components } from '@inovex.de/elements';
import { Meta, Story } from '@storybook/web-components';
import { html, TemplateResult } from 'lit-html';
import { decorateStoryWithClass, withColorScheme } from '../utils';

import './ino-chip.scss';

export default {
  title: 'Buttons/<ino-chip>',
  component: 'ino-chip',
  decorators: [(story) => decorateStoryWithClass(story)],
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
    disabled="${args.disabled}"
    fill="${args.fill}"
    label="${args.label}"
    removable="${args.removable}"
    selectable="${args.selectable}"
    selected="${args.selected}"
    value="${args.value}"
  </ino-chip>
`;

export const Selection = (): TemplateResult => {
  const values = ['Chip 1', 'Chip 2', 'Chip 3'];
  const selectedChips = new Set<string>();

  const handleClick = (chip: HTMLInoChipElement) => {
    const isSelected = selectedChips.has(chip.value);
    chip.selected = !isSelected;

    if (isSelected) {
      selectedChips.delete(chip.value);
    } else {
      selectedChips.add(chip.value);
    }
  };

  return html`
    <div>
      <div>
        ${values.map(
          (value) =>
            html` <ino-chip
              color-scheme="primary"
              label="${value}"
              value="${value}"
              selectable
              @chipClicked="${(ev) => handleClick(ev.target)}"
            >
            </ino-chip>`
        )}
      </div>
      <div>
        ${values.map(
          (value) =>
            html` <ino-chip
              color-scheme="primary"
              label="${value}"
              value="${value}"
              selectable
              @chipClicked="${(ev) => handleClick(ev.target)}"
            >
              <ino-icon slot="icon-leading" icon="checkmark"></ino-icon>
            </ino-chip>`
        )}
      </div>
    </div>
  `;
};

Playground.args = {
  colorScheme: 'primary',
  disabled: false,
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
  <div>
    <ino-chip label="Default"></ino-chip>
    <ino-chip color-scheme="primary" label="Primary"></ino-chip>
    <ino-chip color-scheme="secondary" label="Secondary"></ino-chip>
    <ino-chip color-scheme="success" label="Success"></ino-chip>
    <ino-chip color-scheme="warning" label="Warning"></ino-chip>
    <ino-chip color-scheme="error" label="Error"></ino-chip>
    <ino-chip color-scheme="light" label="Light"></ino-chip>
    <ino-chip color-scheme="dark" label="Dark"></ino-chip>
  </div>
  <div>
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
  </div>
`;

export const Icons = (): TemplateResult => html`
  <div>
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
  </div>
`;

export const States = (): TemplateResult => html`
  <h4>Removable and states</h4>
  <div>
    <ino-chip color-scheme="primary" removable label="Removable"></ino-chip>
    <ino-chip
      color-scheme="primary"
      selected
      label="Selected"
      selectable
    ></ino-chip>
    <ino-chip color-scheme="primary" disabled label="Disabled"></ino-chip>
  </div>
`;
