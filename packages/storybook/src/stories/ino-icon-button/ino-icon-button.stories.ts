import { Meta } from '@storybook/web-components';
import { Components } from '@inovex.de/elements';
import { html } from 'lit-html';
import { TemplateGenerator } from '../template-generator';
import {
  decorateStoryWithClass,
  withColorScheme,
  withIconControl,
} from '../utils';
import './ino-icon-button.scss';

export default {
  title: 'Buttons/ino-icon-button',
  component: 'ino-icon-button',
  decorators: [(story) => decorateStoryWithClass(story, 'story-icon-button')],
  parameters: {
    actions: {
      handles: ['click ino-icon-button'],
    },
  },
  argTypes: {
    type: {
      control: {
        type: 'select',
      },
      options: ['button', 'reset', 'submit'], 
    },
  },
  args: {
    activated: false,
    disabled: false,
    filled: false,
    autofocus: false,
  },
} as Meta;


type InoIconButtonExtended = Components.InoIconButton & {
  autofocus: string;
}

const template = new TemplateGenerator<InoIconButtonExtended>(
  'ino-icon-button',
  args => html`
  <ino-icon-button
      activated="${args.activated}"
      disabled="${args.disabled}"
      filled="${args.filled}"
      icon="${args.icon}"
      type="${args.type}"
      autofocus="${args.autofocus}"
      color-scheme="${args.colorScheme}"
    >
    </ino-icon-button>
`);

export const Playground = template.generatePlaygroundStory();
withIconControl(Playground, 'icon', 'add');
withColorScheme(Playground, 'colorScheme', 'primary');

const templateFilled = new TemplateGenerator<InoIconButtonExtended>(
  'ino-icon-button',
  args => html`
  <div class="story-icon-button">
    <div class="flex-parent-center">
      <div class="flex-child">
        <h4>Primary</h4>
        <ino-icon-button
          icon="time"
          color-scheme="primary"
          filled
        ></ino-icon-button>
      </div>
      <div class="flex-child">
        <h4>Secondary</h4>
        <ino-icon-button
          icon="time"
          color-scheme="secondary"
          filled
        ></ino-icon-button>
      </div>
      <div class="flex-child">
        <h4>Success</h4>
        <ino-icon-button
          icon="time"
          color-scheme="success"
          filled
        ></ino-icon-button>
      </div>
      <div class="flex-child">
        <h4>Warning</h4>
        <ino-icon-button
          icon="time"
          color-scheme="warning"
          filled
        ></ino-icon-button>
      </div>
      <div class="flex-child">
        <h4>Error</h4>
        <ino-icon-button
          icon="time"
          color-scheme="error"
          filled
        ></ino-icon-button>
      </div>
    </div>
  </div>
`);

export const Filled = templateFilled.generateStoryForProp('filled', true);

const templateStates = new TemplateGenerator<Components.InoIconButton>(
  'ino-icon-button',
  args => html`
  <div class="story-icon-button">
    <div class="flex-parent-center">
      <div class="flex-child">
        <h4>Activated (Managed)</h4>
        <ino-icon-button
          class="managed"
          icon="time"
          color-scheme="primary"
          activated
        ></ino-icon-button>
      </div>

      <div class="flex-child">
        <h4>Activated (Managed, Filled)</h4>
        <ino-icon-button
          class="managed"
          icon="time"
          color-scheme="primary"
          filled
          activated
        ></ino-icon-button>
      </div>
    </div>
  </div>
`);

export const States = templateStates.generateStoryForProp('activated', true);

const templateVariations = new TemplateGenerator<Components.InoIconButton>(
  'ino-icon-button',
  args => html`
  <div class="story-icon-button">
    <div class="flex-parent-center">
      <div class="flex-child">
        <h4>Filled primary</h4>
        <ino-icon-button
          filled
          color-scheme="primary"
          icon="time"
        ></ino-icon-button>
      </div>
      <div class="flex-child">
        <h4>CSS Variables</h4>
        <ino-icon-button
          style="
          --ino-icon-button-icon-color: white;
          --ino-icon-button-background-color: purple;
          --ino-icon-button-icon-active-color: white;
          --ino-icon-button-background-active-color: pink;
        "
          icon="time"
        >
        </ino-icon-button>
      </div>
      <div class="flex-child">
        <h4>Managed + Changing colors</h4>
        <ino-icon-button
          class="managed"
          style="
          --ino-icon-button-icon-color: gray;
          --ino-icon-button-background-color: transparent;
          --ino-icon-button-icon-active-color: red;
          --ino-icon-button-background-active-color: red;
        "
          icon="time"
          activated
        >
        </ino-icon-button>
      </div>
    </div>
  </div>
`);

export const Variations = templateVariations.generatePlaygroundStory();


