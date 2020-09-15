import { boolean, select, text } from '@storybook/addon-knobs';

import withStencilReadme from '_local-storybookcore/with-stencil-readme';

import componentReadme from '_local-elements/src/components/ino-icon/readme.md';
import './ino-icon.scss';

import ICONS from '_local-elements/src/components/ino-icon/icons';
import findElementUpwards from '../../core/helpers/findElementUpwards';

const ICONS_WITHOUT_INTERNALS = ICONS.filter((icon) => !icon.startsWith('_'));

// https://github.com/storybooks/storybook/issues/4337#issuecomment-428495664
function subscribeToComponentEvents() {
  // == event block
  const eventHandler = function (e) {
    const el = e.target;
    if (el.tagName.toLowerCase() !== 'ino-input') {
      return;
    }

    const value = e.detail;
    const chips = Array.from(document.getElementsByTagName('ino-chip'));

    chips
      .filter((chip) => !chip.getAttribute('ino-icon').includes(value))
      .forEach((chip) => (chip.style.display = 'none'));

    chips
      .filter((chip) => chip.getAttribute('ino-icon').includes(value))
      .forEach((chip) => (chip.style.display = 'block'));

    el.value = value;
  };

  const chipClickHandler = function (e) {
    const inoChip = findElementUpwards(e.target, 'ino-chip', 'hydrated');

    if (!inoChip) return;

    copyToClipboard(inoChip.getAttribute('ino-label'));
  };

  const hideHandler = function (e) {
    document.body.removeChild(e.target);
  };

  document.addEventListener('click', chipClickHandler);
  document.addEventListener('valueChange', eventHandler);
  document.addEventListener('hideEl', hideHandler);

  // == event block

  // unsubscribe function will be called by Storybook
  return () => {
    document.removeEventListener('valueChange', eventHandler);
    document.removeEventListener('click', chipClickHandler);
    document.removeEventListener('hideEl', hideHandler);
  };
}

function copyToClipboard(text) {
  function setData(e) {
    e.preventDefault();
    e.clipboardData.setData('text/plain', text);
    document.removeEventListener('copy', setData);
  }
  document.addEventListener('copy', setData);

  const snackbar = document.createElement('ino-snackbar');

  try {
    document.execCommand('copy');
    snackbar.setAttribute('ino-message', `Successfully copied "${text}" to your clipboard!`);
  } catch (err) {
    snackbar.setAttribute(
      'ino-message',
      `An error occurred while copying the id to your clipboard!`
    );
  } finally {
    document.body.appendChild(snackbar);
  }
}

const ICON_IDS = ICONS_WITHOUT_INTERNALS.sort().filter((name) => name.length >= 1);

const iconChips = ICON_IDS.map(
  (name) => /*html*/ `
             <div>
              <ino-chip
                id="icon-${name}"
                ino-label="${name}"
                ino-icon="${name}"
                ino-fill="outline"
               >
               </ino-chip>
               <ino-tooltip ino-for="icon-${name}" ino-label="Click to copy ${name} to your clipboard" ino-placement="top" ino-trigger="hover focus" />
               </div>
            `
)
  .join()
  .replace(/,/g, ''); // Remove commas

export default {
  title: 'Graphic/<ino-icon>',
  parameters: {
    actions: {
      handles: ['clickEl .customizable-icon', 'valueChange .customizable-input']
    }
  },
  decorators: [
    withStencilReadme(componentReadme),
    (story) => {
      subscribeToComponentEvents();
      return story();
    },
  ],
};

export const DefaultUsage = () => /*html*/ `
<div class="story-icon">
<style>
  .customizable-icon {
    --ino-icon-color-primary: ${text('--ino-icon-color-primary', '#3d40f5')};
  }
</style>
<div class="flex-parent-center">
  <div class="flex-child">
      <h4>Customizable Icon</h4>
      <div class="flex-icons">
        <ino-icon
          class="customizable-icon"
          ino-icon="${select('ino-icon', ICON_IDS, 'info')}"
          ino-clickable="${boolean('ino-clickable', false)}"
          svg-title="This is a custom title"
        >
        </ino-icon>
      </div>
</div>
<div class="flex-parent-center">
  <h4>Primary und Secondary Icons</h4>
  <div class="flex-icons">
        <ino-icon
            id="primary-icon"
            class="preview-icon"
            ino-icon="info"
            ino-color-secondary="false"
        >
        </ino-icon>
        <ino-tooltip
            ino-for="primary-icon"
            ino-trigger="hover"
            ino-label="I'm the default icon"
            ino-placement="left"
        ></ino-tooltip>
        <ino-icon
            id="secondary-icon"
            class="preview-icon"
            ino-icon="info"
            ino-color-secondary="true"
        >
        </ino-icon>
        <ino-tooltip
            ino-for="secondary-icon"
            ino-trigger="hover"
            ino-label="I'm the secondary icon (ino-color-secondary=true)"
            ino-placement="right"
        ></ino-tooltip>
      </div>
</div>
<div class="flex-parent-center">
  <h4 style="margin-bottom: 0">Different Icons</h4>
  <ino-input class="customizable-input" ino-icon-leading>
      <ino-icon slot="ino-icon-leading" ino-icon="search"></ino-icon>
  </ino-input>
  <ino-chip-set class="icon-collection">
    ${iconChips}
  </ino-chip-set>
</div>
</div>
</div>
`;
