import { boolean, select } from '@storybook/addon-knobs';

import withStencilReadme from '_local-storybookcore/with-stencil-readme';

import componentReadme from '_local-elements/src/components/ino-popover/readme.md';
import './ino-popover.scss';

function subscribeToComponentEvents() {
  let popoverRef;

  const eventHandler = function (e) {
    console.log('EVENT: ', e);
    if (e.target) {
      const checkState = e.detail;

      e.target.setAttribute('ino-show', checkState);
    }
  };

  document.addEventListener('visibilityChanged', eventHandler);

  return () => {
    document.removeEventListener('checkedChange', eventHandler);
  };
}

export default {
  title: 'Notification/<ino-popover>',
  decorators: [
    withStencilReadme(componentReadme),
    (story) => {
      subscribeToComponentEvents();
      return story();
    },
  ],
};

export const DefaultUsage = () => /*html*/ `
    <div class="story-popover">

      <ino-button id="popover-target">Popover</ino-button>
      <ino-popover
        ino-show="false"
        ino-for="popover-target"
        ino-interactive="${boolean('ino-interactive', false)}"
        ino-placement="${select(
          'ino-placement',
          ['top', 'right', 'bottom', 'left'],
          'top'
        )}"
        ino-color-scheme="${select(
          'ino-color-scheme',
          ['primary', 'secondary', 'light', 'transparent'],
          'transparent'
        )}"
        ino-trigger="${select(
          'ino-trigger',
          [
            'mouseenter',
            'focus',
            'click',
            'mouseenter focus',
            'mouseenter click',
            'focus click',
            'mouseenter focus click',
          ],
          'mouseenter focus'
        )}">
        <div class="styled-popover"><ino-icon ino-icon="user"></ino-icon> This is a styled popover.</div>
      </ino-popover>

      <h4>Placements</h4>
      <ino-popover ino-placement="left" ino-for="popover-positions-target">This is a simple popover on the left</ino-popover>
      <ino-popover ino-placement="right" ino-for="popover-positions-target">This is a simple popover on the right</ino-popover>
      <ino-popover ino-placement="top" ino-for="popover-positions-target">This is a simple popover on the top</ino-popover>
      <ino-popover ino-placement="bottom" ino-for="popover-positions-target">This is a simple popover on the bottom</ino-popover>
      <ino-button class="placement-button" id="popover-positions-target">Popover</ino-button>

      <h4>Triggers</h4>
      <div class="row">
      <ino-button id="popover-hover">Mouseenter</ino-button>
      <ino-popover ino-placement="left" ino-for="popover-hover" ino-trigger="mouseenter">This popover occurs on mouseenter</ino-popover>

      <ino-button id="popover-focus">Focus</ino-button>
      <ino-popover ino-placement="top" ino-for="popover-focus" ino-trigger="focus">This popover occurs on focus.</ino-popover>

      <ino-button id="popover-click">Click</ino-button>
      <ino-popover ino-placement="right" ino-for="popover-click" ino-trigger="click">This popover occurs on click.</ino-popover>
</div>
      <h4>Interactions</h4>
            <div class="row">
      <ino-button id="popover-non-interactive">Non-Interactive content</ino-button>
      <ino-popover ino-interactive="false" ino-for="popover-non-interactive" ino-trigger="click" ino-color-scheme="transparent">
        <div id="interactive-demo-container">
            <p>I'm not interactive. I will close on click. I should only be used for non-interactive content like this text.</p>
        </div>
      </ino-popover>

      <ino-button id="popover-interactive">Interactive content</ino-button>
      <ino-popover ino-interactive="true" ino-for="popover-interactive" ino-trigger="click" ino-color-scheme="transparent">
        <div id="interactive-demo-container">
            <ino-button>You can click me without closing this popover!</ino-button>
        </div>
      </ino-popover>
      </div>
      <h4>Controlled Popover</h4>
      <ino-checkbox id="controlled-checkbox" checked="true">Uncheck to hide / check to show</ino-checkbox>
      <ino-popover id="controlled-popover" ino-placement="bottom" ino-for="controlled-checkbox" ino-show="true">
        I'm a controlled popover
      </ino-popover>
    </div>
  `;
