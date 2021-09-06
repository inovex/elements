import { useEffect } from '@storybook/client-api';
import { html } from 'lit-html';
import { defaultDecorator } from '../utils';
import './ino-popover.scss';

export default {
  title: `Notification/ino-popover`,
  component: 'ino-popover',
  parameters: {
    actions: {
      handles: ['visibleChange ino-popover'],
    },
  },
  decorators: [(story) => defaultDecorator(story, 'story-ino-popover')],
};

export const Playground = (args) => html`
  <ino-button id="popover-target">Popover</ino-button>
  <ino-popover
    color-scheme="${args.colorScheme}"
    controlled="${args.controlled}"
    distance="${args.distance}"
    for="${args.for}"
    interactive="${args.interactive}"
    placement="${args.placement}"
    trigger="${args.trigger}"
    visible="${args.visible}"
  >
    <div class="styled-popover">
      <ino-icon icon="user"></ino-icon> This is a styled popover.
    </div>
  </ino-popover>
`;
Playground.args = {
  controlled: false,
  distance: 10,
  for: 'popover-target',
  interactive: false,
  placement: 'top',
  trigger: 'mouseenter focus',
  colorScheme: 'transparent',
  visible: false,
};
Playground.argTypes = {
  placement: {
    control: {
      type: 'select',
    },
    options: ['top', 'right', 'bottom', 'left'],
  },
  trigger: {
    control: {
      type: 'select',
    },
    options: [
      'mouseenter',
      'focus',
      'click',
      'mouseenter focus',
      'mouseenter click',
      'focus click',
      'mouseenter focus click',
    ],
  },
  colorScheme: {
    control: {
      type: 'select',
    },
    options: ['primary', 'secondary', 'light', 'transparent'],
  },
};

export const Placement = () => html`
  <ino-popover placement="left" for="popover-positions-target">
    <div class="popover-content">This is a simple popover on the left.</div>
  </ino-popover>
  <ino-popover placement="right" for="popover-positions-target">
    <div class="popover-content">This is a simple popover on the right.</div>
  </ino-popover>
  <ino-popover placement="top" for="popover-positions-target">
    <div class="popover-content">This is a simple popover on the top.</div>
  </ino-popover>
  <ino-popover placement="bottom" for="popover-positions-target">
    <div class="popover-content">This is a simple popover on the bottom.</div>
  </ino-popover>
  <ino-button class="placement-button" id="popover-positions-target"
    >Popover</ino-button
  >
`;

export const Interactions = () => html`
  <ino-button id="popover-non-interactive">Non-Interactive content</ino-button>
  <ino-popover
    for="popover-non-interactive"
    trigger="click"
    color-scheme="transparent"
  >
    <div class="popover-content">
      I'm not interactive. I will close on click. I should only be used for
      non-interactive content like this text.
    </div>
  </ino-popover>
  <ino-popover
    trigger="click"
    placement="bottom"
    for="popover-interactive-target"
    color-scheme="transparent"
    interactive
  >
    <div class="interactive-popover">
      <p>I'm interactive. You can click me without closing this popover!</p>
      <ino-button>Button not closing the popover</ino-button>
    </div>
  </ino-popover>
  <ino-button class="placement-button" id="popover-interactive-target"
    >Interactive Content</ino-button
  >
`;

export const Trigger = () => html`
  <ino-button id="popover-hover-focus">Hover & focus</ino-button>
  <ino-popover for="popover-hover-focus" placement="top">
    <div class="popover-content">This popover occurs on hover and focus.</div>
  </ino-popover>

  <ino-button id="popover-click">Click</ino-button>
  <ino-popover for="popover-click" trigger="click" placement="bottom">
    <div class="popover-content">This popover occurs on click.</div>
  </ino-popover>

  <ino-button id="popover-focus">Focus</ino-button>
  <ino-popover
    class="popover-content"
    placement="right"
    for="popover-focus"
    trigger="focus"
  >
    <div class="popover-content">This popover occurs on focus.</div>
  </ino-popover>
`;

export const ControlledPopover = () => {
  useEffect(() => {
    const eventHandler = (e) => {
      e.target?.setAttribute('visible', e.detail);
      (document.querySelector(
        '#controlled-checkbox'
      ) as HTMLInputElement).checked = e.detail;
    };

    document.addEventListener('visibleChanged', eventHandler);
    return () => document.removeEventListener('visibleChanged', eventHandler);
  });

  return html`
    <ino-popover
      id="controlled-popover"
      placement="left"
      controlled
      trigger="click"
    >
      <ino-checkbox id="controlled-checkbox" slot="popover-trigger"
        >Uncheck to hide / check to show</ino-checkbox
      >
      <div class="popover-content">I'm a controlled popover</div>
    </ino-popover>
  `;
};
