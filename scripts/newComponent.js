const shell = require('shelljs');
const prompts = require('prompts');
const chalk = require('chalk');
const path = require('path');
const fs = require('fs');
const camelCase = require('camelcase');

const customElementsJson = require('packages/storybook/custom-elements.json');
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

if (!customElementsJson) {
  console.log(
    chalk.yellow(
      `No 'custom-elements.json' found in packages/storybook. Building first.`
    )
  );
  shell.exec('lerna exec --scope=@inovex.de/elements -- yarn install');
}

const questions = [
  {
    type: 'text',
    name: 'name',
    message: 'Name of the new component:',
  },
];

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
  const { name } = await prompts(questions);

  if (customElementsJson.tags.find((component) => component.name === name)) {
    console.log(
      chalk.yellow(
        `Component with the name "${name}" already exists. Please choose another name.`
      )
    );
    main();
    return;
  }

  const componentDir = path.join(ELEMENTS_COMPONENTS_DIR, name);
  const elementsPaths = {
    component: path.join(componentDir, `${name}.tsx`),
    stylesheet: path.join(componentDir, `${name}.scss`),
    test: path.join(componentDir, `${name}.e2e.ts`),
    readme: path.join(componentDir, `readme.md`),
  };

  fs.mkdirSync(componentDir);
  Object.keys(elementsPaths).forEach((path) => {
    console.log(chalk.green(`Creating ${elementsPaths[path]}`));
    fs.openSync(elementsPaths[path], 'w');
  });

  const storybookComponentDir = path.join(STORYBOOK_COMPONENTS_DIR, name);
  const storybookPaths = {
    story: path.join(storybookComponentDir, `${name}.stories.ts`),
    stylesheet: path.join(storybookComponentDir, `${name}.scss`),
    readme: path.join(storybookComponentDir, `${name}.stories.mdx`),
  };

  fs.mkdirSync(storybookComponentDir);
  Object.keys(storybookPaths).forEach((path) => {
    console.log(chalk.green(`Creating ${elementsPaths[path]}`));
    fs.openSync(elementsPaths[path], 'w');
  });

  console.log(
    chalk.green(`Adding new component to React Wrapper in ${REACT_INDEX_DIR}`)
  );

  const nameInPascalCase = camelCase(name, { pascalCase: true });

  fs.appendFileSync(
    REACT_INDEX_DIR,
    `export const ${nameInPascalCase} = createReactComponent<
  StencilJSX.IntrinsicElements['${name}'],
  HTML${nameInPascalCase}Element
>('${name}');`
  );
}

main();
