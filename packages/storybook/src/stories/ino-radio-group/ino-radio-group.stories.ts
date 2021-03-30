import { html } from 'lit-html';
import { useEffect } from '@storybook/client-api';
import { defaultDecorator } from '../utils';

export default {
  title: 'Components (WIP)/ino-radio-group',
  component: 'ino-radio-group',
  parameters: {
    actions: {
      handles: ['checkedChange ino-radio']
    }
  },
  decorators: [defaultDecorator, story => {
    useEffect(() => {
      const radioGrp = document.querySelector('#radio-grp');
      const eventHandler = e => radioGrp.setAttribute('value', e.target.getAttribute('value'));
      radioGrp.addEventListener('checkedChange', eventHandler);
      return () => radioGrp.removeEventListener('checkedChange', eventHandler);
    });
    return story();
  }],
};

export const Playground = () => html`
  <div>
    <ino-radio-group id="radio-grp" value="1">
      <ino-radio value="1">Opt 1</ino-radio>
      <ino-radio value="2">Opt 2</ino-radio>
      <ino-radio value="3">Opt 3</ino-radio>
    </ino-radio-group>
  </div>
`;
