import { Components } from '@inovex.de/elements';
import { useEffect } from '@storybook/client-api';
import { Meta } from '@storybook/web-components';
import { TemplateGenerator } from '../template-generator';
import { html } from 'lit-html';
import { decorateStoryWithClass } from '../utils';

import './ino-control-item.scss';

export default {
  title: 'Structure/ino-control-item',
  component: 'ino-control-item',
  decorators: [
    (story) => decorateStoryWithClass(story),
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
  argTypes: {
    role: {
      control: {
        type: 'select',
      },
      options: ['checkbox', 'radio'],
    },
  },
  args: {
    activated: false,
    checked: false,
    disabled: false,
    indeterminate: false,
    role: 'checkbox',
    secondaryText: 'Secondary Text',
    selected: false,
    text: 'Text',
    trailing: false,
  },
} as Meta<Components.InoControlItem>;

const template = new TemplateGenerator<Components.InoControlItem>(
  'ino-control-item',
  args => html`
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
`);


export const Playground = template.generatePlaygroundStory();

const templateRoles = new TemplateGenerator<Components.InoControlItem>(
  'ino-control-item', 
  args => html`
  <ino-list>
    <ino-control-item checked role="checkbox" text="Checkbox">
    </ino-control-item>
  </ino-list>
  <ino-list>
    <ino-control-item role="radio" text="Radio"></ino-control-item>
  </ino-list>
`);

export const Roles = templateRoles.generateStoryForProp('role', 'checkbox')
export const Checked = template.generateStoryForProp('checked', true);
export const Indeterminate = template.generateStoryForProp('indeterminate', true);
export const Activated = template.generateStoryForProp('activated', true);
export const Selected = template.generateStoryForProp('selected', true);
export const Disabled = template.generateStoryForProp('disabled', true);
export const Trailing = template.generateStoryForProp('trailing', true);
