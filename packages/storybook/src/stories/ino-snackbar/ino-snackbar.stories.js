import { storiesOf } from '@storybook/html';
import { text, select } from '@storybook/addon-knobs';
import withStencilReadme from '_local-storybookcore/with-stencil-readme';
import componentReadme from '_local-elements/src/components/ino-snackbar/readme.md';
import './ino-snackbar.scss';
import CoreEvents from '@storybook/core-events';

import addons from '@storybook/addons';


function subscribeToComponentEvents() {
  // == event block
  const eventHandler = function(e) {

    const target = e.target;

    if (target.tagName !== 'INO-BUTTON') {
      return;
    }

    const templates = Array.from(document.getElementsByTagName('template'));
    const templateWithId = templates.find(template => template.id === target.id);

    document.body.appendChild(templateWithId.content.cloneNode(true));
  };

  document.addEventListener('click', eventHandler);
  // == event block

  // unsubscribe function will be called by Storybook
  return () => {
    document.removeEventListener('click', eventHandler);
  };
}

const sampleText = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.';

storiesOf('Notification|<ino-snackbar>', module)
  .addDecorator(withStencilReadme(componentReadme))
  .addDecorator(story => {
    addons
      .getChannel()
      .emit(CoreEvents.REGISTER_SUBSCRIPTION, subscribeToComponentEvents);
    return story();
  })
  .add('Default usage', () => /*html*/`
    <div class="story-message-box">
      <div class="flex-parent-center">
          <h4>Customizable Snackbar</h4>
          <ino-button id="snackbar-temp">Show Snackbar</ino-button>
          <template id="snackbar-temp">
          <style>
                ino-snackbar.customizable-snackbar {
                  --ino-snackbar-color: ${text('--ino-snackbar-color', '#777777', 'Custom Properties')};
                  --ino-snackbar-background-color: ${text('--ino-snackbar-background-color', '#ffffff', 'Custom Properties')};
                  --ino-snackbar-icon-color: ${text('--ino-snackbar-icon-color', '#3d40f5', 'Custom Properties')};
                }
            </style>
            <ino-snackbar
                id="custom-snackbar"
                class="customizable-snackbar"
                ino-message="${text('ino-message', sampleText)}"
                ino-action-text="${text('ino-action-text', 'Anlegen')}"
                ino-alignment="${select('ino-alignment', ['center', 'leading', 'trailing'], 'center')}" />
          </template>

        <h4>Variants</h4>
        <div class="snackbar-variants">
          <ino-button id="snackbar-with-action-temp">Show Snackbar (With Action)</ino-button>
          <template id="snackbar-with-action-temp">
              <ino-snackbar
                  ino-message="${sampleText}"
                  ino-action-text="Action"
                  ino-alignment="left" />
            </template>
          <ino-button id="snackbar-no-action-temp">Show Snackbar (No Action)</ino-button>
          <template id="snackbar-no-action-temp">
            <ino-snackbar
                ino-message="${sampleText}"
                ino-alignment="right" />
          </template>
        </div>
        <h4>Alignments</h4>
        <div class="snackbar-variants">
            <ino-button id="left-align">Left</ino-button>
            <template id="left-align">
              <ino-snackbar
                  ino-message="${sampleText}"
                  ino-action-text="Anlegen"
                  ino-alignment="left"
                  >
              </ino-snackbar>
            </template>
            <ino-button id="center-align">Center</ino-button>
            <template id="center-align">
              <ino-snackbar
                  ino-message="${sampleText}"
                  ino-action-text="Anlegen"
                  >
              </ino-snackbar>
            </template>
            <ino-button id="right-align">Right</ino-button>
            <template id="right-align">
              <ino-snackbar
                  ino-message="${sampleText}"
                  ino-action-text="Anlegen"
                  ino-alignment="right"
                  >
              </ino-snackbar>
            </template>
            </div>
        </div>
    </div>
  `);
