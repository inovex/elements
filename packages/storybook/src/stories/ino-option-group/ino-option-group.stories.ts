import { Meta } from '@storybook/web-components';
import { Components } from '@inovex.de/elements';
import { html } from 'lit-html';
import Story from '../StoryWrapper';
import './ino-option-group.scss';

const InoOptionGroupMeta = {
  title: 'Input/ino-option-group',
  component: 'ino-option-group',
  parameters: {
    docs: {
      story: {
        height: '450px',
      },
    },
  },
  render: (args) => html`
    <ino-select label="Select with Group">
      <ino-option-group label="${args.label}">
        <ino-option value="Option 1">Option 1</ino-option>
        <ino-option value="Option 2">Option 2</ino-option>
        <ino-option value="Option 3">Option 3</ino-option>
      </ino-option-group>
      <ino-option-group label="${args.label}">
        <ino-option value="Option 4">Option 4</ino-option>
        <ino-option value="Option 5">Option 5</ino-option>
        <ino-option value="Option 6">Option 6</ino-option>
      </ino-option-group>
    </ino-select>
  `,
  args: {
    label: 'My group Label',
  },
} as Meta<Components.InoOptionGroup>;

export default InoOptionGroupMeta;

export const Default = Story({
  ...InoOptionGroupMeta,
});
