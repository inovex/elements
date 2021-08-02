import { useEffect } from '@storybook/client-api';
import { html } from 'lit-html';
import { defaultDecorator } from '../utils';
import './ino-list-item.scss';

export default {
  title: 'Structure/ino-list-item',
  component: 'ino-list-item',
  decorators: [
    (story) => defaultDecorator(story, 'story-ino-list-item'),
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
};

export const Playground = (args) => html`
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
`;
Playground.args = {
  twoLines: true,
  secondaryText: 'Second line text',
  selected: false,
  activated: false,
  disabled: false,
  text: 'List item',
};
Playground.argTypes = {
  twoLines: {
    description: 'Two Lines option of the parent list element',
  },
};

const exampleImg = html`
  <ino-img
    slot="leading"
    src="https://cdn-images-1.medium.com/max/1600/1*HP8l7LMMt7Sh5UoO1T-yLQ.png"
    ratio-width="1"
    ratio-height="1"
  ></ino-img>
`;

export const States = () => html`
  <ino-list>
    <ino-list-item text="Simple item"></ino-list-item>
    <ino-list-item selected text="Selected item"></ino-list-item>
    <ino-list-item selected text="Selected item 2"></ino-list-item>
    <ino-list-item text="Simple item 2"></ino-list-item>
    <ino-list-item activated text="Activated item"></ino-list-item>
    <ino-list-item disabled text="Disabled item"></ino-list-item>
  </ino-list>
`;

export const GraphicAndMeta = () => html`
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
`;

export const Checkbox = () => html`
  <h4>Leading checkbox</h4>
  <ino-list>
    <ino-list-item text="First text item">
      <ino-checkbox slot="leading" selection></ino-checkbox>
    </ino-list-item>
    <ino-list-item text="Second text item">
      <ino-checkbox slot="leading" selection></ino-checkbox>
    </ino-list-item>
  </ino-list>

  <h4>Trailing checkbox</h4>
  <ino-list>
    <ino-list-item text="Lorem ipsum dolor sit">
      <ino-checkbox slot="trailing" selection></ino-checkbox>
    </ino-list-item>
    <ino-list-item text="Lorem ipsum dolor sit">
      <ino-checkbox slot="trailing" selection></ino-checkbox>
    </ino-list-item>
  </ino-list>

  <h4>Leading checkbox and trailing metadata</h4>
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
`;

export const Radio = () => html`
  <h4>Leading radio button</h4>
  <ino-list>
    <ino-list-item text="First text item">
      <ino-radio slot="leading" name="group-1"></ino-radio>
    </ino-list-item>
    <ino-list-item text="Second text item">
      <ino-radio slot="leading" name="group-1"></ino-radio>
    </ino-list-item>
  </ino-list>

  <h4>Trailing radio button</h4>
  <ino-list>
    <ino-list-item text="Lorem ipsum dolor sit">
      <ino-radio slot="trailing" name="group-5"></ino-radio>
    </ino-list-item>
    <ino-list-item text="Lorem ipsum dolor sit">
      <ino-radio slot="trailing" name="group-5"></ino-radio>
    </ino-list-item>
  </ino-list>

  <h4>Leading radio button and trailing metadata</h4>
  <ino-list>
    <ino-list-item text="Lorem ipsum dolor sit">
      <ino-radio slot="leading" name="group-6"></ino-radio>
      <p slot="trailing">Some Metadata</p>
    </ino-list-item>
    <ino-list-item text="Lorem ipsum dolor sit">
      <ino-radio slot="leading" name="group-6"></ino-radio>
      <p slot="trailing">Some Metadata</p>
    </ino-list-item>
  </ino-list>
`;

export const Slots = () => html`
  <h4>Primary Slot</h4>
  <ino-list>
    <ino-list-item>
      ${exampleImg}
      <a slot="primary" href="">Link Element</a>
    </ino-list-item>
  </ino-list>

  <h4>Primary and Secondary Slot</h4>
  <ino-list two-lines>
    <ino-list-item>
      ${exampleImg}
      <a slot="primary" href="">Primary Link Element</a>
      <a slot="secondary" href="">Secondary Link Element</a>
      <p slot="trailing">$10.00</p>
    </ino-list-item>
  </ino-list>
`;

export const TwoLines = () => html`
  <ino-list two-lines avatar>
    <ino-list-item
      text="Lorem ipsum dolor sit"
      secondary-text="Secondary Lorem ipsum dolor sit"
    >
      ${exampleImg}
      <ino-icon slot="trailing" icon="info"></ino-icon>
    </ino-list-item>
    <ino-list-item
      text="Lorem ipsum dolor sit"
      secondary-text="Secondary Lorem ipsum dolor sit"
    >
      ${exampleImg}
      <ino-icon slot="trailing" icon="info"></ino-icon>
    </ino-list-item>
  </ino-list>
`;
