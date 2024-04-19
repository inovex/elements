import { Meta } from '@storybook/web-components';
import { html } from 'lit-html';
import { useEffect } from '@storybook/preview-api';
import Story from '../StoryWrapper';
import './ino-list-item.scss';

const exampleImg = html` <ino-img
  slot="leading"
  src="https://cdn-images-1.medium.com/max/1600/1*HP8l7LMMt7Sh5UoO1T-yLQ.png"
  ratio-width="1"
  ratio-height="1"
></ino-img>`;

const InoListItemMeta = {
  title: 'Structure/ino-list-item',
  component: 'ino-list-item',
  decorators: [
    story => {
      useEffect(() => {
        const eventHandler = e => {
          const el = e.target;
          el.setAttribute('checked', e.detail);
          if (el.getAttribute('indeterminate') === 'true') {
            el.setAttribute('indeterminate', 'false');
          }
        };
        const selections = document.querySelectorAll('ino-checkbox, ino-radio');
        selections.forEach(s => s.addEventListener('checkedChange', eventHandler));
        return () => selections.forEach(s => s.removeEventListener('checkedChange', eventHandler));
      });
      return story();
    },
  ],
  render: args => html`
    <ino-list two-lines="${Boolean(args.secondaryText)}">
      <ino-list-item
        secondary-text="${args.secondaryText}"
        selected="${args.selected}"
        activated="${args.activated}"
        disabled="${args.disabled}"
        text="${args.text}"
        attrs="${args.attrs}"
      >
      </ino-list-item>
    </ino-list>
  `,
  argsTypes: {
    twoLines: {
      description: 'Two Lines option of the parent list element',
    },
  },
  args: {
    secondaryText: '',
    selected: false,
    activated: false,
    disabled: false,
    text: 'List item',
    attrs: {},
  },
} as Meta;

export default InoListItemMeta;

export const Default = Story({
  ...InoListItemMeta,
});

export const Text = Story({
  ...Default,
  docsFromProperty: 'text',
  args: {
    text: 'simple-item',
  },
});

export const SecondaryText = Story({
  ...Default,
  docsFromProperty: 'secondaryText',
  args: {
    secondaryText: 'Second line text',
  },
});

export const Selected = Story({
  ...Default,
  docsFromProperty: 'selected',
  args: {
    selected: true,
  },
});

export const Activated = Story({
  ...Default,
  docsFromProperty: 'activated',
  args: {
    activated: true,
  },
});

export const Disabled = Story({
  ...Default,
  docsFromProperty: 'disabled',
  args: {
    disabled: true,
  },
});

/**
 * You can use any elements in the `leading` or `trailing` slot (e.g. images).
 */
export const Graphics = Story({
  ...Default,
  render: () => html`
    <ino-list>
      <ino-list-item text="Lorem ipsum dolor sit"> ${exampleImg} </ino-list-item>
    </ino-list>
  `,
});

/**
 * You can use any elements in the `leading` or `trailing` slot (e.g. meta-data).
 */
export const MetaData = Story({
  ...Default,
  render: () => html`
    <ino-list>
      <ino-list-item text="Lorem ipsum dolor sit">
        <p slot="trailing">$10.00</p>
      </ino-list-item>
    </ino-list>
  `,
});

/**
 * You can use a `ino-checkbox` element in the `leading` or `trailing` slot.
 */
export const WithCheckbox = Story({
  ...Default,
  render: () => html`
    <ino-list>
      <ino-list-item text="Lorem ipsum dolor sit">
        <ino-checkbox slot="leading"></ino-checkbox>
      </ino-list-item>
    </ino-list>
  `,
});

/**
 * You can use a `ino-radio` element in the `leading` or `trailing` slot.
 */
export const WithRadio = Story({
  ...Default,
  render: () => html`
    <ino-list>
      <ino-list-item text="Lorem ipsum dolor sit">
        <ino-radio slot="leading" selection></ino-radio>
      </ino-list-item>
    </ino-list>
  `,
});
