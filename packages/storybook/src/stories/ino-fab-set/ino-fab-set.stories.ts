import { Components } from '@inovex.de/elements';
import { Meta } from '@storybook/web-components';
import { TemplateGenerator } from '../template-generator';
import { html } from 'lit-html';
import { decorateStoryWithClass, withIconControl } from '../utils';

import './ino-fab-set.scss';

export default {
  title: 'Buttons/<ino-fab-set>',
  component: 'ino-fab-set',
  parameters: {
    actions: {
      handles: ['click ino-fab'],
    },
  },
  decorators: [(story) => decorateStoryWithClass(story)],
  args: {
    openDial: false,
    dialDirection: 'top',
    leftRightLocation: 'left',
    topBottomLocation: 'bottom',
  },
} as Meta<Components.InoFabSet>;

const template = new TemplateGenerator<
  Components.InoFabSet & { iconOpened: string; iconClosed: string }
>(
  'ino-fab-set',
  (args) => html`
    <div style="position: absolute">
      <ino-fab-set
        open-dial="${args.openDial}"
        top-bottom-location="${args.topBottomLocation}"
        left-right-location="${args.leftRightLocation}"
        dial-direction="${args.dialDirection}"
        @click="${clickHandler}"
      >
        <ino-icon
          @clickEl="${clickHandler}"
          icon="${args.iconOpened}"
          slot="icon-opened"
        ></ino-icon>
        <ino-icon
          @clickEl="${clickHandler}"
          icon="${args.iconClosed}"
          slot="icon-closed"
        ></ino-icon>
        <ino-fab label="First FAB">
          <ino-icon slot="icon-leading" icon="star"></ino-icon>
        </ino-fab>
        <ino-fab label="Second FAB">
          <ino-icon slot="icon-leading" icon="favorite"></ino-icon>
        </ino-fab>
        <ino-fab label="Third FAB">
          <ino-icon slot="icon-leading" icon="info"></ino-icon>
        </ino-fab>
      </ino-fab-set>
    </div>
  `
);
export const Playground = template.generatePlaygroundStory();
withIconControl(Playground, 'iconOpened', '_fab_set_arrow_down');
withIconControl(Playground, 'iconClosed', '_fab_set_arrow_up');

function clickHandler(e: CustomEvent<void>) {
  const fabSetEl = (e.target as HTMLElement).closest(
    'ino-fab-set'
  ) as HTMLInoFabSetElement;
  fabSetEl.openDial = !fabSetEl.openDial;
}
