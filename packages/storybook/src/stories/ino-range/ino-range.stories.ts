import { Components } from '@inovex.de/elements';
import { Meta } from '@storybook/web-components';
import { html } from 'lit-html';
import { TemplateGenerator } from '../template-generator';
import { decorateStoryWithClass, withColorScheme } from '../utils';
import './ino-range.scss';
import { useEffect } from '@storybook/client-api';

export default {
  title: 'Input/<ino-range>',
  component: 'ino-range',
  decorators: [
    story => decorateStoryWithClass(story, 'story-range'),
    story => {
      useEffect(() => {
        const eventHandler = (e: CustomEvent<number>) =>
          ((e.target as HTMLInoRangeElement).value = e.detail);
        const inoRanges = document.querySelectorAll('ino-range');
        inoRanges.forEach(r => r.addEventListener('valueChange', eventHandler));
        return () =>
          inoRanges.forEach(r =>
            r.removeEventListener('valueChange', eventHandler)
          );
      });
      return story();
    },
  ],
  args: {
    disabled: false,
    discrete: false,
    min: 0,
    max: 100,
    name: '',
    markers: false,
    value: 50,
    step: 1,
    colorScheme: 'primary',
  }
} as Meta<Components.InoRange>;

const template = new TemplateGenerator<Components.InoRange>(
  'ino-range',
  args => html`
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
    color-scheme="${args.colorScheme}"></ino-range>
`);

const templateColors = new TemplateGenerator<Components.InoRange>(
  'ino-range',
  args => html`
  <div class="flex-parent">
    <div class="flex-child">
      <h5>primary</h5>
      <ino-range color-schem="primary" min="0" max="100" value="50"></ino-range>
    </div>
    <div class="flex-child">
      <h5>secondary</h5>
      <ino-range
        color-scheme="secondary"
        min="0"
        max="100"
        value="50"
      ></ino-range>
    </div>
    <div class="flex-child">
      <h5>success</h5>
      <ino-range
        color-scheme="success"
        min="0"
        max="100"
        value="50"
      ></ino-range>
    </div>
    <div class="flex-child">
      <h5>warning</h5>
      <ino-range
        color-scheme="warning"
        min="0"
        max="100"
        value="50"
      ></ino-range>
    </div>
    <div class="flex-child">
      <h5>error</h5>
      <ino-range color-scheme="error" min="0" max="100" value="50"></ino-range>
    </div>
    <div class="flex-child">
      <h5>light</h5>
      <ino-range color-scheme="light" min="0" max="100" value="50"></ino-range>
    </div>
    <div class="flex-child">
      <h5>dark</h5>
      <ino-range color-scheme="dark" min="0" max="100" value="50"></ino-range>
    </div>
  </div>
`);

export const Playground = template.generatePlaygroundStory();
export const DiscretRange = template.generateStoryForProp('discrete', true);
export const SteppedRange = template.generateStoryForProp('step', 25);
export const ColorSchemeSecondary = templateColors.generateStoryForProp('colorScheme', 'primary');

withColorScheme(Playground, 'colorScheme');

SteppedRange.args = {
  discrete: true,
  markers: true,
  step: 25,
};