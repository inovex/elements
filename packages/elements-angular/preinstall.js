// Creates a symlink `node_modules/node_modules` --> `node_modules`
// to fix a yarn problem on Windows.
// GitHub issue: https://github.com/yarnpkg/yarn/issues/4564

const path = require('path');
const fs = require('fs');

if (process.platform !== 'win32') {
  return;
}

const sourcePath = path.resolve(path.join(__dirname, '../../node_modules'));
const symlinkPath = path.join(__dirname, '../../node_modules/node_modules');

try {
  console.log('Applying yarn workspaces patch for node_modules/node_modules');
  fs.symlinkSync(sourcePath, symlinkPath, 'junction');
  console.log('Done');
} catch (error) {
  console.error('Cannot symlink node_modules/node_modules: ' + error.message);
}
