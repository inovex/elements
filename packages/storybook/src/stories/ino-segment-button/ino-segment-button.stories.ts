import { Components } from '@inovex.de/elements';
import { Meta } from '@storybook/web-components';
import { html } from 'lit-html';
import { TemplateGenerator } from '../template-generator';
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
  args: {
    checked: false,
    dense: false,
    disabled: false,
    name: '',
    value: '',
    type: '',
  },
} as Meta<Components.InoSegmentButton>;

const checkedChangeHandler = (e: CustomEvent<boolean>) => (e.target as HTMLInoSegmentButtonElement).checked = e.detail;

const template = new TemplateGenerator<Components.InoSegmentButton>(
  'ino-segment-button',
  args => html`
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
`);

export const Playground = template.generatePlaygroundStory();

export const EnableChecked = template.generateStoryForProp('checked', true);

export const Disabled = template.generateStoryForProp('disabled', true);

export const Dense = template.generateStoryForProp('dense', true);
