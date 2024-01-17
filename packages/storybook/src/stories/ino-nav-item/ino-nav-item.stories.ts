import { Meta } from '@storybook/web-components';
import { Components } from '@inovex.de/elements';
import { html } from 'lit-html';
import Story from '../StoryWrapper';

const icon = html`<ino-icon icon="onboarding"></ino-icon>`;

const InoNavItemMeta = {
  title: 'Structure/ino-nav-item',
  component: 'ino-nav-item',
  render: (args) => html`
    <ino-list>
      <ino-nav-item
        class="customizable-nav-item"
        text="${args.text}"
        sub-text="${args.subText}"
        activated="${args.activated}"
        disabled="${args.disabled}"
      >
        ${icon}
      </ino-nav-item>
    </ino-list>
  `,
  args: {
    text: 'Nav item',
    subText: '',
    activated: false,
    disabled: false,
  } as Meta<Components.InoNavItem>,
};

export default InoNavItemMeta;

export const Default = Story({
  ...InoNavItemMeta,
});

export const Text = Story({
  ...InoNavItemMeta,
  docsFromProperty: 'text',
  render: (args) => html`
    <ino-list>
      <ino-nav-item class="customizable-nav-item" text="${args.text}">
      </ino-nav-item>
    </ino-list>
  `,
  args: {
    text: 'Some Text',
  },
});

export const TwoLines = Story({
  ...InoNavItemMeta,
  docsFromProperty: 'subText',
  render: (args) => html`
    <ino-list>
      <ino-nav-item
        class="customizable-nav-item"
        text="${args.text}"
        sub-text="${args.subText}"
      >
      </ino-nav-item>
    </ino-list>
  `,
  args: {
    text: 'Some Text',
    subText: 'Secondary Text 2',
  },
});

export const Activated = Story({
  ...InoNavItemMeta,
  docsFromProperty: 'activated',
  render: (args) => html`
    <ino-list>
      <ino-nav-item
        class="customizable-nav-item"
        text="${args.text}"
        activated="${args.activated}"
      >
      </ino-nav-item>
    </ino-list>
  `,
  args: {
    text: 'Some Text',
    activated: true,
  },
});

export const Disabled = Story({
  ...InoNavItemMeta,
  docsFromProperty: 'disabled',
  render: (args) => html`
    <ino-list>
      <ino-nav-item
        class="customizable-nav-item"
        text="${args.text}"
        disabled="${args.disabled}"
      >
      </ino-nav-item>
    </ino-list>
  `,
  args: {
    text: 'Some Text',
    disabled: true,
  },
});

/**
 * Use an `ino-icon` element inside the default slot of an `ino-nav-item` to display an icon next to the text.
 */
export const Graphic = Story({
  ...InoNavItemMeta,
});
