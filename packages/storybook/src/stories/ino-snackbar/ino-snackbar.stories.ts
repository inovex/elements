import { Components } from '@inovex.de/elements';
import { useEffect } from '@storybook/client-api';
import { Meta } from '@storybook/web-components';
import { html } from 'lit-html';
import { decorateStoryWithClass } from '../utils';
import './ino-snackbar.scss';
import { TemplateGenerator } from '../template-generator';

import inovexElementsLogo from '../../assets/images/elements.svg';

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

export const Types = template.generateStoryForProp('type', 'success', {
  id: 'snackbar-type',
  defaultSlot: 'User successfully updated!',
  actionText: 'Undo',
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

/**
 * To add a custom icon inside the `ino-snackbar` element, follow these steps:
 * 1. Inside the `ino-snackbar` element, insert an `img` or a similar element.
 * 2. Assign a `slot` attribute to the `img` element and set it to `"icon"`.
 * 3. Ensure that the custom icon has the desired size. In the example below, we set the width and height of the icon to 25px.
 *
 * Example usage of the `ino-snackbar` element with a custom icon:
 */
export const CustomIcon = (args: InoSnackbarExtended) => html`
  <ino-button class="snackbar-trigger" data-template-id="${args.id}-custom"
    >Show Custom Snackbar
  </ino-button>
  <template id="${args.id}-custom">
    <ino-snackbar
      id="${args.id}-custom"
      action-text="${args.actionText}"
      timeout="${args.timeout}"
      type="${args.type}"
      stay-visible-on-hover="${args.stayVisibleOnHover}"
    >
      <img
        slot="icon"
        src=${inovexElementsLogo}
        alt="Custom Icon"
        style="width: 25px; height: 25px;"
      />
      This snackbar uses a custom icon.
    </ino-snackbar>
  </template>
`;
