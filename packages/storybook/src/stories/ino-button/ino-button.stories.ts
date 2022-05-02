import { Components } from '@inovex.de/elements';
import { Meta, Story } from '@storybook/web-components';
import { html, TemplateResult } from 'lit-html';
import { TemplateGenerator } from '../template-generator';
import { decorateStoryWithClass } from '../utils';

import './ino-button.scss';

export default {
  title: 'Buttons/<ino-button>',
  component: 'ino-button',
  decorators: [(story) => decorateStoryWithClass(story, 'story-button')],
  parameters: {
    actions: {
      handles: [
        'click .customizable-button',
        'reset .reset-form',
        'submit .submit-form',
      ],
    },
  },
   // will be used as default props for all stories
   args: {
    variant: 'filled',
    dense: false,
    disabled: false,
    loading: false,
  },
} as Meta<Components.InoButton>;

// the basic template for the button component
const template = new TemplateGenerator<Components.InoButton>(
  'ino-button',
  (args) => html`
    <ino-button
      variant="${args.variant}"
      disabled="${args.disabled}"
      dense="${args.dense}"
      loading="${args.loading}"
    >
      Label
    </ino-button>
  `
);


export const Playground = template.generatePlaygroundStory();

export const Filled = template.generateStoryForProp('variant', 'filled')
export const Outlined = template.generateStoryForProp('variant', 'outlined')
export const Text = template.generateStoryForProp('variant', 'text')
export const Disabled = template.generateStoryForProp('disabled', true )
export const Dense = template.generateStoryForProp('dense', true )
export const Loading = template.generateStoryForProp('loading', true )

/*
 In order to include icons use the icon-leading˙ or ˙icon-trailing˙ slot
 */
export const LeadingAndTrailingIcon = () => html`
    <ino-button
      class="storybook-button"
    >
      <ino-icon icon="info" slot="icon-leading"></ino-icon>
      Label
    </ino-button>

    <ino-button
      class="storybook-button"
    >
      <ino-icon icon="info" slot="icon-trailing"></ino-icon>
      Label
    </ino-button>
  `;
