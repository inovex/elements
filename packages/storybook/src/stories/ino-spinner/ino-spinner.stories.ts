import { Meta } from '@storybook/web-components';
import { Components } from '@inovex.de/elements';
import { html } from 'lit-html';
import Story from '../StoryWrapper';

const InoSpinnerMeta = {
  title: 'Notification/ino-spinner',
  component: 'ino-spinner',
  render: (args) => html`
    <ino-spinner
      height="${args.height}"
      modal="${args.modal}"
      type="${args.type}"
      width="${args.width}"
    >
    </ino-spinner>
  `,
  args: {
    modal: false,
    type: 'tile',
    height: 40,
    width: 40,
  },
} as Meta<Components.InoSpinner>;

export default InoSpinnerMeta;

export const Default = Story({
  ...InoSpinnerMeta,
});

export const Type = Story({
  ...Default,
  docsFromProperty: 'type',
  args: {
    type: 'bounce',
  }
});
