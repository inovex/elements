// configures Storybook's "manager" UI that wraps the preview, and also configures addons panel
import React from 'react';
import { addons, types } from '@storybook/addons';
import theme from './theme';

//TODO: push new versions into storybook-versions.json with each deployment
import versionsData from './storybook-versions.json'; 

const ADDON_ID = 'inovex/element-version';
const PANEL_ID = `${ADDON_ID}/panel`;

addons.setConfig({
  panelPosition: 'bottom',
  theme,
  sidebar: {
    showRoots: true,
    collapsedRoots: ['input', 'buttons', 'structure', 'graphic', 'notification'],
  },
});

addons.register(ADDON_ID, api => {
  addons.add(PANEL_ID, {
    type: types.TOOL,
    title: 'Version',
    match: ({ viewMode }) => viewMode === 'story' || viewMode === 'docs',
    render: () => (
      <select
      style={{ 
        background: '#EDEFF5',
        border: 'none', 
        padding: '5px 10px',
        fonFamily: 'inherit',
        fontSize: '13px',
        fontWeight: 'bold',
        cursor: 'pointer',
      }}
        onChange={(e) => {
          window.location.href = `https://elements.inovex.de/version/v${e.target.value}/?path=/story/docs-welcome--page`
        }}
      >
        <option key='default' value='default' disabled selected>Version</option>
        {versionsData.versions.map(version => (
          <option key={version} value={version}>{version}</option>
        ))}
      </select>
    ),
  });
});
