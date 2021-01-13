const fs = require('fs-extra');
const path = require('path');

const ELEMENTS_DIR = path.join(__dirname, '../');
const SRC_DIR = path.join(ELEMENTS_DIR, 'src');
const SRC_ICON_DIR = path.join(SRC_DIR, 'components/ino-icon');
const SRC_SVG_DIR = path.join(SRC_DIR, 'assets/ino-icon');
const ICON_JS_DIR = path.join(SRC_ICON_DIR, 'icons.js');


/**
 * This is a script to automatically add all icons within ino-icon to the icons.js,
 * which can be cumbersome when many new icons are added.
 * It also copies the new icons to the storybook
 */

addToIconsFile();

function addToIconsFile() {

  function removeSVGSuffix(file) {
    return file.substring(0, file.lastIndexOf('.'));
  }

  const svgFiles = fs.readdirSync(SRC_SVG_DIR);

  const svgString = svgFiles
    .filter(file => file.includes('.svg'))
    .map(removeSVGSuffix)
    .map(file => `'${file}'`)
    .join(',\n\t');

  const data = `export default [
  ${svgString}
];`;

  fs.writeFileSync(ICON_JS_DIR, data);
}
