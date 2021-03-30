import { html } from 'lit-html';
import { defaultDecorator } from '../utils';
import { useEffect } from '@storybook/client-api';
import '../ino-list/ino-list.scss';

export default {
  title: 'Components (WIP)/ino-list-item',
  component: 'ino-list-item',
  decorators: [defaultDecorator, story => {
    useEffect(() => {
      const eventHandler = e => {
        const el = e.target;
        el.setAttribute('checked', e.detail);
        if (el.getAttribute('indeterminate') === 'true') {
          el.setAttribute('indeterminate', 'false');
        }
      };
      const selections = document.querySelectorAll('ino-checkbox, ino-radio');
      selections.forEach(s => s.addEventListener('checkedChange', eventHandler));
      return () => selections.forEach(s => s.removeEventListener('checkedChange', eventHandler));
    });
    return story();
  }],
};

export const Playground = (args) => html`
  <div class="story-list">
    <h4>Customizable list item</h4>
    <ino-list two-lines="${args.twoLines}">
      <ino-list-item
        class="customizable-list-item"
        secondary-text="${args.secondaryText}"
        selected="${args.selected}"
        activated="${args.activated}"
        disabled="${args.disabled}"
        text="${args.text}">
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
}
Playground.argTypes = {
  twoLines: {
    description: 'Two Lines option of the parent list element'
  }
}

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

export const Icon = () => html`
  <h4>Leading icon</h4>
  <ino-list>
    <ino-list-item text="Lorem ipsum dolor sit">
      <ino-icon slot="ino-list-item-leading" class="ino-list-item__icon" icon="user"></ino-icon>
    </ino-list-item>
    <ino-list-item text="Lorem ipsum dolor sit">
      <ino-icon slot="ino-list-item-leading" class="ino-list-item__icon" icon="user"></ino-icon>
    </ino-list-item>
  </ino-list>
`; 

export const Checkbox = () => html`
  <h4>Leading checkbox</h4>
  <ino-list>
    <ino-list-item text="First text item">
      <ino-checkbox slot="ino-list-item-leading" selection></ino-checkbox>
    </ino-list-item>
    <ino-list-item text="Second text item">
      <ino-checkbox slot="ino-list-item-leading" selection></ino-checkbox>
    </ino-list-item>
  </ino-list>

  <h4>Trailing checkbox</h4>
  <ino-list>
    <ino-list-item text="Lorem ipsum dolor sit">
      <ino-checkbox slot="ino-list-item-trailing" selection></ino-checkbox>
    </ino-list-item>
    <ino-list-item text="Lorem ipsum dolor sit">
      <ino-checkbox slot="ino-list-item-trailing" selection></ino-checkbox>
    </ino-list-item>
  </ino-list>
  
  <h4>Leading checkbox and trailing metadata</h4>
  <ino-list>
    <ino-list-item text="Lorem ipsum dolor sit">
      <ino-checkbox slot="ino-list-item-leading" selection></ino-checkbox>
      <p slot="ino-list-item-trailing">Some Metdata</p>
    </ino-list-item>
    <ino-list-item text="Lorem ipsum dolor sit">
      <ino-checkbox slot="ino-list-item-leading" selection></ino-checkbox>
      <p slot="ino-list-item-trailing">Some Metdata</p>
    </ino-list-item>
  </ino-list>
`;

export const Radio = () => html`
  <h4>Leading radio button</h4>
  <ino-list>
    <ino-list-item text="First text item">
      <ino-radio slot="ino-list-item-leading" name="group-1"></ino-radio>
    </ino-list-item>
    <ino-list-item text="Second text item">
      <ino-radio slot="ino-list-item-leading" name="group-1"></ino-radio>
    </ino-list-item>
  </ino-list>


  <h4>Trailing radio button</h4>
  <ino-list>
    <ino-list-item text="Lorem ipsum dolor sit">
      <ino-radio slot="ino-list-item-trailing" name="group-5"></ino-radio>
    </ino-list-item>
    <ino-list-item text="Lorem ipsum dolor sit">
      <ino-radio slot="ino-list-item-trailing" name="group-5"></ino-radio>
    </ino-list-item>
  </ino-list>

  <h4>Leading radio button and trailing metadata</h4>
  <ino-list>
    <ino-list-item text="Lorem ipsum dolor sit">
    <ino-radio slot="ino-list-item-leading" name="group-6"></ino-radio>
      <p slot="ino-list-item-trailing">Some Metadata</p>
    </ino-list-item>
    <ino-list-item text="Lorem ipsum dolor sit">
    <ino-radio slot="ino-list-item-leading" name="group-6"></ino-radio>
      <p slot="ino-list-item-trailing">Some Metadata</p>
    </ino-list-item>
  </ino-list>
`;

export const GraphicAndMeta = () => html`
  <ino-list>
    <ino-list-item text="Lorem ipsum dolor sit">
      <img slot="ino-list-item-leading" src="https://cdn-images-1.medium.com/max/1600/1*HP8l7LMMt7Sh5UoO1T-yLQ.png"/>
      <p slot="ino-list-item-trailing">$10.00</p>
    </ino-list-item>
    <ino-list-item text="Lorem ipsum dolor sit">
      <img slot="ino-list-item-leading" src="https://cdn-images-1.medium.com/max/1600/1*HP8l7LMMt7Sh5UoO1T-yLQ.png"/>
      <p slot="ino-list-item-trailing">$10.00</p>
    </ino-list-item>
  </ino-list>
`;

export const PrimarySlot = () => html`
  <ino-list>
    <ino-list-item>
      <img slot="ino-list-item-leading" src="https://cdn-images-1.medium.com/max/1600/1*HP8l7LMMt7Sh5UoO1T-yLQ.png"/>
      <a slot="ino-list-item-primary" href="">Link Element</a>
    </ino-list-item>
  </ino-list>
`;

export const PrimaryAndSecondarySlot = () => html`
  <ino-list two-lines>
    <ino-list-item>
      <img slot="ino-list-item-leading" src="https://cdn-images-1.medium.com/max/1600/1*HP8l7LMMt7Sh5UoO1T-yLQ.png"/>
      <a slot="ino-list-item-primary" href="">Primary Link Element</a>
      <a slot="ino-list-item-secondary" href="">Secondary Link Element</a>
      <p slot="ino-list-item-trailing">$10.00</p>
    </ino-list-item>
  </ino-list>
`;

export const TwoLines = () => html`
  <ino-list two-lines leading-avatar>
    <ino-list-item text="Lorem ipsum dolor sit" secondary-text="Secondary Lorem ipsum dolor sit">
      <img slot="ino-list-item-leading" src="https://cdn-images-1.medium.com/max/1600/1*HP8l7LMMt7Sh5UoO1T-yLQ.png"/>
      <ino-icon slot="ino-list-item-trailing" class="ino-list-item__icon" icon="info"></ino-icon>
    </ino-list-item>
    <ino-list-item text="Lorem ipsum dolor sit" secondary-text="Secondary Lorem ipsum dolor sit">
      <img slot="ino-list-item-leading" src="https://cdn-images-1.medium.com/max/1600/1*HP8l7LMMt7Sh5UoO1T-yLQ.png"/>
      <ino-icon slot="ino-list-item-trailing" class="ino-list-item__icon" icon="info"></ino-icon>
    </ino-list-item>
  </ino-list>
`;