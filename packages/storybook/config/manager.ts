// configures Storybook's "manager" UI that wraps the preview, and also configures addons panel
import { addons } from '@storybook/manager-api';
import theme from './theme';
import PostCurrentStoryAddon, {
  ADDON_ID,
} from '../addons/post-current-story-addon';

console.group('Addon Status');

addons.setConfig({
  isFullscreen: false,
  showNav: true,
  showPanel: true,
  panelPosition: 'bottom',
  showToolbar: true,
  theme,
  sidebar: {
    showRoots: true,
    collapsedRoots: [
      'input',
      'buttons',
      'structure',
      'graphic',
      'notification',
    ],
  },
});

addons.register(ADDON_ID, PostCurrentStoryAddon);
console.info('Registered Addon: PostCurrentStory');

console.groupEnd();
