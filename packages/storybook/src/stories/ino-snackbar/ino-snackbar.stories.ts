import { Components } from '@inovex.de/elements';
import { useEffect } from '@storybook/client-api';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { decorateStoryWithClass } from '../utils';
import './ino-snackbar.scss';

const sampleText = 'User successfully updated!';

const snackbarTypes: Components.InoSnackbar['type'][] = [
  'info',
  'success',
  'error',
];

export default {
  title: 'Notification/ino-snackbar',
  component: 'ino-snackbar',
  decorators: [
    (s) => decorateStoryWithClass(s, 'story-ino-snackbar'),
    (story) => {
      const btnClickHandler = (e) => {
        if (!e.target.classList.contains('snackbar-trigger')) {
          return;
        }

        const triggerId = e.target.dataset.templateId;

        const templates = Array.from(document.getElementsByTagName('template'));
        const templateWithId = templates.find(
          (template) => template.id === triggerId
        );

        const currentSnackbars = document.body.getElementsByTagName(
          'ino-snackbar'
        );

        const snackbarWithIdExists = Array.from(currentSnackbars).some(
          (snackbar) => snackbar.id === triggerId
        );

        if (snackbarWithIdExists) {
          return;
        }

        document.body.appendChild(templateWithId.content.cloneNode(true));
      };

      const snackbarHideHandler = (e) =>
        (e.target as HTMLInoSnackbarElement).remove();

      useEffect(() => {
        document.addEventListener('click', btnClickHandler);
        document.addEventListener('hideEl', snackbarHideHandler);
        return () => {
          document.removeEventListener('click', btnClickHandler);
          document.addEventListener('hideEl', snackbarHideHandler);
        };
      });
      return story();
    },
  ],
} as Meta;

export const Playground: Story<Components.InoSnackbar> = (args) => html`
  <ino-button class="snackbar-trigger" data-template-id="snackbar-default"
    >Show Snackbar
  </ino-button>
  <template id="snackbar-default">
    <ino-snackbar
      id="snackbar-default"
      action-text="${args.actionText}"
      message="${args.message}"
      timeout="${args.timeout}"
      type="${args.type}"
    >
    </ino-snackbar>
  </template>
`;
Playground.args = {
  actionText: 'Anlegen',
  message: sampleText,
  timeout: -1,
  type: 'info',
};

Playground.argTypes = {
  type: {
    control: {
      type: 'select',
    },
    options: ['info', 'success', 'error'],
  },
};

export const ActionText = () => html`
  <ino-button class="snackbar-trigger" data-template-id="snackbar-action-text"
    >Show Snackbar (with action text)
  </ino-button>
  <template id="snackbar-action-text">
    <ino-snackbar
      id="snackbar-action-text"
      message="${sampleText}"
      action-text="My action"
    ></ino-snackbar>
  </template>
  <ino-button
    class="snackbar-trigger"
    data-template-id="snackbar-wo-action-text"
    >Show Snackbar (without action text)
  </ino-button>
  <template id="snackbar-wo-action-text">
    <ino-snackbar
      id="snackbar-wo-action-text"
      message="${sampleText}"
    ></ino-snackbar>
  </template>
`;

export const Types = () =>
  snackbarTypes.map(
    (type) => html`
      <ino-button
        class="snackbar-trigger"
        data-template-id="snackbar-type-${type}"
        >Show Snackbar (${type})
      </ino-button>
      <template id="snackbar-type-${type}">
        <ino-snackbar
          id="snackbar-type-${type}"
          message="${sampleText}"
          action-text="Anlegen"
          type="${type}"
          timeout="-1"
        ></ino-snackbar>
      </template>
    `
  );

export const CustomPositions: Story<Components.InoSnackbar> = () => html`
  <ino-button
    class="snackbar-trigger"
    data-template-id="snackbar-position-top-left"
    >Show Snackbar (Top-Left)
  </ino-button>
  <template id="snackbar-position-top-left">
    <ino-snackbar
      id="snackbar-position-top-left"
      message="${sampleText}"
      style="--ino-snackbar-left: 0; --ino-snackbar-right: auto;"
    >
    </ino-snackbar>
  </template>
  <ino-button
    class="snackbar-trigger"
    data-template-id="snackbar-position-bottom-left"
    >Show Snackbar (Bottom-Left)
  </ino-button>
  <template id="snackbar-position-bottom-left">
    <ino-snackbar
      id="snackbar-position-bottom-left"
      message="${sampleText}"
      style="--ino-snackbar-left: 0; --ino-snackbar-bottom: 0; --ino-snackbar-top: auto; --ino-snackbar-right: auto;"
    >
    </ino-snackbar>
  </template>
  <ino-button
    class="snackbar-trigger"
    data-template-id="snackbar-position-bottom-right"
    >Show Snackbar (Bottom-Right)
  </ino-button>
  <template id="snackbar-position-bottom-right">
    <ino-snackbar
      id="snackbar-position-bottom-right"
      message="${sampleText}"
      style="--ino-snackbar-bottom: 0; --ino-snackbar-top: auto;"
    >
    </ino-snackbar>
  </template>
`;
