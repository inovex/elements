import { storiesOf } from '@storybook/html';
import { text, boolean, select } from '@storybook/addon-knobs';

import { withActions } from '@storybook/addon-actions';
import withStencilReadme from '_local-storybookcore/with-stencil-readme';

import componentReadme from '_local-elements/src/components/ino-fab-set/readme.md';

import ICONS from '_local-elements/src/components/ino-icon/icons';
import './ino-fab-set.scss';

const tooltipPlacementOptions = [
  'top',
  'top-start',
  'top-end',
  'right',
  'right-start',
  'right-end',
  'bottom',
  'bottom-start',
  'bottom-end',
  'left',
  'left-start',
  'left-end'
]

storiesOf('<ino-fab-set>', module)
  .addDecorator(withStencilReadme(componentReadme))
  .addDecorator(withActions('click ino-fab'))
  .add('Default usage', () => /*html*/`
    <div class="story-fab-set">
      <ino-fab-set 
      ino-top-bottom-location="${select('ino-top-bottom-location', ['top', 'bottom'], 'bottom', 'FAB-set')}"
      ino-left-right-location="${select('in-left-right-location', ['left', 'right'], 'right', 'FAB-set')}"
      ino-dial-direction="${select('ino-dial-direction', ['top', 'bottom', 'left', 'right'], 'top', 'FAB-set')}">

        <ino-fab
          slot="primary-fab"
          ino-color-scheme="${select(
            'ino-color-scheme',
            ['', 'primary', 'secondary', 'tertiary', 'success', 'warning', 
              'error', 'light', 'dark'
            ],
            'primary',
            'Primary FAB'
          )}"
          ino-icon="${select('ino-icon', ICONS, 'add', 'Primary FAB')}"
          ino-label="${text('ino-label', 'Label 1', 'Primary FAB')}"
          ino-extended="${boolean('ino-extended', false, 'Primary FAB')}"
          ino-tooltip-placement="${select('ino-tooltip-placement', tooltipPlacementOptions, 'left', 'Primary FAB')}"
          ino-mini="${boolean('ino-mini', false, 'Primary FAB')}"
        >
        </ino-fab>

        <ino-fab
          ino-color-scheme="${select(
            'ino-color-scheme-fab-1',
            ['', 'primary', 'secondary', 'tertiary', 'success', 'warning', 
              'error', 'light', 'dark'
            ],
            'secondary',
            'First FAB'
          )}"
          ino-icon="${select('ino-icon-fab1', ICONS, 'star', 'First FAB')}"
          ino-label="${text('ino-label-fab1', 'Label 1', 'First FAB')}"
          ino-mini="${boolean('ino-mini-fab1', true, 'First FAB')}"
        ></ino-fab>
        <ino-fab
          ino-color-scheme="${select(
            'ino-color-scheme-fab-2',
            ['', 'primary', 'secondary', 'tertiary', 'success', 'warning', 
              'error', 'light', 'dark'
            ],
            'secondary',
            'Second FAB'
          )}"
          ino-icon="${select('ino-icon-fab2', ICONS, 'favorite', 'Second FAB')}"
          ino-label="${text('ino-label-fab2', 'Label 2', 'Second FAB')}"
          ino-mini="${boolean('ino-mini-fab2', true, 'Second FAB')}"
        ></ino-fab>
        <ino-fab
          ino-color-scheme="${select(
            'ino-color-scheme-fab-3',
            ['', 'primary', 'secondary', 'tertiary', 'success', 'warning', 
              'error', 'light', 'dark'
            ],
            'secondary',
            'Third FAB'
          )}"
          ino-icon="${select('ino-icon-fab3', ICONS, 'info', 'Third FAB')}"
          ino-label="${text('ino-label-fab3', 'Label 3', 'Third FAB')}"
          ino-mini="${boolean('ino-mini-fab3', true, 'Third FAB')}"
        ></ino-fab>
      </ino-fab-set>
    </div>
  `);
