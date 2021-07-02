import { Components } from '@inovex.de/elements';
import { useEffect } from '@storybook/client-api';
import { Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { defaultDecorator } from '../utils';

import './ino-control-item.scss';

export default {
  title: 'Structure/ino-control-item',
  component: 'ino-control-item',
  decorators: [
    defaultDecorator,
    (story) => {
      useEffect(() => {
        const checkedChangeHandler = (e: CustomEvent<boolean>) => {
          const controlItem = e.target as HTMLInoControlItemElement;

          controlItem.checked = e.detail;

          if (controlItem.indeterminate) {
            controlItem.indeterminate = false;
          }
        };
        document.addEventListener('checkedChange', checkedChangeHandler);
        return () =>
          document.removeEventListener('checkedChange', checkedChangeHandler);
      });
      return story();
    },
  ],
};

export const Playground: Story<Components.InoControlItem> = (args) => html`
  <ino-list>
    <ino-control-item
      activated="${args.activated}"
      checked="${args.checked}"
      disabled="${args.disabled}"
      indeterminate="${args.indeterminate}"
      role="${args.role}"
      secondaryText="${args.secondaryText}"
      selected="${args.selected}"
      text="${args.text}"
      trailing="${args.trailing}"
    >
    </ino-control-item>
  </ino-list>
`;

Playground.args = {
  activated: false,
  checked: false,
  disabled: false,
  indeterminate: false,
  role: 'checkbox',
  secondaryText: 'Secondary Text',
  selected: false,
  text: 'Text',
  trailing: false,
};

Playground.argTypes = {
  role: {
    control: {
      type: 'select',
    },
    options: ['checkbox', 'radio'],
  },
};

export const Roles = () => html`
  <ino-list>
    <ino-control-item checked role="checkbox" text="Checkbox">
    </ino-control-item>
  </ino-list>
  <ino-list>
    <ino-control-item role="radio" text="Radio"></ino-control-item>
  </ino-list>
`;

export const States = () => html`
  <ino-list>
    <ino-control-item role="checkbox" text="Checked" checked>
    </ino-control-item>
    <ino-control-item role="checkbox" text="Indeterminate" indeterminate>
    </ino-control-item>
    <ino-control-item role="checkbox" text="Activated" activated>
    </ino-control-item>
    <ino-control-item role="checkbox" text="Selected" selected>
    </ino-control-item>
    <ino-control-item role="checkbox" text="Disabled" disabled>
    </ino-control-item>
  </ino-list>
`;

export const Position = () => html`
  <ino-list>
    <ino-control-item role="checkbox" text="Leading"> </ino-control-item>
    <ino-control-item trailing role="checkbox" text="Trailing">
    </ino-control-item>
  </ino-list>
`;
