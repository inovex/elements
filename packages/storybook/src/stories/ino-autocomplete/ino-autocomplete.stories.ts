import { Components } from '@inovex.de/elements';
import { useEffect } from '@storybook/client-api';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { decorateStoryWithClass, showSnackbar } from '../utils';

import './ino-autocomplete.scss';

export default {
  title: 'Input/ino-autocomplete',
  component: 'ino-autocomplete',
  parameters: {
    actions: {
      handles: ['valueChange'],
    },
  },
  decorators: [
    (story) => decorateStoryWithClass(story),
    (story) => {
      useEffect(() => {
        const eventHandler = function (e: CustomEvent<string>) {
          showSnackbar(`"${e.detail}" was selected.`);
        };

        document.addEventListener('valueChange', eventHandler);

        return () => {
          document.removeEventListener('valueChange', eventHandler);
        };
      });

      return story();
    },
  ],
} as Meta;

export const Playground: Story<Components.InoAutocomplete> = (args) => html`
  <div style="height: 300px;">
    <ino-autocomplete
      style="margin: 50px"
      debounce-timeout="${args.debounceTimeout}"
      no-options-text="${args.noOptionsText}"
    >
      <ino-input slot="input"></ino-input>
      <ino-option value="value of Option A">Option A</ino-option>
      <ino-option value="value of Option B">Option B</ino-option>
      <ino-option value="value of Option C">Option C</ino-option>
      <ino-option value="value of Option D">Option D</ino-option>
      <ino-option value="value of Option E">Option E</ino-option>
      <ino-option value="value of Option F">Option F</ino-option>
      <ino-option value="value of Option G">Option G</ino-option>
      <ino-option value="value of Option H">Option H</ino-option>
    </ino-autocomplete>
  </div>
`;

Playground.args = {
  debounceTimeout: 300,
  noOptionsText: 'No option found',
};
