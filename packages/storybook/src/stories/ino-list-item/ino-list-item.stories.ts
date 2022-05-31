import { useEffect } from '@storybook/client-api';
import { Meta } from '@storybook/web-components';
import { html } from 'lit-html';
import { decorateStoryWithClass } from '../utils';
import { TemplateGenerator } from '../template-generator';
import { Components } from '@inovex.de/elements';
import './ino-list-item.scss';

export default {
  title: 'Structure/ino-list-item',
  component: 'ino-list-item',
  decorators: [
    (story) => decorateStoryWithClass(story, 'story-ino-list-item'),
    (story) => {
      useEffect(() => {
        const eventHandler = (e) => {
          const el = e.target;
          el.setAttribute('checked', e.detail);
          if (el.getAttribute('indeterminate') === 'true') {
            el.setAttribute('indeterminate', 'false');
          }
        };
        const selections = document.querySelectorAll('ino-checkbox, ino-radio');
        selections.forEach((s) =>
          s.addEventListener('checkedChange', eventHandler)
        );
        return () =>
          selections.forEach((s) =>
            s.removeEventListener('checkedChange', eventHandler)
          );
      });
      return story();
    },
  ],
  argsTypes: {
    twoLines: {
      description: 'Two Lines option of the parent list element',
    },
  },
  args: {
    twoLines: false,
    secondaryText: '',
    selected: false,
    activated: false,
    disabled: false,
    text: 'List item',
  }
} as Meta;

const exampleImg = html
        `<ino-img
        slot="leading"
        src="https://cdn-images-1.medium.com/max/1600/1*HP8l7LMMt7Sh5UoO1T-yLQ.png"
        ratio-width="1"
        ratio-height="1"
      ></ino-img>`;

type InoListComponentsExtended = Components.InoListItem & {
  twoLines: boolean;
}

const template = new TemplateGenerator<InoListComponentsExtended>(
  'ino-list-item',
  args => html`
  <ino-list two-lines="${args.twoLines}">
    <ino-list-item
      secondary-text="${args.secondaryText}"
      selected="${args.selected}"
      activated="${args.activated}"
      disabled="${args.disabled}"
      text="${args.text}"
    >
    </ino-list-item>
  </ino-list>
`);

export const Playground = template.generatePlaygroundStory();
Playground.args = {
  twoLines: true,
  secondaryText: 'Second line text',
};
export const Text = template.generateStoryForProp('text', 'simple-item');
export const SecondaryText = template.generateStoryForProp('secondaryText', 'Second line text', {
  twoLines: true,
});
export const Selected = template.generateStoryForProp('selected', true);
export const Activated = template.generateStoryForProp('activated', true);
export const Disabled = template.generateStoryForProp('disabled', true);

const templateGraphicAndMeta = new TemplateGenerator<Components.InoListItem>(
  'ino-list-item',
  args => html`
  <ino-list>
    <ino-list-item text="Lorem ipsum dolor sit">
      ${exampleImg}
      <p slot="trailing">$10.00</p>
    </ino-list-item>
    <ino-list-item text="Lorem ipsum dolor sit">
      ${exampleImg}
      <p slot="trailing">$10.00</p>
    </ino-list-item>
  </ino-list>
`);
/**
 * Use `slot="leading"` to show an icon on the left side of the item.
 * 
 * Use `slot="trailing"` to show additional meta information on the right side of the item.
 */
export const GraphicAndMeta = templateGraphicAndMeta.generatePlaygroundStory();


const templateLeadingCheckbox = new TemplateGenerator<Components.InoListItem>(
  'ino-list-item',
  args => html`
  <ino-list>
    <ino-list-item text="First text item">
      <ino-checkbox slot="leading" selection></ino-checkbox>
    </ino-list-item>
  </ino-list>
`);
/**
 * Use a `ino-checkbox` element with `slot="leading"` to show a checkbox on the left side of the item.
 * 
 */
export const LeadingCheckbox = templateLeadingCheckbox.generatePlaygroundStory();


