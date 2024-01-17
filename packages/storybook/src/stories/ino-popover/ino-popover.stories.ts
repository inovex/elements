import { Meta } from '@storybook/web-components';
import { Components } from '@inovex.de/elements';
import { html } from 'lit-html';
import Story from '../StoryWrapper';
import './ino-popover.scss';

let POPOVER_COUNTER = 1;

type InoPopoverExtended = Components.InoPopover & {
  placementClass: string;
};

const InoPopoverMeta = {
  title: 'Notification/ino-popover',
  component: 'ino-popover',
  parameters: {
    actions: {
      handles: ['visibleChange ino-popover'],
    },
    docs: {
      story: {
        height: '200px',
      },
    },
  },
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
    followCursor: {
      control: {
        type: 'radio',
      },
      options: [true, false, 'initial', 'horizontal', 'vertical'],
    },
  },
  render: (args) => {
    const id = `popover-${POPOVER_COUNTER++}`;

    return html`
      <ino-button id="${id}" class="${args.placementClass}">Popover</ino-button>
      <ino-popover
        color-scheme="${args.colorScheme}"
        controlled="${args.controlled}"
        distance="${args.distance}"
        for="${id}"
        interactive="${args.interactive}"
        .followCursor="${args.followCursor}"
        placement="${args.placement}"
        trigger="${args.trigger}"
        visible="${args.visible}"
        hide-on-blur="${args.hideOnBlur}"
        hide-on-esc="${args.hideOnEsc}"
        delay=${typeof args.delay === 'number' ? args.delay : [args.delay]}
        arrow="${args.arrow}"
      >
        <div
          style="display: flex; flex-direction: column; gap: 0.5rem; padding: 0.5rem"
        >
          <p>Popovers are complex tooltips.</p>
          <ino-chip>
            Able to contain other HTML-Elements?
            <ino-icon slot="icon-trailing" icon="checkmark"></ino-icon>
          </ino-chip>
        </div>
      </ino-popover>
    `;
  },
  args: {
    controlled: false,
    distance: 15,
    for: 'popover-target',
    interactive: false,
    placement: 'top',
    trigger: 'mouseenter',
    colorScheme: 'light',
    visible: false,
    hideOnEsc: false,
    hideOnBlur: false,
    delay: 0,
    arrow: false,
    placementClass: '',
    headerText: '',
  },
} as Meta<InoPopoverExtended>;

export default InoPopoverMeta;

export const Default = Story({
  ...InoPopoverMeta,
});

export const Arrow = Story({
  ...Default,
  docsFromProperty: 'arrow',
  args: {
    arrow: true,
  },
});

export const Placement = Story({
  ...Default,
  docsFromProperty: 'placement',
  args: {
    placement: 'right',
    placementClass: 'styled-placement',
  },
});

export const AttachToBody = Story({
  ...Default,
  docsFromProperty: 'attachToBody',
  args: {
    attachToBody: true,
  },
});

export const Distance = Story({
  ...Default,
  docsFromProperty: 'distance',
  args: {
    distance: 30,
  },
});

export const ColorSchemes = Story({
  ...Default,
  docsFromProperty: 'colorScheme',
  render: (args) => {
    const idLight = 'popover-light';
    const idDark = 'popover-dark';
    const idPrimary = 'popover-primary';

    const content = html`<p style="padding: 0.5rem">
      Lorem ipsum do lor sit amet, con sete tur amet ipsum do, con sete tur amet
      ipsum do.
    </p>`;

    return html`
      <ino-button id="${idLight}">Light</ino-button>
      <ino-popover
        color-scheme="light"
        controlled="${args.controlled}"
        distance="${args.distance}"
        for="${idLight}"
        interactive="${args.interactive}"
        followCursor="${args.followCursor}"
        placement="${args.placement}"
        trigger="${args.trigger}"
        visible="${args.visible}"
        hide-on-blur="${args.hideOnBlur}"
        hide-on-esc="${args.hideOnEsc}"
        delay=${typeof args.delay === 'number' ? args.delay : [args.delay]}
        arrow="${args.arrow}"
      >
        ${content}
      </ino-popover>
      <ino-button id="${idDark}">Dark</ino-button>
      <ino-popover
        color-scheme="dark"
        controlled="${args.controlled}"
        distance="${args.distance}"
        for="${idDark}"
        interactive="${args.interactive}"
        followCursor="${args.followCursor}"
        placement="${args.placement}"
        trigger="${args.trigger}"
        visible="${args.visible}"
        hide-on-blur="${args.hideOnBlur}"
        hide-on-esc="${args.hideOnEsc}"
        delay=${typeof args.delay === 'number' ? args.delay : [args.delay]}
        arrow="${args.arrow}"
      >
        ${content}
      </ino-popover>
      <ino-button id="${idPrimary}">Primary</ino-button>
      <ino-popover
        color-scheme="primary"
        controlled="${args.controlled}"
        distance="${args.distance}"
        for="${idPrimary}"
        interactive="${args.interactive}"
        followCursor="${args.followCursor}"
        placement="${args.placement}"
        trigger="${args.trigger}"
        visible="${args.visible}"
        hide-on-blur="${args.hideOnBlur}"
        hide-on-esc="${args.hideOnEsc}"
        delay=${typeof args.delay === 'number' ? args.delay : [args.delay]}
        arrow="${args.arrow}"
      >
        ${content}
      </ino-popover>
    `;
  },
});

export const Trigger = Story({
  ...Default,
  docsFromProperty: 'trigger',
  args: {
    trigger: 'click',
  },
});

export const FollowCursor = Story({
  ...Default,
  docsFromProperty: 'followCursor',
  args: {
    followCursor: 'horizontal',
  },
});

export const Interactive = Story({
  ...Default,
  docsFromProperty: 'interactive',
  render: () => html`
    <ino-popover
      trigger="click"
      for="popover-interactive-target"
      distance="15"
      interactive
      placement="top"
    >
      <div class="interactive-popover">
        <p>I'm interactive. You can click me without closing this popover!</p>
        <ino-button>Button not closing the popover</ino-button>
      </div>
    </ino-popover>
    <ino-button
      class="placement-button big-space"
      id="popover-interactive-target"
      >Interactive Content
    </ino-button>
  `,
  args: {
    interactive: true,
  },
});

export const Controlled = Story({
  ...Default,
  docsFromProperty: 'controlled',
  render: () => {
    const eventHandler = (e: any) => {
      e.target?.setAttribute('visible', e.detail);
      (
        document.querySelector('#controlled-checkbox') as HTMLInputElement
      ).checked = e.detail;
    };

    return html`
      <ino-popover
        id="controlled-popover"
        placement="top"
        controlled="true"
        trigger="click"
        visible="false"
        distance="15"
        @visibleChanged="${eventHandler}"
      >
        <ino-checkbox id="controlled-checkbox" slot="popover-trigger">
          Uncheck to hide / check to show
        </ino-checkbox>
        <div style="padding: 0.5rem">
          <ino-chip>
            Programmatically shown?
            <ino-icon slot="icon-trailing" icon="checkmark"></ino-icon>
          </ino-chip>
        </div>
      </ino-popover>
    `;
  },
  args: {
    controlled: true,
  },
});

export const Visible = Story({
  ...Default,
  docsFromProperty: 'visible',
  args: {
    visible: true,
  },
});

export const Delay = Story({
  ...Default,
  docsFromProperty: 'delay',
  args: {
    delay: [500, 200],
  },
});
