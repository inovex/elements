import { Components } from '@inovex.de/elements';
import { Meta } from '@storybook/web-components';
import { html } from 'lit-html';
import { TemplateGenerator } from '../template-generator';
import { decorateStoryWithClass } from '../utils';
import './ino-button.scss';

export default {
  title: 'Buttons/<ino-button>',
  component: 'ino-button',
  decorators: [(story) => decorateStoryWithClass(story, 'story-button')],
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

export const Filled = template.generateStoryForProp('variant', 'filled');
export const Outlined = template.generateStoryForProp('variant', 'outlined');
export const Text = template.generateStoryForProp('variant', 'text');
export const Disabled = template.generateStoryForProp('disabled', true);
export const Dense = template.generateStoryForProp('dense', false);
export const Loading = template.generateStoryForProp('loading', true);

/*
 In order to include icons, use the `icon-leading` or `icon-trailing` slot
 */
export const LeadingAndTrailingIcon = () => html`
  <div class="container">
    <ino-button>
      <ino-icon icon="info" slot="icon-trailing"></ino-icon>
      Label
    </ino-button>
  </div>
`;
