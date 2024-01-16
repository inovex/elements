import { Meta } from '@storybook/web-components';
import { Components } from '@inovex.de/elements';
import { html } from 'lit-html';
import Story from '../StoryWrapper';
import './ino-chip.scss';

const InoChipMeta = {
  title: 'Buttons/<ino-chip>',
  component: 'ino-chip',
  parameters: {
    actions: {
      handles: ['chipClicked', 'chipRemoved'],
    },
  },
  render: (args) => html`
    <ino-chip
      class="customizable-chip"
      disabled="${args.disabled}"
      fill="${args.fill}"
      removable="${args.removable}"
      selectable="${args.selectable}"
      selected="${args.selected}"
      value="${args.value}"
      clickable="${args.clickable}"
    >
      Label
    </ino-chip>
  `,
  args: {
    disabled: false,
    fill: 'solid',
    removable: false,
    selectable: false,
    selected: false,
    clickable: true,
    value: '',
  },
} as Meta<Components.InoChip>;

export default InoChipMeta;

export const Default = Story({
  ...InoChipMeta,
});

export const FillSolid = Story({
  ...Default,
  docsFromProperty: 'fill',
  args: {
    fill: 'solid'
  }
})

export const FillOutline = Story({
  ...Default,
  docsFromProperty: 'fill',
  args: {
    fill: 'outline'
  }
})

/**
 In order to include icons, use the `icon-leading` or `icon-trailing` slot
 */
export const Icons = Story({
  ...Default,
  render: () => html`
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
})

/**
 * In order to use ino-chips as filter, use `selectable` on each element
 */
export const Filter = Story({
  ...Default,
  render: () => {
    const values = ['Chip 1', 'Chip 2', 'Chip 3'];
    const selectedChips = new Set<string>();

    const handleClick = (chip: HTMLInoChipElement | undefined) => {
      if(!chip?.value) {
        return
      }
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
          </ino-chip>`,
        )}
      </div>
    `
  }
})

/**
 * In order to make ino-chip-elements removable, add `removable`. This will add a close icon on the right side of this chip which emits the `removeChip` event on click.
 */
export const Remove = Story({
  ...Default,
  render: () => {
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
          </ino-chip>`,
        )}
      </div>
    `
  }
})

export const NotClickable = Story({
  ...Default,
  docsFromProperty: 'clickable',
  args: {
    clickable: false,
  }
})