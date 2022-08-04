export default function wrappedIconsRollup() {
  const fs = require('fs-extra');
  const path = require('path');

  const ROOT_DIR = path.join(__dirname, '../');
  const DST_DIR = path.join(ROOT_DIR, 'dist');
  const DST_ESM = path.join(DST_DIR, 'inovex-elements/ino-icon/index.esm.js');
  const DST_ESM_D_TS = path.join(
    DST_DIR,
    'inovex-elements/ino-icon/index.esm.d.ts'
  );
  const DST_JS = path.join(DST_DIR, 'inovex-elements/ino-icon/index.js');
  const SRC_DIR = path.join(ROOT_DIR, 'src');
  const SRC_SVG_DIR = path.join(SRC_DIR, 'assets/ino-icon');
  let svgFiles = fs.readdirSync(SRC_SVG_DIR);

  svgFiles = svgFiles.filter((f: string) => f.indexOf('.svg') > -1);

  function capitalize(word: string) {
    return word[0].toUpperCase() + word.toLowerCase().slice(1);
  }

  function isInternal(icon: string) {
    return icon.startsWith('_');
  }

  function camelize(text: string) {
    if (isInternal(text)) {
      return '_' + camelize(text.slice(1));
    }

    let words = text.split(/[-_]/g); // ok one simple regexp.
    words = words.filter((word) => word.length > 0);

    return words[0].toLowerCase() + words.slice(1).map(capitalize).join('');
  }

  const iconData = svgFiles.map((filename: string) => {
    const name = filename.split('.')[0];
    const importName = camelize(name);
    return {
      filename,
      importName,
      name,
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

  return {
    name: 'rollup-plugin-wrappedIcons',
    resolveId(source) {
      if (source === 'dist') {
        return source;
      }
      return null;
    },
    load(id) {
      if (id === 'dist') {
        return { finalFile };
      }
      return null;
    },
  };
}
