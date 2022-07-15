import { Components } from '@inovex.de/elements';
import { useEffect } from '@storybook/client-api';
import { Meta } from '@storybook/web-components';
import { TemplateGenerator } from '../template-generator';
import { html } from 'lit-html';
import { decorateStoryWithClass } from '../utils';
import {handleValueChange} from "../handler";

export default {
  title: 'Input/ino-radio-group',
  component: 'ino-radio-group',
  parameters: {
    actions: {
      handles: ['checkedChange ino-radio'],
    },
  },
  decorators: [
    story => decorateStoryWithClass(story),
  ],
  args: {
    value: 'opt-2',
    alignments: 'horizontal',
  },
} as Meta<Components.InoRadioGroup>;

const template = new TemplateGenerator<Components.InoRadioGroup>(
  'ino-radio-group',
  args => html`
    <ino-radio-group
      id="radio-grp"
      alignment="${args.alignment}"
      value="${args.value}"
      @valueChange="${handleValueChange}"
    >
      <ino-radio value="opt-1">Opt 1</ino-radio>
      <ino-radio value="opt-2">Opt 2</ino-radio>
      <ino-radio value="opt-3">Opt 3</ino-radio>
    </ino-radio-group>
  `
);
export const Playground = template.generatePlaygroundStory();

Playground.argTypes = {
  value: {
    control: {
      type: 'select',
    },
    options: ['opt-1', 'opt-2', 'opt-3'],
  },
};

export const VerticalAlignment = () => html`
  <ino-radio-group
    id="radio-grp"
    alignment="vertical"
    value="opt-2"
    @valueChange="${handleValueChange}"
  >
    <ino-radio value="opt-1">Opt 1</ino-radio>
    <ino-radio value="opt-2">Opt 2</ino-radio>
    <ino-radio value="opt-3">Opt 3</ino-radio>
  </ino-radio-group>
`;
