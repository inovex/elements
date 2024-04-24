import { Meta } from '@storybook/web-components';
import { Components } from '@inovex.de/elements';
import { html } from 'lit-html';
import { useEffect } from '@storybook/preview-api';
import Story from '../StoryWrapper';
import './ino-control-item.scss';

const InoControlItemMeta = {
  title: 'Structure/ino-control-item',
  component: 'ino-control-item',
  decorators: [
    story => {
      useEffect(() => {
        const checkedChangeHandler = (e: CustomEvent<boolean>) => {
          const controlItem = e.target as HTMLInoControlItemElement;

          controlItem.checked = e.detail;

          if (controlItem.indeterminate) {
            controlItem.indeterminate = false;
          }
        };
        document.addEventListener('checkedChange', checkedChangeHandler);
        return () => document.removeEventListener('checkedChange', checkedChangeHandler);
      });
      return story();
    },
  ],
  render: args => html`
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
  `,
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

export default InoControlItemMeta;

export const Default = Story({
  ...InoControlItemMeta,
});

export const Roles = Story({
  ...Default,
  docsFromProperty: 'role',
  args: {
    role: 'radio',
  },
});

export const Checked = Story({
  ...Default,
  docsFromProperty: 'checked',
  args: {
    checked: true,
  },
});

export const Indeterminate = Story({
  ...Default,
  docsFromProperty: 'indeterminate',
  args: {
    indeterminate: true,
  },
});

export const Activated = Story({
  ...Default,
  docsFromProperty: 'activated',
  args: {
    activated: true,
  },
});

export const Selected = Story({
  ...Default,
  docsFromProperty: 'selected',
  args: {
    selected: true,
  },
});

export const SecondaryText = Story({
  ...Default,
  docsFromProperty: 'secondaryText',
  args: {
    secondaryText: 'Some Secondary Text',
  },
});

export const Disabled = Story({
  ...Default,
  docsFromProperty: 'disabled',
  args: {
    disabled: true,
  },
});

export const Trailing = Story({
  ...Default,
  docsFromProperty: 'trailing',
  args: {
    trailing: true,
  },
});
