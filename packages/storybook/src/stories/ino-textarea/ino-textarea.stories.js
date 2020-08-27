import { boolean, number, text } from '@storybook/addon-knobs';

import withStencilReadme from '_local-storybookcore/with-stencil-readme';

import componentReadme from '_local-elements/src/components/ino-textarea/readme.md';
import './ino-textarea.scss';

// https://github.com/storybooks/storybook/issues/4337#issuecomment-428495664
function subscribeToComponentEvents() {
  // == event block
  const eventHandler = function (e) {
    const el = e.target;
    if (el.tagName.toLowerCase() !== 'ino-textarea') {
      return;
    }

    el.setAttribute('value', e.detail);
  };

  document.addEventListener('valueChange', eventHandler);
  // == event block

  // unsubscribe function will be called by Storybook
  return () => {
    document.removeEventListener('valueChange', eventHandler);
  };
}

export default {
  title: 'Input/<ino-textarea>',
  parameters: {
    actions: {
      handles: ['input .customizable-textarea', 'valueChange .customizable-textarea']
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
<div class="story-textarea">
    <style>
      ino-textarea.customizable-textarea {
        --textarea-outline-color: ${text(
          '--textarea-outline-color',
          '#3d40f5',
          'Custom Properties'
        )};
        --textarea-caret-color: ${text('--textarea-caret-color', '#3d40f5', 'Custom Properties')};
        --textarea-label-color: ${text('--textarea-label-color', '#3d40f5', 'Custom Properties')};
      }
  </style>
  <ino-textarea class="customizable-textarea"
    cols="${number('cols', 60)}"
    rows="${number('rows', 5)}"
    placeholder="${text('placeholder', '')}"
    value="${text('value', '')}"
    ino-label="${text('ino-label', 'Customizable textarea')}"
    minlength="${number('minlength', 0)}"
    maxlength="${number('maxlength', 30)}"
    disabled="${boolean('disabled', false)}"
    required="${boolean('required', false)}"
    ino-show-label-hint="${boolean('ino-show-label-hint', false)}"
    autogrow="${boolean('autogrow', false)}">
  </ino-textarea>

  <h4>Labels</h4>
  <ino-textarea ino-label="Floating label" cols="30" rows="3"></ino-textarea>
  <ino-textarea ino-label="Floating label" value="With value" cols="30" rows="3"></ino-textarea>

  <h4>States</h4>
  <ino-textarea placeholder="Disabled" disabled cols="30" rows="3"></ino-textarea>
  <ino-textarea ino-label="Required" required ino-show-label-hint cols="30" rows="3"></ino-textarea>
  <ino-textarea ino-label="Optional" cols="30" ino-show-label-hint rows="3"></ino-textarea>
</div>
`;

DefaultUsage.storyName = 'Default usage';
