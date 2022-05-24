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
      icon="${args.icon}"
      type="${args.type}"
      autofocus="${args.autofocus}"
      color-scheme="${args.colorScheme}"
    >
    </ino-icon-button>`;
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
          icon='time'
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
`;

export const States = () => html`
  <div class="story-icon-button">
    <div class="flex-parent-center">
      <div class="flex-child">
        <h4>Activated (Managed)</h4>
        <ino-icon-button
          icon="time"  
          class="managed"
          color-scheme="primary"
          activated
        ></ino-icon-button>
      </div>

      <div class="flex-child">
        <h4>Activated (Managed, Filled)</h4>
        <ino-icon-button
          icon="time"  
          class="managed"
          color-scheme="primary"
          filled
          activated
        ></ino-icon-button>
      </div>

      <div class="flex-child">
        <h4>Disabled</h4>
        <ino-icon-button
          icon="time"
          color-scheme="primary"
          disabled
        ></ino-icon-button>
      </div>

      <div class="flex-child">
        <h4>Disabled (filled)</h4>
        <ino-icon-button
          icon="time"
          color-scheme="primary"
          disabled
          filled
        ></ino-icon-button>
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
          icon="time"  
          filled
          color-scheme="primary"
        ></ino-icon-button>
      </div>
      <div class="flex-child">
        <h4>CSS Variables</h4>
        <ino-icon-button
          icon="time"  
          style="
          --ino-icon-button-icon-color: white;
          --ino-icon-button-background-color: purple;
          --ino-icon-button-icon-active-color: white;
          --ino-icon-button-background-active-color: pink;
        "
        ></ino-icon-button>
      </div>
      <div class="flex-child">
        <h4>Managed + Changing colors</h4>
        <ino-icon-button
          icon="time"  
          class="managed"
          style="
          --ino-icon-button-icon-color: gray;
          --ino-icon-button-background-color: transparent;
          --ino-icon-button-icon-active-color: red;
          --ino-icon-button-background-active-color: red;
          "
          activated
          ></ino-icon-button>
      </div>
    </div>
  </div>
`;

export const CSSProperties = (args) => {
  return html`
    <style>
      .customizable-icon-button {
        --ino-icon-button-background-disabled-color: ${args.inoIconButtonBackgroundDisabledColor};
        --ino-icon-button-icon-disabled-color: ${args.inoIconButtonIconDisabledColor};
        --ino-icon-button-size: ${args.inoIconButtonSize};
        --ino-icon-button-icon-size: ${args.inoIconButtonIconSize};
        --ino-icon-button-icon-color: ${args.inoIconButtonIconColor};
        --ino-icon-button-background-color: ${args.inoIconButtonBackgroundColor};
        --ino-icon-button-icon-active-color: ${args.inoIconButtonIconActiveColor};
        --ino-icon-button-background-active-color: ${args.inoIconButtonBackgroundActiveColor};
      }
    </style>
    <ino-icon-button
      class="customizable-icon-button"
      disabled="${args.disabled}"
      filled="${args.filled}"
      color-scheme="primary"
      activated="${args.activated}"
      icon="time"
    >
    </ino-icon-button>
  `;
};
CSSProperties.args = {
  disabled: 'false',
  filled: 'false',
  activated: 'false',
  inoIconButtonBackgroundDisabledColor: '#00B9EB',
  inoIconButtonIconDisabledColor: '#D35D85',
  inoIconButtonSize: '48px',
  inoIconButtonIconSize: '24px',
  inoIconButtonIconColor: '#820F35',
  inoIconButtonBackgroundColor: 'transparent',
  inoIconButtonIconActiveColor: '#820F35',
  inoIconButtonBackgroundActiveColor: '#39DEE3',
};
CSSProperties.argTypes = {
  inoIconButtonBackgroundDisabledColor: { control: 'color' },
  inoIconButtonIconDisabledColor: { control: 'color' },
  inoIconButtonIconColor: { control: 'color' },
  inoIconButtonBackgroundColor: { control: 'color' },
  inoIconButtonIconActiveColor: { control: 'color' },
  inoIconButtonBackgroundActiveColor: { control: 'color' },
  autofocus: {
    table: {
      disable: true
    }
  },
  colorScheme: {
    table: {
      disable: true
    }
  },
  icon: {
    table: {
      disable: true
    }
  },
  type: {
    table: {
      disable: true
    }
  }
}

// import readme from '../../../../../elements/src/components/ino-icon-button/readme.md';
// import { renderWithMermaid } from '../../../core/with-stencil-readme';
// export const Documentation = () => renderWithMermaid(readme);
