import { Components } from '@inovex.de/elements';
import { useEffect } from '@storybook/preview-api';
import { Meta, StoryObj } from '@storybook/web-components';
import { TemplateGenerator } from '../template-generator';
import { html } from 'lit-html';
import { decorateStoryWithClass } from '../utils';
import './ino-control-item.scss';

type Story = StoryObj;

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
  args: {
    activated: false,
    checked: false,
    disabled: false,
    indeterminate: false,
    role: 'checkbox',
    secondaryText: '',
    selected: false,
    text: 'Text',
    trailing: false,
  },
} as Meta<Components.InoControlItem>;

const template = new TemplateGenerator<Components.InoControlItem>(
  'ino-control-item',
  (args) => html`
  <ino-list two-lines="${args.secondaryText || false}">
    <ino-control-item
      activated="${args.activated}"
      checked="${args.checked}"
      disabled="${args.disabled}"
      indeterminate="${args.indeterminate}"
      role="${args.role}"
      secondary-text="${args.secondaryText}"
      selected="${args.selected}"
      text="${args.text}"
      trailing="${args.trailing}"
    >
    </ino-control-item>
  </ino-list>
`,);

export const Roles: Story = template.generateStoryForProp('role', 'radio');
export const Checked: Story = template.generateStoryForProp('checked', true);
export const Indeterminate: Story = template.generateStoryForProp(
  'indeterminate',
  true,
);
export const Activated: Story = template.generateStoryForProp('activated', true);
export const Selected: Story = template.generateStoryForProp('selected', true);
export const SecondaryText: Story = template.generateStoryForProp(
  'secondaryText',
  'Some Secondary Text',
);
export const Disabled: Story = template.generateStoryForProp('disabled', true);
export const Trailing: Story = template.generateStoryForProp('trailing', true);
