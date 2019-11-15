const fs = require('fs-extra');
const path = require('path');

const ROOT_DIR = path.join(__dirname, '../');
const DST_DIR = path.join(ROOT_DIR, 'dist');
const DST_ESM = path.join(
  DST_DIR,
  'inovex-elements/icon-assets/SVG/index.esm.js'
);
const DST_ESM_D_TS = path.join(
  DST_DIR,
  'inovex-elements/icon-assets/SVG/index.esm.d.ts'
);
const DST_JS = path.join(DST_DIR, 'inovex-elements/icon-assets/SVG/index.js');
const SRC_DIR = path.join(ROOT_DIR, 'src');
const SRC_SVG_DIR = path.join(SRC_DIR, 'components/ino-icon/icon-assets/SVG');
let svgFiles = fs.readdirSync(SRC_SVG_DIR);

svgFiles = svgFiles.filter((f: string) => f.indexOf('.svg') > -1);

function upFirst(word: string) {
  return word[0].toUpperCase() + word.toLowerCase().slice(1);
}

function camelize(text: string) {
  let words = text.split(/[-_]/g); // ok one simple regexp.
  return (
    words[0].toLowerCase() +
    words
      .slice(1)
      .map(upFirst)
      .join('')
  );
}

const iconData = svgFiles.map((filename: string) => {
  const name = filename.split('.')[0];
  const importName = camelize(name);
  return {
    filename,
    importName,
    name
  };
});
const BASE_PATH = '.';

const finalFile = `
${iconData
  .map(
    ({ filename, importName }: { filename: string; importName: string }) =>
      `import ${importName} from '${BASE_PATH}/${filename}';`
  )
  .join('\n')}
export var ICON_PATHS = {
${iconData
  .map(
    ({ name, importName }: { name: string; importName: string }) =>
      `  '${name}': ${importName}`
  )
  .join(',\n')}
};
export { ${iconData
  .map(({ importName }: { importName: string }) => importName)
  .join(', ')} };
`;
fs.writeFileSync(DST_ESM, finalFile);

const finalDts = `
export type IconMap = {
${iconData
  .map(({ name }: { name: string }) => `  '${name}': string;`)
  .join('\n')}
};
export type IconNames = keyof IconMap;
export declare const ICON_PATHS: IconMap;
${iconData
  .map(
    ({ importName }: { importName: string }) =>
      `export declare const ${importName}: string;`
  )
  .join('\n')}
`;
fs.writeFileSync(DST_ESM_D_TS, finalDts);

const jsContent = `
require.context('!!file-loader?name=[name].[ext]&outputPath=svg!./', false, /\.svg$/);
`;

fs.writeFileSync(DST_JS, jsContent);
