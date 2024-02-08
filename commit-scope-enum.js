const fs = require('fs');

const separator = '/';
const packages = [
  'elements',
  'elements-angular',
  'elements-react',
  'elements-vue',
  'storybook',
];
const components = [
  'ino-autocomplete',
  'ino-button',
  'ino-card',
  'ino-carousel',
  'ino-carousel-slide',
  'ino-checkbox',
  'ino-chip',
  'ino-chip-set',
  'ino-control-item',
  'ino-datepicker',
  'ino-dialog',
  'ino-fab',
  'ino-fab-set',
  'ino-icon',
  'ino-icon-button',
  'ino-img',
  'ino-img-list',
  'ino-input',
  'ino-input-file',
  'ino-label',
  'ino-list',
  'ino-list-divider',
  'ino-list-item',
  'ino-markdown-editor',
  'ino-menu',
  'ino-nav-drawer',
  'ino-nav-item',
  'ino-option',
  'ino-option-group',
  'ino-popover',
  'ino-progress-bar',
  'ino-radio',
  'ino-radio-group',
  'ino-range',
  'ino-segment-button',
  'ino-segment-group',
  'ino-select',
  'ino-snackbar',
  'ino-spinner',
  'ino-switch',
  'ino-tab',
  'ino-tab-bar',
  'ino-table',
  'ino-table-cell',
  'ino-table-row',
  'ino-textarea',
  'ino-tooltip',
];

const packageComponentList = packages
  .map((pkg) => components.map((cmp) => `${pkg}${separator}${cmp}`))
  .flat();

const commitScopes = [
  ...packages,
  ...packageComponentList,
  'landingpage',
  'elements-angular-example',
  'elements-react-example',
  'elements-vue-example',
  '*',
  'deps',
];

fs.writeFileSync('commit-scopes.txt', commitScopes.join('\n'));
