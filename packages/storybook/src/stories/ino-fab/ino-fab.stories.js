import { storiesOf } from '@storybook/html';
import { text, boolean, select } from '@storybook/addon-knobs';

import withStencilReadme from '_local-storybookcore/with-stencil-readme';

import componentReadme from '_local-elements/src/components/ino-fab/readme.md';

import ICONS from '_local-elements/src/components/ino-icon/icons';
import './ino-fab.scss';

export default {
  title: 'Buttons/<ino-fab>',
  decorators: [withStencilReadme(componentReadme)],
};

export const DefaultUsage = () => /*html*/ `
    <div class="story-fab">
    <h4>Customizable Fab</h4>
     <style>
          ino-fab.customizable-fab {
            --ino-fab-color: ${text('--ino-fab-color', '#ffffff', 'Custom Properties')};
            --ino-fab-background-color: ${text('--ino-fab-background-color', '#3d40f5', 'Custom Properties')};
            --ino-fab-background-color-hover: ${text('--ino-fab-background-color-hover', '#5d60f7', 'Custom Properties')};
            --ino-fab-background-color-active: ${text('--ino-fab-background-color-active', '#0d10f3', 'Custom Properties')};
            --ino-fab-icon-color: ${text('--ino-fab-icon-color', '#ffffff', 'Custom Properties')};
            --ino-fab-color-disabled: ${text('--ino-fab-color-disabled', '#ffffff', 'Custom Properties')};
            --ino-fab-background-color-disabled: ${text('--ino-fab-background-color-disabled', '#9d9d9d', 'Custom Properties')};
            --ino-fab-icon-color-disabled: ${text('--ino-fab-icon-color-disabled', '#ffffff', 'Custom Properties')};
          }
      </style>
      <ino-fab
        class="customizable-fab"
      ino-edge-position="${select(
        'ino-edge-position',
        ['top-left', 'top-right', 'bottom-right', 'bottom-left', 'none'],
        'top-left'
      )}"
      ino-icon="${select('ino-leading-icon', ICONS, 'add')}"
      ino-label="${text('ino-label', 'Label')}"
      ino-extended="${boolean('ino-extended', false)}"
      ino-disabled="${boolean('ino-disabled', false)}"
      ino-mini="${boolean('ino-mini', false)}"></ino-fab>

    <h4>Variants</h4>
      <div class="ino-fab-variants">
        <ino-fab ino-tooltip-placement="none" ino-label="Default Fab" ino-icon="add"></ino-fab>
        <ino-fab ino-mini ino-label="Mini Fab" ino-icon="add"></ino-fab>
        <ino-fab ino-extended ino-label="Extended Button" ino-icon="add"></ino-fab>
        <ino-fab ino-disabled ino-label="Disabled Button" ino-icon="add"></ino-fab>
      </div>
    </div>
    <h4>Different Edge Positions</h4>
    <div class="ino-fab-variants">
       <ino-fab ino-label="top-left" ino-icon="add" ino-edge-position="top-left"></ino-fab>
       <ino-fab ino-label="top-right" ino-icon="add" ino-edge-position="top-right"></ino-fab>
       <ino-fab ino-label="bottom-right" ino-icon="add" ino-edge-position="bottom-right"></ino-fab>
       <ino-fab ino-label="bottom-left" ino-icon="add" ino-edge-position="bottom-left"></ino-fab>
       <ino-fab ino-label="none" ino-icon="add" ino-edge-position="none"></ino-fab>
    </div>
  `;
