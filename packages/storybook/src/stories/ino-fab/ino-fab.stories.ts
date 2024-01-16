import { Meta } from '@storybook/web-components';
import { Components } from '@inovex.de/elements';
import { html } from 'lit-html';
import Story from '../StoryWrapper';
import './ino-fab.scss';

const InoFabMeta = {
  title: 'Buttons/<ino-fab>',
  component: 'ino-fab',
  render: (args) => html`
    <ino-fab
      class="customizable-fab"
      disabled="${args.disabled}"
      edge-position="${args.edgePosition}"
      extended="${args.extended}"
      label="${args.label}"
      mini="${args.mini}"
      tooltip-placement="${args.tooltipPlacement}"
    >
      <ino-icon slot="icon-leading" icon="${args.icon}" />
    </ino-fab>
  `,
  args: {
    disabled: false,
    edgePosition: 'top-left',
    extended: false,
    label: 'Label',
    mini: false,
    tooltipPlacement: 'right',
    icon: 'add',
  },
  argTypes: {
    edgePosition: {
      control: {
        type: 'select',
      },
      options: ['top-left', 'top-right', 'bottom-right', 'bottom-left', 'none'],
    },
    tooltipPlacement: {
      control: {
        type: 'select',
      },
      options: [
        'auto',
        'auto-end',
        'auto-start',
        'bottom',
        'bottom-end',
        'bottom-start',
        'left',
        'left-end',
        'left-start',
        'none',
        'right',
        'right-end',
        'right-start',
        'top',
        'top-end',
        'top-start',
      ],
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
 * - `mini`: Optional, modifies the FAB to a smaller size
 * - `extended`: Optional, modifies the FAB to wider size which includes a text label.
 * - `disabled`: Disables the button
 */
export const Variants = Story({
  ...Default,
  render: () => html`
    <div class="ino-fab-variants">
      <ino-fab tooltip-placement="none" label="Default Fab">
        <ino-icon slot="icon-leading" icon="add"></ino-icon>
      </ino-fab>
      <ino-fab mini label="Mini Fab">
        <ino-icon slot="icon-leading" icon="add"></ino-icon>
      </ino-fab>
      <ino-fab extended label="Extended Button">
        <ino-icon slot="icon-leading" icon="add"></ino-icon>
      </ino-fab>
      <ino-fab disabled label="Disabled Button">
        <ino-icon slot="icon-leading" icon="add"></ino-icon>
      </ino-fab>
    </div>
  `,
})

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
      <ino-fab label="top-left" edge-position="top-left">
        <ino-icon slot="icon-leading" icon="add"></ino-icon>
      </ino-fab>
      <ino-fab label="top-right" edge-position="top-right">
        <ino-icon slot="icon-leading" icon="add"></ino-icon>
      </ino-fab>
      <ino-fab label="bottom-right" edge-position="bottom-right">
        <ino-icon slot="icon-leading" icon="add"></ino-icon>
      </ino-fab>
      <ino-fab label="bottom-left" edge-position="bottom-left">
        <ino-icon slot="icon-leading" icon="add"></ino-icon>
      </ino-fab>
      <ino-fab label="none" edge-position="none">
        <ino-icon slot="icon-leading" icon="add"></ino-icon>
      </ino-fab>
    </div>
  `
})