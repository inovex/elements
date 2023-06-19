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
    placementClass: "",
    headerText: "",
  },
} as Meta;

let POPOVER_COUNTER = 1;

type InoPopoverExtended = Components.InoPopover & {
  placementClass: string;
}

const template = new TemplateGenerator<InoPopoverExtended>(
  'ino-popover',
  (args) => {
    const id = `popover-${POPOVER_COUNTER++}`;

    return html`
      <ino-button id="${id}" class="${args.placementClass}">Popover</ino-button>
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
        Lorem ipsum do lor sit amet, con sete tur amet ipsum do, con sete tur amet ipsum do.
      </ino-popover>
    `;
  }
);

export const Playground = template.generatePlaygroundStory();
export const Arrow = template.generateStoryForProp('arrow', true);
export const Placement = template.generateStoryForProp('placement', 'right', {
  placementClass: "styled-placement"
});

export const AttachToBody = template.generateStoryForProp('attachToBody', true);

export const Distance = template.generateStoryForProp('distance', 30);

const templateColors = new TemplateGenerator<InoPopoverExtended>(
  'ino-popover',
  (args) => {

    const idLight = 'popover-light';
    const idDark = 'popover-dark';
    const idPrimary = 'popover-primary'

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
        delay=${typeof args.delay === 'number'? args.delay : [args.delay]}
        arrow="${args.arrow}"
      >
        Lorem ipsum do lor sit amet, con sete tur amet ipsum do, con sete tur amet ipsum do. 
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
        delay=${typeof args.delay === 'number'? args.delay : [args.delay]}
        arrow="${args.arrow}"
      >
        Lorem ipsum do lor sit amet, con sete tur amet ipsum do, con sete tur amet ipsum do. 
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
        delay=${typeof args.delay === 'number'? args.delay : [args.delay]}
        arrow="${args.arrow}"
      >
        Lorem ipsum do lor sit amet, con sete tur amet ipsum do, con sete tur amet ipsum do. 
      </ino-popover>
    `;
  }
);

export const ColorSchemes = templateColors.generateStoryForProp('colorScheme', 'light');


export const Trigger = template.generateStoryForProp('trigger', 'click');

export const FollowCursor = template.generateStoryForProp(
  'followCursor',
  'horizontal'
);

const templateInteractive = new TemplateGenerator<InoPopoverExtended>(
  'ino-popover',
  () => html`
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
    <ino-button class="placement-button big-space" id="popover-interactive-target"
      >Interactive Content
    </ino-button>
  `
);

export const Interactions = templateInteractive.generateStoryForProp(
  'interactive',
  true
);

const templateControlledPopover = new TemplateGenerator<InoPopoverExtended>(
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

const templateSlot = new TemplateGenerator<InoPopoverExtended>(
  'ino-popover',
  (args) => {
    const id = `popover-${POPOVER_COUNTER++}`;

    return html`
      <ino-button id="${id}" class="${args.placementClass}">Popover</ino-button>
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
        <header style="font-weight: bold;">Headline</header>
        <p>Lorem ipsum do lor sit amet, con sete tur amet ipsum do, con sete tur amet ipsum do.</p>
        <footer><a href="#">Read more</a></footer>
      </ino-popover>
    `;
  }
);

/**
 * By using the default `slot` you can add your own content.
 */
export const UsingDefaultSlot = templateSlot.generatePlaygroundStory();
UsingDefaultSlot.args = {
  placementClass: "styled-placement",
  placement: "left",
  arrow: true,
}
