import { addons } from '@storybook/addons';

const ADDON_ID = 'post-current-story';

addons.register(ADDON_ID, (api) => {
  function postStory() {
    const { storyId } = api.getUrlState(); // e.g. inputs-ino-autocomplete--playground
    window.parent.postMessage({ type: ADDON_ID, storyId }, '*');
  }

  postStory();
  const interval = setInterval(postStory, 1000);
  window.addEventListener('beforeunload', () => clearInterval(interval));
});
