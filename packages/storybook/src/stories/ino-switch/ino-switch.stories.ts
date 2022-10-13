import { Components } from '@inovex.de/elements';
import { Meta } from '@storybook/web-components';
import { html } from 'lit-html';
import { TemplateGenerator } from '../template-generator';
import { decorateStoryWithClass, withIconControl } from '../utils';
import './ino-switch.scss';

const eventHandler = (e: CustomEvent<boolean>) =>
  ((e.target as HTMLInoSwitchElement).checked = e.detail);

export default {
  title: 'Input/ino-switch',
  component: 'ino-switch',
  decorators: [story => decorateStoryWithClass(story, 'story-switch')],
  args: {
    checked: false,
    disabled: false,
    name: '',
    iconTrailing: '',
    iconLeading: ''
  },
} as Meta<Components.InoSwitch>;

const template = new TemplateGenerator<Components.InoSwitch & { iconTrailing: string; iconLeading: string }>(
  'ino-switch',
  args => html`
    <ino-switch
      checked="${args.checked}"
      disabled="${args.disabled}"
      name="${args.name}"
      icon-trailing="${args.iconTrailing}"
      icon-leading="${args.iconLeading}"
      @checkedChange="${eventHandler}"
    >
      Switch Label
    </ino-switch>
  `
);

export const Playground = template.generatePlaygroundStory();
export const Checked = template.generateStoryForProp('checked', true);
export const Disabled = template.generateStoryForProp('disabled', true);

const templateIcons = new TemplateGenerator<Components.InoSwitch & { iconTrailing: string; iconLeading: string }>(
  'ino-switch',
  args => html`
    <ino-switch
      checked="${args.checked}"
      disabled="${args.disabled}"
      name="${args.name}"
      icon-trailing="code"
      icon-leading="web"
      @checkedChange="${eventHandler}"
    >
      Switch Label
    </ino-switch>
  `
);
export const SwitchIcons = templateIcons.generatePlaygroundStory();
withIconControl(Playground, 'iconTrailing', '');
withIconControl(Playground, 'iconLeading', '');
