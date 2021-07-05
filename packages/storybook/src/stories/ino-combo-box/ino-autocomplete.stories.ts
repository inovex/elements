import { Components } from '@inovex.de/elements';
import { useEffect } from '@storybook/client-api';
import { Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { defaultDecorator } from '../utils';

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
    defaultDecorator,
    (story) => {
      useEffect(() => {
        const eventHandler = function (e: any) {
          console.log(e);
          // alert(e.detail);
        };

        document.addEventListener('myEv', eventHandler);

        return () => {
          document.removeEventListener('myEv', eventHandler);
        };
      });

      return story();
    },
  ],
};

export const Playground: Story<Components.InoAutocomplete> = (args) => html`
  <ino-autocomplete style="margin: 50px">
    <ino-input slot="input" />
    <ino-list slot="list">
      <ino-list-item text="Item A" />
      <ino-list-item text="Item B" />
      <ino-list-item text="Item C" />
    </ino-list>
  </ino-autocomplete>
`;

Playground.args = {};
