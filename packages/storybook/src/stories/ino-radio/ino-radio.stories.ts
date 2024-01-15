import { Meta } from '@storybook/web-components';
import { Components } from '@inovex.de/elements';
import { html } from 'lit-html';
import { useEffect } from '@storybook/preview-api';
import Story from '../StoryWrapper';
import './ino-radio.scss';

const InoRadioMeta = {
  title: 'Input/ino-radio',
  component: 'ino-radio',
  parameters: {
    actions: {
      handles: ['checkedChange ino-radio'],
    },
  },
  decorators: [
    (story) => {
      useEffect(() => {
        const eventHandler = (e) => e.target.setAttribute('checked', e.detail);
        const radios = document.querySelectorAll('ino-radio');
        radios.forEach((r) =>
          r.addEventListener('checkedChange', eventHandler),
        );
        return () =>
          radios.forEach((r) =>
            r.removeEventListener('checkedChange', eventHandler),
          );
      });
      return story();
    },
  ],
  render: (args) => html`
    <ino-radio
      checked="${args.checked}"
      disabled="${args.disabled}"
      name="${args.name}"
      value="${args.value}"
    >
      Radio Button Label
    </ino-radio>
  `,
  args: {
    checked: false,
    disabled: false,
    name: 'radio-custom',
    value: 'radio-1',
  },
} as Meta<Components.InoRadio>;

export default InoRadioMeta;

export const Default = Story({
  ...InoRadioMeta,
});

export const Checked = Story({
  ...Default,
  docsFromProperty: 'checked',
  args: {
    checked: true,
  }
});

export const Disabled = Story({
  ...Default,
  docsFromProperty: 'disabled',
  args: {
    disabled: true,
  }
});
