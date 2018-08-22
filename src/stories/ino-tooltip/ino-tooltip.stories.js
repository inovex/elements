import { storiesOf } from '@storybook/vue';
import { boolean, select, text } from '@storybook/addon-knobs/vue';

import renderTemplate from '../core/playground-story/template-renderer';

import componentReadme from '../../components/ino-tooltip/readme.md';
import './ino-tooltip.scss';


storiesOf('<ino-tooltip>', module)
  .addDecorator(renderTemplate(componentReadme))
  .add('Default usage', () => ({
    render: h => (
      <div class="story-tooltip">
        <ino-button id="tooltip-target">Tooltip</ino-button>
        <ino-tooltip
          ino-for={text('ino-for', 'tooltip-target')}
          ino-label={text('ino-label', 'This is a customaziable tooltip text.')}
          ino-placement={select('ino-placement', ['top', 'right', 'bottom', 'left'], 'top')}
          ino-trigger={select('ino-trigger', ['hover', 'focus', 'click',
            'hover focus', 'hover click', 'focus click', 'hover focus click'], 'hover focus'
          )}>
        </ino-tooltip>

        <h4>Placements</h4>
        <ino-tooltip ino-label="This is a tooltip left" ino-placement="left" ino-for="tooltip-positions-target"></ino-tooltip>
        <ino-tooltip ino-label="This is a tooltip right" ino-placement="right" ino-for="tooltip-positions-target"></ino-tooltip>
        <ino-tooltip ino-label="This is a tooltip top" ino-placement="top" ino-for="tooltip-positions-target"></ino-tooltip>
        <ino-tooltip ino-label="This is a tooltip bottom" ino-placement="bottom" ino-for="tooltip-positions-target"></ino-tooltip>
        <ino-button class="placement-button" id="tooltip-positions-target">Tooltip</ino-button>

        <h4>Triggers</h4>
        <ino-button id="tooltip-hover-focus">Hover & focus</ino-button>
        <ino-tooltip ino-for="tooltip-hover-focus" ino-label="This tooltip occurs on hover and focus"></ino-tooltip>

        <ino-button id="tooltip-click">Click</ino-button>
        <ino-tooltip ino-for="tooltip-click" ino-label="This tooltip occurs on click" ino-trigger="click"></ino-tooltip>
      </div>
    )
  }))
