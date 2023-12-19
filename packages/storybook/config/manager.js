// configures Storybook's "manager" UI that wraps the preview, and also configures addons panel
import { addons } from '@storybook/manager-api';
import theme from './theme';

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
