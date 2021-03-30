import { html } from 'lit-html';
import { defaultDecorator, withColorScheme, withIconControl } from '../utils';
import { useEffect } from '@storybook/client-api';
import './ino-tab-bar.scss';

export default {
  title: `Components (WIP)/ino-tab-bar`,
  component: 'ino-tab-bar',
  decorators: [defaultDecorator, story => {
    useEffect(() => {
      const tabBar = document.getElementById('customizable-tabbar');
      const eventHandler = (e) => e.target.setAttribute('active-tab', e.detail);
      tabBar.addEventListener('activeTabChange', eventHandler);
      return () => tabBar.removeEventListener('activeTabChange', eventHandler);
    });
    return story();
  }],
};

export const Playground = (args) => html`
  <ino-tab-bar id="customizable-tabbar" active-tab="${args.activeTab}">
    <ino-tab
      label="User"
      icon="user"
      stacked="${args.stacked}"
      indicator-content-width="${args.indicatorContentWidth}"
    ></ino-tab>
    <ino-tab
      label="Delivery"
      icon="delivery"
      stacked="${args.stacked}"
      indicator-content-width="${args.indicatorContentWidth}"
    ></ino-tab>
    <ino-tab
      label="Settings"
      icon="settings"
      stacked="${args.stacked}"
      indicator-content-width="${args.indicatorContentWidth}"
    ></ino-tab>
    <ino-tab
      label="Download"
      icon="download"
      stacked="${args.stacked}"
      indicator-content-width="${args.indicatorContentWidth}"
    ></ino-tab>
  </ino-tab-bar>
`;
Playground.args = {
  stacked: false,
  indicatorContentWidth: false,
  activeTab: 0
}
Playground.parameters = {
  actions: {
    handles: ['activeTabChange ino-tab-bar']
  }
};

export const Stacked = () => html`
  <ino-tab-bar>
    <ino-tab
      label="Label 1"
      icon="service"
      stacked="true">
    </ino-tab>
    <ino-tab
      label="Label 2"
      icon="info"
      stacked="true">
    </ino-tab>
    <ino-tab
      label="Label 3"
      icon="info"
      stacked="true">
    </ino-tab>
    <ino-tab
      label="Label 4"
      icon="info"
      stacked="true">
    </ino-tab>
  </ino-tab-bar>
`;

export const IndicatorContentWidth = () => html`
  <ino-tab-bar>
    <ino-tab
      label="Label 1"
      icon="info"
      indicator-content-width="true">
    </ino-tab>
    <ino-tab
      label="Label 2"
      icon="info"
      indicator-content-width="true">
    </ino-tab>
    <ino-tab
      label="Label 3"
      icon="info"
      indicator-content-width="true">
    </ino-tab>
    <ino-tab
      label="Label 4"
      icon="info"
      indicator-content-width="true">
    </ino-tab>
  </ino-tab-bar>
`;
