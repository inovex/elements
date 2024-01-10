import { Meta } from '@storybook/web-components';
import { Components } from '@inovex.de/elements';
import { html } from 'lit-html';
import { useEffect } from '@storybook/preview-api';
import Story from '../StoryWrapper';
import lightningImg from '../../assets/images/lightning.jpg';
import mountainsImg from '../../assets/images/mountains.jpg';
import nidarosImg from '../../assets/images/nidaros.jpg';

import './ino-dialog.scss';

type InoDialogExtended = Components.InoDialog & {
  dataDialogId: string;
  buttonText: string;
};

const onSlideChanged = (ev: CustomEvent<string>) => {
  const carouselEl = ev.target as HTMLInoCarouselElement;
  carouselEl.value = ev.detail;
};

const Playground = {
  title: 'Structure/<ino-dialog>',
  component: 'ino-dialog',
  decorators: [
    (story) => {
      useEffect(() => {
        // Open
        const handleOpen = (e) => {
          const dialog = document.getElementById(
            e.target.parentElement.getAttribute('data-dialog-id'),
          ) as HTMLInoDialogElement;
          dialog.open = true;
        };

        const btns = document.querySelectorAll('.open-dialog-btn');
        btns.forEach((btn) => btn.addEventListener('click', handleOpen));

        // Close
        const dialogs = document.querySelectorAll('ino-dialog');
        const handleClose = (e) => {
          e.target.open = false;
          if (e.target.id == 'demo-action-dialog') {
            const snackbar = document.createElement(
              'ino-snackbar',
            ) as HTMLInoSnackbarElement;
            snackbar.innerText = `Closed with action: ${e.detail}`;
            document.body.appendChild(snackbar);
          }
        };
        dialogs.forEach((dialog) =>
          dialog.addEventListener('close', handleClose),
        );
        dialogs.forEach((dialog) =>
          dialog.addEventListener('action', handleClose),
        );

        return () => {
          btns.forEach((btn) => btn.removeEventListener('click', handleOpen));
          dialogs.forEach((dialog) =>
            dialog.removeEventListener('close', handleClose),
          );
          dialogs.forEach((dialog) =>
            dialog.removeEventListener('action', handleClose),
          );
        };
      });

      return story();
    },
  ],
  render: (args) => html`
    <ino-button class="open-dialog-btn" data-dialog-id="${args.dataDialogId}"
      >${args.buttonText}</ino-button
    >
    <ino-dialog
      id="${args.dataDialogId}"
      open="${args.open}"
      fullwidth="${args.fullwidth}"
      dismissible="${args.dismissible}"
      attach-to="${args.attachTo}"
      header-text="${args.headerText}"
      body-text="${args.bodyText}"
      action-text="${args.actionText}"
      cancel-text="${args.cancelText}"
      icon="${args.icon}"
    >
    </ino-dialog>
  `,
  args: {
    attachTo: '',
    open: false,
    dialogRole: 'dialog',
    fullwidth: false,
    dismissible: true,
    headerText: 'Hi, I am a headline',
    bodyText:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, conset',
    actionText: 'submit',
    cancelText: 'cancel',
    icon: 'search',
    buttonText: 'Open Dialog',
    dataDialogId: 'ino-dialog-1',
  },
} as Meta<InoDialogExtended>;

/**
 * A Confirmation Dialog with Text requires an action to be taken in order for the dialog to be completed and closed.
 *
 * Contains a `headerText`, `bodyText`, `cancelText` and `actionText`.
 */
export const ConfirmationDialogWithText = Story({
  ...Playground,
  render: (args) => html`
    <ino-button class="open-dialog-btn" data-dialog-id="${args.dataDialogId}"
      >${args.buttonText}</ino-button
    >
    <ino-dialog
      id="${args.dataDialogId}"
      open="${args.open}"
      fullwidth="${args.fullwidth}"
      dismissible="${args.dismissible}"
      attach-to="${args.attachTo}"
      header-text="${args.headerText}"
      action-text="${args.actionText}"
      cancel-text="${args.cancelText}"
      body-text="${args.bodyText}"
    >
    </ino-dialog>
  `,
  args: {
    headerText: 'Do you really want to delete your account?',
    bodyText:
      'After deleting your account, you will no longer be able to access your saved items.',
    cancelText: 'Cancel',
    actionText: 'Delete account',
    dataDialogId: 'demo-conformation-with-text-dialog',
    buttonText: 'Open confirmation Dialog with text',
  }
})

