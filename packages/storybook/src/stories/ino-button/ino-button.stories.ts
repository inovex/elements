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
    fill: 'filled',
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
      fill="${args.fill}"
      disabled="${args.disabled}"
      dense="${args.dense}"
    >
      Label
    </ino-button>
  `
);

const templateLeadingIcon = new TemplateGenerator<Components.InoButton>(
  'ino-button',
  (args) => html`
    <ino-button
      fill="${args.fill}"
    >
      <ino-icon icon="info" slot="icon-leading"></ino-icon>
      Label
    </ino-button>
  `
);

const templateTrailingIcon = new TemplateGenerator<Components.InoButton>(
  'ino-button',
  (args) => html`
    <ino-button
      fill="${args.fill}"
    >
      <ino-icon icon="info" slot="icon-trailing"></ino-icon>
      Label
    </ino-button>
  `
);

export const Playground = template.generatePlaygroundStory();

export const Filled = template.generateStoryForProp('fill', 'filled')
export const Outlined = template.generateStoryForProp('fill', 'outlined')
export const Text = template.generateStoryForProp('fill', 'text')
export const Disabled = template.generateStoryForProp('disabled', true )
export const Dense = template.generateStoryForProp('dense', true )
export const LeadingIconFilled = templateLeadingIcon.generateStoryForProp('fill', 'filled')
export const TrailingIconFilled = templateTrailingIcon.generateStoryForProp('fill', 'filled')
export const LeadingIconOutlined = templateLeadingIcon.generateStoryForProp('fill', 'outlined')
export const TrailingIconOutlined = templateTrailingIcon.generateStoryForProp('fill', 'outlined')
export const LeadingIconText = templateLeadingIcon.generateStoryForProp('fill', 'text')
export const TrailingIconText = templateTrailingIcon.generateStoryForProp('fill', 'text')

Playground.argTypes = {
  fill: {
    control: {
      type: 'select',
    },
    options: ['filled', 'outlined', 'text'],
  },
  disabled: {
    options: [true, false],
  },
  dense: {
    options: [true, false],
  }
};

/*

export const Others = (): TemplateResult => html`
  <div class="story-button">
    <h4>Variations</h4>
    <div class="button-row">
      <ino-button fill="solid">Solid Primary</ino-button>
      <ino-button fill="outline">Outline Primary</ino-button>
      <ino-button fill="inverse">Inverse Primary</ino-button>
    </div>
    <div class="button-row">
      <ino-button fill="solid" color-scheme="secondary"
        >Solid Secondary
      </ino-button>
      <ino-button fill="outline" color-scheme="secondary"
        >Outline Secondary
      </ino-button>
      <ino-button fill="inverse" color-scheme="secondary"
        >Inverse Secondary
      </ino-button>
    </div>
    <div class="button-row">
      <ino-button fill="outline" color-scheme="grey">Outline Grey</ino-button>
      <div class="white-button">
        <ino-button fill="outline" color-scheme="white"
          >Outline White
        </ino-button>
      </div>
    </div>

    <h4>With icons</h4>
    <div class="button-row">
      <ino-button>
        <ino-icon icon="info" slot="icon-leading"></ino-icon>
        Button Icon left
      </ino-button>
      <ino-button>
        <ino-icon icon="info" slot="icon-trailing"></ino-icon>
        Button Icon right
      </ino-button>
    </div>
    <h4>States</h4>
    <div class="button-row">
      <ino-button disabled>Disabled</ino-button>
      <ino-button disabled fill="outline">Disabled outlined</ino-button>
      <ino-button edge-mirrored="true">With mirrored edge</ino-button>
      <ino-button dense="true">Dense</ino-button>
      <ino-button loading="true">Loading button</ino-button>
      <ino-button loading="true" fill="outline">Loading button</ino-button>
    </div>
  </div>
`;

export const Forms = () => html`
  <script>
    const form = querySelector('form');
    form.addEventListener('submit', (e) => e.preventDefault());
  </script>

  <div class="story-button">
    <h4>Form submit</h4>
    <form class="submit-form" onsubmit="return false;">
      <ino-button type="submit">Button to submit parent form</ino-button>
      <ino-button type="submit" disabled
        >Disabled button does not submit form
      </ino-button>
    </form>

    <h4>Form reset</h4>
    <form class="reset-form">
      <ino-input
        class="reset-input"
        placeholder="Input in reset form"
        value="Value"
      ></ino-input>
      <ino-button type="reset">Reset form values on the left</ino-button>
    </form>

    <h4>Button that submits external form with form attribute</h4>
    <form class="submit-form" id="form1" onsubmit="return false;">
      <ino-button type="submit" form="form1"
        >Button with form attribute
      </ino-button>
    </form>
  </div>
`;
*/