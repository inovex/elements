import { Meta } from '@storybook/web-components';
import { Components } from '@inovex.de/elements';
import { html } from 'lit-html';
import { useEffect } from '@storybook/preview-api';
import Story from '../StoryWrapper';
import './ino-snackbar.scss';

import inovexElementsLogo from '../../assets/images/elements.svg';

type InoSnackbarExtended = Components.InoSnackbar & {
  id: string;
  defaultSlot: string;
};

const InoSnackbarMeta = {
  title: 'Notification/ino-snackbar',
  component: 'ino-snackbar',
  parameters: {
    docs: {
      story: {
        height: '100px',
      },
    },
  },
  decorators: [
    (story) => {
      useEffect(() => {
        const handleOpen = (e) => {
          const button = e.target.closest('.snackbar-trigger');
          if (button) {
            const snackbarId = button.getAttribute('data-template-id');
            const snackbarWrapper = document.getElementById(snackbarId);
            if (snackbarWrapper) {
              snackbarWrapper.classList.remove('hidden');
            }
          }
        };

        const snackbarHideHandler = (e) => {
          const snackbarElement = e.target.closest('ino-snackbar');
          if (snackbarElement) {
            const snackbarWrapper = snackbarElement.parentElement;
            snackbarWrapper.classList.add('hidden');
          }
        };

        const btns = document.querySelectorAll('.snackbar-trigger');
        btns.forEach((btn) => btn.addEventListener('click', handleOpen));

        document.addEventListener('hideEl', snackbarHideHandler);

        return () => {
          btns.forEach((btn) => btn.removeEventListener('click', handleOpen));
          document.removeEventListener('hideEl', snackbarHideHandler);
        };
      });

      return story();
    },
  ],
  render: (args) => html`
    <ino-button class="snackbar-trigger" data-template-id="${args.id}">
      Show Snackbar
    </ino-button>
    <div class="hidden" id="${args.id}">
      <ino-snackbar
        id="${args.id}"
        action-text="${args.actionText}"
        timeout="${args.timeout}"
        type="${args.type}"
        stay-visible-on-hover="${args.stayVisibleOnHover}"
      >
        ${args.defaultSlot}
      </ino-snackbar>
    </div>
  `,
  argTypes: {
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
  },
  args: {
    type: 'info',
    actionText: 'Some Action',
    defaultSlot: 'This is a message',
    timeout: -1,
    id: 'snackbar-default',
    stayVisibleOnHover: false,
  },
} as Meta<InoSnackbarExtended>;

export default InoSnackbarMeta;

export const Default = Story({
  ...InoSnackbarMeta,
});

export const ActionText = Story({
  ...Default,
  docsFromProperty: 'actionText',
  args: {
    actionText: 'Show',
    id: 'snackbar-actionText',
    defaultSlot: 'You received a new message.',
  },
});

export const Type = Story({
  ...Default,
  docsFromProperty: 'type',
  args: {
    type: 'success',
    id: 'snackbar-type',
    defaultSlot: 'User successfully updated!',
    actionText: 'Undo',
  },
});

export const Timeout = Story({
  ...Default,
  docsFromProperty: 'timeout',
  args: {
    timeout: 5000,
    id: 'snackbar-timeout',
    defaultSlot: 'This snackbar will disappear in 5s',
  },
});

export const StayVisibleOnHover = Story({
  ...Default,
  docsFromProperty: 'stayVisibleOnHover',
  args: {
    stayVisibleOnHover: true,
    id: 'snackbar-stayVisibleOnHover',
    defaultSlot:
      'This snackbar stays visible on hover otherwise it will disappear in 5s',
  },
});

/**
 * To add a custom icon inside the `ino-snackbar` element, follow these steps:
 * 1. Inside the `ino-snackbar` element, insert an `ino-icon` or a similar element (e.g. `img`).
 * 2. Assign a `slot` attribute to the custom element and set it to `"icon-slot"`.
 *
 * Example usage of the `ino-snackbar` element with a custom ino-icon:
 */
export const CustomIcon = {
  ...Default,
  args: {
    id: 'snackbar-customIcon',
    actionText: 'Some Action',
    defaultSlot: html`
      <ino-icon slot="icon-slot" icon="star"></ino-icon>
      This snackbar uses a custom ino-icon.
    `,
  },
};
/*
 * Ensure that the custom element has the desired size. In the example below, we set the width and height of the img icon to 20px.
 */
export const CustomElements = {
  ...Default,
  args: {
    id: 'snackbar-customElements',
    actionText: 'Some Action',
    defaultSlot: html`
      <img
        slot="icon-slot"
        src=${inovexElementsLogo}
        alt="Custom Icon"
        style="width: 20px; height: 20px;"
      />
      This snackbar uses a custom img.
    `,
  },
};
