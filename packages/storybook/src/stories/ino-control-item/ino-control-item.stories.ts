import { Meta } from '@storybook/web-components';
import { Components } from '@inovex.de/elements';
import { html } from 'lit-html';
import { useEffect } from '@storybook/preview-api';
import Story from '../StoryWrapper';
import './ino-control-item.scss';

const Playground = {
  title: 'Structure/ino-control-item',
  component: 'ino-control-item',
  decorators: [
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
  render: (args) => html`
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


export const Roles = Story({
  ...Playground,
  docsFromProperty: 'role',
  args: {
    role: 'radio'
  }
}) 

export const Checked = Story({
  ...Playground,
  docsFromProperty: 'checked',
  args: {
    checked: true
  }
}) 


export const Indeterminate = Story({
  ...Playground,
  docsFromProperty: 'indeterminate',
  args: {
    indeterminate: true
  }
})

export const Activated = Story({
  ...Playground,
  docsFromProperty: 'activated',
  args: {
    activated: true
  }
})

export const Selected = Story({
  ...Playground,
  docsFromProperty: 'selected',
  args: {
    selected: true
  }
})

export const SecondaryText = Story({
  ...Playground,
  docsFromProperty: 'secondaryText',
  args: {
    secondaryText: 'Some Secondary Text'
  }
})

export const Disabled = Story({
  ...Playground,
  docsFromProperty: 'disabled',
  args: {
    disabled: true
  }
})

export const Trailing = Story({
  ...Playground,
  docsFromProperty: 'trailing',
  args: {
    trailing: true
  }
})

export default Playground;