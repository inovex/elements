import { withActions } from '@storybook/addon-actions';
import addons from '@storybook/addons';
import CoreEvents from '@storybook/core-events';

import { boolean, text } from '@storybook/addon-knobs';

import withStencilReadme from '_local-storybookcore/with-stencil-readme';

import componentReadme from '_local-elements/src/components/ino-form-row/readme.md';
import './ino-form-row.scss';

// https://github.com/storybooks/storybook/issues/4337#issuecomment-428495664
function subscribeToComponentEvents() {
  // == event block
  const eventHandler = function (e) {
    const el = e.target;
    if (el.tagName.toLowerCase() !== 'ino-input') {
      return;
    }

    e.target.setAttribute('value', e.detail);
  };

  document.addEventListener('valueChange', eventHandler);
  // == event block

  // unsubscribe function will be called by Storybook
  return () => {
    document.removeEventListener('valueChange', eventHandler);
  };
}

export default {
  title: 'Input/<ino-form-row>',
  parameters: {
    actions: {
      handles: ['valueChange .customizable-form-row']
    }
  },
  decorators: [
    withStencilReadme(componentReadme),
    (story) => {
      addons.getChannel().emit(CoreEvents.REGISTER_SUBSCRIPTION, subscribeToComponentEvents);
      return story();
    },
  ],
};

export const DefaultUsage = () => /*html*/ `
    <div class="story-form-row">
      <div>
        <h4>Customizable Form Row</h4>
        <ino-form-row
          class="customizable-form-row"
          ino-label="${text('ino-label', 'inovex-elements')}"
          ino-mandatory="${boolean('ino-mandatory', true)}"
        >
          <ino-input></ino-input>
        </ino-form-row>
      </div>
    </div>
  `;

DefaultUsage.storyName = 'Default usage';
