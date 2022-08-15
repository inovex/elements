import { Components } from '@inovex.de/elements';
import { useEffect } from '@storybook/client-api';
import { Meta } from '@storybook/web-components';
import { TemplateGenerator } from '../template-generator';
import { html } from 'lit-html';
import { decorateStoryWithClass } from '../utils';
import './ino-tab-bar.scss';

const eventHandler = (e) => e.target.setAttribute('active-tab', e.detail);

export default {
  title: 'Structure/ino-tab-bar',
  component: 'ino-tab-bar',
  decorators: [
    (story) => decorateStoryWithClass(story, 'story-tab-bar'),
    (story) => {
      useEffect(() => {
        const tabBars = document.querySelectorAll('ino-tab-bar');
        tabBars.forEach((t) =>
          t.addEventListener('activeTabChange', eventHandler)
        );
        return () =>
          tabBars.forEach((t) =>
            t.removeEventListener('activeTabChange', eventHandler)
          );
      });
      return story();
    },
  ],
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
  args => html`
  <ino-tab-bar id="customizable-tabbar" active-tab="${args.activeTab}" auto-focus="${args.autoFocus}">
    <ino-tab label="User" icon="user"></ino-tab>
    <ino-tab label="Messages" icon="message"></ino-tab>
    <ino-tab label="Settings" icon="settings"></ino-tab>
    <ino-tab label="Download" icon="download"></ino-tab>
  </ino-tab-bar>
`);

export const Playground = template.generatePlaygroundStory();
export const ActiveTab = template.generateStoryForProp('activeTab', 1);
