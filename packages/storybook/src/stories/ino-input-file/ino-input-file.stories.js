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
      handles: ['changeFile .customizable-input'],
    },
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
  <style>
    ino-input-file.customizable-input {
      --ino-input-file-box-height: ${text(
        '--ino-input-file-box-height',
        '300px',
        'Custom Properties'
      )};
      --ino-input-file-box-width: ${text(
        '--ino-input-file-box-width',
        '100%',
        'Custom Properties'
      )};
    }
  </style>
  <h4>Customizable Input</h4>
  <ino-input-file
    class="customizable-input"
    accept="${text('accept', '')}"
    autofocus="${boolean('autofocus', false)}"
    disabled="${boolean('disabled', false)}"
    multiple="${boolean('multiple', false)}"
    required="${boolean('required', false)}"
    ino-label="${text('ino-label', 'Select a file to upload')}"
    ino-label-selected="${text('ino-label-selected', 'ausgewählt')}"
    ino-drag-and-drop="${boolean('ino-drag-and-drop', false)}"
    ino-drag-and-drop-text="${text(
      'ino-drag-and-drop-text',
      'Drag your files here'
    )}"
    ino-drag-and-drop-secondary-text="${text(
      'ino-drag-and-drop-secondary-text',
      'or'
    )}"
    >
  </ino-input-file>
</div>
<div class="story-input customizable-input">
    <h4>Drag and Drop Window</h4>
    <ino-input-file
        multiple
        ino-drag-and-drop
    ></ino-input-file>
</div>
`;
