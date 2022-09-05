import { OutputTargetCustom } from '@stencil/core/internal';
import fs from 'fs-extra';
import * as path from 'path';
import camelCase from 'camelcase';

export const wrapIconsOutputTarget: OutputTargetCustom = {
  type: 'custom',
  name: 'wrap-icons',
  generator: async () => {
    const iconData = buildIconMetadata();
    makeIndexEsm(iconData);
    makeIndexEsmD(iconData);
    makeIndexJs();
  },
};

type SvgMetadata = {
  name: string;
  filename: string;
  importName: string;
};

const BASE_PATH = '.';
const ROOT_DIR = path.join(__dirname, '..');
const DST_DIR = path.join(ROOT_DIR, 'dist');
const SRC_DIR = path.join(ROOT_DIR, 'src');
const SRC_SVG_DIR = path.join(SRC_DIR, 'assets/ino-icon');

function buildIconMetadata() {
  const svgFiles = fs
    .readdirSync(SRC_SVG_DIR)
    .filter((f: string) => f.indexOf('.svg') > -1);

  const iconData: SvgMetadata[] = svgFiles.map((filename: string) => {
    const name = filename.split('.')[0];
    const importName = (filename.startsWith('_') ? '_' : '') + camelCase(name);

    return {
      name,
      filename,
      importName,
    };
  });
  return iconData;
}


const DST_ESM = path.join(DST_DIR, 'inovex-elements/ino-icon/index.esm.js');

function makeIndexEsm(svgMetadata: SvgMetadata[]) {
  const finalFile = `
        ${svgMetadata
          .map(
            ({ filename, importName }) =>
              `import ${importName} from '${BASE_PATH}/${filename}';`
          )
          .join('\n')}
        export var ICON_PATHS = {
        ${svgMetadata
          .map(({ name, importName }) => `  '${name}': ${importName}`)
          .join(',\n')}
        };
        export { ${svgMetadata
          .map(({ importName }) => importName)
          .join(', ')} };
        `;
  fs.writeFileSync(DST_ESM, finalFile);
}


const DST_ESM_D_TS = path.join(
  DST_DIR,
  'inovex-elements/ino-icon/index.esm.d.ts'
);

function makeIndexEsmD(iconData: SvgMetadata[]) {
  const finalDts = `
        export type IconMap = {
        ${iconData.map(({ name }) => `  '${name}': string;`).join('\n')}
        };
        export type IconNames = keyof IconMap;
        export declare const ICON_PATHS: IconMap;
        ${iconData
          .map(
            ({ importName }) => `export declare const ${importName}: string;`
          )
          .join('\n')}
        `;
  fs.writeFileSync(DST_ESM_D_TS, finalDts);
}


const DST_JS = path.join(DST_DIR, 'inovex-elements/ino-icon/index.js');

function makeIndexJs() {
  const jsContent = `require.context('!!file-loader?name=[name].[ext]&outputPath=svg!./', false, /\.svg$/);`;
  fs.writeFileSync(DST_JS, jsContent);
}
