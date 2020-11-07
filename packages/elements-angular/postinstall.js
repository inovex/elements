// Removes symlink `node_modules/node_modules` --> `node_modules` created in
// preinstall.js which fixes a yarn problem on Windows.
// GitHub issue: https://github.com/yarnpkg/yarn/issues/4564

const path = require('path');
const fs = require('fs');

if (process.platform !== 'win32') {
  return;
}

const symlinkPath = path.join(__dirname, '../../node_modules/node_modules');

try {
  console.log('Removing a symlink to node_modules/node_modules');
  fs.unlinkSync(symlinkPath);
} catch (error) {
  if (error.code !== 'ENOENT') {
    throw error;
  }
}
