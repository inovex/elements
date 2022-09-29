import * as fs from 'fs-extra';
import * as path from 'path';
import camelCase from 'camelcase';

type SvgMetadata = {
  name: string;
  filename: string;
  importName: string;
};

const BASE_PATH = '.';
const ROOT_DIR = path.join(__dirname, '..');
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

const ICONS_JS_PATH = path.join(SRC_DIR, 'components', 'ino-icon', 'icons.js');

function makeIconsJs(svgMetadata: SvgMetadata[]) {
  const finalFile = `export default [\n${svgMetadata.map(({ name }) => ` '${name}',`).join('\n')}\n];`;
  fs.writeFileSync(ICONS_JS_PATH, finalFile);
}

const DST_ESM = path.join(SRC_SVG_DIR, 'index.esm.js');

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

const DST_ESM_D_TS = path.join(SRC_SVG_DIR, 'index.esm.d.ts');

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

const DST_JS = path.join(SRC_SVG_DIR, 'index.js');

function makeIndexJs() {
  const jsContent = `require.context('!!file-loader?name=[name].[ext]&outputPath=svg!./', false, /\.svg$/);`;
  fs.writeFileSync(DST_JS, jsContent);
}

const iconData = buildIconMetadata();
makeIconsJs(iconData);
makeIndexEsm(iconData);
makeIndexEsmD(iconData);
makeIndexJs();
