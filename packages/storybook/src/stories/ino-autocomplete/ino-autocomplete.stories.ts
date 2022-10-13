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
    story => decorateStoryWithClass(story),
    story => {
      useEffect(() => {
        const eventHandler = function(e: CustomEvent<string>) {
          showSnackbar(`"${e.detail}" was selected.`);
        };

        document.addEventListener('valueChange', eventHandler);
        console.log('Test!');

        return () => {
          document.removeEventListener('valueChange', eventHandler);
        };
      });

      return story();
    },
  ],
} as Meta;

const options = [];

for (let i = 0; i < 500; i++) {
  options.push(
    html`
      <ino-option value="value of Option ${i}">${i}</ino-option>
    `
  );
}

export const Playground: Story<Components.InoAutocomplete> = args => html`
  <div style="height: 300px;">
    <ino-autocomplete
      style="margin: 50px"
      no-options-text="${args.noOptionsText}"
    >
      <ino-input slot="input" helper="Helper text" helper-persistent></ino-input>
      ${options}
    </ino-autocomplete>
  </div>
`;

Playground.args = {
  debounceTimeout: 300,
  noOptionsText: 'No option found',
};
