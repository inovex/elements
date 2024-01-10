import { Meta } from '@storybook/web-components';
import { Components } from '@inovex.de/elements';
import { html } from 'lit-html';
import Story from '../StoryWrapper';
import './ino-button.scss';

const Playground = {
  title: 'Buttons/<ino-button>',
  component: 'ino-button',
  parameters: {
    docs: {
      source: {
        format: 'html'
      }
    }
  },
  render: (args) => html`
    <ino-button
      variant="${args.variant}"
      disabled="${args.disabled}"
      dense="${args.dense}"
      loading="${args.loading}"
    >
      Label
    </ino-button>
  `,
  args: {
    variant: 'filled',
    dense: false,
    disabled: false,
    loading: false,
  },
} as Meta<Components.InoButton>;

export const Filled = Story({
  ...Playground,
  docsFromProperty: 'variant',
  args: {
    variant: 'filled'
  }
})

export const Outlined = Story({
  ...Playground,
  docsFromProperty: 'variant',
  args: {
    variant: 'outlined'
  }
})

export const Text = Story({
  ...Playground,
  docsFromProperty: 'variant',
  args: {
    variant: 'text'
  }
})

export const Disabled = Story({
  ...Playground,
  docsFromProperty: 'disabled',
  args: {
    disabled: true,
  }
})

export const Dense = Story({
  ...Playground,
  docsFromProperty: 'dense',
  args: {
    dense: true,
  }
})

export const Loading = Story({
  ...Playground,
  docsFromProperty: 'loading',
  args: {
    loading: true,
  }
})

/**
 In order to include icons, use the `icon-leading` or `icon-trailing` slot
 */
export const LeadingAndTrailingIcon = Story({
  ...Playground,
  render: () => html`
  <div class="container">
    <ino-button>
      <ino-icon icon="info" slot="icon-leading"></ino-icon>
      Label
    </ino-button>
    <ino-button>
      <ino-icon icon="info" slot="icon-trailing"></ino-icon>
      Label
    </ino-button>
  </div>
`})

export default Playground;