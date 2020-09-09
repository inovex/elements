import CoreEvents from '@storybook/core-events';

import { withActions } from '@storybook/addon-actions';
import { text, boolean, number, select } from '@storybook/addon-knobs';

import withStencilReadme from '_local-storybookcore/with-stencil-readme';

import tabBarReadme from '_local-elements/src/components/ino-tab-bar/readme.md';
import tabReadme from '_local-elements/src/components/ino-tab/readme.md';
import ICONS from '_local-elements/src/components/ino-icon/icons';

import './ino-tab-bar.scss';
import addons from '@storybook/addons';

function subscribeToComponentEvents() {
  // == event block
  const eventHandler = function(e) {
    const el = e.target;

    if (!el) return;

    el.setAttribute('ino-active-tab', e.detail);
  };

  document.addEventListener('activeTabChange', eventHandler);
  // == event block

  // unsubscribe function will be called by Storybook
  return () => {
    document.removeEventListener('activeTabChange', eventHandler);
  };
}

export default {
  title: 'Structure/<ino-tab-bar>',

  decorators: [
    withStencilReadme(tabBarReadme),
    withActions('activeTabChange ino-tab-bar'),
    story => {
        addons
          .getChannel()
          .emit(CoreEvents.REGISTER_SUBSCRIPTION, subscribeToComponentEvents);
        return story();
      },
  ],
};

export const DefaultUsage = () => /*html*/ `
<div class="story-tab">
<h4>Customizable ino-tab-bar</h4>
  <div>
    <ino-tab-bar id="tab-bar-1" ino-active-tab="${number(
  'ino-active-tab',
  0
)}">
      <ino-tab ino-label="Label1" ino-icon="user" ino-stacked="${boolean(
  'ino-stacked',
  false
)}" ino-indicator-content-width="${boolean(
  'ino-indicator-content-width',
  false
)}"></ino-tab>
      <ino-tab ino-label="Label2" ino-icon="info" ino-stacked="${boolean(
  'ino-stacked',
  false
)}" ino-indicator-content-width="${boolean(
  'ino-indicator-content-width',
  false
)}"></ino-tab>
      <ino-tab ino-label="Label3" ino-icon="star" ino-stacked="${boolean(
  'ino-stacked',
  false
)}" ino-indicator-content-width="${boolean(
  'ino-indicator-content-width',
  false
)}"></ino-tab>
      <ino-tab ino-label="Label4" ino-icon="help" ino-stacked="${boolean(
  'ino-stacked',
  false
)}" ino-indicator-content-width="${boolean(
  'ino-indicator-content-width',
  false
)}"></ino-tab>
    </ino-tab-bar>
  </div>
  <h4>Stacked</h4>
  <ino-tab-bar>
    <ino-tab
            ino-label="Label 1"
            ino-icon="info"
            ino-stacked="true">
    </ino-tab>
    <ino-tab
            ino-label="Label 2"
            ino-icon="info"
            ino-stacked="true">
    </ino-tab>
    <ino-tab
            ino-label="Label 3"
            ino-icon="info"
            ino-stacked="true">
    </ino-tab>
    <ino-tab
            ino-label="Label 4"
            ino-icon="info"
            ino-stacked="true">
    </ino-tab>
  </ino-tab-bar>
  <h4>Indicator Content Width</h4>
  <ino-tab-bar>
    <ino-tab
            ino-label="Label 1"
            ino-icon="info"
            ino-indicator-content-width="true">
    </ino-tab>
    <ino-tab
            ino-label="Label 2"
            ino-icon="info"
            ino-indicator-content-width="true">
    </ino-tab>
    <ino-tab
            ino-label="Label 3"
            ino-icon="info"
            ino-indicator-content-width="true">
    </ino-tab>
    <ino-tab
            ino-label="Label 4"
            ino-icon="info"
            ino-indicator-content-width="true">
    </ino-tab>
  </ino-tab-bar>
</div>
`;

export const Tab = () => /*html*/ `
<div class="story-tab">
<h4>Customizable Tab</h4>
<div class="customizable-tab">
  <ino-tab
    ino-label="${text('ino-label', 'Customizable Tab')}"
    ino-icon="${select('ino-icon', ICONS, 'info')}"
    ino-stacked="${boolean('ino-stacked', false)}">
  </ino-tab>
  </div>
  <h4>Variants</h4>
  <div class="story-tab-variants">
    <ino-tab
        ino-label="Default"
        ino-icon="info"
        ino-stacked="false">
    </ino-tab>
    <ino-tab
          ino-label="Stacked"
          ino-icon="info"
          ino-stacked="true">
    </ino-tab>
    <ino-tab-bar ino-active-tab="0">
      <ino-tab
            ino-label="Default active Tab"
            ino-icon="info"
            >
      </ino-tab>
    </ino-tab-bar>
    <ino-tab-bar ino-active-tab="0">
      <ino-tab
            ino-label="Active content width indicator"
            ino-icon="info"
            ino-indicator-content-width="true"
            >
      </ino-tab>
    </ino-tab-bar>
  </div>
</div>
`;

Tab.decorators = [
  withStencilReadme(tabReadme)
];
