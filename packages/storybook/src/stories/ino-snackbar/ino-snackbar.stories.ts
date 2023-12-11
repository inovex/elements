import { Components } from '@inovex.de/elements';
import { useEffect } from '@storybook/client-api';
import { Meta } from '@storybook/web-components';
import { html } from 'lit-html';
import { decorateStoryWithClass } from '../utils';
import './ino-snackbar.scss';
import { TemplateGenerator } from '../template-generator';

export default {
  title: 'Notification/ino-snackbar',
  component: 'ino-snackbar',
  decorators: [
    (s) => decorateStoryWithClass(s, 'story-ino-snackbar'),
    (story) => {
      const btnClickHandler = (e) => {
        if (!e.target.parentElement.classList.contains('snackbar-trigger')) {
          return;
        }

        const triggerId = e.target.parentElement.dataset.templateId;

        const templates = Array.from(document.getElementsByTagName('template'));
        const templateWithId = templates.find(
          (template) => template.id === triggerId,
        );

        const currentSnackbars =
          document.body.getElementsByTagName('ino-snackbar');

        const snackbarWithIdExists = Array.from(currentSnackbars).some(
          (snackbar) => snackbar.id === triggerId,
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
  args: {
    actionText: 'Some Action',
    defaultSlot: 'This is a message',
    timeout: -1,
    type: 'info',
    id: 'snackbar-default',
    stayVisibleOnHover: false,
  },
} as Meta<Components.InoSnackbar>;

type InoSnackbarExtended = Components.InoSnackbar & {
  id: string;
  defaultSlot: string;
};

const template = new TemplateGenerator<InoSnackbarExtended>(
  'ino-snackbar',
  (args) => html`
    <ino-button class="snackbar-trigger" data-template-id="${args.id}"
      >Show Snackbar
    </ino-button>
    <template id="${args.id}">
      <ino-snackbar
        id="${args.id}"
        action-text="${args.actionText}"
        timeout="${args.timeout}"
        type="${args.type}"
        stay-visible-on-hover="${args.stayVisibleOnHover}"
      >
        ${args.defaultSlot}
      </ino-snackbar>
    </template>
  `,
);

export const Playground = template.generatePlaygroundStory();
Playground.argTypes = {
  // hide custom attributes from table
  id: {
    table: {
      disable: true,
    },
  },
  defaultSlot: {
    table: {
      disable: true,
    },
  },
};

export const ActionText = template.generateStoryForProp('actionText', 'Show', {
  id: 'snackbar-actionText',
  defaultSlot: 'You received a new message.',
});

const templateTypes = new TemplateGenerator<InoSnackbarExtended>(
  'ino-snackbar',
  (args) => html`
    <div style="display: flex; gap: 10px">
      <ino-button class="snackbar-trigger" data-template-id="${args.id}-success"
        >Type: success
      </ino-button>
      <ino-button class="snackbar-trigger" data-template-id="${args.id}-info"
        >Type: info
      </ino-button>
      <ino-button class="snackbar-trigger" data-template-id="${args.id}-warning"
        >Type: warning
      </ino-button>
      <ino-button class="snackbar-trigger" data-template-id="${args.id}-error"
        >Type: error
      </ino-button>
    </div>
    <template id="${args.id}-success">
      <ino-snackbar
        id="${args.id}-success"
        action-text="Action: success"
        type="success"
      >
        I'm a success snackbar!
      </ino-snackbar>
    </template>
    <template id="${args.id}-info">
      <ino-snackbar
        id="${args.id}"
        action-text="Action: info"
        type="info"
      >
        I'm an info snackbar!
      </ino-snackbar>
    </template>
    <template id="${args.id}-warning">
      <ino-snackbar
        id="${args.id}"
        action-text="Action: warning"
        type="warning"
      >
        I'm a warning snackbar!
      </ino-snackbar>
    </template>
    <template id="${args.id}-error">
      <ino-snackbar
        id="${args.id}"
        action-text="Action: error"
        type="error"
      >
        I'm an error snackbar!
      </ino-snackbar>
    </template>
  `,
);

export const Types = templateTypes.generateStoryForProp('type', 'success', {
  id: 'snackbar-type',
});

export const Timeout = template.generateStoryForProp('timeout', 5000, {
  id: 'snackbar-timeout',
  defaultSlot: 'This snackbar will disappear in 5s',
});

export const StayVisibleOnHover = template.generateStoryForProp(
  'stayVisibleOnHover',
  true,
  {
    id: 'snackbar-stayVisibleOnHover',
    timeout: 5000,
    defaultSlot:
      'This snackbar stays visible on hover otherwise it will disappear in 5s',
  },
);
