const fs = require('fs-extra');
const path = require('path');


const ELEMENTS_DIR = path.join(__dirname, '../');
const ROOT_DIR = path.join(ELEMENTS_DIR, '../');
const STORYBOOK_DIR = path.join(ROOT_DIR, 'storybook');

const SRC_DIR = path.join(ELEMENTS_DIR, 'src');
const SRC_INO_ICON_DIR = path.join(SRC_DIR, 'components/ino-icon');
const SRC_SVG_DIR = path.join(SRC_INO_ICON_DIR, 'icon-assets/SVG');
const ICON_JS_DIR = path.join(SRC_INO_ICON_DIR, 'icons.js');

const STORYBOOK_ICON_ASSETS_DIR = path.join(STORYBOOK_DIR, 'static/icon-assets');
const STORYBOOK_SVG_DIR = path.join(STORYBOOK_ICON_ASSETS_DIR, 'SVG');


/**
 * This is a script to automatically add all icons within icon-assets/SVG to the icons.js,
 * which can be cumbersome when many new icons are added.
 * It also copies the new icons to the storybook
 */

addToIconsFile();
copyIconsToStorybook();

function addToIconsFile() {

  function removeSVGSuffix(file) {
    return file.substring(0, file.lastIndexOf('.'));
  }

  const svgFiles = fs.readdirSync(SRC_SVG_DIR);

  const svgString = svgFiles
    .map(removeSVGSuffix)
    .map(file => `'${file}'`)
    .join(',\n\t');

  const data = `export default [
  ${svgString}
];`;

  fs.writeFileSync(ICON_JS_DIR, data);
}

function copyIconsToStorybook() {

  // Remove old icons
  fs.removeSync(STORYBOOK_SVG_DIR);

  // copy new ones
  fs.copy(SRC_SVG_DIR, STORYBOOK_SVG_DIR);
}