/**
 * A Confirmation Dialog with Hero Icon requires an acknowledgement of the information from the user. User has to confirm with one klick on the primary button.
 *
 *
 * Contains a `ino-icon` (use `icon="iconID"` on the `ino-dialog` to select one of the given [ino-icons](https://elements.inovex.de/version/v8.0.0/?path=/docs/graphic-ino-icon--all-icons)), `headerText`, `bodyText`, `canceltext` and `actionText`.
 */
export const ConfirmationDialogWithIcon = Story({
  ...Playground,
  render: (args) => html`
    <ino-button class="open-dialog-btn" data-dialog-id="${args.dataDialogId}"
      >${args.buttonText}</ino-button
    >
    <ino-dialog
      id="${args.dataDialogId}"
      open="${args.open}"
      fullwidth="${args.fullwidth}"
      dismissible="${args.dismissible}"
      attach-to="${args.attachTo}"
      header-text="${args.headerText}"
      action-text="${args.actionText}"
      body-text="${args.bodyText}"
      icon="${args.icon}"
    >
    </ino-dialog>
  `,
  args: {
    headerText: 'Perfect! You almost made it...',
    bodyText:
      'A confirmation email is on the way. Please click on the link in the email to complete the registration and secure your discount code.',
    actionText: 'Confirm',
    dataDialogId: 'demo-conformation-with-icon-dialog',
    buttonText: 'Open confirmation Dialog with icon',
    icon: 'message',
  }
})

/**
 * By using `slot name="header"`, `slot name="body"` or `slot name="footer"` you can respectively replace the default `<header>`, `<section>` (body) or `<footer>` elements of the `ino-dialog` with your own custom content.
 *
 * By using the default slot you can completely replace the elements of the `ino-dialog` with your own markdown.
 */
export const UsingSlots = Story({
  ...Playground,
  render: (args) => html`   
    <ino-button class="open-dialog-btn" data-dialog-id="${args.dataDialogId}"
      >${args.buttonText}</ino-button
    >
    <ino-dialog
      id="${args.dataDialogId}"
      open="${args.open}"
      fullwidth="${args.fullwidth}"
      dismissible="${args.dismissible}"
      attach-to="${args.attachTo}"
      action-text="${args.actionText}"
      cancel-text="${args.cancelText}"
    >
      <header slot="header">
        <h3>Custom Header</h3>
        <ino-icon icon="info"></ino-icon>
      </header>
      <section slot="body">
        <ino-carousel
          class="customizable-carousel"
          value="0"
          autoplay="true"
          hide-buttons="true"
          infinite="true"
          intermission="2000"
          reverse="false"
          @valueChange="${onSlideChanged}"
        >
          <ino-carousel-slide
            src=${lightningImg}
            value="0"
          ></ino-carousel-slide>
          <ino-carousel-slide
            src=${mountainsImg}
            value="1"
          ></ino-carousel-slide>
          <ino-carousel-slide src=${nidarosImg} value="2"></ino-carousel-slide>
        </ino-carousel>
      </section>
      <footer slot="footer">
        <ino-button>Button 1</ino-button>
        <ino-button>Button 2</ino-button>
        <ino-button variant="outlined">Button 3</ino-button>
      </footer>
    </ino-dialog>
  `, 
  args: {
    buttonText: 'Open Dialog with slot',
    dataDialogId: 'demo-custom-content-dialog',
  }
})

export const FullWidth = Story({
  ...Playground,
  docsFromProperty: 'fullwidth',
  args: {
    fullwidth: true,
    buttonText: 'Open full width Dialog',
    dataDialogId: 'demo-fullwidth-dialog',
  }
})

export const Dismissible = Story({
  ...Playground,
  docsFromProperty: 'dismissible',
  args: {
    dismissible: true,
    buttonText: 'Open dismissible Dialog',
    dataDialogId: 'demo-dismissible-dialog',
  }
})

/**
 * Closing actions allow you to handle different button actions (like confirm, cancel, ...) using the `close` event listener on the dialog.
 * Close the dialog and see the snackbar afterwards.
 */
export const ClosingAction = Story({
  ...Playground,
  args: {
    dataDialogId: 'demo-action-dialog',
    buttonText: 'open closing action Dialog',
  }
})

export default Playground;