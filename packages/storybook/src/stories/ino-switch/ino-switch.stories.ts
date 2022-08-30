import { Components } from '@inovex.de/elements';
import { Meta } from '@storybook/web-components';
import { html } from 'lit-html';
import { TemplateGenerator } from '../template-generator';
import { decorateStoryWithClass } from '../utils';
import './ino-switch.scss';

const eventHandler = (e: CustomEvent<boolean>) =>
  ((e.target as HTMLInoSwitchElement).checked = e.detail);

export default {
  title: 'Input/ino-switch',
  component: 'ino-switch',
  decorators: [(story) => decorateStoryWithClass(story, 'story-switch')],
  args: {
    checked: false,
    disabled: false,
    name: '',
  },
} as Meta<Components.InoSwitch>;

const template = new TemplateGenerator<Components.InoSwitch>(
  'ino-switch',
  (args) => html`
    <ino-switch
      checked="${args.checked}"
      disabled="${args.disabled}"
      name="${args.name}"
      @checkedChange="${eventHandler}"
    >
      Switch Label
    </ino-switch>
  `
);

export const Playground = template.generatePlaygroundStory();
export const Checked = template.generateStoryForProp('checked', true);
export const Disabled = template.generateStoryForProp('disabled', true);
