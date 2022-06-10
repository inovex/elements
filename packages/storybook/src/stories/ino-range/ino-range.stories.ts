import { Components } from '@inovex.de/elements';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { decorateStoryWithClass, withColorScheme } from '../utils';
import './ino-range.scss';
import { useEffect } from '@storybook/client-api';
import { TemplateGenerator } from '../template-generator';

export default {
  title: 'Input/<ino-range>',
  component: 'ino-range',
  decorators: [
    (story) => decorateStoryWithClass(story, 'story-range'),
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

// the basic template for the checkbox component
const template = new TemplateGenerator<Components.InoRange>(
  'ino-range',
  (args) => html`
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
      color-scheme="${args.colorScheme}"
    >
    </ino-range>
  `
);

export const Playground = template.generatePlaygroundStory();

export const Discrete = template.generateStoryForProp('discrete', true);

export const Markers = template.generateStoryForProp('markers', true, {
  discrete: true,
});

export const Ranged = template.generateStoryForProp('ranged', true, {
  valueStart: 30,
  valueEnd: 70,
});
