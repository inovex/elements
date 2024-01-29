import { Meta } from '@storybook/web-components';
import { Components } from '@inovex.de/elements';
import { html } from 'lit-html';
import Story from '../StoryWrapper';
import { getIcons } from '../utils';
import './ino-icon-button.scss';

const InoIconButtonMeta = {
  title: 'Buttons/ino-icon-button',
  component: 'ino-icon-button',
  parameters: {
    actions: {
      handles: ['click ino-icon-button'],
    },
  },
  render: (args) => html`
    <ino-icon-button
      activated="${args.activated}"
      disabled="${args.disabled}"
      filled="${args.filled}"
      type="${args.type}"
    >
      <ino-icon icon="${args.icon}"></ino-icon>
    </ino-icon-button>
  `,
  argTypes: {
    icon: {
      control: {
        type: 'select',
      },
      options: getIcons(),
    },
  },
  args: {
    activated: false,
    disabled: false,
    filled: false,
    icon: 'add',
  },
} as Meta<Components.InoIconButton>;

export default InoIconButtonMeta;

export const Default = Story({
  ...InoIconButtonMeta,
});

export const Filled = Story({
  ...Default,
  docsFromProperty: 'filled',
  args: {
    filled: true,
  },
});

export const Activated = Story({
  ...Default,
  docsFromProperty: 'activated',
  args: {
    activated: true,
  },
});
