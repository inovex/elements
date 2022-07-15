import { Components } from '@inovex.de/elements';
import { Meta } from '@storybook/web-components';
import { html } from 'lit-html';
import { decorateStoryWithClass } from '../utils';
import './ino-range.scss';
import { TemplateGenerator } from '../template-generator';
import { handleValueChange } from '../handler';

export default {
  title: 'Input/<ino-range>',
  component: 'ino-range',
  decorators: [(story) => decorateStoryWithClass(story, 'story-range')],
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

const eventHandlerStart = (e: CustomEvent<number>) =>
  ((e.target as HTMLInoRangeElement).valueStart = e.detail);
const eventHandlerEnd = (e: CustomEvent<number>) =>
  ((e.target as HTMLInoRangeElement).valueEnd = e.detail);

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
      step="${args.step}"
      ranged="${args.ranged}"
      value-start="${args.valueStart}"
      value-end="${args.valueEnd}"
      color-scheme="${args.colorScheme}"
      value="${args.value}"
      @valueChange="${handleValueChange}"
      @valueStartChange="${eventHandlerStart}"
      @valueEndChange="${eventHandlerEnd}"
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
  discrete: true,
});
