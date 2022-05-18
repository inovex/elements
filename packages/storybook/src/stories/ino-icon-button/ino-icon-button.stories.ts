import { Meta } from '@storybook/web-components';
import { html } from 'lit-html';
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
} as Meta;

export const Playground = (args) => {
  return html`
    <ino-icon-button
      activated="${args.activated}"
      disabled="${args.disabled}"
      filled="${args.filled}"
      type="${args.type}"
      autofocus="${args.autofocus}"
      color-scheme="${args.colorScheme}"
    >
      <ino-icon slot="icon-leading" icon="${args.icon}" />
    </ino-icon-button>
  `;
};
Playground.args = {
  activated: false,
  disabled: false,
  filled: false,
  autofocus: false,
};

Playground.argTypes = {
  type: {
    type: 'select',
  },
  options: ['button', 'reset', 'submit'],
};

withIconControl(Playground, 'icon', 'add');
withColorScheme(Playground, 'colorScheme', 'primary');

export const Filled = () => html`
  <div class="story-icon-button">
    <div class="flex-parent-center">
      <div class="flex-child">
        <h4>Primary</h4>
        <ino-icon-button
          color-scheme="primary"
          filled
        >   
          <ino-icon slot='icon-leading' icon='time'></ino-icon>
        </ino-icon-button>
      </div>
      <div class="flex-child">
        <h4>Secondary</h4>
        <ino-icon-button
          color-scheme="secondary"
          filled
        >    
         <ino-icon slot='icon-leading' icon='time'></ino-icon>
        </ino-icon-button>
      </div>
      <div class="flex-child">
        <h4>Success</h4>
        <ino-icon-button
          color-scheme="success"
          filled
        >
          <ino-icon slot='icon-leading' icon='time'></ino-icon>
        </ino-icon-button>
      </div>
      <div class="flex-child">
        <h4>Warning</h4>
        <ino-icon-button
          color-scheme="warning"
          filled
        > 
         <ino-icon slot='icon-leading' icon='time'></ino-icon>
        </ino-icon-button>
      </div>
      <div class="flex-child">
        <h4>Error</h4>
        <ino-icon-button
          color-scheme="error"
          filled
        >
          <ino-icon slot='icon-leading' icon='time'></ino-icon>
        </ino-icon-button>
      </div>
    </div>
  </div>
`;

export const States = () => html`
  <div class="story-icon-button">
    <div class="flex-parent-center">
      <div class="flex-child">
        <h4>Activated (Managed)</h4>
        <ino-icon-button
          class="managed"
          color-scheme="primary"
          activated
        >
        <ino-icon slot='icon-leading' icon='time'></ino-icon>
      </ino-icon-button>
      </div>

      <div class="flex-child">
        <h4>Activated (Managed, Filled)</h4>
        <ino-icon-button
          class="managed"
          color-scheme="primary"
          filled
          activated
        >
        <ino-icon slot='icon-leading' icon='time'></ino-icon>
      </ino-icon-button>
      </div>
    </div>
  </div>
`;

export const Variations = () => html`
  <div class="story-icon-button">
    <div class="flex-parent-center">
      <div class="flex-child">
        <h4>Filled primary</h4>
        <ino-icon-button
          filled
          color-scheme="primary"
        >
        <ino-icon slot='icon-leading' icon='time'></ino-icon>
      </ino-icon-button>
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
        >
        <ino-icon slot='icon-leading' icon='time'></ino-icon>
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
          activated
        >
        <ino-icon slot='icon-leading' icon='time'></ino-icon>
      </ino-icon-button>
      </div>
    </div>
  </div>
`;



// import readme from '../../../../../elements/src/components/ino-icon-button/readme.md';
// import { renderWithMermaid } from '../../../core/with-stencil-readme';
// export const Documentation = () => renderWithMermaid(readme);
