import { Components } from '@inovex.de/elements';
import { useEffect } from '@storybook/client-api';
import { Meta } from '@storybook/web-components';
import { TemplateGenerator } from '../template-generator';
import { html } from 'lit-html';
import { decorateStoryWithClass } from '../utils';
import lightningImg from '../../assets/images/lightning.jpg';
import mountainsImg from '../../assets/images/mountains.jpg';
import nidarosImg from '../../assets/images/nidaros.jpg';

import './ino-dialog.scss';

export default {
  title: 'Structure/<ino-dialog>',
  component: 'ino-dialog',
  decorators: [
    (story) => decorateStoryWithClass(story, 'story-dialog'),
    (story) => {
      useEffect(() => {
        // Open
        const handleOpen = e => {
          const dialog = document.getElementById(e.target.parentElement.getAttribute("data-dialog-id")) as HTMLInoDialogElement;
          dialog.open = true;
        }

        const btns = document.querySelectorAll('.open-dialog-btn');
        btns.forEach(btn => btn.addEventListener('click', handleOpen));


        // Close
        const dialogs = document.querySelectorAll('ino-dialog');
        const handleClose = e => {
          e.target.open = false;
          if(e.target.id == 'demo-action-dialog') {
            const snackbar = document.createElement("ino-snackbar") as HTMLInoSnackbarElement;
            snackbar.innerText = `Closed with action: ${e.detail}`;
            document.body.appendChild(snackbar);
          }
        };
        dialogs.forEach(dialog => dialog.addEventListener('close', handleClose));

        return () => {
          btns.forEach(btn => btn.removeEventListener('click', handleOpen));
          dialogs.forEach(dialog => dialog.removeEventListener('close', handleClose));
        };
      });

      return story();
    },
  ],
  args: {
    attachTo: '.story-dialog',
    open: false,
    fullwidth: false,
    dismissible: true,
    headline: 'Hi, I am a headline',
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, conset',
    actiontext: 'submit',
    canceltext: 'discarge',
    icon: 'search',
  },
} as Meta<Components.InoDialog>;

type InoDialogExtended = Components.InoDialog & {
  dataDialogId: string;
  buttonText: string,
}

const template = new TemplateGenerator<InoDialogExtended>(
  'ino-dialog',
  args => html`
  <ino-button class="open-dialog-btn" data-dialog-id="${args.dataDialogId}">${args.buttonText}</ino-button>
  <ino-dialog id="${args.dataDialogId}"
    open="${args.open}"
    fullwidth="${args.fullwidth}"
    dismissible="${args.dismissible}"
    attach-to="${args.attachTo}"
    headline="${args.headline}"
    description="${args.description}"
    actiontext="${args.actiontext}"
    canceltext="${args.canceltext}"
    icon="${args.icon}"
  >
  </ino-dialog>
`);

export const Playground = template.generatePlaygroundStory();
Playground.args = {
  buttonText: 'Open Dialog',
}

const templateConfirmation = new TemplateGenerator<InoDialogExtended>(
  'ino-dialog',
  args => html`
  <ino-button class="open-dialog-btn" data-dialog-id="${args.dataDialogId}">${args.buttonText}</ino-button>
  <ino-dialog id="${args.dataDialogId}"
    open="${args.open}"
    fullwidth="${args.fullwidth}"
    dismissible="${args.dismissible}"
    attach-to="${args.attachTo}"
    headline="${args.headline}"
    actiontext="${args.actiontext}"
    canceltext="${args.canceltext}"
  >
  </ino-dialog>
`);

/**
 * A Confirmation Dialog requires an action to be taken in order for the dialog to be completed and closed. Contains a headline, cancel and primary action button.
 */
export const ConfirmationDialog = templateConfirmation.generatePlaygroundStory();
ConfirmationDialog.args = {
  headline: 'Discard draft?',
  canceltext: 'Cancel',
  actiontext: 'Discard',
  dataDialogId: 'demo-conformation-dialog',
  buttonText: ' Open confirmation Dialog'
};

const templateConfirmationWithText = new TemplateGenerator<InoDialogExtended>(
  'ino-dialog',
  args => html`
  <ino-button class="open-dialog-btn" data-dialog-id="${args.dataDialogId}">${args.buttonText}</ino-button>
  <ino-dialog id="${args.dataDialogId}"
    open="${args.open}"
    fullwidth="${args.fullwidth}"
    dismissible="${args.dismissible}"
    attach-to="${args.attachTo}"
    headline="${args.headline}"
    actiontext="${args.actiontext}"
    canceltext="${args.canceltext}"
    description="${args.description}"
  >
  </ino-dialog>
`);

/**
 * A Confirmation Dialog with Text requires an action to be taken in order for the dialog to be completed and closed. Contains a header, text, cancel and primary action button.
 */
export const ConfirmationDialogWithText = templateConfirmationWithText.generatePlaygroundStory();
ConfirmationDialogWithText.args = {
  headline: 'Do you really want to delete your account?',
  description: 'After deleting your account, you will no longer be able to access your saved items.',
  canceltext: 'Cancel',
  actiontext: 'Delete account',
  dataDialogId: 'demo-conformation-with-text-dialog',
  buttonText: 'Open confirmation Dialog with text'
};

