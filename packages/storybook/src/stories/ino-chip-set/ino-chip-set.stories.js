import { boolean, select, text } from '@storybook/addon-knobs';

import withStencilReadme from '_local-storybookcore/with-stencil-readme';

import chipSetReadme from '_local-elements/src/components/ino-chip-set/readme.md';
import chipReadme from '_local-elements/src/components/ino-chip/readme.md';
import './ino-chip-set.scss';

export default {
  title: 'Buttons/<ino-chip-set>',
  parameters: {
    actions: {
      handles: ['removeChip'],
    },
  },
};

export const DefaultUsage = () => /*html*/ `
<div class="story-chips">
  <h4>Customizable chip set</h4>
  <p>Change the type and check the action logger for events.</p>
  <ino-chip-set
    ino-type="${select('ino-type', ['', 'choice', 'filter'], '')}"
    class="customizable-chip-set"
  >
    <ino-chip ino-value="1" ino-label="Chip 1" ino-selected ino-icon-leading>
        <ino-icon slot="ino-icon-leading" ino-icon="favorite"></ino-icon>
    </ino-chip>
    <ino-chip ino-value="2" ino-label="Chip 2"></ino-chip>
    <ino-chip ino-value="3" ino-label="Chip 3"></ino-chip>
  </ino-chip-set>

  <h4>Type</h4>

  <h5>ino-type="filter"</h5>

  <ino-chip-set ino-type="filter">
    <ino-chip ino-value="1" ino-label="Chip 1"></ino-chip>
    <ino-chip ino-value="2" ino-label="Chip 2 - with icon" ino-icon-leading>
        <ino-icon slot="ino-icon-leading" ino-icon="favorite"></ino-icon>
    </ino-chip>
    <ino-chip ino-value="3" ino-label="Chip 3"></ino-chip>
  </ino-chip-set>

  <h5>ino-type="choice"</h5>
  <ino-chip-set ino-type="choice">
    <ino-chip ino-label="Chip 0" ino-value="0"></ino-chip>
    <ino-chip ino-selected ino-label="Selected chip" ino-value="3"></ino-chip>
    <ino-chip ino-label="Chip 3" ino-value="3"></ino-chip>
  </ino-chip-set>
</div>
`;

DefaultUsage.decorators = [withStencilReadme(chipSetReadme)];

export const InoChip = () => /*html*/ `
<div class="story-chip">
  <ino-chip-set ino-type="choice">
    <ino-chip
      class="customizable-chip"
      ino-color-scheme="${select(
        'ino-color-scheme',
        [
          '',
          'primary',
          'secondary',
          'success',
          'warning',
          'error',
          'light',
          'dark',
        ],
        '',
      )}"
      ino-fill="${select('ino-fill', ['solid', 'outline'], 'solid')}"
      ino-removable="${boolean('ino-removable', true)}"
      ino-selected="${boolean('ino-selected', false)}"
      ino-selectable="${boolean('ino-selectable', false)}"
      ino-label="${text('<slot />', 'Customizable chip')}"
    </ino-chip>
  </ino-chip-set>

  <h4>Colors</h4>
  <ino-chip-set>
    <ino-chip ino-label="Default"></ino-chip>
    <ino-chip ino-color-scheme="primary" ino-label="Primary"></ino-chip>
    <ino-chip ino-color-scheme="secondary" ino-label="Secondary"></ino-chip>
    <ino-chip ino-color-scheme="success" ino-label="Success"></ino-chip>
    <ino-chip ino-color-scheme="warning" ino-label="Warning"></ino-chip>
    <ino-chip ino-color-scheme="error" ino-label="Error"></ino-chip>
    <ino-chip ino-color-scheme="light" ino-label="Light"></ino-chip>
    <ino-chip ino-color-scheme="dark" ino-label="Dark"></ino-chip>
  </ino-chip-set>

  <h4>Outline</h4>
  <ino-chip-set>
    <ino-chip ino-fill="outline" ino-label="Outline"></ino-chip>
    <ino-chip ino-fill="outline" ino-label="Primary" ino-color-scheme="primary"></ino-chip>
    <ino-chip ino-fill="outline" ino-label="Secondary" ino-color-scheme="secondary"></ino-chip>
  </ino-chip-set>

  <h4>With icons</h4>
  <ino-chip-set>
    <ino-chip ino-color-scheme="primary" ino-icon-leading ino-label="Info" ino-fill="outline">
      <ino-icon slot="ino-icon-leading" ino-icon="info"></ino-icon>
    </ino-chip>
    <ino-chip ino-color-scheme="error" ino-icon-leading ino-label="Error">
      <ino-icon slot="ino-icon-leading" ino-icon="warning"></ino-icon>
    </ino-chip>
  </ino-chip-set>

  <h4>Removable and states</h4>
  <ino-chip-set>
    <ino-chip ino-color-scheme="primary" ino-removable ino-label="Removable"></ino-chip>
    <ino-chip ino-color-scheme="primary" ino-selected ino-label="Selected"></ino-chip>
    <ino-chip ino-color-scheme="primary" ino-selected ino-label="Selected with Checkmark" ino-selectable></ino-chip>
  </ino-chip-set>
</div>
`;

InoChip.storyName = '<ino-chip>';
InoChip.decorators = [withStencilReadme(chipReadme)];
