import { boolean, text } from '@storybook/addon-knobs';

import componentReadme from '_local-elements/src/components/ino-checkbox/readme.md';
import withStencilReadme from '_local-storybookcore/with-stencil-readme';

import './ino-checkbox.scss';

// https://github.com/storybooks/storybook/issues/4337#issuecomment-428495664
function subscribeToComponentEvents() {
  // == event block
  const eventHandler = function (e) {
    const el = e.target;
    if (el.tagName.toLowerCase() !== 'ino-checkbox') {
      return;
    }

    el.setAttribute('checked', e.detail);

    if (el.getAttribute('indeterminate') === 'true') {
      el.setAttribute('indeterminate', 'false');
    }
  };

  document.addEventListener('checkedChange', eventHandler);
  // == event block

  // unsubscribe function will be called by Storybook
  return () => {
    document.removeEventListener('checkedChange', eventHandler);
  };
}

export default {
  title: 'Input/<ino-checkbox>',
  parameters: {
    actions: {
      handles: ['checkedChange .customizable-checkbox']
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
<div class="story-checkbox">
  <ino-checkbox
    class="customizable-checkbox"
    name="customizable-checkbox"
    value="placeholder-value"
    checked="${boolean('checked', false)}"
    disabled="${boolean('disabled', false)}"
    indeterminate="${boolean('indeterminate', false)}"
    ino-selection="${boolean('ino-selection', false)}"
  >
    ${text('<slot />', 'Customizable checkbox')}
  </ino-checkbox>
  <h4>Default</h4>
  <div class="story-checkbox-states">
    <ino-checkbox checked>Checked</ino-checkbox>
    <ino-checkbox>Unchecked</ino-checkbox>
    <ino-checkbox indeterminate>Indeterminated</ino-checkbox>
    <ino-checkbox disabled checked>Checked and Disabled</ino-checkbox>
    <ino-checkbox disabled>Unchecked and Disabled</ino-checkbox>
    <ino-checkbox disabled indeterminate>Indeterminated and Disabled</ino-checkbox>
  </div>

  <h4>Selection</h4>
  <div class="story-selection-states">
       <ino-checkbox ino-selection checked>Checked</ino-checkbox>
       <ino-checkbox ino-selection>Unchecked</ino-checkbox>
       <ino-checkbox checked ino-selection disabled>Checked and disabled</ino-checkbox>
       <ino-checkbox ino-selection disabled>Unchecked and disabled</ino-checkbox>
  </div>
</div>
`;

DefaultUsage.storyName = 'Default usage';
