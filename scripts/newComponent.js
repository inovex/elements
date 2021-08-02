const shell = require('shelljs');
const prompts = require('prompts');
const chalk = require('chalk');
const path = require('path');
const fs = require('fs');
const camelCase = require('camelcase');

const CUSTOM_ELEMENTS_JSON = require(path.join(
  __dirname,
  '../packages/storybook/custom-elements.json'
));
const ELEMENTS_COMPONENTS_DIR = path.join(
  __dirname,
  '../packages/elements/src/components'
);
const STORYBOOK_COMPONENTS_DIR = path.join(
  __dirname,
  '../packages/storybook/src/stories'
);
const REACT_INDEX_DIR = path.join(
  __dirname,
  '../packages/elements-react/src/components/index.ts'
);

if (!CUSTOM_ELEMENTS_JSON) {
  console.log(
    chalk.yellow(
      `No 'custom-elements.json' found in packages/storybook. Building first.`
    )
  );
  shell.exec('lerna exec --scope=@inovex.de/elements');
}

function printTask(action, infos) {
  console.log(chalk.green`{bold ${action} ${infos}.`);
}

function createAndNotify(path) {
  printTask('CREATE', path);
  fs.openSync(path, 'w');
  return path;
}

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
async function main() {
  const { name } = await prompts({
    type: 'text',
    name: 'name',
    message: 'Name of the new component:',
  });

  if (!name.startsWith('ino')) {
    console.log(chalk.yellow(`Component name should start with "ino-".`));
    main();
    return;
  }

  if (CUSTOM_ELEMENTS_JSON.tags.find((component) => component.name === name)) {
    console.log(
      chalk.yellow(
        `Component with the name "${name}" already exists. Please choose another name.`
      )
    );
    main();
    return;
  }

  const newFiles = [];

  const componentDir = path.join(ELEMENTS_COMPONENTS_DIR, name);
  const elementsPaths = {
    component: path.join(componentDir, `${name}.tsx`),
    stylesheet: path.join(componentDir, `${name}.scss`),
    test: path.join(componentDir, `${name}.e2e.ts`),
    readme: path.join(componentDir, `readme.md`),
  };

  fs.mkdirSync(componentDir);
  Object.keys(elementsPaths).forEach((path) => {
    const newFile = createAndNotify(elementsPaths[path]);
    newFiles.push(newFile);
  });

  const storybookComponentDir = path.join(STORYBOOK_COMPONENTS_DIR, name);
  const storybookPaths = {
    story: path.join(storybookComponentDir, `${name}.stories.ts`),
    stylesheet: path.join(storybookComponentDir, `${name}.scss`),
    readme: path.join(storybookComponentDir, `${name}.stories.mdx`),
  };

  fs.mkdirSync(storybookComponentDir);
  Object.keys(storybookPaths).forEach((path) => {
    const newFile = createAndNotify(storybookPaths[path]);
    newFiles.push(newFile);
  });

  printTask('ADD', `to React Wrapper in ${REACT_INDEX_DIR}.`);

  const nameInPascalCase = camelCase(name, { pascalCase: true });

  fs.appendFileSync(
    REACT_INDEX_DIR,
    `export const ${nameInPascalCase} = createReactComponent<
  StencilJSX.IntrinsicElements['${name}'],
  HTML${nameInPascalCase}Element
>('${name}');`
  );

  printTask('ADD', `files to git.`);
  shell.exec(`git add ${newFiles.join(' ')}`);

  // TODO: add to scopes
}

main();
