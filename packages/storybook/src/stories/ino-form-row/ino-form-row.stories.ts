import { Components } from '@inovex.de/elements';
import { useEffect } from '@storybook/client-api';
import { Meta } from '@storybook/web-components';
import { html } from 'lit-html';
import { TemplateGenerator } from '../template-generator';
import { decorateStoryWithClass } from '../utils';

import './ino-form-row.scss';
import { handleValueChange } from '../handler';

export default {
  title: 'Input/ino-form-row',
  component: 'ino-form-row',
  parameters: {
    actions: {
      handles: ['valueChange .customizable-form-row'],
    },
  },
  decorators: [(story) => decorateStoryWithClass(story)],
  args: {
    label: 'Label',
    mandatory: false,
  },
} as Meta<Components.InoFormRow>;

const template = new TemplateGenerator<Components.InoFormRow>(
  'ino-form-row',
  (args) => html`
    <ino-form-row
      class="customizable-form-row"
      label="${args.label}"
      mandatory="${args.mandatory}"
    >
      <ino-input @valueChange="${handleValueChange}"></ino-input>
    </ino-form-row>
  `
);

export const Playground = template.generatePlaygroundStory();
export const Mandatory = template.generateStoryForProp('mandatory', true);