const templateConfirmationWithIcon = new TemplateGenerator<InoDialogExtended>(
  'ino-dialog',
  args => html`
  <ino-button class="open-dialog-btn" data-dialog-id="${args.dataDialogId}">${args.buttonText}</ino-button>
  <ino-dialog id="${args.dataDialogId}"
    open="${args.open}"
    fullwidth="${args.fullwidth}"
    dismissible="${args.dismissible}"
    attach-to="${args.attachTo}"
    headline="${args.headline}"
    actiontext="${args.actiontext}"
    description="${args.description}"
    icon="${args.icon}"
  >
  </ino-dialog>
`);

/**
 * A Confirmation Dialog with Hero Icon requires an acknowledgement of the information from the user. User has to confirm with one klick on the primary button. Contains a hero icon, header, text, cancel and primary action button.
 */
export const ConfirmationDialogWithIcon = templateConfirmationWithIcon.generatePlaygroundStory();
ConfirmationDialogWithIcon.args = {
  headline: 'Perfect! You almost made it...',
  description: 'A confirmation email is on the way. Please click on the link in the email to complete the registration and secure your discount code.',
  actiontext: 'Confirm',
  dataDialogId: 'demo-conformation-with-icon-dialog',
  buttonText: 'Open confirmation Dialog with icon',
  icon: 'message',
};

const templateAdditionalBodyContent = new TemplateGenerator<InoDialogExtended>(
'ino-dialog',
args => html`
  <ino-button class="open-dialog-btn" data-dialog-id="${args.dataDialogId}">${args.buttonText}</ino-button>
  <ino-dialog id="${args.dataDialogId}"
    open="${args.open}"
    fullwidth="${args.fullwidth}"
    dismissible="${args.dismissible}"
    attach-to="${args.attachTo}"
    headline="${args.headline}"
    actiontext="${args.actiontext}"
    canceltext="${args.canceltext}"
    description="${args.description}"
  >
    <form slot="body">
      <ino-input class="custom-body-input" label="Email" required="true" helper-validation="true" helper="An email address is required"></ino-input>
      <ino-select label="Role" required="true" helper-validation="true" helper="A role needs to be assigned">
        <ino-option value="admin">Admin</ino-option>
        <ino-option value="admin">Read</ino-option>
        <ino-option value="admin">Write</ino-option>
        <ino-option value="admin">Maintain</ino-option>
      </ino-select>
      <ino-textarea class="custom-body-textarea" cols="60" rows="5" label="Message (optional)"></ino-textarea>
    </form>
  </ino-dialog>
`);

/**
 * Use `slot="body"` on the child-element of `ino-dialog` to add additional content between the description and the action buttons.
 */
export const additionalBodyContent = templateAdditionalBodyContent.generatePlaygroundStory();
additionalBodyContent.args = {
  headline: 'Invite users',
  description: 'Inviting users is the easiest way to get your team collaborating. Enter an email address and assign a role below.',
  actiontext: 'Send invite',
  canceltext: 'Cancel',
  dataDialogId: 'demo-additional-body-content-dialog',
  buttonText: 'Open Dialog with additional body content',
};

const templateCustomContent = new TemplateGenerator<InoDialogExtended>(
'ino-dialog',
args => html`
  <ino-button class="open-dialog-btn" data-dialog-id="${args.dataDialogId}">${args.buttonText}</ino-button>
  <ino-dialog id="${args.dataDialogId}"
    open="${args.open}"
    fullwidth="${args.fullwidth}"
    dismissible="${args.dismissible}"
    attach-to="${args.attachTo}"
    headline="${args.headline}"
    actiontext="${args.actiontext}"
    canceltext="${args.canceltext}"
    description="${args.description}"
  >
    <ino-carousel slot="content"
      class="customizable-carousel"
      value="0"
      autoplay="true"
      hide-buttons="true"
      infinite="true"
      intermission="2000"
      reverse="false"
      @valueChange="${onSlideChanged}"
    >
      <ino-carousel-slide src=${lightningImg} value="0"></ino-carousel-slide>
      <ino-carousel-slide src=${mountainsImg} value="1"></ino-carousel-slide>
      <ino-carousel-slide src=${nidarosImg} value="2"></ino-carousel-slide>
    </ino-carousel>
  </ino-dialog>
`);

const onSlideChanged = (ev: CustomEvent<string>) => {
  const carouselEl = ev.target as HTMLInoCarouselElement;
  carouselEl.value = ev.detail;
}

/**
 * Use `slot="content"` on the child-element of `ino-dialog` to remove the given dialog elements (`headline`, `description`,  `cancelButton` & `actionButton`) and instead display your own custom content.
 */
export const customContent = templateCustomContent.generatePlaygroundStory();
customContent.args = {
  dataDialogId: 'demo-custom-content-dialog',
  buttonText: 'Open Dialog with custom content',
};
  

export const FullWidth = template.generateStoryForProp('fullwidth', true);
FullWidth.args = {
  fullwidth: true,
  buttonText: 'Open full width Dialog',
  dataDialogId: 'demo-fullwidth-dialog',
}

export const Dismissible = template.generateStoryForProp('dismissible', true);
Dismissible.args = {
  buttonText: 'Open dismissible Dialog',
  dataDialogId: 'demo-dismissible-dialog',
}


/**
 * Closing actions allow you to handle different button actions (like confirm, cancel, ...) using the `close` event listener on the dialog.
 * Close the dialog and see the snackbar afterwards.
 */
export const ClosingAction = template.generatePlaygroundStory();
ClosingAction.args = {
  dataDialogId: 'demo-action-dialog',
  buttonText: 'open closing action Dialog'
};
