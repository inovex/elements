import { Meta } from '@storybook/web-components';
import { Components } from '@inovex.de/elements';
import { html } from 'lit-html';
import { useState } from '@storybook/preview-api';
import Story from '../StoryWrapper';
import './ino-checkbox.scss';

const InoCheckboxMeta = {
  title: 'Input/ino-checkbox',
  component: 'ino-checkbox',
  render: args => {
    const [checked, setChecked] = useState(args.checked);

    function handleCheckboxChange(ev: CustomEvent<boolean>) {
      setChecked(ev.detail);
    }

    return html`
      <ino-checkbox
        checked="${checked}"
        disabled="${args.disabled}"
        indeterminate="${args.indeterminate}"
        name="${args.name}"
        selection="${args.selection}"
        value="${args.value}"
        @checkedChange="${handleCheckboxChange}"
      >
        Label
      </ino-checkbox>
    `;
  },
  args: {
    checked: true,
    disabled: false,
    indeterminate: false,
    name: 'my-name',
    selection: false,
    value: 'my-value',
  },
} as Meta<Components.InoCheckbox>;

export default InoCheckboxMeta;

export const Default = Story({
  ...InoCheckboxMeta,
});

export const Checked = Story({
  ...Default,
  docsFromProperty: 'checked',
  args: {
    checked: true,
  },
});

export const Selection = Story({
  ...Default,
  docsFromProperty: 'selection',
  args: {
    selection: true,
  },
});

export const Indeterminate = Story({
  ...Default,
  docsFromProperty: 'indeterminate',
  args: {
    indeterminate: true,
  },
});

export const Disabled = Story({
  ...Default,
  docsFromProperty: 'disabled',
  args: {
    disabled: true,
  },
});
