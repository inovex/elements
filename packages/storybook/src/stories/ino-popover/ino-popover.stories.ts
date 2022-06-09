import { useEffect } from '@storybook/client-api';
import { Meta } from '@storybook/web-components';
import { html } from 'lit-html';
import { decorateStoryWithClass } from '../utils';
import './ino-popover.scss';
import { TemplateGenerator } from '../template-generator';
import { Components } from '@inovex.de/elements';

export default {
  title: `Notification/ino-popover`,
  component: 'ino-popover',
  parameters: {
    actions: {
      handles: ['visibleChange ino-popover'],
    },
  },
  decorators: [(story) => decorateStoryWithClass(story, 'story-ino-popover')],
  argTypes: {
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
  },
  args: {
    controlled: false,
    distance: 10,
    for: 'popover-target',
    id: 'popover-target',
    interactive: false,
    placement: 'top',
    trigger: 'mouseenter focus',
    colorScheme: 'transparent',
    visible: false,
    hideOnEsc: false,
    hideOnBlur: false,
  },
} as Meta;

type InoPopoverExtended = Components.InoPopover & {
  id: string,
}

const template = new TemplateGenerator<InoPopoverExtended>(
  'ino-popover',
  args => html`
  <ino-button id="${args.id}">Popover</ino-button>
  <ino-popover
    color-scheme="${args.colorScheme}"
    controlled="${args.controlled}"
    distance="${args.distance}"
    for="${args.for}"
    interactive="${args.interactive}"
    followCursor="${args.followCursor}"
    placement="${args.placement}"
    trigger="${args.trigger}"
    visible="${args.visible}"
    hide-on-blur="${args.hideOnBlur}"
    hide-on-esc="${args.hideOnEsc}"
  >
    <div class="styled-popover">
      <ino-icon icon="user"></ino-icon> This is a styled popover.
    </div>
  </ino-popover>
  
`);

export const Playground = template.generatePlaygroundStory();
export const Placement = template.generateStoryForProp('placement', 'right', {
  id: 'popover-target2',
  for: 'popover-target2',
});
export const AttachToBody = template.generateStoryForProp('attachToBody', true, {
  id: 'popover-target3',
  for: 'popover-target3',
});
export const HideOnBlur = template.generateStoryForProp('hideOnBlur', true, {
  id: 'popover-target4',
  for: 'popover-target4',
});
export const HideOnEsc = template.generateStoryForProp('hideOnEsc', true, {
  id: 'popover-target5',
  for: 'popover-target5',
});
export const Distance = template.generateStoryForProp('distance', 30, {
  id: 'popover-target6',
  for: 'popover-target6',
});
export const ColorScheme = template.generateStoryForProp('colorScheme', 'secondary', {
  id: 'popover-target7',
  for: 'popover-target7',
});
export const Trigger = template.generateStoryForProp('trigger', 'click', {
  id: 'popover-target9',
  for: 'popover-target9',
});



const templateInteractive = new TemplateGenerator<Components.InoPopover>(
  'ino-popover',
  args => html`
  <ino-popover
    trigger="click"
    placement="bottom"
    for="popover-interactive-target"
    color-scheme="transparent"
    interactive="${args.interactive}"
  >
    <div class="interactive-popover">
      <p>I'm interactive. You can click me without closing this popover!</p>
      <ino-button>Button not closing the popover</ino-button>
    </div>
  </ino-popover>
  <ino-button class="placement-button" id="popover-interactive-target"
    >Interactive Content</ino-button
  >
`);

export const Interactions = templateInteractive.generateStoryForProp('interactive', true);

const templateControlledPopover = new TemplateGenerator<Components.InoPopover>(
  'ino-popover',
  args => {
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
    `
  }
);

export const ControlledPopover = templateControlledPopover.generateStoryForProp('controlled', true)