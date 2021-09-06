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
      handles: ['optionSelected'],
    },
  },
  decorators: [
    (story) => decorateStoryWithClass(story),
    (story) => {
      useEffect(() => {
        const eventHandler = function (e: CustomEvent<string>) {
          showSnackbar(`"${e.detail}" was selected.`);
        };

        document.addEventListener('optionSelected', eventHandler);

        return () => {
          document.removeEventListener('optionSelected', eventHandler);
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
      <ino-input slot="input" />
      <ino-list slot="list">
        <ino-option value="value of Option A">Option A</ino-option>
        <ino-option value="value of Option B">Option B</ino-option>
        <ino-option value="value of Option C">Option C</ino-option>
      </ino-list>
    </ino-autocomplete>
  </div>
`;

Playground.args = {
  debounceTimeout: 300,
  noOptionsText: 'No option found',
};
