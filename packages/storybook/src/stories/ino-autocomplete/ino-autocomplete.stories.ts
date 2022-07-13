import { Components, KeyValue } from '@inovex.de/elements';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { decorateStoryWithClass } from '../utils';

import './ino-autocomplete.scss';

export default {
  title: 'Input/ino-autocomplete',
  component: 'ino-autocomplete',
  parameters: {
    actions: {
      handles: ['valueChange'],
    },
  },
  decorators: [(story) => decorateStoryWithClass(story)],
  args: {
    debounce: 100,
    options: [
      {
        key: 'hh',
        value: 'Hamburg',
      },
      {
        key: 'ber',
        value: 'Berlin',
      },
      {
        key: 'k',
        value: 'Karlsruhe',
      },
    ],
    value: '',
  },
} as Meta<Components.InoAutocomplete>;

const inputHandler = (ev: CustomEvent<KeyValue>) => {
  (ev.target as HTMLInoAutocompleteElement).value = ev.detail;
};

export const Playground: Story<Components.InoAutocomplete> = (args) => html`
  <div style="height: 300px;">
    <ino-autocomplete
      debounce="${args.debounce}"
      .options=${args.options}
      value="${args.value}"
      @valueChange="${inputHandler}"
      style="margin: 50px"
    >
      <ino-input></ino-input>
    </ino-autocomplete>
  </div>
`;