const templateTrailingCheckbox = new TemplateGenerator<Components.InoListItem>(
  'ino-list-item',
  args => html`
  <ino-list>
    <ino-list-item text="Text item">
      <ino-checkbox slot="trailing" selection></ino-checkbox>
    </ino-list-item>
  </ino-list>
`);
/**
 * Use a `ino-checkbox` element with `slot="trailing"` to show a checkbox on the right side of the item.
 * 
 */
export const TrailingCheckbox = templateTrailingCheckbox.generatePlaygroundStory();


const templateLeadingAndTrailingCheckbox = new TemplateGenerator<Components.InoListItem>(
  'ino-list-item',
  args => html`
  <ino-list>
    <ino-list-item text="Lorem ipsum dolor sit">
      <ino-checkbox slot="leading" selection></ino-checkbox>
      <p slot="trailing">Some Metdata</p>
    </ino-list-item>
    <ino-list-item text="Lorem ipsum dolor sit">
      <ino-checkbox slot="leading" selection></ino-checkbox>
      <p slot="trailing">Some Metdata</p>
    </ino-list-item>
  </ino-list>
`);
/**
 * Use a `ino-checkbox` element with `slot="leading"` to show a checkbox on the left side of the item and a `slot="trailing"` to show additional metadata on the right side.
 * 
 */
export const LeadingCheckboxAndTrailingMetadata = templateLeadingAndTrailingCheckbox.generatePlaygroundStory();


const templateLeadingRadio = new TemplateGenerator<Components.InoListItem>(
  'ino-list-item',
  args => html`
  <ino-list>
    <ino-list-item text="First text item">
      <ino-radio slot="leading" selection></ino-radio>
    </ino-list-item>
  </ino-list>
`);
/**
 * Use a `ino-radio` element with `slot="leading"` to show a radio-button on the left side of the item.
 * 
 */
export const LeadingRadio = templateLeadingRadio.generatePlaygroundStory();


const templateTrailingRadio = new TemplateGenerator<Components.InoListItem>(
  'ino-list-item',
  args => html`
  <ino-list>
    <ino-list-item text="First text item">
      <ino-radio slot="trailing" selection></ino-radio>
    </ino-list-item>
  </ino-list>
`);
/**
 * Use a `ino-radio` element with `slot="trailing"` to show a radio-button on the right side of the item.
 * 
 */
export const TrailingRadio = templateTrailingRadio.generatePlaygroundStory();



 const templateLeadingAndTrailingRadio = new TemplateGenerator<Components.InoListItem>(
  'ino-list-item',
  args => html`
  <ino-list>
    <ino-list-item text="Lorem ipsum dolor sit">
      <ino-radio slot="leading" selection></ino-radio>
      <p slot="trailing">Some Metdata</p>
    </ino-list-item>
    <ino-list-item text="Lorem ipsum dolor sit">
      <ino-radio slot="leading" selection></ino-radio>
      <p slot="trailing">Some Metdata</p>
    </ino-list-item>
  </ino-list>
`);
/**
 * Use a `ino-radio` element with `slot="leading"` to show a radio-button on the left side of the item and a `slot="trailing"` to show additional metadata on the right.
 * 
 */
export const LeadingRadioAndTrailingMetadata = templateLeadingAndTrailingRadio.generatePlaygroundStory();

const templatePrimarySlot = new TemplateGenerator<Components.InoListItem>(
  'ino-list-item',
  args => html`
  <ino-list>
    <ino-list-item>
      ${exampleImg}
      <a slot="primary" href="">Link Element</a>
    </ino-list-item>
  </ino-list>
`);
/**
 * In order to use a primary Slot add `slot="primary"`
 */
export const PrimarySlot = templatePrimarySlot.generatePlaygroundStory();

const templateSecondarySlot = new TemplateGenerator<Components.InoListItem>(
  'ino-list-item',
  args => html`
  <ino-list two-lines>
    <ino-list-item>
      ${exampleImg}
      <a slot="primary" href="">Primary Link Element</a>
      <a slot="secondary" href="">Secondary Link Element</a>
      <p slot="trailing">$10.00</p>
    </ino-list-item>
  </ino-list>
`);
/**
 * In order to use a secondary Slot add `slot="secondary"`
 */
export const SecondarySlot = templateSecondarySlot.generatePlaygroundStory();
