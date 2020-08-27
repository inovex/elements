import withStencilReadme from '_local-storybookcore/with-stencil-readme';
import componentReadme from '_local-elements/src/components/ino-radio-group/readme.md';
import './ino-radio-group.scss';

// https://github.com/storybooks/storybook/issues/4337#issuecomment-428495664
function subscribeToComponentEvents() {
  // == event block
  const eventHandler = function (e) {
    const el = e.target;
    if (el.tagName.toLowerCase() !== 'ino-radio') {
      return;
    }
    const group = document.querySelector('#radio-grp');
    group.setAttribute('value', el.getAttribute('value'));
  };

  document.addEventListener('checkedChange', eventHandler);
  // == event block

  // unsubscribe function will be called by Storybook
  return () => {
    document.removeEventListener('checkedChange', eventHandler);
  };
}

export default {
  title: 'Input/<ino-radio-group>',
  parameters: {
    actions: {
      handles: ['checkedChange ino-radio']
    }
  },
  decorators: [
    withStencilReadme(componentReadme),
    (story) => {
      subscribeToComponentEvents();
      return story();
    },
  ],
};

export const DefaultUsage = () => /*html*/ `
<div class="story-radio">
  <div>
    <ino-radio-group id="radio-grp">
      <ino-radio value="1">Opt 1</ino-radio>
      <ino-radio value="2">Opt 2</ino-radio>
      <ino-radio value="3">Opt 3</ino-radio>
    </ino-radio-group>
  </div>
</div>
`;

DefaultUsage.storyName = 'Default usage';
