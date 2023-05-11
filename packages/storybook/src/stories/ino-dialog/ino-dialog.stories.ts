import { Components } from '@inovex.de/elements';
import { useEffect } from '@storybook/client-api';
import { Meta } from '@storybook/web-components';
import { TemplateGenerator } from '../template-generator';
import { html } from 'lit-html';
import { decorateStoryWithClass } from '../utils';

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

        const checkedChangeHandler = function (e) {
          if (e.target.tagName.toLowerCase() !== 'ino-segment-button') {
            return;
          }
          const segmentButton: HTMLInoSegmentButtonElement = e.target;
          const group: HTMLInoSegmentGroupElement = segmentButton.closest(
            'ino-segment-group'
          );
          group.value = segmentButton.value;
        };

        document.addEventListener('checkedChange', checkedChangeHandler);

        return () => {
          btns.forEach(btn => btn.removeEventListener('click', handleOpen));
          dialogs.forEach(dialog => dialog.removeEventListener('close', handleClose));
          document.removeEventListener('checkedChange', checkedChangeHandler);
        };
      });

      return story();
    },
  ],
  args: {
    attachTo: '.story-dialog',
    open: false,
    fullwidth: false,
    dismissible: false,
    headline: 'Hi, I am a headline',
    body: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, conset',
    submitText: 'submit',
    cancelText: 'discarge'
  },
} as Meta<Components.InoDialog>;

type InoDialogExtended = Components.InoDialog & {
  dataDialogId: string;
}

const template = new TemplateGenerator<InoDialogExtended>(
  'ino-dialog',
  args => html`
  <ino-button class="open-dialog-btn" data-dialog-id="${args.dataDialogId}">Open Dialog</ino-button>
  <ino-dialog id="${args.dataDialogId}"
    open="${args.open}"
    fullwidth="${args.fullwidth}"
    dismissible="${args.dismissible}"
    attach-to="${args.attachTo}"
    headline="${args.headline}"
    body="${args.body}"
    submittext="${args.submitText}"
    canceltext="${args.cancelText}"
  >

  </ino-dialog>
`);

export const Playground = template.generatePlaygroundStory();

export const FullWidth = template.generateStoryForProp('fullwidth', true);
export const Dismissible = template.generateStoryForProp('dismissible', true);

/**
 * Closing actions allow you to handle different button actions (like confirm, cancel, ...) using the `close` event listener on the dialog.
 * Close the dialog and see the snackbar afterwards.
 */
export const ClosingAction = template.generatePlaygroundStory();
ClosingAction.args = {
  dismissible: true,
  dataDialogId: 'demo-action-dialog',
};
