import { Meta } from '@storybook/web-components';
import { Components } from '@inovex.de/elements';
import { html } from 'lit-html';
import { useEffect } from '@storybook/preview-api';
import { getIcons } from '../utils';
import Story from '../StoryWrapper';
import ICONS from './../../../../elements/src/components/ino-icon/icons';
import './ino-icon.scss';

const ICONS_WITHOUT_INTERNALS = ICONS.filter(
  (icon) => !icon.startsWith('_'),
).concat([
  'status_zukuenftige',
  'status_abwesend',
  'status_offboarding_laufend',
]);

function copyToClipboard(text) {
  const snackbar: HTMLInoSnackbarElement =
    document.createElement('ino-snackbar');

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
  (name) => name.length >= 1,
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
  `,
);

const InoIconMeta = {
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
    (story) => {
      useEffect(() => {
        const searchIconHandler = function (e) {
          if (e.target.tagName.toLowerCase() !== 'ino-input') {
            return;
          }

          const input = e.target as HTMLInoInputElement;

          const value: string = e.detail;
          const chips: HTMLInoChipElement[] = Array.from(
            document.getElementsByTagName('ino-chip'),
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
  render: (args) => html`
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
  `,
  argTypes: {
    icon: {
      control: {
        type: 'select',
      },
      options: getIcons(),
    },
  },
  args: {
    clickable: true,
    colorSecondary: false,
    icon: 'info',
    svgTitle: 'svg-Title',
    src: 'scr-url',
  },
} as Meta;

export default InoIconMeta;

export const Default = Story({
  ...InoIconMeta,
});

export const AllIcons = Story({
  ...Default,
  render: () => html`
    <div class="story-icon">
      <div class="flex-parent-center">
        <ino-input class="icon-search-input" placeholder="Find icon">
          <ino-icon slot="icon-leading" icon="search"></ino-icon>
        </ino-input>
        <h6>Click on the icon to copy the id to your clipboard.</h6>
        <div class="icon-collection">${iconChips}</div>
      </div>
    </div>
  `,
});
