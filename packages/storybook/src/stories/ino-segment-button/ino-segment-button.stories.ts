import { Meta } from '@storybook/web-components';
import { Components } from '@inovex.de/elements';
import { html } from 'lit-html';
import Story from '../StoryWrapper';
import './ino-segment-button.scss';

const checkedChangeHandler = (e: CustomEvent<boolean>) =>
  ((e.target as HTMLInoSegmentButtonElement).checked = e.detail);

const InoSegmentButtonMeta = {
  title: 'Buttons/ino-segment-button',
  component: 'ino-segment-button',
  parameters: {
    actions: {
      handles: ['checkedChange'],
    },
  },
  render: args => html`
    <ino-segment-button
      value="1"
      class="customizable-segment-btn"
      checked="${args.checked}"
      dense="${args.dense}"
      disabled="${args.disabled}"
      name="${args.name}"
      value="${args.value}"
      type="${args.type}"
      @checkedChange="${checkedChangeHandler}"
    >
      Segment Button Label
    </ino-segment-button>
  `,
  args: {
    checked: false,
    dense: false,
    disabled: false,
    name: '',
    value: '',
    type: '',
  },
} as Meta<Components.InoSegmentButton>;

export default InoSegmentButtonMeta;

export const Default = Story({
  ...InoSegmentButtonMeta,
});

export const EnableChecked = Story({
  ...Default,
  docsFromProperty: 'checked',
  args: {
    checked: true,
  },
});

export const Disabled = Story({
  ...Default,
  docsFromProperty: 'disabled',
  args: {
    disabled: true,
  },
});

export const Dense = Story({
  ...Default,
  docsFromProperty: 'dense',
  args: {
    dense: true,
  },
});
