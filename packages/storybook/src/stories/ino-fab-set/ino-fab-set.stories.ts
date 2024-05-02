import { Meta } from '@storybook/web-components';
import { Components } from '@inovex.de/elements';
import { html } from 'lit-html';
import Story from '../StoryWrapper';
import './ino-fab-set.scss';
import { modifyYarnRcToFitNewDirectory } from 'nx/src/utils/package-manager';
import { description } from 'packages/storybook/dist/assets/package-CneTSe02';

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
      top-bottom-location="${args.topBottomLocation}"
      left-right-location="${args.leftRightLocation}"
      dial-direction="${args.dialDirection}"
      label="${args.label}"
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
    dialDirection: 'top',
    leftRightLocation: 'left',
    topBottomLocation: 'bottom',
  },
} as Meta<Components.InoFabSet>;

export default InoFabSetMeta;

export const Default = Story({
  ...InoFabSetMeta,
});

export const Stacked = Story({
  parameters: {
    docs: {
      description: {
        story: 'TEST',
      },
    },
  },
  ...Default,

  render: () => html`
    <ino-fab-set
      open-dial="false"
      top-bottom-location="bottom"
      left-right-location="left"
      dial-direction="top"
      label="Open Chat"
      @click="${clickHandler}"
    >
      <ino-fab slot="primary-fab" label="Open Chat" edge-position="top-right" tooltip-placement="none" extended>
        <ino-icon slot="icon-leading" icon="chat"></ino-icon>
      </ino-fab>
      <ino-fab label="Second FAB" variant="small">
        <ino-icon slot="icon-leading" icon="call"></ino-icon>
      </ino-fab>
      <ino-fab label="Third FAB" variant="small">
        <ino-icon slot="icon-leading" icon="mail"></ino-icon>
      </ino-fab>
    </ino-fab-set>
  `,
});

export const DialDirection = Story({
  ...Default,
  docsFromProperty: 'dialDirection',
  args: {
    dialDirection: 'bottom',
  },
});

export const LeftRightLocation = Story({
  ...Default,
  docsFromProperty: 'leftRightLocation',
  args: {
    leftRightLocation: 'right',
  },
});

export const TopBottomLocation = Story({
  ...Default,
  docsFromProperty: 'topBottomLocation',
  args: {
    topBottomLocation: 'top',
  },
});
