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
const horizontalAlignments: Components.InoSnackbar['horizontalAlignment'][] = [
  'left',
  'right',
  'center',
];
const verticalAlignments: Components.InoSnackbar['verticalAlignment'][] = [
  'top',
  'bottom',
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
      horizontal-alignment="${args.horizontalAlignment}"
      message="${args.message}"
      timeout="${args.timeout}"
      type="${args.type}"
      vertical-alignment="${args.verticalAlignment}"
    >
    </ino-snackbar>
  </template>
`;
Playground.args = {
  actionText: 'Anlegen',
  horizontalAlignment: 'right',
  message: sampleText,
  timeout: -1,
  type: 'info',
  verticalAlignment: 'top',
};

Playground.argTypes = {
  horizontalAlignment: {
    control: {
      type: 'select',
    },
    options: horizontalAlignments,
  },
  type: {
    control: {
      type: 'select',
    },
    options: ['info', 'warning', 'error'],
  },
  verticalAlignment: {
    control: {
      type: 'select',
    },
    options: verticalAlignments,
  },
};

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

export const Alignments = () =>
  verticalAlignments.map((vAlign) =>
    horizontalAlignments.map(
      (hAlign) =>
        html`
          <ino-button
            class="snackbar-trigger"
            data-template-id="snackbar-${vAlign}-${hAlign}"
            >${vAlign} ${hAlign}
          </ino-button>
          <template id="snackbar-${vAlign}-${hAlign}">
            <ino-snackbar
              id="snackbar-${vAlign}-${hAlign}"
              message="${sampleText}"
              action-text="Anlegen"
              horizontal-alignment="${hAlign}"
              vertical-alignment="${vAlign}"
            ></ino-snackbar>
          </template>
        `
    )
  );

// TODO CSS Variable
/*
ino-snackbar.customizable-snackbar {
  --ino-snackbar-warning-border-color: ${text(
    '--ino-snackbar-warning-border-color',
    '#ffde03',
    'Custom Properties'
  )};
  --ino-snackbar-error-border-color: ${text(
    '--ino-snackbar-error-border-color',
    '#eb003b',
    'Custom Properties'
  )};
}
*/
