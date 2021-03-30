import { html } from 'lit-html';
import { useEffect } from '@storybook/client-api';
import { defaultDecorator } from '../utils';

const sampleText = 'User successfully updated!';

export default {
  title: 'Components (WIP)/ino-snackbar',
  component: 'ino-snackbar',
  decorators: [
    s => defaultDecorator(s, 'story-ino-snackbar'),
    story => {
      const btnClickHandler = e => {
        if (e.target.className != "snackbar-trigger") {
          return;
        }
        const templates = Array.from(document.getElementsByTagName('template'));
        const templateWithId = templates.find((template) => template.id === e.target.dataset.templateId);
        document.body.appendChild(templateWithId.content.cloneNode(true));
      };
      useEffect(() => {
        document.addEventListener('click', btnClickHandler);
        return () => document.removeEventListener('click', btnClickHandler);
      });
      return story();
    }]
};

export const Playground = args => html`
  <button class="snackbar-trigger" data-template-id="snackbar-default">Show Snackbar</button>
  <template id="snackbar-default">
    <ino-snackbar
      heading="${args.heading}"
      message="${args.message}"
      timeout="${args.timeout}"
      type="${args.type}"
    >
    </ino-snackbar>
  </template>
`;
Playground.args = {
  heading: 'Important Message',
  message: sampleText,
  timeout: -1,
  type: 'info'
}
Playground.argTypes = {
  type: {
    control: {
      type: 'select',
      options: ['info', 'success', 'error']
    }
  }
}

export const Variants = () => html`
  <button class="snackbar-trigger" data-template-id="snackbar-with-action">Show Snackbar (With Action)</button>
  <template id="snackbar-with-action">
    <ino-snackbar message="${sampleText}">
      <button slot="actions">Create</button>
    </ino-snackbar>
  </template>

  <button class="snackbar-trigger" data-template-id="snackbar-no-action">Show Snackbar (No Action)</button>
  <template id="snackbar-no-action">
    <ino-snackbar message="${sampleText}"></ino-snackbar>
  </template>

  <button class="snackbar-trigger" data-template-id="snackbar-no-timeout">Show Snackbar (Without timeout)</button>
  <template id="snackbar-no-timeout">
    <ino-snackbar message="${sampleText}" timeout="-1"></ino-snackbar>
  </template>

  <button class="snackbar-trigger" data-template-id="snackbar-with-heading">Show Snackbar (With heading and message)</button>
  <template id="snackbar-with-heading">
    <ino-snackbar heading="Additional heading" message="${sampleText}" timeout="-1"></ino-snackbar>
  </template>
`;

export const Types = () => html`
  <button class="snackbar-trigger" data-template-id="snackbar-success">Show Snackbar (success)</button>
  <template id="snackbar-success">
    <ino-snackbar message="${sampleText}" type="success"></ino-snackbar>
  </template>

  <button class="snackbar-trigger" data-template-id="snackbar-error">Show Snackbar (error)</button>
  <template id="snackbar-error">
    <ino-snackbar message="${sampleText}" type="error"></ino-snackbar>
  </template>
`;
