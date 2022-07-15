import { Components } from '@inovex.de/elements';
import { Meta } from '@storybook/web-components';
import { TemplateGenerator } from '../template-generator';
import { html } from 'lit-html';
import { decorateStoryWithClass } from '../utils';

import './ino-dialog.scss';

export default {
  title: 'Structure/<ino-dialog>',
  component: 'ino-dialog',
  decorators: [(story) => decorateStoryWithClass(story, 'story-dialog')],
  args: {
    attachTo: '.story-dialog',
    open: false,
    fullwidth: false,
    dismissible: false,
  },
} as Meta<Components.InoDialog>;

type InoDialogExtended = Components.InoDialog & {
  dataDialogId: string;
};

const template = new TemplateGenerator<InoDialogExtended>(
  'ino-dialog',
  (args) => html`
    <ino-button
      class="open-dialog-btn"
      data-dialog-id="${args.dataDialogId}"
      @click="${openDialog}"
    >
      Open Dialog
    </ino-button>
    <ino-dialog
      id="${args.dataDialogId}"
      open="${args.open}"
      fullwidth="${args.fullwidth}"
      dismissible="${args.dismissible}"
      attach-to="${args.attachTo}"
      @close="${handleDialogClose}"
    >
      <div class="ino-dialog-header">
        <div class="ino-dialog-title">
          <h3>Select your favourite characters</h3>
        </div>
        <ino-icon-button
          icon="close"
          data-ino-dialog-action="close"
        ></ino-icon-button>
      </div>
      <div class="ino-dialog-content">
        <ino-segment-group value="2" id="dense-segment-grp">
          <ino-segment-button
            dense
            value="1"
            @checkedChange="${checkedChangeHandler}"
          >
            Morty
          </ino-segment-button>
          <ino-segment-button
            dense
            value="2"
            @checkedChange="${checkedChangeHandler}"
          >
            Pickle Rick
          </ino-segment-button>
          <ino-segment-button
            dense
            value="3"
            @checkedChange="${checkedChangeHandler}"
          >
            Squanchy
          </ino-segment-button>
          <ino-segment-button
            dense
            value="4"
            @checkedChange="${checkedChangeHandler}"
          >
            Beth
          </ino-segment-button>
          <ino-segment-button
            dense
            value="5"
            @checkedChange="${checkedChangeHandler}"
          >
            Jerry
          </ino-segment-button>
          <ino-segment-button
            dense
            value="6"
            @checkedChange="${checkedChangeHandler}"
          >
            Summer
          </ino-segment-button>
        </ino-segment-group>
      </div>
      <div class="ino-dialog-footer">
        <ino-button
          icon="remove"
          data-ino-dialog-action="cancel"
          fill="outline"
          color-scheme="secondary"
        >
          Cancel
        </ino-button>
        <ino-button icon="mail" data-ino-dialog-action="submit">
          Submit
        </ino-button>
      </div>
    </ino-dialog>
  `
);

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

function openDialog(e: PointerEvent) {
  const dialog = document.getElementById(
    (e.target as HTMLElement).parentElement.getAttribute('data-dialog-id')
  ) as HTMLInoDialogElement;

  dialog.open = true;
}

function handleDialogClose(e: CustomEvent<void>) {
  const dialogEl = e.target as HTMLInoDialogElement;
  dialogEl.open = false;
  const snackbar = document.createElement(
    'ino-snackbar'
  ) as HTMLInoSnackbarElement;
  snackbar.innerText = `Closed with action: ${e.detail}`;
  document.body.appendChild(snackbar);
}

function checkedChangeHandler(e: CustomEvent) {
  const segmentButton = e.target as HTMLInoSegmentButtonElement;
  const group: HTMLInoSegmentGroupElement = segmentButton.closest(
    'ino-segment-group'
  );
  group.value = segmentButton.value;
}
