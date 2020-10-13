import { number, select, text } from '@storybook/addon-knobs';
import withStencilReadme from '_local-storybookcore/with-stencil-readme';
import componentReadme from '_local-elements/src/components/ino-snackbar/readme.md';
import './ino-snackbar.scss';

function subscribeToComponentEvents() {
  // == event block
  const eventHandler = function (e) {
    const target = e.target;

    if (target.tagName !== 'INO-BUTTON') {
      return;
    }

    const templates = Array.from(document.getElementsByTagName('template'));
    const templateWithId = templates.find((template) => template.id === target.id);

    document.body.appendChild(templateWithId.content.cloneNode(true));
  };

  document.addEventListener('click', eventHandler);
  // == event block

  // unsubscribe function will be called by Storybook
  return () => {
    document.removeEventListener('click', eventHandler);
  };
}

const sampleText =
  'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.';

export default {
  title: 'Notification/<ino-snackbar>',

  decorators: [
    withStencilReadme(componentReadme),
    (story) => {
      subscribeToComponentEvents();
      return story();
    },
  ],
};

export const DefaultUsage = () => /*html*/ `
    <div class="story-message-box">
      <div class="flex-parent-center">
          <h4>Customizable Snackbar</h4>
          <style>
            ino-snackbar.customizable-snackbar {
              --ino-snackbar-warning-border-color: ${text(
                '--ino-snackbar-warning-border-color',
                '#ffde03',
                'Custom Properties'
              )};
              --ino-snackbar-error-border-color: ${text(
                '--ino-snackbar-error-border-color',
                '#eb003b',
                'Custom Properties'
              )};
            }
          </style>
          <ino-button id="snackbar-temp">Show Snackbar</ino-button>
          <template id="snackbar-temp">
            <ino-snackbar
                class="customizable-snackbar"
                id="custom-snackbar"
                ino-message="${text('ino-message', sampleText)}"
                ino-action-text="${text('ino-action-text', 'Anlegen')}"
                ino-timeout="${number('ino-timeout', 5000)}"
                ino-type="${select('ino-type', ['', 'error', 'warning'], '')}"
                ino-alignment="${select(
                  'ino-alignment',
                  ['center', 'leading', 'trailing'],
                  'center'
                )}" />
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
        <h4>Snackbar Types</h4>
        <div class="snackbar-variants">
          <ino-button id="snackbar--warning">Show Snackbar (warning)</ino-button>
          <template id="snackbar--warning">
            <ino-snackbar
                ino-message="${sampleText}"
                ino-action-text="Action"
                ino-type="warning"/>
          </template>
          <ino-button id="snackbar--error">Show Snackbar (error)</ino-button>
          <template id="snackbar--error">
            <ino-snackbar
                ino-message="${sampleText}"
                ino-action-text="Action"
                ino-type="error" />
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
  `;
