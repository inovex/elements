import { boolean, text } from '@storybook/addon-knobs';

import withStencilReadme from '_local-storybookcore/with-stencil-readme';

import componentReadme from '_local-elements/src/components/ino-input-file/readme.md';
import './ino-input-file.scss';

// https://github.com/storybooks/storybook/issues/4337#issuecomment-428495664
function subscribeToComponentEvents() {
  // == event block
  const eventHandler = function (e) {
    const el = e.target;
    if (el.tagName.toLowerCase() !== 'ino-input-file') {
      return;
    }

    const fileNames = e.detail.files
      .map((f) => [f.name, f.type, f.size + ' bytes'].join(', '))
      .join('\n');
    alert(fileNames);
  };

  document.addEventListener('changeFile', eventHandler);
  // == event block

  // unsubscribe function will be called by Storybook
  return () => {
    document.removeEventListener('changeFile', eventHandler);
  };
}

export default {
  title: 'Input/<ino-input-file>',
  parameters: {
    actions: {
      handles: ['changeFile .customizable-input']
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
<div class="story-input customizable-input">
  <ino-input-file
    accept="${text('accept', '')}"
    autofocus="${boolean('autofocus', false)}"
    disabled="${boolean('disabled', false)}"
    multiple="${boolean('multiple', false)}"
    required="${boolean('required', false)}"
    ino-label="${text('ino-label', 'Select a file to upload')}"
    ino-label-selected="${text('ino-label-selected', 'ausgewählt')}">
  </ino-input-file>
</div>
`;

DefaultUsage.storyName = 'Default usage';
