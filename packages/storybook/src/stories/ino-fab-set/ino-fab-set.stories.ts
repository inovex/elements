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
      @click="${clickHandler}"
    >
      <ino-icon @clickEl="${clickHandler}" icon="arrow_down" slot="icon-opened"></ino-icon>
      <ino-icon @clickEl="${clickHandler}" icon="arrow_up" slot="icon-closed"></ino-icon>
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
  `,
  args: {
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
