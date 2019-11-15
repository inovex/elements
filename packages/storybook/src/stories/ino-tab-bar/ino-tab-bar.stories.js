import { storiesOf } from '@storybook/html';
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

    const clickedTab = el.parentElement.parentElement;

    if(!clickedTab) return;

    const tabBar = document.getElementById('tab-bar-1');
    const tabsInTabBar = Array.from(tabBar.getElementsByTagName('ino-tab'));
    const indexOfClickedTab = tabsInTabBar.indexOf(clickedTab)

    tabBar.setAttribute('ino-active-tab', indexOfClickedTab);
  };

  document.addEventListener('click', eventHandler);
  // == event block

  // unsubscribe function will be called by Storybook
  return () => {
    document.removeEventListener('click', eventHandler);
  };
}

storiesOf('<ino-tab-bar>', module)
  .addDecorator(withStencilReadme(tabBarReadme))
  .addDecorator(withActions('activeTabChange ino-tab-bar'))
  .addDecorator(story => {
    addons
      .getChannel()
      .emit(CoreEvents.REGISTER_SUBSCRIPTION, subscribeToComponentEvents);
    return story();
  })
  .add(
    'Default usage',
    () => /*html*/ `
    <div class="story-tab">
      <ino-tab-bar id="tab-bar-1" ino-active-tab="${number(
        'ino-active-tab',
        0
      )}">
        <ino-tab ino-label="Label1" ino-icon="users" ino-stacked="${boolean(
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
  `
  );

storiesOf('<ino-tab-bar>', module)
  .addDecorator(withStencilReadme(tabReadme))
  .add(
    'Tab',
    () => /*html*/ `
    <div class="story-tab">
      <ino-tab
        ino-label="${text('ino-label', 'Label')}"
        ino-icon="${select('ino-icon', ICONS, 'info')}"
        ino-stacked="${boolean('ino-stacked', false)}">
      </ino-tab>
    </div>
  `
  );
