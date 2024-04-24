import { Meta } from '@storybook/web-components';
import { Components, KeyValue } from '@inovex.de/elements';
import { html } from 'lit-html';
import Story from '../StoryWrapper';
import './ino-autocomplete.scss';
import { AutoCompleteStoryOptions } from './utils';

const inputHandler = (ev: CustomEvent<KeyValue>) => {
  (ev.target as HTMLInoAutocompleteElement).value = ev.detail;
};

const InoAutocompleteMeta = {
  title: 'Input/ino-autocomplete',
  component: 'ino-autocomplete',
  parameters: {
    actions: {
      handles: ['valueChange'],
    },
  },
  render: args => html` <div style="height: 300px;">
    <ino-autocomplete
      debounce="${args.debounce}"
      .options=${args.options}
      value="${args.value}"
      @valueChange="${inputHandler}"
      style="margin: 50px"
    >
      <ino-input></ino-input>
    </ino-autocomplete>
  </div>`,
  args: {
    debounce: 100,
    options: AutoCompleteStoryOptions,
    value: '',
  },
} as Meta<Components.InoAutocomplete>;
export default InoAutocompleteMeta;

export const Default = Story({
  ...InoAutocompleteMeta,
});

export const Debounce = Story({
  ...Default,
  docsFromProperty: 'debounce',
  args: {
    debounce: 500,
  },
});
