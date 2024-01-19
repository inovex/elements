import { Path, join } from '@angular-devkit/core';
import { chain, Rule, SchematicContext, SchematicsException, Tree } from "@angular-devkit/schematics";
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';
import { addPackageToPackageJson } from "../utils/package";
import { addElementsModuleImportToNgModule } from "../utils/ast";
import { addAsset, getDefaultAngularAppName, getWorkspace } from "../utils/config";

import { Schema as Options } from './schema'


function addElementsAngularToDependencies(): Rule {
  return (host: Tree) => {
    addPackageToPackageJson(host, 'dependencies', '@inovex.de/elements-angular', 'latest');
    return host;
  };
}

/**
 * Adds the `InoElementsModule.forRoot()` usage to the project's `AppModule`.
 * If the project does not use modules this will operate as a noop.
 * @param projectSourceRoot The source root path of the project.
 */
function addInoElementsModule(projectSourceRoot: Path): Rule {
  return (host: Tree) => {
    const appModulePath = `${projectSourceRoot}/app/app.module.ts`;
    if (host.exists(appModulePath)) {
      addElementsModuleImportToNgModule(host, appModulePath);
    }
    return host;
  };
}

/**
 * Adds the paths to the icons of the Elements to the projects `angular.json` file.
 */
function addElementsIcons(projectName: string, projectSourceRoot: Path): Rule {
  return (host: Tree) => {
    const hasAppModule = host.exists(`${projectSourceRoot}/app/app.module.ts`);

    if (hasAppModule) {
      const elementsIconGlob = {
        glob: '**/*.svg',
        input: 'node_modules/@inovex.de/elements/dist/inovex-elements/ino-icon',
        output: 'ino-icon',
      };
      addAsset(host, projectName, 'build', elementsIconGlob);
      addAsset(host, projectName, 'test', elementsIconGlob);
    }

    return host;
  };
}

function installNodeDeps() {
  return (_host: Tree, context: SchematicContext) => {
    context.addTask(new NodePackageInstallTask());
  };
}

export default function ngAdd(options: Options): Rule {
  return async (host: Tree) => {
    const workspace = await getWorkspace(host);
    if (!options.project) {
      options.project = getDefaultAngularAppName(workspace);
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const project = workspace.projects[options.project];

    if (!project || project["projectType"] !== 'application') {
      throw new SchematicsException(`Elements add does not support project types other than "application".`);
    }

    const sourcePath: Path = join(project.sourceRoot as Path);

    return chain([
      // @inovex.de/elements-angular
      addElementsAngularToDependencies(),
      addInoElementsModule(sourcePath),
      addElementsIcons(options.project, sourcePath),
      // install freshly added dependencies
      installNodeDeps(),
    ]);
  };
}
