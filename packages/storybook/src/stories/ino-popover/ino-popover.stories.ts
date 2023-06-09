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
      options: ['light', 'dark', 'primary'],
    },
    delay: {
      control: {
        type: 'object',
      },
    },
  },
  args: {
    controlled: false,
    distance: 10,
    for: 'popover-target',
    interactive: false,
    placement: 'top',
    trigger: 'click',
    colorScheme: 'light',
    visible: false,
    hideOnEsc: false,
    hideOnBlur: false,
    delay: 0,
    arrow: true,
  },
} as Meta;

let POPOVER_COUNTER = 1;

const template = new TemplateGenerator<Components.InoPopover>(
  'ino-popover',
  (args) => {
    const id = `popover-${POPOVER_COUNTER++}`;

    return html`
      <ino-button id="${id}">Popover</ino-button>
      <ino-popover
        color-scheme="${args.colorScheme}"
        controlled="${args.controlled}"
        distance="${args.distance}"
        for="${id}"
        interactive="${args.interactive}"
        followCursor="${args.followCursor}"
        placement="${args.placement}"
        trigger="${args.trigger}"
        visible="${args.visible}"
        hide-on-blur="${args.hideOnBlur}"
        hide-on-esc="${args.hideOnEsc}"
        delay=${typeof args.delay === 'number'? args.delay : [args.delay]}
        arrow="${args.arrow}"
      >
        <div class="styled-popover">
          <ino-icon icon="user"></ino-icon>
          This is a styled popover.
        </div>
      </ino-popover>
    `;
  }
);

export const Playground = template.generatePlaygroundStory();
export const Placement = template.generateStoryForProp('placement', 'right');
export const AttachToBody = template.generateStoryForProp('attachToBody', true);

export const Distance = template.generateStoryForProp('distance', 30);

export const ColorScheme = template.generateStoryForProp(
  'colorScheme',
  'transparent'
);

export const Trigger = template.generateStoryForProp('trigger', 'click');

export const FollowCursor = template.generateStoryForProp(
  'followCursor',
  'horizontal'
);

const templateInteractive = new TemplateGenerator<Components.InoPopover>(
  'ino-popover',
  () => html`
    <ino-popover
      trigger="click"
      for="popover-interactive-target"
      interactive
      placement="left"
    >
      <div class="interactive-popover">
        <p>I'm interactive. You can click me without closing this popover!</p>
        <ino-button>Button not closing the popover</ino-button>
      </div>
    </ino-popover>
    <ino-button class="placement-button" id="popover-interactive-target"
      >Interactive Content
    </ino-button>
  `
);

export const Interactions = templateInteractive.generateStoryForProp(
  'interactive',
  true
);

const templateControlledPopover = new TemplateGenerator<Components.InoPopover>(
  'ino-popover',
  () => {
    const eventHandler = (e) => {
      e.target?.setAttribute('visible', e.detail);
      (document.querySelector(
        '#controlled-checkbox'
      ) as HTMLInputElement).checked = e.detail;
    };

    return html`
      <ino-popover
        id="controlled-popover"
        placement="left"
        controlled="true"
        trigger="click"
        visible="false"
        @visibleChanged="${eventHandler}"
      >
        <ino-checkbox id="controlled-checkbox" slot="popover-trigger">
          Uncheck to hide / check to show
        </ino-checkbox>
        <div class="popover-content">I'm a controlled popover</div>
      </ino-popover>
    `;
  }
);

export const Visible = templateControlledPopover.generateStoryForProp(
  'visible',
  true
);

export const Delay = template.generateStoryForProp('delay', [500, 200])
