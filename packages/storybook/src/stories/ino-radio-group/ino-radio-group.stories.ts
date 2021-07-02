import { Components } from '@inovex.de/elements';
import { html } from 'lit-html';
import { useEffect } from '@storybook/client-api';
import { defaultDecorator } from '../utils';
import { Story } from '@storybook/web-components';

export default {
  title: 'Input/ino-radio-group',
  component: 'ino-radio-group',
  parameters: {
    actions: {
      handles: ['checkedChange ino-radio'],
    },
  },
  decorators: [
    defaultDecorator,
    (story) => {
      useEffect(() => {
        const radioGrp = document.querySelector('#radio-grp');
        const eventHandler = (e) =>
          radioGrp.setAttribute('value', e.target.getAttribute('value'));
        radioGrp.addEventListener('checkedChange', eventHandler);
        return () =>
          radioGrp.removeEventListener('checkedChange', eventHandler);
      });
      return story();
    },
  ],
};

export const Playground: Story<Components.InoRadioGroup> = (args) => html`
  <ino-radio-group id="radio-grp" value="${args.value}">
    <ino-radio value="opt-1">Opt 1</ino-radio>
    <ino-radio value="opt-2">Opt 2</ino-radio>
    <ino-radio value="opt-3">Opt 3</ino-radio>
  </ino-radio-group>
`;
Playground.args = {
  value: 'opt-2',
};
Playground.argTypes = {
  value: {
    control: {
      type: 'select',
    },
    options: ['opt-1', 'opt-2', 'opt-3'],
  },
};
