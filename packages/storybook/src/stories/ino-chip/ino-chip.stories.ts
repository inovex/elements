import { Components } from '@inovex.de/elements';
import { Meta } from '@storybook/web-components';
import { html } from 'lit-html';
import { TemplateGenerator } from '../template-generator';
import { decorateStoryWithClass } from '../utils';

import './ino-chip.scss';

export default {
  title: 'Buttons/<ino-chip>',
  component: 'ino-chip',
  decorators: [(story) => decorateStoryWithClass(story)],
  parameters: {
    actions: {
      handles: ['chipClicked', 'chipRemoved'],
    },
  },
  args: {
    disabled: false,
    fill: 'solid',
    removable: false,
    selectable: false,
    selected: false,
    notclickable: false,
    value: '',
  }
} as Meta<Components.InoChip>;

const template = new TemplateGenerator<Components.InoChip>(
  'ino-chip',
  (args) => html`
    <ino-chip
      class="customizable-chip"
      disabled="${args.disabled}"
      fill="${args.fill}"
      removable="${args.removable}"
      selectable="${args.selectable}"
      selected="${args.selected}"
      value="${args.value}"
      notclickable="${args.notclickable}"
    >
      Label
    </ino-chip>
  `
);
export const Playground = template.generatePlaygroundStory();

Playground.args = {
  disabled: false,
  fill: 'solid',
  removable: false,
  selectable: false,
  selected: false,
  value: '',
};

const templateFill = new TemplateGenerator<Components.InoChip>(
  'ino-chip',
  () => html`
    <div class="ino-chip-story">
      <ino-chip fill="solid">Chip Solid</ino-chip>
      <ino-chip fill="outline">Chip Outline</ino-chip>
    </div>
  `
);

export const Fill = templateFill.generatePlaygroundStory();


const templateIcons = new TemplateGenerator<Components.InoChip>(
  'ino-chip',
  () => html`
    <div class="ino-chip-story">
      <ino-chip>
        Leading
        <ino-icon slot="icon-leading" icon="star"></ino-icon>
      </ino-chip>
      <ino-chip>
        Trailing
        <ino-icon slot="icon-trailing" icon="star"></ino-icon>
      </ino-chip>
      <ino-chip>
        <span>Leading & Trailing</span>
        <ino-icon slot="icon-leading" icon="star"></ino-icon>
        <ino-icon slot="icon-trailing" icon="star"></ino-icon>
      </ino-chip>
    </div>
  `
);
/*
 In order to include icons, use the `icon-leading` or `icon-trailing` slot
 */
export const Icons = templateIcons.generatePlaygroundStory();

const templateFilter = new TemplateGenerator<Components.InoChip>(
  'ino-chip',
  () => {
    const values = ['Chip 1', 'Chip 2', 'Chip 3'];
    const selectedChips = new Set<string>();

    const handleClick = (chip: HTMLInoChipElement) => {
      const isSelected = selectedChips.has(chip.value);
      chip.selected = !isSelected;

      if (isSelected) {
        selectedChips.delete(chip.value);
      } else {
        selectedChips.add(chip.value);
      }
    };

    return html`
      <div class="ino-chip-story">
        ${values.map(
          (value) => html` <ino-chip
            value="${value}"
            selectable
            @chipClicked="${(ev) => handleClick(ev.target)}"
            >${value}
          </ino-chip>`
        )}
      </div>
    `;
  }
);
/**
 * In order to use ino-chips as filter, use `selectable` on each element
 */
export const Filter = templateFilter.generatePlaygroundStory();

const templateRemove = new TemplateGenerator<Components.InoChip>(
  'ino-chip',
  () => {
    const chips = ['Chip 1', 'Chip 2', 'Chip 3'];

    const handleClick = (chip: HTMLInoChipElement) => chip.remove();

    return html`
      <div class="ino-chip-story">
        ${chips.map(
          (value, index) => html` <ino-chip
            value="${value}"
            removable="${index !== 0}"
            @chipRemoved="${(ev) => handleClick(ev.target)}"
            >${value}
          </ino-chip>`
        )}
      </div>
    `;
  }
);

/**
 * In order to make ino-chip-elements removable, add `removable`. This will add a close icon on the right side of this chip which emits the `removeChip` event on click.
 */
export const Remove = templateRemove.generatePlaygroundStory();

export const NotClickable = template.generateStoryForProp('notclickable', true);
