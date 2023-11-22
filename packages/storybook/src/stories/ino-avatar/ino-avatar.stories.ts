import { Meta } from '@storybook/web-components';
import { Components } from '@inovex.de/elements';
import { useEffect } from '@storybook/client-api';
import { html } from 'lit-html';
import { TemplateGenerator } from '../template-generator';
import { decorateStoryWithClass } from '../utils';
import './ino-avatar.scss';

import avatarImg from '../../assets/images/avatar.jpg';

export default {
  title: 'Graphic/<ino-avatar>',
  component: 'ino-avatar',
  decorators: [
    (story) => decorateStoryWithClass(story, 'story-avatar'),
    (story) => {
      useEffect(() => {
        const handleCheckedChange = (e) => {
          const checkbox: HTMLInoCheckboxElement = e.target;
          const parentDiv = checkbox.closest('div');
          const avatar: HTMLInoAvatarElement =
            parentDiv.querySelector('ino-avatar');
          checkbox.checked = e.detail;
          avatar.setAttribute('loading', checkbox.checked);
          if (checkbox.indeterminate) {
            checkbox.indeterminate = false;
          }
        };

        const checkboxes = document.querySelectorAll('ino-checkbox');
        checkboxes.forEach((c) =>
          c.addEventListener('checkedChange', handleCheckedChange),
        );
        return () =>
          checkboxes.forEach((c) =>
            c.removeEventListener('checkedChange', handleCheckedChange),
          );
      });
      return story();
    },
  ],
  args: {
    initials: 'JD',
    interactive: false,
    variant: 'solid',
    src: avatarImg,
    colorSecondary: false,
    a11yLabel: 'User avatar',
    alt: 'Jane Doe',
    loading: undefined,
  },
} as Meta<Components.InoAvatar>;

// The basic template for the avatar component
const template = new TemplateGenerator<Components.InoAvatar>(
  'ino-avatar',
  (args) => html`
    <ino-avatar
      initials="${args.initials}"
      interactive="${args.interactive}"
      variant="${args.variant}"
      src="${args.src}"
      color-secondary="${args.colorSecondary}"
      a11y-label="${args.a11yLabel}"
      alt="${args.alt}"
      .loading="${args.loading}"
    >
    </ino-avatar>
  `,
);

export const Playground = template.generatePlaygroundStory();

export const Interactive = template.generateStoryForProp('interactive', true);
export const ColorSecondary = template.generateStoryForProp(
  'colorSecondary',
  true,
);
export const VariantDashed = template.generateStoryForProp('variant', 'dashed');
export const VariantDashedInteractive = template.generateStoryForProp(
  'variant',
  'dashed',
  { interactive: true },
);
/*
 The initials of the avatar if the `src` is not defined or `img` fails to load.
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

export const LoadingAvatar = (args: Components.InoAvatar) => {
  return html`
    <div class="avatar-loading-container">
      <ino-avatar
        initials="${args.initials}"
        interactive="${args.interactive}"
        variant="${args.variant}"
        loading="true"
        src="${args.src}"
      >
      </ino-avatar>
      <ino-checkbox
        checked="true"
        selection="true"
        name="toggle-loading-checkbox"
        >Loading</ino-checkbox
      >
    </div>
  `;
};
