import { Components } from '@inovex.de/elements';
import { useEffect } from '@storybook/client-api';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { decorateStoryWithClass } from '../utils';

export default {
  title: 'Input/ino-radio-group',
  component: 'ino-radio-group',
  parameters: {
    actions: {
      handles: ['checkedChange ino-radio'],
    },
  },
  decorators: [
    story => decorateStoryWithClass(story),
    story => {
      useEffect(() => {
        const radioGrp = document.querySelector('#radio-grp');
        const eventHandler = e =>
          radioGrp.setAttribute('value', e.target.getAttribute('value'));
        radioGrp.addEventListener('checkedChange', eventHandler);
        const evtHandler = e => {
          radioGrp.setAttribute('value', e.detail);
        };
        radioGrp.addEventListener('valueChange', evtHandler);
        return () => {
          radioGrp.removeEventListener('checkedChange', eventHandler);
          radioGrp.removeEventListener('valueChange', evtHandler);
        };
      });
      return story();
    },
  ],
} as Meta;

export const Playground: Story<Components.InoRadioGroup> = args => html`
  <ino-radio-group
    id="radio-grp"
    value="${args.value}"
    alignment="${args.alignment}"
  >
    <ino-radio value="opt-1">Opt 1</ino-radio>
    <ino-radio value="opt-2">Opt 2</ino-radio>
    <ino-radio value="opt-3">Opt 3</ino-radio>
  </ino-radio-group>
`;
Playground.args = {
  value: 'opt-2',
  alignment: 'horizontal',
};
Playground.argTypes = {
  value: {
    control: {
      type: 'select',
    },
    options: ['opt-1', 'opt-2', 'opt-3'],
  },
};

export const VerticalAlignment = () => html`
  <ino-radio-group
    id="radio-grp"
    value="opt-2"
    alignment="vertical"
  >
    <ino-radio value="opt-1">Opt 1</ino-radio>
    <ino-radio value="opt-2">Opt 2</ino-radio>
    <ino-radio value="opt-3">Opt 3</ino-radio>
  </ino-radio-group>
`;