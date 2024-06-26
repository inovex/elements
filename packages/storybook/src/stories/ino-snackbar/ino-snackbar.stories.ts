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
    story => {
      useEffect(() => {
        const handleOpen = e => {
          const button = e.target.closest('.snackbar-trigger');
          if (button) {
            const snackbarId = button.getAttribute('data-template-id');
            const snackbar = document.getElementById(snackbarId);
            if (snackbar) {
              snackbar.setAttribute('open', 'true');
            }
          }
        };

        const handleClose = e => {
          const snackbar = e.target;
          if (snackbar) {
            snackbar.setAttribute('open', 'false');
          }
        };

        const btns = document.querySelectorAll('.snackbar-trigger');
        btns.forEach(btn => btn.addEventListener('click', handleOpen));

        const snackbarEls = document.querySelectorAll('ino-snackbar');
        snackbarEls.forEach(snackbar => snackbar.addEventListener('hideEl', handleClose));

        return () => {
          btns.forEach(btn => btn.removeEventListener('click', handleOpen));
          snackbarEls.forEach(snackbar => snackbar.removeEventListener('hideEl', handleClose));
        };
      });

      return story();
    },
  ],
  render: args => html`
    <ino-button class="snackbar-trigger" data-template-id="${args.id}"> Show Snackbar </ino-button>
    <ino-snackbar
      id="${args.id}"
      open="${args.open}"
      action-text="${args.actionText}"
      timeout="${args.timeout}"
      type="${args.type}"
      stay-visible-on-hover="${args.stayVisibleOnHover}"
      a11yLabels="
        ${args.a11yLabels}"
    >
      ${args.defaultSlot}
    </ino-snackbar>
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
    open: false,
    actionText: 'Some Action',
    defaultSlot: 'This is a message',
    timeout: -1,
    id: 'snackbar-default',
    stayVisibleOnHover: false,
    a11yLabels: {
      snackbarLabel: 'Information',
      closeLabel: 'Close Button',
    },
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
    timeout: 5000,
    defaultSlot: 'This snackbar stays visible on hover otherwise it will disappear in 5s',
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
      <img slot="icon-slot" src=${inovexElementsLogo} alt="Custom Icon" style="width: 20px; height: 20px;" />
      This snackbar uses a custom img.
    `,
  },
};
