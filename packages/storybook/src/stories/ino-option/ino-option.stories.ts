import { Meta } from '@storybook/web-components';
import { Components } from '@inovex.de/elements';
import { TemplateGenerator } from '../template-generator';
import { html } from 'lit-html';
import { cssColor, cssSize, decorateStoryWithClass, setArgs } from '../utils';
import { CssProperties } from '../types';

import './ino-option.scss';

const OPTION_CSS_PROPS: CssProperties = {
  height: cssSize(
    '--ino-option-height',
    'Height of the option container.',
    2.85,
    'rem',
  ),
  selectedBackgroundColor: cssColor(
    '--ino-option-selected-background-color',
    'Background color if selected.',
    '#f6fafe',
  ),
  selectedBackgroundColorHover: cssColor(
    '--ino-option-selected-background-color-hover',
    'Background color on hover if selected.',
    '#e2ecff',
  ),
  selectedBackgroundColorFocus: cssColor(
    '--ino-option-selected-background-color-focus',
    'Background color on focus if selected.',
    '#e2ecff',
  ),
  selectedBackgroundColorActive: cssColor(
    '--ino-option-selected-background-color-active',
    'Background color if active and selected.',
    '#beccff',
  ),
  deselectedBackgroundColor: cssColor(
    '--ino-option-deselected-background-color',
    'Background color if deselected.',
    '#fff ',
  ),
  deselectedBackgroundColorHover: cssColor(
    '--ino-option-deselected-background-color-hover',
    'Background color on hover if deselected.',
    '#f4f4f7',
  ),
  deselectedBackgroundColorFocus: cssColor(
    '--ino-option-deselected-background-color-focus',
    'Background color on focus if deselected.',
    '#f4f4f7',
  ),
  deselectedBackgroundColorActive: cssColor(
    '--ino-option-deselected-background-color-active',
    'Background color if active and deselected.',
    '#fff',
  ),
};

export default {
  title: 'Input/ino-option',
  component: 'ino-option',
  decorators: [(story) => decorateStoryWithClass(story, 'story-ino-option')],
  args: {
    value: 'some-id',
  },
} as Meta<Components.InoOption>;

const template = new TemplateGenerator<Components.InoOption>(
  'ino-option',
  (args) => html`
    <div class="story-option">
      <ino-select label="My Select">
        <ino-option
          class="customizable-option"
          disabled="${args.disabled}"
          selected="${args.selected}"
          value="${args.value}"
        >
          Content
        </ino-option>
      </ino-select>
    </div>
  `,
);

export const Playground = template.generatePlaygroundStory(OPTION_CSS_PROPS);
setArgs(Playground, {
  disabled: false,
  selected: false,
});

export const DisabledOption = template.generateStoryForProp('disabled', true);
export const SelectedOption = template.generateStoryForProp('selected', true);
