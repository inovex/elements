import { Meta } from '@storybook/web-components';
import { Components, KeyValue } from '@inovex.de/elements';
import { html } from 'lit-html';
import { decorateStoryWithClass } from '../utils';
import Story from '../StoryWrapper';
import './ino-autocomplete.scss';

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
  decorators: [(story) => decorateStoryWithClass(story)],
  render: (args) => html` <div style="height: 300px;">
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
