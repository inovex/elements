import { Components } from '@inovex.de/elements';
import { useEffect } from '@storybook/client-api';
import { Story } from '@storybook/web-components';
import { html } from 'lit-html';

import ICONS from '../../../../elements/src/components/ino-icon/icons';

import { defaultDecorator, withIconControl } from '../utils';
import './ino-icon.scss';

const ICONS_WITHOUT_INTERNALS = ICONS.filter((icon) => !icon.startsWith('_'));


const findElementUpwards = function (currentEl, elTagName, elClassName) {
  if (currentEl.tagName.toLowerCase() !== elTagName) {
    if (currentEl.parentElement !== null) {
      return findElementUpwards(
        currentEl.parentElement,
        elTagName,
        elClassName
      );
    }
  } else {
    if (currentEl.classList.contains(elClassName)) {
      return currentEl;
    }
  }
};


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
    <ino-chip id="icon-${name}" label="${name}" fill="outline" icon-leading>
      <ino-icon slot="icon-leading" icon="${name}"></ino-icon>
    </ino-chip>
    <ino-tooltip
      for="icon-${name}"
      label="Click to copy ${name} to your clipboard"
      placement="top"
      trigger="hover focus"
    />
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
    defaultDecorator,
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
              .filter((chip) => !chip.id.includes(value))
              .forEach((chip) => (chip.colorScheme = 'light'));

            // Show matching icons
            chips
              .filter((chip) => chip.id.includes(value))
              .forEach((chip) => (chip.colorScheme = 'primary'));
          }

          input.value = value;
        };

        const chipClickHandler = function (e) {
          const inoChip: HTMLInoChipElement | null = findElementUpwards(
            e.target,
            'ino-chip',
            'hydrated'
          );

          if (!inoChip) {
            return;
          }

          copyToClipboard(inoChip.label);
        };

        document.addEventListener('click', chipClickHandler);
        document.addEventListener('valueChange', searchIconHandler);

        return () => {
          document.removeEventListener('valueChange', searchIconHandler);
          document.removeEventListener('click', chipClickHandler);
        };
      });

      return story();
    },
  ],
};

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
      <ino-input class="icon-search-input" icon-leading placeholder="Find icon">
        <ino-icon slot="icon-leading" icon="search"></ino-icon>
      </ino-input>
      <ino-chip-set class="icon-collection"> ${iconChips}</ino-chip-set>
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
