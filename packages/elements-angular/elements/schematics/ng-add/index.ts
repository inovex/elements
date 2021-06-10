import {
  chain,
  Rule,
  SchematicContext,
  Tree,
} from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';
import {
  getAngularAppConfig,
  getProjectName,
  readConfig,
  writeConfig,
} from '../utils';

function addAsset(
  host: Tree,
  projectName: string,
  architect: string,
  asset: string | { glob: string; input: string; output: string }
) {
  const config = readConfig(host);
  const appConfig = getAngularAppConfig(config, projectName);
  appConfig.architect[architect].options.assets.push(asset);
  writeConfig(host, config);
}

function installNodeDeps() {
  return (_host: Tree, context: SchematicContext) => {
    context.addTask(new NodePackageInstallTask());
  };
}

function addIcons() {
  return async (tree: Tree) => {
    const projectName = await getProjectName(tree);

    const inoIconsGlob = {
      glob: '**/*.svg',
      input: 'node_modules/@inovex.de/elements/dist/inovex-elements/ino-icon',
      output: 'ino-icon',
    };
    addAsset(tree, projectName, 'build', inoIconsGlob);
    addAsset(tree, projectName, 'test', inoIconsGlob);
    return tree;
  };
}

export function ngAdd(): Rule {
  return chain([
    addIcons(),
    // install freshly added dependencies
    installNodeDeps(),
  ]);
}
