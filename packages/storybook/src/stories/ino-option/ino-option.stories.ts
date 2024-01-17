import { Meta } from '@storybook/web-components';
import { Components } from '@inovex.de/elements';
import { html } from 'lit-html';
import Story from '../StoryWrapper';
import './ino-option.scss';

const InoOptionMeta = {
  title: 'Input/ino-option',
  component: 'ino-option',
  parameters: {
    docs: {
      story: {
        height: '150px',
      },
    },
  },
  render: (args) => html`
    <div class="story-option">
      <ino-select label="My Select">
        <ino-option
          class="customizable-option"
          disabled="${args.disabled}"
          selected="${args.selected}"
          value="${args.value}"
        >
          Content
        </ino-option>
      </ino-select>
    </div>
  `,
  args: {
    value: 'some-id',
    disabled: false,
    selected: false,
  },
} as Meta<Components.InoOption>;

export default InoOptionMeta;

export const Default = Story({
  ...InoOptionMeta,
});

export const DisabledOption = Story({
  ...Default,
  docsFromProperty: 'disabled',
  args: {
    disabled: true,
  },
});

export const SelectedOption = Story({
  ...Default,
  docsFromProperty: 'selected',
  args: {
    selected: true,
  },
});
