const shell = require('shelljs');
const prompts = require('prompts');
const chalk = require('chalk');
const path = require('path');
const fs = require('fs');
const yaml = require('js-yaml');
const camelCase = require('camelcase');

/*
const CUSTOM_ELEMENTS_JSON = require(path.join(
  __dirname,
  '../packages/storybook/custom-elements.json',
));
// */

const CUSTOM_ELEMENTS_JSON = JSON.parse(
  fs
    .readFileSync(
      path.join(__dirname, '../packages/storybook/custom-elements.json'),
    )
    .toString(),
);

const ELEMENTS_COMPONENTS_DIR = path.join(
  __dirname,
  '../packages/elements/src/components',
);
const STORYBOOK_COMPONENTS_DIR = path.join(
  __dirname,
  '../packages/storybook/src/stories',
);
const REACT_INDEX_DIR = path.join(
  __dirname,
  '../packages/elements-react/src/components/index.ts',
);

const SEMANTIC_PULL_REQUEST_YML = path.join(
  __dirname,
  '../.github/semantic.yml',
);

const CURRENT_PACKAGES = [
  'elements',
  'elements-angular',
  'elements-react',
  'storybook',
];

if (!CUSTOM_ELEMENTS_JSON) {
  console.log(
    chalk.yellow(
      `No 'custom-elements.json' found in packages/storybook. Building first.`,
    ),
  );
  shell.exec('lerna exec --scope=@inovex.de/elements');
}

runCreationScript();

/**
 * Create files in:
 * - packages/elements/src/components
 *  - $name.tsx
 *  - $name.scss
 *  - $name.e2e.ts
 *  - readme.md
 * - Entry in packages/elements-react/src/components/index.ts
 * - packages/storybook/src/stories
 *  - $name.scss
 *  - $name.stories.mdx
 *  - $name.stories.ts
 * @return {Promise<void>}
 */
async function runCreationScript() {
  const { name } = await prompts({
    type: 'text',
    name: 'name',
    message: 'Name of the new component:',
  });

  if (!name.startsWith('ino')) {
    console.log(chalk.yellow(`Component name should start with "ino-".`));
    runCreationScript();
    return;
  }

  if (CUSTOM_ELEMENTS_JSON.tags.find((component) => component.name === name)) {
    console.log(
      chalk.yellow(
        `Component with the name "${name}" already exists. Please choose another name.`,
      ),
    );
    runCreationScript();
    return;
  }

  const newFiles = [];
  writeToElementsPackage(name, newFiles);
  writeToStorybookPackage(name, newFiles);
  writeToReactPackage(name);

  printTask('ADD', `files to git.`);
  shell.exec(`git add ${newFiles.join(' ')}`);

  writeToSemanticPullRequestYaml(name);
}

function writeToElementsPackage(name, newFiles) {
  const componentDir = path.join(ELEMENTS_COMPONENTS_DIR, name);
  const elementsPaths = {
    component: path.join(componentDir, `${name}.tsx`),
    stylesheet: path.join(componentDir, `${name}.scss`),
    test: path.join(componentDir, `${name}.e2e.ts`),
    readme: path.join(componentDir, `readme.md`),
  };

  fs.mkdirSync(componentDir);
  Object.keys(elementsPaths).forEach((path) => {
    const newFile = createFile(elementsPaths[path]);
    newFiles.push(newFile);
  });
}

function writeToStorybookPackage(name, newFiles) {
  const storybookComponentDir = path.join(STORYBOOK_COMPONENTS_DIR, name);
  const storybookPaths = {
    story: path.join(storybookComponentDir, `${name}.stories.ts`),
    stylesheet: path.join(storybookComponentDir, `${name}.scss`),
    readme: path.join(storybookComponentDir, `${name}.stories.mdx`),
  };

  fs.mkdirSync(storybookComponentDir);
  Object.keys(storybookPaths).forEach((path) => {
    const newFile = createFile(storybookPaths[path]);
    newFiles.push(newFile);
  });
}

function writeToReactPackage(name) {
  printTask('ADD', `to React Wrapper in ${REACT_INDEX_DIR}.`);

  const nameInPascalCase = camelCase(name, { pascalCase: true });

  fs.appendFileSync(
    REACT_INDEX_DIR,
    `export const ${nameInPascalCase} = createReactComponent<
  StencilJSX.IntrinsicElements['${name}'],
  HTML${nameInPascalCase}Element
>('${name}');`,
  );
}

/**
 * Write the generated scopes to the yaml file which will be used by the semantic pull request bot
 * * @param componentName {string} Name of the new component which should be added to the scopes
 */
function writeToSemanticPullRequestYaml(componentName) {
  printTask('ADD', `component to commit scopes.`);

  const newScopes = getNewScopes(componentName);
  const fileContents = fs.readFileSync(SEMANTIC_PULL_REQUEST_YML, 'utf8');
  const data = yaml.safeLoad(fileContents);
  data.scopes = newScopes;
  const yamlString = yaml.safeDump(data);
  fs.writeFileSync(SEMANTIC_PULL_REQUEST_YML, yamlString);
}

/* -------------------------- UTILS -------------------------- */

function printTask(action, infos) {
  console.log(chalk`{green.bold ${action}} ${infos}.`);
}

function createFile(path) {
  printTask('CREATE', path);
  fs.openSync(path, 'w');
  return path;
}

/**
 * Helper Function to create the cartesian product of two arrays.
 * @param a {T[]} First array (e.g. [a])
 * @param b {T[]} Second array (e.g. [b])
 * @returns {T[]} The cartesian product of array a and b (e.g. [[a,b]])
 */
function cartesian(a, b) {
  const result = [];
  a.forEach((aItem) => b.forEach((bItem) => result.push([aItem, bItem])));
  return result;
}

/**
 * @param componentName {string} Name of the new component which should be added to the scopes
 * @returns {T[]} All new commit scopes properly formatted
 * (e.g. [elements|ino-button, elements|ino-card, ...])
 */
function getNewScopes(componentName) {
  const currentComponents = CUSTOM_ELEMENTS_JSON.tags.map(
    (component) => component.name,
  );
  currentComponents.push(componentName);
  currentComponents.sort();

  return cartesian(CURRENT_PACKAGES, currentComponents)
    .map((subArr) => subArr.join('|'))
    .concat(CURRENT_PACKAGES)
    .concat('*')
    .concat('deps');
}
