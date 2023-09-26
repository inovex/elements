import { Meta } from '@storybook/web-components';
import { Components } from '@inovex.de/elements';
import { html } from 'lit-html';
import { TemplateGenerator } from '../template-generator';
import { decorateStoryWithClass } from '../utils';

import avatarImg from '../../assets/images/avatar.jpg';

export default {
  title: 'Graphic/<ino-avatar>',
  component: 'ino-avatar',
  decorators: [story => decorateStoryWithClass(story, 'story-avatar')],
  args: {
    initials: 'JD',
    interactive: false, 
    variant: 'solid',
    src: avatarImg,
    colorSecondary: false, 
  },
} as Meta<Components.InoAvatar>;

// The basic template for the avatar component
const template = new TemplateGenerator<Components.InoAvatar>(
  'ino-avatar',
  args => html`
    <ino-avatar
      initials="${args.initials}"
      interactive="${args.interactive}"
      variant="${args.variant}"
      src="${args.src}"
      color-secondary="${args.colorSecondary}"
    >
    </ino-avatar>
`
);

export const Playground = template.generatePlaygroundStory();

export const Interactive = template.generateStoryForProp('interactive', true);
export const ColorSecondary = template.generateStoryForProp(
  'colorSecondary',
  true
); // this doesnt work?
export const VariantDashed = template.generateStoryForProp('variant', 'dashed');
export const VariantDashedInteractive = template.generateStoryForProp(
  'variant',
  'dashed',
  { interactive: true }
);
/*
 The initials of the avatar, if there is no image.
 */
export const Initials = () => html`
  <ino-avatar initials="JD" interactive="false" variant="solid" src="">
  </ino-avatar>
`;

/*
 Add icons to the ino-avatar element by adding a `slot` and an `icon`.
 */
export const WithIcon = () => {
  const args = {
    initials: 'JD',
    interactive: false,
    variant: 'solid',
    src: avatarImg,
  };

  return html`
    <ino-avatar
      initials="${args.initials}"
      interactive="${args.interactive}"
      variant="${args.variant}"
      src="${args.src}"
    >
      <ino-icon
        slot="icon-slot"
        style="--ino-icon-color: #6CF070;"
        icon="checkmark"
      ></ino-icon>
    </ino-avatar>
`;
};
