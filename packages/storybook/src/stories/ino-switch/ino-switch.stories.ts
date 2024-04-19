import { Meta } from '@storybook/web-components';
import { Components } from '@inovex.de/elements';
import { html } from 'lit-html';
import Story from '../StoryWrapper';

const eventHandler = (e: CustomEvent<boolean>) => ((e.target as HTMLInoSwitchElement).checked = e.detail);

const InoSwitchMeta = {
  title: 'Input/ino-switch',
  component: 'ino-switch',
  render: args => html`
    <ino-switch
      checked="${args.checked}"
      disabled="${args.disabled}"
      name="${args.name}"
      @checkedChange="${eventHandler}"
    >
      Switch Label
    </ino-switch>
  `,
  args: {
    checked: false,
    disabled: false,
    name: '',
  },
} as Meta<Components.InoSwitch>;

export default InoSwitchMeta;

export const Default = Story({
  ...InoSwitchMeta,
});

export const Checked = Story({
  ...Default,
  docsFromProperty: 'checked',
  args: {
    checked: true,
  },
});

export const Disabled = Story({
  ...Default,
  docsFromProperty: 'disabled',
  args: {
    disabled: true,
  },
});

/**
 * Can be used to toggle between to state disabled by two icons.
 * Use the `leading` and `trailing` slots.
 * Works best with `<ino-icon>`.
 */
export const ToggleIcon = Story({
  ...Default,
  render: args => html`
    <ino-switch
      checked="${args.checked}"
      disabled="${args.disabled}"
      name="${args.name}"
      @checkedChange="${eventHandler}"
    >
      <ino-icon slot="leading" icon="offboarding"></ino-icon>
      Switch Label
      <ino-icon slot="trailing" icon="onboarding"></ino-icon>
    </ino-switch>
  `,
});
