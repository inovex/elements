import { useEffect } from '@storybook/client-api';
import { Meta } from '@storybook/web-components';
import { html } from 'lit-html';
import { cssColor, decorateStoryWithClass } from '../utils';
import { TemplateGenerator } from '../template-generator';
import { Components } from '@inovex.de/elements';
import { CssProperties } from '../types';

import './ino-list-item.scss';

const LIST_ITEM_CSS_PROPS: CssProperties = {
  selectedColor: cssColor(
    '--ino-list-item-selected-color',
    'Text color of a selected list item.',
  ),
  selectedBackgroundColor: cssColor(
    '--ino-list-item-selected-background-color',
    'Background color of a selected list item.',
  ),
  selectedBackgroundColorHover: cssColor(
    '--ino-list-item-selected-background-color-hover',
    'Background color of a selected list item on hover.',
  ),
  selectedBackgroundColorActive: cssColor(
    '--ino-list-item-selected-background-color-active',
    'Background color of a selected list item if active.',
  ),
  selectedBackgroundColorFocus: cssColor(
    '--ino-list-item-selected-background-color-focus',
    'Background color of a selected list item if focused.',
  ),
  deselectedColor: cssColor(
    '--ino-list-item-deselected-color',
    'Text color of a deselected list item.',
  ),
  deselectedBackgroundColor: cssColor(
    '--ino-list-item-deselected-background-color',
    'Background color of a deselected list item.',
  ),
  deselectedBackgroundColorHover: cssColor(
    '--ino-list-item-deselected-background-color-hover',
    'Background color of a deselected list item on hover.',
  ),
  deselectedBackgroundColorActive: cssColor(
    '--ino-list-item-deselected-background-color-active',
    'Background color of a deselected list item if active.',
  ),
  deselectedBackgroundColorFocus: cssColor(
    '--ino-list-item-deselected-background-color-focus',
    'Background color of a deselected list item if focused.',
  ),
};

export default {
  title: 'Structure/ino-list-item',
  component: 'ino-list-item',
  decorators: [
    (story) => decorateStoryWithClass(story, 'story-ino-list-item'),
    (story) => {
      useEffect(() => {
        const eventHandler = (e) => {
          const el = e.target;
          el.setAttribute('checked', e.detail);
          if (el.getAttribute('indeterminate') === 'true') {
            el.setAttribute('indeterminate', 'false');
          }
        };
        const selections = document.querySelectorAll('ino-checkbox, ino-radio');
        selections.forEach((s) =>
          s.addEventListener('checkedChange', eventHandler),
        );
        return () =>
          selections.forEach((s) =>
            s.removeEventListener('checkedChange', eventHandler),
          );
      });
      return story();
    },
  ],
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

const exampleImg = html`
  <ino-img
    slot="leading"
    src="https://cdn-images-1.medium.com/max/1600/1*HP8l7LMMt7Sh5UoO1T-yLQ.png"
    ratio-width="1"
    ratio-height="1"
  ></ino-img>
`;

const template = new TemplateGenerator<Components.InoListItem>(
  'ino-list-item',
  (args) => html`
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
);

export const Playground = template.generatePlaygroundStory(LIST_ITEM_CSS_PROPS);

export const Text = template.generateStoryForProp('text', 'simple-item');
export const SecondaryText = template.generateStoryForProp(
  'secondaryText',
  'Second line text',
);
export const Selected = template.generateStoryForProp('selected', true);
export const Activated = template.generateStoryForProp('activated', true);
export const Disabled = template.generateStoryForProp('disabled', true);

type InoListVariants = Components.InoList & {
  avatar: boolean;
  meta: boolean;
  checkbox: boolean;
  radio: boolean;
};

const templateGraphicAndMeta = new TemplateGenerator<InoListVariants>(
  'ino-list-item',
  (args) => html`
    <ino-list>
      <ino-list-item text="Lorem ipsum dolor sit">
        ${args.avatar && exampleImg}
        ${args.checkbox && html` <ino-checkbox slot="leading"></ino-checkbox> `}
        ${args.meta && html` <p slot="trailing">$10.00</p> `}
        ${args.radio &&
        html` <ino-radio slot="leading" selection></ino-radio> `}
      </ino-list-item>
    </ino-list>
  `,
);

/**
 * You can use any elements in the `leading` or `trailing` slot (e.g. images).
 */
export const Graphics = templateGraphicAndMeta.generatePlaygroundStory();
Graphics.args = { avatar: true };

/**
 * You can use any elements in the `leading` or `trailing` slot (e.g. meta-data).
 */
export const MetaData = templateGraphicAndMeta.generatePlaygroundStory();
MetaData.args = { meta: true };

/**
 * You can use a `ino-checkbox` element in the `leading` or `trailing` slot.
 */
export const WithCheckbox = templateGraphicAndMeta.generatePlaygroundStory();
WithCheckbox.args = { checkbox: true };

/**
 * You can use a `ino-checkbox` element in the `leading` or `trailing` slot.
 */
export const WithRadio = templateGraphicAndMeta.generatePlaygroundStory();
WithRadio.args = { radio: true };
