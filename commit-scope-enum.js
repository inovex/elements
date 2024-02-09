const fs = require('fs');
const path = require('path');

const separator = '/';
const packagesPath = path.join(__dirname, 'packages');
const packages = fs.readdirSync(packagesPath);

const componentsPath = path.join(packagesPath, 'elements', 'src', 'components');
const components = fs.readdirSync(componentsPath).filter((p) => p.startsWith('ino-'));

const packageComponentList = packages
  .filter((pkg) => pkg.match(/storybook$|elements(-[a-z]*)?$/))
  .map((pkg) => components.map((cmp) => `${pkg}${separator}${cmp}`))
  .flat();

const commitScopes = [
  ...packages,
  ...packageComponentList,
  "'*'",
  'deps',
];

fs.writeFileSync('commit-scopes.txt', commitScopes.join('\n') + '\n');
