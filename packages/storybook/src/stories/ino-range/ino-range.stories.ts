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
        const eventHandler = (e: CustomEvent<number>) =>
          ((e.target as HTMLInoRangeElement).value = e.detail);
          const eventHandlerRanged = (e: CustomEvent<number>) =>
          ((e.target as HTMLInoRangeElement).rangedValue = e.detail);
        const inoRanges = document.querySelectorAll('ino-range');
        inoRanges.forEach((r) => {
          r.addEventListener('valueChange', eventHandler)
          r.addEventListener('rangedValueChange', eventHandlerRanged)
        }
        );
        return () =>
          inoRanges.forEach((r) => {
            r.removeEventListener('valueChange', eventHandler)
            r.removeEventListener('rangedValueChange', eventHandlerRanged)
          });
      });
      return story();
    },
  ],
  args: {
    disabled: false,
    discrete: false,
    min: 0,
    rangedMin: 0,
    max: 100,
    rangedMax: 100,
    rangedValue: 70,
    name: '',
    markers: false,
    value: 50,
    step: 1,
    ranged: false,

  }
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
    ranged-min="${args.rangedMin}"
    ranged-max="${args.rangedMax}"
    color-scheme="${args.colorScheme}"
  >
  </ino-range>
  `
);

export const Playground = template.generatePlaygroundStory();

export const Discrete = template.generateStoryForProp('discrete', true);

export const Markers = template.generateStoryForProp('markers', true, {discrete: true});

export const Ranged = template.generateStoryForProp('ranged', true, {
  value: 30,
  min: 0,
  max: 50,
  rangedValue: 70,
  rangedMin: 51,
  rangedMax: 100,
});
