import { Meta } from '@storybook/web-components';
import { Components } from '@inovex.de/elements';
import { html } from 'lit-html';
import { TemplateGenerator } from '../template-generator';
import {
  decorateStoryWithClass,
  withColorScheme,
  withIconControl,
} from '../utils';
import './ino-icon-button.scss';

export default {
  title: 'Buttons/ino-icon-button',
  component: 'ino-icon-button',
  decorators: [(story) => decorateStoryWithClass(story, 'story-icon-button')],
  parameters: {
    actions: {
      handles: ['click ino-icon-button'],
    },
  },
  args: {
    activated: false,
    colorScheme: 'primary',
    disabled: false,
    filled: false,
    icon: 'add',
  },
} as Meta<Components.InoIconButton>;

const template = new TemplateGenerator<Components.InoIconButton>(
  'ino-icon-button',
  (args) => html`
    <ino-icon-button
      activated="${args.activated}"
      disabled="${args.disabled}"
      filled="${args.filled}"
      type="${args.type}"
      color-scheme="${args.colorScheme}"
    >
      <ino-icon icon="${args.icon}"></ino-icon>
    </ino-icon-button>
  `
);

export const Playground = template.generatePlaygroundStory();
withIconControl(Playground, 'icon', 'add');
withColorScheme(Playground, 'colorScheme', 'primary');

export const Filled = template.generateStoryForProp('filled', true);

export const Activated = template.generateStoryForProp('activated', true);
