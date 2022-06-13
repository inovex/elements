import { Components } from '@inovex.de/elements';
import { useEffect } from '@storybook/client-api';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';

import ICONS from '../../../../elements/src/components/ino-icon/icons';

import { decorateStoryWithClass, withIconControl } from '../utils';
import './ino-icon.scss';

const ICONS_WITHOUT_INTERNALS = ICONS.filter((icon) => !icon.startsWith('_')).concat([
  'status_zukuenftige',
  'status_abwesend',
  'status_offboarding_laufend',
]);

function copyToClipboard(text) {
  const snackbar: HTMLInoSnackbarElement = document.createElement(
    'ino-snackbar'
  );

  navigator.clipboard
    .writeText(text)
    .then(() => {
      snackbar.message = `Successfully copied "${text}" to your clipboard!`;
    })
    .catch(() => {
      snackbar.message = `An error occurred while copying the id to your clipboard!`;
    })
    .finally(() => {
      document.body.appendChild(snackbar);
    });
}

const ICON_IDS = ICONS_WITHOUT_INTERNALS.sort().filter(
  (name) => name.length >= 1
);

const iconChips = ICON_IDS.map(
  (name) => html`
    <ino-chip
      id="icon-${name}"
      label="${name}"
      fill="outline"
      color-scheme="default"
      value="${name}"
      @chipClicked="${(ev) => copyToClipboard(ev.detail)}"
    >
      <ino-icon class="chip-icon" slot="icon-leading" icon="${name}"></ino-icon>
    </ino-chip>
  `
);

export default {
  title: 'Graphic/ino-icon',
  component: 'ino-icon',
  parameters: {
    actions: {
      handles: [
        'clickEl .customizable-icon',
        'valueChange .customizable-input',
      ],
    },
  },
  decorators: [
    (story) => decorateStoryWithClass(story, 'story-icon'),
    (story) => {
      useEffect(() => {
        const searchIconHandler = function (e) {
          if (e.target.tagName.toLowerCase() !== 'ino-input') {
            return;
          }

          const input = e.target as HTMLInoInputElement;

          const value: string = e.detail;
          const chips: HTMLInoChipElement[] = Array.from(
            document.getElementsByTagName('ino-chip')
          );

          if (!value) {
            chips.forEach((chip) => (chip.colorScheme = 'default'));
          } else {
            // Hide not matching icons
            chips
              .filter((chip) => !chip.value.includes(value.toLowerCase()))
              .forEach((chip) => (chip.colorScheme = 'default'));

            // Show matching icons
            chips
              .filter((chip) => chip.value.includes(value.toLowerCase()))
              .forEach((chip) => (chip.colorScheme = 'primary'));
          }

          input.value = value;
        };

        document.addEventListener('valueChange', searchIconHandler);

        return () => {
          document.removeEventListener('valueChange', searchIconHandler);
        };
      });

      return story();
    },
  ],
} as Meta;

export const Playground: Story<Components.InoIcon> = (args) => html`
  <ino-icon
    class="customizable-icon"
    clickable="${args.clickable}"
    color-secondary="${args.colorSecondary}"
    icon="${args.icon}"
    svg-title="${args.svgTitle}"
    style="--icon-width: 30px; --icon-height: 30px;"
  >
  </ino-icon>
`;

Playground.args = {
  clickable: true,
  colorSecondary: false,
};

withIconControl(Playground, 'icon', 'info');

export const AllIcons = () => html`
  <div class="story-icon">
    <div class="flex-parent-center">
      <ino-input class="icon-search-input" placeholder="Find icon">
        <ino-icon slot="icon-leading" icon="search"></ino-icon>
      </ino-input>
      <h6>Click on the icon to copy the id to your clipboard.</h6>
      <div class="icon-collection">${iconChips}</div>
    </div>
  </div>
`;

export const Colors = () => html`
  <div
    class="flex-icons"
    style="--ino-icon-width: 30px; --ino-icon-height: 30px;"
  >
    <ino-icon
      id="primary-icon"
      class="preview-icon"
      icon="info"
      color-secondary="false"
    >
    </ino-icon>
    <ino-tooltip
      for="primary-icon"
      trigger="hover"
      label="I'm the default icon"
      placement="left"
    ></ino-tooltip>
    <ino-icon
      id="secondary-icon"
      class="preview-icon"
      icon="info"
      color-secondary="true"
    >
    </ino-icon>
    <ino-tooltip
      for="secondary-icon"
      trigger="hover"
      label="I'm the secondary icon (ino-color-secondary=true)"
      placement="right"
    ></ino-tooltip>
  </div>
`;
