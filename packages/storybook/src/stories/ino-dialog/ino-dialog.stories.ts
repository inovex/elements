import { Components } from '@inovex.de/elements';
import { useEffect } from '@storybook/client-api';
import { Meta, Story } from '@storybook/web-components';
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
          const dialog = document.getElementById(e.target.getAttribute("data-dialog-id")) as HTMLInoDialogElement;
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
            snackbar.message = `Closed with action: ${e.detail}`;
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
} as Meta;


const dialogContent = html`
  <div class="ino-dialog-header">
      <div class="ino-dialog-title">
        <h3>Select your favourite characters</h3>
      </div>
      <ino-icon-button icon="close" data-ino-dialog-action="close"></ino-icon-button>
    </div>
    <div class="ino-dialog-content">
      <ino-segment-group value="2" id="dense-segment-grp">
        <ino-segment-button dense value="1">Morty</ino-segment-button>
        <ino-segment-button dense value="2">Pickle Rick</ino-segment-button>
        <ino-segment-button dense value="3">Squanchy</ino-segment-button>
        <ino-segment-button dense value="4">Beth</ino-segment-button>
        <ino-segment-button dense value="5">Jerry</ino-segment-button>
        <ino-segment-button dense value="6">Summer</ino-segment-button>
      </ino-segment-group>
    </div>
    <div class="ino-dialog-footer">
      <ino-button
        icon="remove"
        data-ino-dialog-action="cancel"
        fill="outline"
        color-scheme="secondary"
        >Cancel
      </ino-button>
      <ino-button icon="mail" data-ino-dialog-action="submit">Submit</ino-button>
    </div>
`;

export const Playground: Story<Components.InoDialog> = (args) => html`
  <ino-button class="open-dialog-btn" data-dialog-id="demo-playground-dialog">Open Dialog</ino-button>
  <ino-dialog id="demo-playground-dialog"
    open="${args.open}"
    fullwidth="${args.fullwidth}"
    dismissible="${args.dismissible}"
    attach-to="${args.attachTo}"
  >
    ${dialogContent}
  </ino-dialog>
`;
Playground.args = {
  attachTo: '.story-dialog',
  open: false,
  fullwidth: false,
  dismissible: false
};

/**
 * A fullwidth dialog is a variant which has 100% width an is attached to the bottom of the page.
 * It scrolls up and defines a small  margin at top for the background scrim and escape for dialog close.
 * Use this type of dialog for large content (like for instance wizards or tables).
 */
export const FullWidth = () => html`
<ino-button class="open-dialog-btn" data-dialog-id="demo-fullwidth-dialog">Open Fullwidth dialog</ino-button>
<ino-dialog id="demo-fullwidth-dialog" fullwidth>
  ${dialogContent}
</ino-dialog>
`;

/**
 * A dismissible dialog is used for non-critical content and allows the user to close
 * the dialog on esc click and on clicking outsied of the dialog.
 */
 export const Dismissible = () => html`
 <ino-button class="open-dialog-btn" data-dialog-id="demo-dismissible-dialog">Open dismissible dialog</ino-button>
 <ino-dialog id="demo-dismissible-dialog" dismissible>
   ${dialogContent}
 </ino-dialog>
 `;


/**
 * Closing actions allow you to handle different button actions (like confirm, cancel, ...) using the `close` event listener on the dialog.
 * Close the dialog and see the snackbar afterwards.
 */
 export const ClosingAction = () => html`
 <ino-button class="open-dialog-btn" data-dialog-id="demo-action-dialog">Open dismissible dialog</ino-button>
 <ino-dialog id="demo-action-dialog" dismissible>
   ${dialogContent}
 </ino-dialog>
 `;