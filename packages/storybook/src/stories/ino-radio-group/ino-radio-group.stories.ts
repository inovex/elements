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
  decorators: [
    story => decorateStoryWithClass(story),
    story => {
      useEffect(() => {
        const checkedChangeHandler = e => {
          e.currentTarget.setAttribute('value', e.target.getAttribute('value'));
        };

        const valueChangeHandler = e => {
          e.currentTarget.setAttribute('value', e.detail);
        };

        const radioGrps = document.querySelectorAll('ino-radio-group');
        radioGrps.forEach(radioGrp => {
          radioGrp.addEventListener('checkedChange', checkedChangeHandler);
          radioGrp.addEventListener('valueChange', valueChangeHandler);
        });

        return () => {
          radioGrps.forEach(radioGrp => {
            radioGrp.removeEventListener('checkedChange', checkedChangeHandler);
            radioGrp.removeEventListener('valueChange', valueChangeHandler);
          });
        };
      });

      return story();
    },
  ],
  argTypes: {
    value: {
      control: {
        type: 'select',
      },
      options: ['opt-1', 'opt-2', 'opt-3'],
    },
  },
  args: {
    value: 'opt-2',
    alignments: 'horizontal',
  },
} as Meta<Components.InoRadioGroup>;

const template = new TemplateGenerator<Components.InoRadioGroup>(
  'ino-radio-group',
  args => html`
    <ino-radio-group
      id="radio-grp"
      value="${args.value}"
      alignment="${args.alignment}"
    >
      <ino-radio value="opt-1">Opt 1</ino-radio>
      <ino-radio value="opt-2">Opt 2</ino-radio>
      <ino-radio value="opt-3">Opt 3</ino-radio>
    </ino-radio-group>
`);

export const Playground = template.generatePlaygroundStory();

export const VerticalAlignment = template.generateStoryForProp('alignment', 'vertical');
