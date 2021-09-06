import { Components } from '@inovex.de/elements';
import { useEffect } from '@storybook/client-api';
import { Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { defaultDecorator } from '../utils';
import './ino-segment-group.scss';

const eventHandler = (e: Event) => {
  const el = e.target as HTMLElement;
  if (el.tagName.toLowerCase() !== 'ino-segment-button') {
    return;
  }
  const group = el.closest('ino-segment-group');
  group.setAttribute('value', el.getAttribute('value'));
};

export default {
  title: 'Buttons/ino-segment-group',
  component: 'ino-segment-group',
  decorators: [
    (story) => defaultDecorator(story, 'story-segment-group'),
    (story) => {
      useEffect(() => {
        document.addEventListener('checkedChange', eventHandler);
        return () =>
          document.removeEventListener('checkedChange', eventHandler);
      });
      return story();
    },
  ],
  parameters: {
    actions: {
      handles: ['checkedChange'],
    },
  },
};
export const Playground: Story<Components.InoSegmentGroup> = (args) => html`
  <ino-segment-group id="segment-grp" name="${args.name}" value="${args.value}">
    <ino-segment-button value="opt-1">Option 1</ino-segment-button>
    <ino-segment-button value="opt-2">Option 2</ino-segment-button>
    <ino-segment-button value="opt-3">Option 3</ino-segment-button>
    <ino-segment-button value="opt-4">Option 4</ino-segment-button>
  </ino-segment-group>
`;
Playground.args = {
  name: '',
  value: 'opt-2',
};
Playground.argTypes = {
  value: {
    control: {
      type: 'select',
    },
    options: ['opt-1', 'opt-2', 'opt-3', 'opt-4'],
  },
};

export const DenseGroupWithCheckedOption = () => html`
  <ino-segment-group value="3" id="dense-segment-grp">
    <ino-segment-button dense value="1">Option 1</ino-segment-button>
    <ino-segment-button dense value="2">Option 2</ino-segment-button>
    <ino-segment-button dense value="3">Option 3</ino-segment-button>
    <ino-segment-button dense value="4">Option 4</ino-segment-button>
  </ino-segment-group>
`;

export const GroupWithNoCheckedOption = () => html`
  <ino-segment-group id="segment-grp">
    <ino-segment-button value="1">Option 1</ino-segment-button>
    <ino-segment-button value="2">Option 2</ino-segment-button>
    <ino-segment-button value="3">Option 3</ino-segment-button>
    <ino-segment-button value="4">Option 4</ino-segment-button>
  </ino-segment-group>
`;

export const SingleButtonGroup = () => html`
  <ino-segment-group id="single-segment-grp">
    <ino-segment-button value="1">Option 1</ino-segment-button>
  </ino-segment-group>
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
