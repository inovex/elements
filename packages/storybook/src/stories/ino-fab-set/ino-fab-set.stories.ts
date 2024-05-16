import { Meta } from '@storybook/web-components';
import { Components } from '@inovex.de/elements';
import { html } from 'lit-html';
import Story from '../StoryWrapper';
import './ino-fab-set.scss';

const clickHandler = (e: CustomEvent<void>) => {
  const fabSetEl = (e.target as HTMLElement).closest('ino-fab-set') as HTMLInoFabSetElement;
  fabSetEl.openDial = !fabSetEl.openDial;
};

const InoFabSetMeta = {
  title: 'Buttons/ino-fab-set',
  component: 'ino-fab-set',
  parameters: {
    actions: {
      handles: ['click ino-fab'],
    },
    // layout: 'centered',
    docs: {
      story: {
        height: '300px',
      },
    },
  },
  render: args => html`
    <ino-fab-set
      open-dial="${args.openDial}"
      label="${args.label}"
      orientation="${args.orientation}"
      @click="${clickHandler}"
    >
      <ino-fab slot="primary-fab" label="${args.label}" edge-position="top-right" tooltip-placement="none">
        <ino-icon slot="icon-leading" icon="options_dotted"></ino-icon>
      </ino-fab>
      <ino-fab label="First FAB" variant="small">
        <ino-icon slot="icon-leading" icon="download"></ino-icon>
      </ino-fab>
      <ino-fab label="Second FAB" variant="small">
        <ino-icon slot="icon-leading" icon="remove"></ino-icon>
      </ino-fab>
      <ino-fab label="Third FAB" variant="small">
        <ino-icon slot="icon-leading" icon="edit"></ino-icon>
      </ino-fab>
    </ino-fab-set>
  `,
  args: {
    icon: 'options_dotted',
    label: 'Label',
    openDial: false,
    orientation: 'vertical',
  },
} as Meta<Components.InoFabSet>;

export default InoFabSetMeta;

export const Default = Story({
  ...InoFabSetMeta,
});

/**
 * This example shows the ino-fab-set component positioned at the bottom left.
 * The primary ino-fab button `Open Chat` opens a vertical menu with more options.
 * Additionally, each secondary ino-fab button has an ino-tooltip to provide more information.
 */
export const Extended = Story({
  ...Default,

  render: () => html`
    <ino-fab-set
      open-dial="false"
      label="Open Chat"
      orientation="vertical"
      class="ino-fab-set--bottom-left"
      @click="${clickHandler}"
    >
      <ino-fab slot="primary-fab" label="Open Chat" edge-position="top-right" variant="extended">
        <ino-icon slot="icon-leading" icon="chat"></ino-icon>
      </ino-fab>
      <ino-fab id="second-fab" label="Second FAB" variant="small">
        <ino-icon slot="icon-leading" icon="call"></ino-icon>
      </ino-fab>
      <ino-tooltip
        for="second-fab"
        placement="left"
        trigger="mouseenter focus"
        color-scheme="transparent"
        arrow="false"
      >
        call
      </ino-tooltip>
      <ino-fab id="third-fab" label="Third FAB" variant="small">
        <ino-icon slot="icon-leading" icon="mail"></ino-icon>
      </ino-fab>
      <ino-tooltip for="third-fab" placement="left" trigger="mouseenter focus" color-scheme="transparent" arrow="false">
        mail
      </ino-tooltip>
    </ino-fab-set>
  `,
});
