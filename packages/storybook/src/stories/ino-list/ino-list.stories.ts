import { html } from 'lit-html';
import { defaultDecorator } from '../utils';
import { useEffect } from '@storybook/client-api';
import './ino-list.scss';

export default {
  title: 'Components (WIP)/ino-list ',
  component: 'ino-list',
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
  <ino-list
    dense="${args.dense}"
    two-lines="${args.twoLines}"
    leading-avatar="${args.leadingAvatar}"
    >
      <ino-list-item text="First text item"></ino-list-item>
      <ino-list-item text="Second text item"></ino-list-item>
      <ino-list-item text="Third text item"></ino-list-item>
  </ino-list>
`;
Playground.args = {
  dense: false,
  twoLines: false,
  leadingAvatar: false,
}

export const TwoLines = () => html`
  <ino-list two-lines>
    <ino-list-item text="First text item" secondary-text="Secondary"></ino-list-item>
    <ino-list-item text="Second text item" secondary-text="Secondary"></ino-list-item>
    <ino-list-item text="Third text item" secondary-text="Secondary"></ino-list-item>
  </ino-list>
`;

export const Dense = () => html`
  <ino-list dense class="first-list">
    <ino-list-item text="First text item"></ino-list-item>
    <ino-list-item text="Second text item"></ino-list-item>
    <ino-list-item text="Third text item"></ino-list-item>
  </ino-list>
`;

export const TwoLinesDense = () => html`
  <ino-list dense two-lines>
    <ino-list-item text="First text item" secondary-text="Secondary"></ino-list-item>
    <ino-list-item text="Second text item" secondary-text="Secondary"></ino-list-item>
    <ino-list-item text="Third text item" secondary-text="Secondary"></ino-list-item>
  </ino-list>
`;

export const LeadingAvatar = () => html`
  <ino-list leading-avatar>
    <ino-list-item text="First text item">
      <img slot="ino-list-item-leading" src="https://cdn-images-1.medium.com/max/1600/1*HP8l7LMMt7Sh5UoO1T-yLQ.png"/>
    </ino-list-item>
    <ino-list-item text="Second text item">
      <img slot="ino-list-item-leading" src="https://cdn-images-1.medium.com/max/1600/1*HP8l7LMMt7Sh5UoO1T-yLQ.png"/>
    </ino-list-item>
  </ino-list>
`;

export const LeadingAvatarDense = () => html`
  <ino-list leading-avatar dense>
    <ino-list-item text="First text item">
      <img slot="ino-list-item-leading" src="https://cdn-images-1.medium.com/max/1600/1*HP8l7LMMt7Sh5UoO1T-yLQ.png"/>
    </ino-list-item>
    <ino-list-item text="Second text item">
      <img slot="ino-list-item-leading" src="https://cdn-images-1.medium.com/max/1600/1*HP8l7LMMt7Sh5UoO1T-yLQ.png"/>
    </ino-list-item>
  </ino-list>
`;

export const LeadingAvatarTwoLines = () => html`
  <ino-list leading-avatar two-lines>
    <ino-list-item text="First text item" secondary-text="Secondary">
      <img slot="ino-list-item-leading" src="https://cdn-images-1.medium.com/max/1600/1*HP8l7LMMt7Sh5UoO1T-yLQ.png"/>
    </ino-list-item>
    <ino-list-item text="Second text item" secondary-text="Secondary">
      <img slot="ino-list-item-leading" src="https://cdn-images-1.medium.com/max/1600/1*HP8l7LMMt7Sh5UoO1T-yLQ.png"/>
    </ino-list-item>
  </ino-list>
`;
