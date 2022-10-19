import { Components } from '@inovex.de/elements';
import { useEffect } from '@storybook/client-api';
import { Meta } from '@storybook/web-components';
import { html } from 'lit-html';
import { TemplateGenerator } from '../template-generator';

import ICONS from '../../../../elements/src/components/ino-icon/icons';

import { decorateStoryWithClass, withIconControl } from '../utils';
import './ino-icon.scss';

const ICONS_WITHOUT_INTERNALS = ICONS.filter(
  (icon) => !icon.startsWith('_')
).concat([
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
      snackbar.innerText = `Successfully copied "${text}" to your clipboard!`;
    })
    .catch(() => {
      snackbar.innerText = `An error occurred while copying the id to your clipboard!`;
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
      value="${name}"
      @chipClicked="${(ev) => copyToClipboard(ev.detail)}"
    >
      <ino-icon class="chip-icon" slot="icon-leading" icon="${name}"></ino-icon>
      ${name}
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

          // Hide not matching icons
          chips
            .filter((chip) => !chip.value.includes(value.toLowerCase()))
            .map((chip) => (chip.style.visibility = 'hidden'));

          // Show matching icons
          chips
            .filter((chip) => chip.value.includes(value.toLowerCase()))
            .map((chip) => (chip.style.visibility = 'visible'));

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
  args: {
    clickable: true,
    colorSecondary: false,
    icon: 'info',
    svgTitle: 'svg-Title',
    src: 'scr-url',
  },
} as Meta;

const template = new TemplateGenerator<Components.InoIcon>(
  'ino-icon',
  (args) => html`
    <ino-icon
      class="customizable-icon"
      clickable="${args.clickable}"
      color-secondary="${args.colorSecondary}"
      icon="${args.icon}"
      svg-title="${args.svgTitle}"
      src="${args.src}"
      style="--icon-width: 30px; --icon-height: 30px;"
    >
    </ino-icon>
  `
);

export const Playground = template.generatePlaygroundStory();
withIconControl(Playground, 'icon', 'info');

const templateAllIcons = new TemplateGenerator<Components.InoIcon>(
  'ino-icon',
  () => html`
    <div class="story-icon">
      <div class="flex-parent-center">
        <ino-input class="icon-search-input" placeholder="Find icon">
          <ino-icon slot="icon-leading" icon="search"></ino-icon>
        </ino-input>
        <h6>Click on the icon to copy the id to your clipboard.</h6>
        <div class="icon-collection">${iconChips}</div>
      </div>
    </div>
  `
);
export const AllIcons = templateAllIcons.generatePlaygroundStory();

