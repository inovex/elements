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
        const openDialogHandler = function (e) {
          const el = e.target;

          if (el.id === 'open-dialog-btn') {
            const dialog = document.getElementById(
              'demo-dialog-1'
            ) as HTMLInoDialogElement;
            dialog.open = true;
          }
          if (el.id === 'close-dialog-btn') {
            const dialog = document.getElementById(
              'demo-dialog-1'
            ) as HTMLInoDialogElement;
            dialog.open = false;
          }
        };

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

        document.addEventListener('click', openDialogHandler);
        document.addEventListener('clickEl', openDialogHandler);

        return () => {
          document.removeEventListener('click', openDialogHandler);
          document.removeEventListener('clickEl', openDialogHandler);
          document.removeEventListener('checkedChange', checkedChangeHandler);
        };
      });

      return story();
    },
  ],
} as Meta;

export const Playground: Story<Components.InoDialog> = (args) => html`
  <ino-button id="open-dialog-btn">Open Dialog</ino-button>
  <ino-dialog id="demo-dialog-1" open="${args.open}">
    <div class="ino-dialog-header" slot="header">
      <div class="ino-dialog-title">
        <h5>Select your favourite characters:</h5>
      </div>
      <ino-icon-button icon="close" id="close-dialog-btn"></ino-icon-button>
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
    <div class="ino-dialog-footer" slot="footer">
      <ino-button
        icon="remove"
        id="close-dialog-btn"
        style="--button-color-primary: red; --button-color-primary-light: rgba(255, 0, 0, 0.7); --button-color-primary-dark: red"
        >Cancel
      </ino-button>
      <ino-button icon="mail" id="close-dialog-btn">Submit</ino-button>
    </div>
  </ino-dialog>
`;

Playground.args = {
  open: false,
};
