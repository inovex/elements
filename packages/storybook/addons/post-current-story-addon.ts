import { API } from '@storybook/manager-api';

export const ADDON_ID = 'post-current-story';

function PostCurrentStoryAddon(api: API) {

  function postStory() {
    const { storyId } = api.getUrlState(); // e.g. inputs-ino-autocomplete--playground
    window.parent.postMessage({ type: ADDON_ID, storyId }, '*');
  }

  postStory();
  const interval = setInterval(postStory, 1000);
  window.addEventListener('beforeunload', () => clearInterval(interval));
}

export default PostCurrentStoryAddon
