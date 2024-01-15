import { Meta } from '@storybook/web-components';
import { Components } from '@inovex.de/elements';
import { html } from 'lit-html';
import Story from '../StoryWrapper';
import { useEffect } from '@storybook/preview-api';
import './ino-tab-bar.scss';

const eventHandler = (e) => e.target.setAttribute('active-tab', e.detail);

const InoTabBarMeta = {
  title: 'Structure/ino-tab-bar',
  component: 'ino-tab-bar',
  decorators: [
    (story) => {
      useEffect(() => {
        const tabBars = document.querySelectorAll('ino-tab-bar');
        tabBars.forEach((t) =>
          t.addEventListener('activeTabChange', eventHandler),
        );
        return () =>
          tabBars.forEach((t) =>
            t.removeEventListener('activeTabChange', eventHandler),
          );
      });
      return story();
    },
  ],
  render: (args) => html`
    <ino-tab-bar
      id="customizable-tabbar"
      active-tab="${args.activeTab}"
      auto-focus="${args.autoFocus}"
    >
      <ino-tab label="User" icon="user" a11y-controls="user-panel"></ino-tab>
      <ino-tab
        label="Messages"
        icon="message"
        a11y-controls="messages-panel"
      ></ino-tab>
      <ino-tab
        label="Settings"
        icon="settings"
        a11y-controls="settings-panel"
      ></ino-tab>
      <ino-tab
        label="Download"
        icon="download"
        a11y-controls="download-panel"
      ></ino-tab>
    </ino-tab-bar>
  `,
  argTypes: {
    activeTab: {
      control: {
        type: 'select',
      },
      options: [0, 1, 2, 3],
    },
  },
  args: {
    activeTab: 0,
    autoFocus: false,
  },
} as Meta<Components.InoTabBar>;

export default InoTabBarMeta;

export const Default = Story({
  ...InoTabBarMeta,
});

export const ActiveTab = Story({
  ...Default,
  docsFromProperty: 'activeTab',
  args: {
    activeTab: 1,
  }
});
