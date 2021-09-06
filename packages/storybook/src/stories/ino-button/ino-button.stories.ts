import { Components } from '@inovex.de/elements';
import { Meta, Story } from '@storybook/web-components';
import { html, TemplateResult } from 'lit-html';
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
} as Meta;

export const Playground: Story<Components.InoButton> = (
  args
) => html` <ino-button
  class="customizable-button"
  color-scheme="${args.colorScheme}"
  fill="${args.fill}"
  dense="${args.dense}"
  disabled="${args.disabled}"
  loading="${args.loading}"
  edge-mirrored="${args.edgeMirrored}"
>
  Label
</ino-button>`;

Playground.args = {
  colorScheme: 'primary',
  fill: 'solid',
  dense: false,
  disabled: false,
  loading: false,
  edgeMirrored: false,
};

Playground.argTypes = {
  colorScheme: {
    control: {
      type: 'select',
    },
    options: ['primary', 'secondary', 'grey', 'white'],
  },
  fill: {
    control: {
      type: 'select',
    },
    options: ['solid', 'outline', 'inverse'],
  },
};

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
