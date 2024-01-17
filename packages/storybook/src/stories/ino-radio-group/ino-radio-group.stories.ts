import { Meta } from '@storybook/web-components';
import { Components } from '@inovex.de/elements';
import { html } from 'lit-html';
import { useEffect } from '@storybook/preview-api';
import Story from '../StoryWrapper';

const InoRadioGroupMeta = {
  title: 'Input/ino-radio-group',
  component: 'ino-radio-group',
  parameters: {
    actions: {
      handles: ['checkedChange ino-radio'],
    },
  },
  decorators: [
    (story) => {
      useEffect(() => {
        const checkedChangeHandler = (e) => {
          e.currentTarget.setAttribute('value', e.target.getAttribute('value'));
        };

        const valueChangeHandler = (e) => {
          e.currentTarget.setAttribute('value', e.detail);
        };

        const radioGrps = document.querySelectorAll('ino-radio-group');
        radioGrps.forEach((radioGrp) => {
          radioGrp.addEventListener('checkedChange', checkedChangeHandler);
          radioGrp.addEventListener('valueChange', valueChangeHandler);
        });

        return () => {
          radioGrps.forEach((radioGrp) => {
            radioGrp.removeEventListener('checkedChange', checkedChangeHandler);
            radioGrp.removeEventListener('valueChange', valueChangeHandler);
          });
        };
      });

      return story();
    },
  ],
  render: (args) => html`
    <ino-radio-group
      id="radio-grp"
      value="${args.value}"
      alignment="${args.alignment}"
    >
      <ino-radio value="opt-1">Opt 1</ino-radio>
      <ino-radio value="opt-2">Opt 2</ino-radio>
      <ino-radio value="opt-3">Opt 3</ino-radio>
    </ino-radio-group>
  `,
  argTypes: {
    value: {
      control: {
        type: 'select',
      },
      options: ['opt-1', 'opt-2', 'opt-3'],
    },
    alignment: {
      control: {
        type: 'select',
      },
      options: ['horizontal', 'vertical'],
    },
  },
  args: {
    value: 'opt-2',
    alignment: 'horizontal',
  },
} as Meta<Components.InoRadioGroup>;

export default InoRadioGroupMeta;

export const Default = Story({
  ...InoRadioGroupMeta,
});

export const VerticalAlignment = Story({
  ...Default,
  docsFromProperty: 'alignment',
  args: {
    alignment: 'vertical',
  },
});
