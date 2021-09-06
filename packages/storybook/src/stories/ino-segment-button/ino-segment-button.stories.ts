import { Components } from '@inovex.de/elements';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { decorateStoryWithClass } from '../utils';

import './ino-segment-button.scss';

export default {
  title: 'Buttons/ino-segment-button',
  component: 'ino-segment-button',
  decorators: [
    (story) => decorateStoryWithClass(story, 'story-segment-button'),
  ],
  parameters: {
    actions: {
      handles: ['checkedChange'],
    },
  },
} as Meta;

export const Playground: Story<Components.InoSegmentButton> = (args) => html`
  <ino-segment-button
    value="1"
    class="customizable-segment-btn"
    checked="${args.checked}"
    dense="${args.dense}"
    disabled="${args.disabled}"
    name="${args.name}"
    value="${args.value}"
  >
    Segment Button Label
  </ino-segment-button>
`;
Playground.args = {
  checked: false,
  dense: false,
  disabled: false,
  name: '',
  value: '',
};

export const EnableUnchecked = () => html`
  <ino-segment-button>Content</ino-segment-button>
`;
export const EnableChecked = () => html`
  <ino-segment-button checked>Content</ino-segment-button>
`;
export const Disabled = () => html`
  <ino-segment-button disabled>Content</ino-segment-button>
`;
export const Dense = () => html`
  <ino-segment-button dense>Content</ino-segment-button>
`;

/*
  <style>
  ino-segment-button.customizable-segment-btn {
      --ino-segment-button-color: ${text(
        '--ino-segment-button-color',
        '#c1c1c1',
        'Custom Properties'
      )};
      --ino-segment-button-checked-color: ${text(
        '--ino-segment-button-checked-color',
        '#0d10f3',
        'Custom Properties'
      )};
      --ino-segment-button-hover-color: ${text(
        '--ino-segment-button-hover-color',
        '#5d60f7',
        'Custom Properties'
      )};
      --ino-segment-button-disabled-color: ${text(
        '--ino-segment-button-disabled-color',
        '#777777',
        'Custom Properties'
      )};
      --ino-segment-button-hover-shadow: ${text(
        '--ino-segment-button-hover-shadow',
        '0 4px 8px 0 rgba(61, 64, 245, 0.3), 0 12px 28px 0 rgba(61, 214, 245, 0.14)',
        'Custom Properties'
      )};
      --ino-segment-button-checked-shadow: ${text(
        '--ino-segment-button-checked-shadow',
        '0 8px 16px 0 rgba(61, 64, 245, 0.3),0 16px 32px 0 rgba(61, 214, 245, 0.14)',
        'Custom Properties'
      )};
  }
</style>
*/
