import { Components } from '@inovex.de/elements';
import { useEffect } from '@storybook/client-api';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { decorateStoryWithClass } from '../utils';
import './ino-snackbar.scss';

const sampleText = 'User successfully updated!';

export default {
  title: 'Notification/ino-snackbar',
  component: 'ino-snackbar',
  decorators: [
    (s) => decorateStoryWithClass(s, 'story-ino-snackbar'),
    (story) => {
      const btnClickHandler = (e) => {
        if (!e.target.classList.contains('snackbar-trigger')) {
          return;
        }
        const templates = Array.from(document.getElementsByTagName('template'));
        const templateWithId = templates.find(
          (template) => template.id === e.target.dataset.templateId
        );
        document.body.appendChild(templateWithId.content.cloneNode(true));
      };
      useEffect(() => {
        document.addEventListener('click', btnClickHandler);
        return () => document.removeEventListener('click', btnClickHandler);
      });
      return story();
    },
  ],
} as Meta;

export const Playground: Story<Components.InoSnackbar> = (args) => html`
  <ino-button class="snackbar-trigger" data-template-id="snackbar-default"
    >Show Snackbar</ino-button
  >
  <template id="snackbar-default">
    <ino-snackbar
      action-text="${args.actionText}"
      alignment="${args.alignment}"
      message="${args.message}"
      timeout="${args.timeout}"
      type="${args.type}"
    >
    </ino-snackbar>
  </template>
`;
Playground.args = {
  actionText: 'Anlegen',
  alignment: 'center',
  message: sampleText,
  timeout: -1,
  type: 'primary',
};
Playground.argTypes = {
  alignment: {
    control: {
      type: 'select',
    },
    options: ['left', 'top', 'center'],
  },
  type: {
    control: {
      type: 'select',
    },
    options: ['primary', 'warning', 'error'],
  },
};

export const Variants = () => html`
  <ino-button class="snackbar-trigger" data-template-id="snackbar-with-action"
    >Show Snackbar (With Action)</ino-button
  >
  <template id="snackbar-with-action">
    <ino-snackbar message="${sampleText}" action-text="Anlegen"></ino-snackbar>
  </template>

  <ino-button class="snackbar-trigger" data-template-id="snackbar-no-action"
    >Show Snackbar (No Action)</ino-button
  >
  <template id="snackbar-no-action">
    <ino-snackbar message="${sampleText}"></ino-snackbar>
  </template>

  <ino-button class="snackbar-trigger" data-template-id="snackbar-no-timeout"
    >Show Snackbar (Without timeout)</ino-button
  >
  <template id="snackbar-no-timeout">
    <ino-snackbar message="${sampleText}" timeout="-1"></ino-snackbar>
  </template>
`;

export const Types = () => html`
  <ino-button class="snackbar-trigger" data-template-id="snackbar-warning"
    >Show Snackbar (warning)</ino-button
  >
  <template id="snackbar-warning">
    <ino-snackbar message="${sampleText}" type="warning"></ino-snackbar>
  </template>

  <ino-button class="snackbar-trigger" data-template-id="snackbar-error"
    >Show Snackbar (error)</ino-button
  >
  <template id="snackbar-error">
    <ino-snackbar message="${sampleText}" type="error"></ino-snackbar>
  </template>
`;

export const Alignments = () => html`
  <ino-button class="snackbar-trigger" data-template-id="snackbar-left-align"
    >Left</ino-button
  >
  <template id="snackbar-left-align">
    <ino-snackbar
      message="${sampleText}"
      action-text="Anlegen"
      alignment="left"
    ></ino-snackbar>
  </template>

  <ino-button class="snackbar-trigger" data-template-id="snackbar-center-align"
    >Center</ino-button
  >
  <template id="snackbar-center-align">
    <ino-snackbar message="${sampleText}" action-text="Anlegen"></ino-snackbar>
  </template>

  <ino-button class="snackbar-trigger" data-template-id="snackbar-right-align"
    >Right</ino-button
  >
  <template id="snackbar-right-align">
    <ino-snackbar
      message="${sampleText}"
      action-text="Anlegen"
      alignment="right"
    ></ino-snackbar>
  </template>
`;

// TODO CSS Variable
/*
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
*/
