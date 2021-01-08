const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const COMMIT_SCOPE_ENUM_FILE = path.join(__dirname, '../commit-scope-enum.js');
const SEMANTIC_PULL_REQUEST_YML = path.join(
  __dirname,
  '../.github/semantic.yml',
);
const ELEMENTS_COMPONENTS_DIR = path.join(
  __dirname,
  '../packages/elements/src/components',
);
const SCOPES_IN_JS = require(COMMIT_SCOPE_ENUM_FILE);
const SCOPES_IN_YAML = yaml.safeLoad(
  fs.readFileSync(SEMANTIC_PULL_REQUEST_YML, 'utf8'),
);

console.info('Starting Script to generate Commit Scopes.');

const inoComponentsInSrc = getAllDirNamesInDir(
  ELEMENTS_COMPONENTS_DIR,
).filter((component) => component.startsWith('ino'));

checkIfGenerationNecessary(inoComponentsInSrc, SCOPES_IN_JS, SCOPES_IN_YAML);

const allScopes = generateNewScopes(inoComponentsInSrc);

writeToCommitScopesJsFile(allScopes);
writeToSemanticPullRequestYaml(allScopes);

console.info(
  'Successfully generated new commit scopes and wrote them to the files!',
);

/**
 * Checks weather or not new commit scopes should be generated.
 * If no new component has been added to packages/elements/src/components then exit.
 *
 * @param inoComponentsInSrc Array of components in packages/elements/src/components
 * @param elementsInJsFile Array of components currently in commit scope js file
 * @param elementsInYamlFile Array of components currently in commit scope yaml file
 */
function checkIfGenerationNecessary(
  inoComponentsInSrc,
  elementsInJsFile,
  elementsInYamlFile,
) {
  const SEPARATOR = 'elements|';
  const INDEX_OF_PIPE = 9;
  const filteredJsFile = elementsInJsFile
    .filter((scope) => scope.includes(SEPARATOR))
    .map((scope) => scope.slice(INDEX_OF_PIPE));

  const filteredYamlFile = elementsInYamlFile.scopes
    .filter((scope) => scope.includes(SEPARATOR))
    .map((scope) => scope.slice(INDEX_OF_PIPE));

  if (
    filteredJsFile.length === inoComponentsInSrc.length &&
    filteredYamlFile.length === inoComponentsInSrc.length
  ) {
    console.info('[!] No differences found. The script will be exited.');
    process.exit(0);
  }
}

function getAllDirNamesInDir(source) {
  return fs
    .readdirSync(source, { withFileTypes: true })
    .filter((file) => file.isDirectory())
    .map((dir) => dir.name);
}

/**
 * Helper Function to create the cartesian product of two arrays.
 */
function cartesian(a, b) {
  const result = [];
  a.forEach((aItem) => b.forEach((bItem) => result.push([aItem, bItem])));
  return result;
}

/**
 *
 * @returns {T[]} All new commit scopes properly formatted
 * (e.g. [elements|ino-button, elements|ino-card, ...])
 */
function generateNewScopes(componentsInSrc) {
  const PACKAGES_DIR = path.join(__dirname, '../packages/');

  const packages = getAllDirNamesInDir(PACKAGES_DIR);

  console.info(`Found ${inoComponentsInSrc.length} components.`);

  return cartesian(packages, componentsInSrc)
    .map((subArr) => subArr.join('|'))
    .concat(packages)
    .concat('*')
    .concat('deps');
}

/**
 * Write the generated scopes to the commit-scopes-enum.js
 * file which will be used by the local commit linter
 * @param allScopes Generated scopes (e.g. ['elements|ino-button', ...])
 */
function writeToCommitScopesJsFile(allScopes) {
  const formattedComponents = allScopes
    .map((component) => `'${component}'`)
    .join(',\n\t');

  const data = `module.exports = [\n\t${formattedComponents}\n];`;

  console.info(`Writing Data to ${COMMIT_SCOPE_ENUM_FILE}`);
  fs.writeFileSync(COMMIT_SCOPE_ENUM_FILE, data);
}

/**
 * Write the generated scopes to the yaml file which will be used by the semantic pull request bot
 * @param allScopes Generated scopes (e.g. ['elements|ino-button', ...])
 */
function writeToSemanticPullRequestYaml(allScopes) {
  const fileContents = fs.readFileSync(SEMANTIC_PULL_REQUEST_YML, 'utf8');
  const data = yaml.safeLoad(fileContents);
  data.scopes = allScopes;
  const yamlString = yaml.safeDump(data);

  console.info(`Writing Data to ${SEMANTIC_PULL_REQUEST_YML}`);
  fs.writeFileSync(SEMANTIC_PULL_REQUEST_YML, yamlString);
}
