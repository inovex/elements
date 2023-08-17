import { virtualFs, workspaces } from '@angular-devkit/core';
import { SchematicsException, Tree } from '@angular-devkit/schematics';

const CONFIG_PATH = 'angular.json';

function createHost(tree: Tree): workspaces.WorkspaceHost {
  return {
    async readFile(path: string): Promise<string> {
      const data = tree.read(path);
      if (!data) {
        throw new SchematicsException('File not found.');
      }
      return virtualFs.fileBufferToString(data);
    },
    async writeFile(path: string, data: string): Promise<void> {
      return tree.overwrite(path, data);
    },
    async isDirectory(path: string): Promise<boolean> {
      return !tree.exists(path) && tree.getDir(path).subfiles.length > 0;
    },
    async isFile(path: string): Promise<boolean> {
      return tree.exists(path);
    },
  };
}

export function readConfig(host: Tree) {
  const sourceText = host.read(CONFIG_PATH)?.toString('utf-8') || '';
  return JSON.parse(sourceText);
}

export function writeConfig(host: Tree, config: JSON) {
  host.overwrite(CONFIG_PATH, JSON.stringify(config, null, 2));
}

export function getAngularAppConfig(
  config: any,
  projectName: string
): any | never {
  if (!Object.prototype.hasOwnProperty.call(config.projects, projectName)) {
    throw new SchematicsException(`Could not find project: ${projectName}`);
  }

  return config.projects[projectName];
}

export async function getProjectName(tree: Tree) {
  const host = createHost(tree);
  const { workspace } = await workspaces.readWorkspace('/', host);
  return workspace.extensions['defaultProject'] as string;
}
