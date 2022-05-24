import { Components } from '@inovex.de/elements';
import { useEffect } from '@storybook/client-api';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { TemplateGenerator } from '../template-generator';
import { decorateStoryWithClass } from '../utils';
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
    (story) => decorateStoryWithClass(story, 'story-segment-group'),
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
  argTypes: {
    value: {
      control: {
        type: 'select',
      },
      options: ['opt-1', 'opt-2', 'opt-3', 'opt-4'],
    },
  },
  args: {
    name: '',
    value: 'opt-2',
    dense: false,
  }
} as Meta<Components.InoSegmentGroup>;

type InoSegmentGroupExtended = Components.InoSegmentGroup & {
  dense: boolean;
}

const template = new TemplateGenerator<InoSegmentGroupExtended>(
  'ino-segment-group',
  args => html`
  <ino-segment-group id="segment-grp" name="${args.name}" value="${args.value}">
    <ino-segment-button dense="${(args.dense)}" value="opt-1">Option 1</ino-segment-button>
    <ino-segment-button dense="${(args.dense)}" value="opt-2">Option 2</ino-segment-button>
    <ino-segment-button dense="${(args.dense)}" value="opt-3">Option 3</ino-segment-button>
    <ino-segment-button dense="${(args.dense)}" value="opt-4">Option 4</ino-segment-button>
  </ino-segment-group>
`);
export const Playground = template.generatePlaygroundStory();

export const DenseGroupWithCheckedOption = template.generateStoryForProp('value', 'opt-3');
DenseGroupWithCheckedOption.args ={
  dense: true,
  value: 'opt-3',
}

export const GroupWithNoCheckedOption = template.generatePlaygroundStory();
GroupWithNoCheckedOption.args = {
  value: '',
}

const templateSingleButtonGroup = new TemplateGenerator<Components.InoSegmentGroup>(
  'ino-segment-group',
  args => html`
  <ino-segment-group id="single-segment-grp">
    <ino-segment-button value="1">Option 1</ino-segment-button>
  </ino-segment-group>
`);
export const SingleButtonGroup = templateSingleButtonGroup.generatePlaygroundStory();
