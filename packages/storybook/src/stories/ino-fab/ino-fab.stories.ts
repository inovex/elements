import { Components } from '@inovex.de/elements';
import { Meta } from '@storybook/web-components';
import { html } from 'lit-html';
import { TemplateGenerator } from '../template-generator';
import { cssColor, decorateStoryWithClass, withIconControl } from '../utils';
import { CssProperties } from '../types';

import './ino-fab.scss';

const FAB_CSS_PROPS: CssProperties = {
  color: cssColor('--ino-fab-color', 'Text color', '#fff'),
  backgroundColor: cssColor(
    '--ino-fab-background-color',
    'Background color.',
    '#2d02ff',
  ),
  backgroundColorHover: cssColor(
    '--ino-fab-background-color-hover',
    'Background color on hover.',
    '#4655ff',
  ),
  backgroundColorActive: cssColor(
    '--ino-fab-background-color-active',
    'Background color if active.',
    '#1801e1',
  ),
  iconColor: cssColor(
    '--ino-fab-icon-color',
    'Color of the slotted icon.',
    '#fff',
  ),
  colorDisabled: cssColor(
    '--ino-fab-color-disabled',
    'Text color if disabled.',
    '#fff',
  ),
  backgroundColorDisabled: cssColor(
    '--ino-fab-background-color-disabled',
    'Background color if disabled.',
    '#b6b4c4',
  ),
  iconColorDisabled: cssColor(
    '--ino-fab-icon-color-disabled',
    'Color of the slotted icon if disabled.',
    '#fff',
  ),
};

export default {
  title: 'Buttons/ino-fab',
  component: 'ino-fab',
  decorators: [(story) => decorateStoryWithClass(story, 'story-fab')],
  args: {
    disabled: false,
    edgePosition: 'top-left',
    extended: false,
    label: 'Label',
    mini: false,
    tooltipPlacement: 'right',
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

const template = new TemplateGenerator<Components.InoFab>(
  'ino-fab',
  (args) => html`
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
);

export const Playground = template.generatePlaygroundStory(FAB_CSS_PROPS);
withIconControl(Playground, 'icon', 'add');

const templateVariants = new TemplateGenerator<Components.InoFab>(
  'ino-fab',
  () => html`
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
);
/**
 * In order to achive diffrent variations, use this properties:
 *
 * - `mini`: Optional, modifies the FAB to a smaller size
 * - `extended`: Optional, modifies the FAB to wider size which includes a text label.
 * - `disabled`: Disables the button
 */
export const Variants = templateVariants.generatePlaygroundStory();

const templateEdgePositions = new TemplateGenerator<Components.InoFab>(
  'ino-fab',
  (args) => html`
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
  `,
);
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
export const EdgePositions = templateEdgePositions.generatePlaygroundStory();
