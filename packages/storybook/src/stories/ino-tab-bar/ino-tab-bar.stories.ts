import { Components } from '@inovex.de/elements';
import { Meta } from '@storybook/web-components';
import { TemplateGenerator } from '../template-generator';
import { html } from 'lit-html';
import { decorateStoryWithClass } from '../utils';
import './ino-tab-bar.scss';

export default {
  title: `Structure/ino-tab-bar`,
  component: 'ino-tab-bar',
  decorators: [(story) => decorateStoryWithClass(story, 'story-tab-bar')],
  args: {
    activeTab: 0,
    autoFocus: false,
  },
  argTypes: {
    activeTab: {
      control: {
        type: 'select',
      },
      options: [0, 1, 2, 3],
    },
  },
} as Meta<Components.InoTabBar>;

const template = new TemplateGenerator<Components.InoTabBar>(
  'ino-tab-bar',
  (args) => html`
    <ino-tab-bar
      id="customizable-tabbar"
      active-tab="${args.activeTab}"
      auto-focus="${args.autoFocus}"
      @activeTabChange="${eventHandler}"
    >
      <ino-tab label="User" icon="user"></ino-tab>
      <ino-tab label="Messages" icon="message"></ino-tab>
      <ino-tab label="Settings" icon="settings"></ino-tab>
      <ino-tab label="Download" icon="download"></ino-tab>
    </ino-tab-bar>
  `
);

export const Playground = template.generatePlaygroundStory();
export const ActiveTab = template.generateStoryForProp('activeTab', 1);

function eventHandler(e: CustomEvent<number>) {
  (e.target as HTMLInoTabBarElement).activeTab = e.detail;
}
