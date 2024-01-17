import { Meta } from '@storybook/web-components';
import { Components } from '@inovex.de/elements';
import { html } from 'lit-html';
import { useEffect } from '@storybook/preview-api';
import Story from '../StoryWrapper';
import './ino-range.scss';

const InoRangeMeta = {
  title: 'Input/ino-range',
  component: 'ino-range',
  decorators: [
    (story) => {
      useEffect(() => {
        const eventHandlerSingle = (e: CustomEvent<number>) =>
          ((e.target as HTMLInoRangeElement).value = e.detail);
        const eventHandlerStart = (e: CustomEvent<number>) =>
          ((e.target as HTMLInoRangeElement).valueStart = e.detail);
        const eventHandlerEnd = (e: CustomEvent<number>) =>
          ((e.target as HTMLInoRangeElement).valueEnd = e.detail);
        const inoRanges = document.querySelectorAll('ino-range');
        inoRanges.forEach((r) => {
          r.addEventListener('valueChange', eventHandlerSingle);
          r.addEventListener('valueStartChange', eventHandlerStart);
          r.addEventListener('valueEndChange', eventHandlerEnd);
        });
        return () =>
          inoRanges.forEach((r) => {
            r.removeEventListener('valueChange', eventHandlerSingle);
            r.removeEventListener('valueStartChange', eventHandlerStart);
            r.removeEventListener('valueEndChange', eventHandlerEnd);
          });
      });
      return story();
    },
  ],
  render: (args) => html`
    <ino-range
      class="customizable-range"
      disabled="${args.disabled}"
      min="${args.min}"
      max="${args.max}"
      name="${args.name}"
      discrete="${args.discrete}"
      markers="${args.markers}"
      value="${args.value}"
      step="${args.step}"
      ranged="${args.ranged}"
      value-start="${args.valueStart}"
      value-end="${args.valueEnd}"
    >
    </ino-range>
  `,
  args: {
    disabled: false,
    discrete: false,
    min: 0,
    max: 100,
    value: 50,
    valueStart: 30,
    valueEnd: 70,
    name: '',
    markers: false,
    step: 1,
    ranged: false,
  },
} as Meta<Components.InoRange>;

export default InoRangeMeta;

export const Default = Story({
  ...InoRangeMeta,
});

export const Discrete = Story({
  ...Default,
  docsFromProperty: 'discrete',
  args: {
    discrete: true,
  },
});

export const Markers = Story({
  ...Default,
  docsFromProperty: 'markers',
  args: {
    markers: true,
    discrete: true,
  },
});

export const Ranged = Story({
  ...Default,
  docsFromProperty: 'ranged',
  args: {
    ranged: true,
    valueStart: 30,
    valueEnd: 70,
    discrete: true,
  },
});
