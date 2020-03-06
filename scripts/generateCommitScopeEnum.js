const fs = require('fs');
const path = require('path');
const COMMIT_SCOPE_ENUM_FILE = path.join(__dirname, '../commit-scope-enum.js');
const ELEMENTS_COMPONENTS_DIR = path.join(__dirname, '../packages/elements/src/components');
const currentScopes = require(COMMIT_SCOPE_ENUM_FILE);

console.info('CHECKING FOR DIFFERENCES ...');

const SEPARATOR = 'elements|';
const INDEX_OF_PIPE = 9;
const elementsInScope = currentScopes
  .filter(scope => scope.includes(SEPARATOR))
  .map(scope => scope.slice(INDEX_OF_PIPE));

const INO_COMPONENTS = getDirNamesInDir(ELEMENTS_COMPONENTS_DIR).filter(component => component.startsWith('ino'));

if(elementsInScope.length === INO_COMPONENTS.length) {
  console.info('==> NO DIFFERENCES FOUND. EXITING.');
  process.exit(0)
}

const PACKAGES_DIR = path.join(__dirname, '../packages/');

function getDirNamesInDir(source) {
  return fs.readdirSync(source, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);
}

function cartesian(a,b) {
  const result = [];
  a.forEach(aItem => b.forEach(bItem => result.push([aItem, bItem])));
  return result;
}

console.info('GENERATE COMMIT SCOPE ENUM');

const packages = getDirNamesInDir(PACKAGES_DIR);

console.info(`Found ${INO_COMPONENTS.length} components.`);
const packageComponentArr = cartesian(packages, INO_COMPONENTS)
  .map(subArr => subArr.join('|'))
  .concat(packages)

const formattedComponents = packageComponentArr
  .map(component => `'${component}'`)
  .join(',\n\t');

const data = `module.exports = [
\t${formattedComponents}
];`;

console.info(`Writing Data to ${COMMIT_SCOPE_ENUM_FILE}`);
fs.writeFileSync(COMMIT_SCOPE_ENUM_FILE, data);

console.info('DONE');
