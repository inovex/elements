import { useEffect } from '@storybook/client-api';
import { html } from 'lit-html';
import { defaultDecorator, withColorScheme, withIconControl } from '../utils';
import './ino-popover.scss';

export default {
  title: `Components (WIP)/ino-popover`,
  component: 'ino-popover',
  parameters: { 
    actions: { 
      handles: [ 'visibleChange ino-popover', ], 
    },
  },
  decorators: [(story) => defaultDecorator(story, 'story-ino-popover')],
};

export const Playground = args => html`
  <button id="popover-target">Popover</button>
  <ino-popover
    color-scheme="${args.colorScheme}"
    controlled="${args.controlled}"
    distance="${args.distance}"
    for="${args.for}"
    interactive="${args.interactive}"
    placement="${args.placement}"
    trigger="${args.trigger}"
  >
    <div class="styled-popover">
      <ino-icon icon="user"></ino-icon> This is an awesome popover.
    </div>
  </ino-popover>
`;
Playground.args = {
  controlled: false,
  distance: 10,
  for: 'popover-target',
  interactive: false,
  placement: 'top',
  trigger: 'mouseenter focus'
};
Playground.argTypes = {
  placement: {
    control: {
      type: 'select',
      options: ['top', 'right', 'bottom', 'left']
    }
  },
  trigger: {
    control: {
      type: 'select',
      options: [ 'mouseenter', 'focus', 'click', 'mouseenter focus', 'mouseenter click', 'focus click', 'mouseenter focus click']
    }
  }
}

withColorScheme(Playground, 'colorScheme', 'transparent');

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
  <button class="placement-button" id="popover-positions-target">Popover</button>
`;

export const InteractivePopover = () => html`
  <ino-popover trigger="click" placement="bottom" for="popover-interactive-target" interactive>
    <div class="styled-popover">
      <p>This is a interactive popover</p>
      <button>Button not closing the popover</button>
      <button data-ino-close>Button closing the popover</button>
    </div>
  </ino-popover>
  <button class="placement-button" id="popover-interactive-target">Click me!</button>
`;

export const Trigger = () => html`
  <button id="popover-hover-focus">Hover & focus</button>
  <ino-popover for="popover-hover-focus">
    <div class="popover-content">This popover occurs on hover and focus.</div>
  </ino-popover>

  <button id="popover-click">Click</button>
  <ino-popover for="popover-click" trigger="click">
    <div class="popover-content">This popover occurs on click.</div>
  </ino-popover>

  <button id="popover-focus">Focus</button>
  <ino-popover placement="top" for="popover-focus" trigger="focus">This popover occurs on focus.</ino-popover>
`;


export const ControlledPopover = () => {
  useEffect(() => {
    const eventHandler = e => {
      e.target?.setAttribute('visible', e.detail);
      (document.querySelector('#controlled-checkbox') as HTMLInputElement).checked = e.detail;
    };
    
    document.addEventListener('visibleChange', eventHandler);
    return () => document.removeEventListener('visibleChange', eventHandler);
  });
  
  return html`
    <ino-popover id="controlled-popover" placement="bottom" controlled trigger="click">
      <ino-checkbox id="controlled-checkbox" slot="trigger-target">Uncheck to hide / check to show</ino-checkbox>
      <div class="popover-content">I'm a controlled popover</div>
    </ino-popover>
  `;
}