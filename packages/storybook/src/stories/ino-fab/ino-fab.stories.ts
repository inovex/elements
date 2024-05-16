import { Meta } from '@storybook/web-components';
import { Components } from '@inovex.de/elements';
import { html } from 'lit-html';
import Story from '../StoryWrapper';
import './ino-fab.scss';

const InoFabMeta = {
  title: 'Buttons/ino-fab',
  component: 'ino-fab',
  render: args => html`
    <ino-fab
      class="customizable-fab"
      disabled="${args.disabled}"
      edge-position="${args.edgePosition}"
      label="${args.label}"
      variant="${args.variant}"
      shadow="${args.shadow}"
    >
      <ino-icon slot="icon-leading" icon="add" />
    </ino-fab>
  `,
  args: {
    disabled: false,
    edgePosition: 'top-right',
    label: 'Hello',
    variant: 'standard',
    shadow: true,
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['small', 'standard', 'large', 'extended'],
    },
    edgePosition: {
      control: {
        type: 'select',
      },
      options: ['top-left', 'top-right', 'bottom-right', 'bottom-left', 'none'],
    },
  },
} as Meta<Components.InoFab>;

export default InoFabMeta;

export const Default = Story({
  ...InoFabMeta,
});

/**
 * In order to achive diffrent variations, use this properties:
 *
 * - `small`: modifies the FAB to a smaller size
 * - `extended`: modifies the FAB to wider size which includes a text label.
 * - `large`: modifies the FAB to a larger size
 * - `standard`: default size
 * - `disabled`: Disables the button
 */
export const Variants = Story({
  ...Default,
  render: () => html`
    <div class="ino-fab-variants">
      <ino-fab tooltip-placement="none" label="Default Fab">
        <ino-icon slot="icon-leading" icon="add"></ino-icon>
      </ino-fab>
      <ino-fab tooltip-placement="top" variant="small" label="small fab">
        <ino-icon slot="icon-leading" icon="add"></ino-icon>
      </ino-fab>
      <ino-fab variant="extended" label="Extended Button">
        <ino-icon slot="icon-leading" icon="add"></ino-icon>
      </ino-fab>
      <ino-fab disabled label="Disabled Button">
        <ino-icon slot="icon-leading" icon="add"></ino-icon>
      </ino-fab>
    </div>
  `,
});

/**
 * In order to achive edges on the fab-button, add `edge-position`.
 *
 * Possible values are:
 *
 * - `top-right`
 * - `top-left`
 * - `bottom-right`
 * - `bottom-left`
 * - `none` = `top-left`
 */
export const EdgePositions = Story({
  ...Default,
  render: () => html`
    <div class="ino-fab-variants">
      <ino-fab id="left-fab" label="top-left" edge-position="top-left">
        <ino-icon slot="icon-leading" icon="add"></ino-icon>
      </ino-fab>
      <ino-tooltip for="left-fab" placement="left" trigger="mouseenter focus" color-scheme="transparent" arrow="false">
        top-left
      </ino-tooltip>

      <ino-fab id="top-fab" label="top-right" edge-position="top-right">
        <ino-icon slot="icon-leading" icon="add"></ino-icon>
      </ino-fab>
      <ino-tooltip for="top-fab" placement="top" trigger="mouseenter focus" color-scheme="transparent" arrow="false">
        top-right
      </ino-tooltip>

      <ino-fab id="bottom-fab" label="bottom-right" edge-position="bottom-right">
        <ino-icon slot="icon-leading" icon="add"></ino-icon>
      </ino-fab>
      <ino-tooltip
        for="bottom-fab"
        placement="bottom"
        trigger="mouseenter focus"
        color-scheme="transparent"
        arrow="false"
      >
        bottom-right
      </ino-tooltip>

      <ino-fab id="top-again-fab" label="bottom-left" edge-position="bottom-left">
        <ino-icon slot="icon-leading" icon="add"></ino-icon>
      </ino-fab>
      <ino-tooltip
        for="top-again-fab"
        placement="top"
        trigger="mouseenter focus"
        color-scheme="transparent"
        arrow="false"
      >
        bottom-left
      </ino-tooltip>
      <ino-fab id="right-fab" label="none" edge-position="none">
        <ino-icon slot="icon-leading" icon="add"></ino-icon>
      </ino-fab>
      <ino-tooltip
        for="right-fab"
        placement="right"
        trigger="mouseenter focus"
        color-scheme="transparent"
        arrow="false"
      >
        none
      </ino-tooltip>
    </div>
  `,
});
