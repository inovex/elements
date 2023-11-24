// configures Storybook's "manager" UI that wraps the preview, and also configures addons panel
import { addons } from '@storybook/addons';
import theme from './theme';

addons.setConfig({
  panelPosition: 'bottom',
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
