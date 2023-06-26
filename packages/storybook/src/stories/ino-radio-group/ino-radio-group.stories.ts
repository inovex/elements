import { Components } from '@inovex.de/elements';
import { useEffect } from '@storybook/client-api';
import { Meta } from '@storybook/web-components';
import { TemplateGenerator } from '../template-generator';
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
  decorators: [ story => decorateStoryWithClass(story) ],
  args: {
    value: 'opt-2',
    alignment: 'horizontal',
  },
} as Meta<Components.InoRadioGroup>;

const updateValueOnChange = (id) => {
  useEffect(() => {
    const radioGrp = document.querySelector(id);
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
}

const template = new TemplateGenerator<Components.InoRadioGroup>(
  'ino-radio-group',
  args => html`
    <ino-radio-group 
      id="radio-grp1" 
      value="${args.value}"
      alignment="${args.alignment}"
    >
      <ino-radio value="opt-1">Opt 1</ino-radio>
      <ino-radio value="opt-2">Opt 2</ino-radio>
      <ino-radio value="opt-3">Opt 3</ino-radio>
    </ino-radio-group>
  `
);

export const Playground = template.generatePlaygroundStory();

Playground.decorators = [story => {
  updateValueOnChange('#radio-grp1');
  return story();
}];

Playground.argTypes = {
  value: {
    control: { type: 'select' },
    options: ['opt-1', 'opt-2', 'opt-3'],
  },
  alignment: {
    control: { type: 'radio' },
    options: ['horizontal', 'vertical'],
  },
};

const verticalTemplate = new TemplateGenerator<Components.InoRadioGroup>(
  'ino-radio-group',
  args => html`
    <ino-radio-group 
      id="radio-grp2" 
      value="${args.value}"
      alignment="vertical"
    >
      <ino-radio value="opt-1">Opt 1</ino-radio>
      <ino-radio value="opt-2">Opt 2</ino-radio>
      <ino-radio value="opt-3">Opt 3</ino-radio>
    </ino-radio-group>
  `
);

export const VerticalAlignment = verticalTemplate.generatePlaygroundStory();

VerticalAlignment.decorators = [story => {
  updateValueOnChange('#radio-grp2');
  return story();
}];