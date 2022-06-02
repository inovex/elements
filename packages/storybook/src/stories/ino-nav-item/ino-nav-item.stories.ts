import { Meta } from '@storybook/web-components';
import { html } from 'lit-html';
import { Components } from '@inovex.de/elements';
import { TemplateGenerator } from '../template-generator'

export default {
  title: `Structure/ino-nav-item`,
  component: 'ino-nav-item',
  args:{
    text: 'Nav item',
    subText: 'Nav item sub text',
    activated: false,
    disabled: false,
    icon: false,
  }
} as Meta<Components.InoNavItem>;

type InoNavItemExtended = Components.InoNavItem & {
  icon: boolean;
}

const icon = html
`<ino-icon icon="onboarding"></ino-icon>`;


const template = new TemplateGenerator<InoNavItemExtended>(
  'ino-nav-item',
  args => html`
  <div class="story-list">
    <ino-list>
      <ino-nav-item
        class="customizable-nav-item"
        text="${args.text}"
        sub-text="${args.subText}"
        activated="${args.activated}"
        disabled="${args.disabled}"
      >
        ${args.icon? icon : ''}
      </ino-nav-item>
    </ino-list>
  </div>
`);

export const Playground = template.generatePlaygroundStory();
Playground.args = {
  icon: true,
}
export const Text = template.generateStoryForProp('text', 'simple-text');
export const Activated = template.generateStoryForProp('activated', true);
export const Disabled = template.generateStoryForProp('disabled', true);
export const TwoLines = template.generateStoryForProp('subText', 'Secondary Text 2');

/**
 * Use a `ino-icon` element inside the `ino-nav-item` to add a icon to the ino-nav-item
 */
export const Graphic = template.generatePlaygroundStory();
Graphic.args = {
  icon: true,
}