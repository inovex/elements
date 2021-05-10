import { number, select, text, boolean } from '@storybook/addon-knobs';
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
    const templateWithId = templates.find(
      (template) => template.id === `${target.id}-tmpl`
    );
    const snackbarInstanceWithId = document.querySelector(
      `ino-snackbar#${target.id}-instance`
    );
    if (!snackbarInstanceWithId) {
      document.body.appendChild(templateWithId.content.cloneNode(true));
    }
  };

  document.addEventListener('click', eventHandler);
  document.addEventListener('hideEl', (e) => {
    e.target.remove();
  });
  // == event block

  // unsubscribe function will be called by Storybook
  return () => {
    document.removeEventListener('click', eventHandler);
    document.removeEventListener('hideEl', (e) => {
      e.target.remove();
    });
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
        <ino-button id="customizable-snackbar">Show Snackbar</ino-button>
        <template id="customizable-snackbar-tmpl">
          <ino-snackbar
              id="customizable-snackbar-instance"
              ino-message="${text('ino-message', sampleText)}"
              ino-action-text="${text('ino-action-text', 'Anlegen')}"
              ino-timeout="${number('ino-timeout', 5000)}"
              ino-type="${select(
                'ino-type',
                ['primary', 'error', 'warning'],
                'primary'
              )}"
              ino-alignment="${select(
                'ino-alignment',
                ['center', 'left', 'right'],
                'center'
              )}"
              ino-stay-visible-on-hover="${boolean(
                'ino-stay-visible-on-hover',
                false
              )}"/>
        </template>

        <h4>Variants</h4>
        <div class="snackbar-variants">
          <ino-button id="snackbar-with-action">Show Snackbar (With Action)</ino-button>
          <template id="snackbar-with-action-tmpl">
              <ino-snackbar
                  id="snackbar-with-action-instance"
                  ino-message="${sampleText}"
                  ino-action-text="Action"
                  ino-alignment="left" />
            </template>
          <ino-button id="snackbar-no-action">Show Snackbar (No Action)</ino-button>
          <template id="snackbar-no-action-tmpl">
            <ino-snackbar
                id="snackbar-no-action-instance"
                class="snackbar-no-action-instance"
                ino-message="${sampleText}"
                ino-alignment="right" />
          </template>
        </div>
        <h4>Snackbar Types</h4>
        <div class="snackbar-variants">
          <ino-button id="snackbar-warning">Show Snackbar (warning)</ino-button>
          <template id="snackbar-warning-tmpl">
            <ino-snackbar
                id="snackbar-warning-instance"
                ino-message="${sampleText}"
                ino-action-text="Action"
                ino-type="warning"/>
          </template>
          <ino-button id="snackbar-error">Show Snackbar (error)</ino-button>
          <template id="snackbar-error-tmpl">
            <ino-snackbar
                id="snackbar-error-instance"
                ino-message="${sampleText}"
                ino-action-text="Action"
                ino-type="error" />
          </template>
        </div>
        <h4>Alignments</h4>
        <div class="snackbar-variants">
            <ino-button id="left-align">Left</ino-button>
            <template id="left-align-tmpl">
              <ino-snackbar
                  id="left-align-instance"
                  ino-message="${sampleText}"
                  ino-action-text="Anlegen"
                  ino-alignment="left"
                  >
              </ino-snackbar>
            </template>
            <ino-button id="center-align">Center</ino-button>
            <template id="center-align-tmpl">
              <ino-snackbar
                  id="center-align-instance"
                  ino-message="${sampleText}"
                  ino-action-text="Anlegen"
                  >
              </ino-snackbar>
            </template>
            <ino-button id="right-align">Right</ino-button>
            <template id="right-align-tmpl">
              <ino-snackbar
                  id="right-align-instance"
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
