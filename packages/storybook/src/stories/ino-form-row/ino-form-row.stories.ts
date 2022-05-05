import { Components } from '@inovex.de/elements';
import { useEffect } from '@storybook/client-api';
import { Meta } from '@storybook/web-components';
import { html } from 'lit-html';
import { TemplateGenerator } from '../template-generator';
import { decorateStoryWithClass } from '../utils';

import './ino-form-row.scss';

export default {
  title: 'Input/ino-form-row',
  component: 'ino-form-row',
  parameters: {
    actions: {
      handles: ['valueChange .customizable-form-row'],
    },
  },
  decorators: [
    story => decorateStoryWithClass(story),
    story => {
      useEffect(() => {
        const valueChangeHandler = function(e) {
          if (e.target.tagName.toLowerCase() !== 'ino-input') {
            return;
          }

          const input = e.target as HTMLInoInputElement;
          input.value = e.detail;
        };

        document.addEventListener('valueChange', valueChangeHandler);
        // == event block

        // unsubscribe function will be called by Storybook
        return () => {
          document.removeEventListener('valueChange', valueChangeHandler);
        };
      });
      return story();
    },
  ],
} as Meta;

const template = new TemplateGenerator<Components.InoFormRow>(
  'ino-button',
  args => html`
    <ino-form-row
      class="customizable-form-row"
      label="${args.label}"
      mandatory="${args.mandatory}"
    >
      <ino-input></ino-input>
    </ino-form-row>
  `
);

export const Playground = template.generatePlaygroundStory();

Playground.args = {
  label: 'Label',
  mandatory: false,
};
