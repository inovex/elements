import { Components } from '@inovex.de/elements';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { decorateStoryWithClass, withColorScheme } from '../utils';
import { TemplateGenerator } from '../template-generator';
import './ino-spinner.scss';

export default {
  title: 'Notification/ino-spinner',
  component: 'ino-spinner',
  decorators: [(story) => decorateStoryWithClass(story, 'story-spinner')],
  argTypes: {
    type: {
      control: {
        type: 'select',
      },
      options: ['circle', 'tile', 'bounce'],
    },
  },
  args: {
    colorScheme: 'primary',
    modal: false,
    type: 'tile',
    height: 40,
    width: 40,
  },
} as Meta;

const template = new TemplateGenerator<Components.InoSpinner>(
  'ino-spinner',
  args => html`
  <ino-spinner
    color-scheme="${args.colorScheme}"
    height="${args.height}"
    modal="${args.modal}"
    type="${args.type}"
    width="${args.width}"
  >
  </ino-spinner>
`);

export const Playground = template.generatePlaygroundStory();
export const Type = template.generateStoryForProp('type', 'bounce');
export const ColorScheme = template.generateStoryForProp('colorScheme', 'success', {
  type: 'circle',
});

withColorScheme(Playground, 'colorScheme', 'primary');