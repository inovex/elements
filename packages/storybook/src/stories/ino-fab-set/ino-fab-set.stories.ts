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
      variant="${args.variant}"
      icon="${args.icon}"
      @click="${clickHandler}"
    >
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
    variant: 'menu',
    icon: 'options_dotted',
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
