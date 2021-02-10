var fs = require('fs-extra');
var path = require('path');
var ROOT_DIR = path.join(__dirname, '../');
var DST_DIR = path.join(ROOT_DIR, 'dist');
var DST_ESM = path.join(DST_DIR, 'inovex-elements/ino-icon/index.esm.js');
var DST_ESM_D_TS = path.join(
  DST_DIR,
  'inovex-elements/ino-icon/index.esm.d.ts'
);
var DST_JS = path.join(DST_DIR, 'inovex-elements/ino-icon/index.js');
var SRC_DIR = path.join(ROOT_DIR, 'src');
var SRC_SVG_DIR = path.join(SRC_DIR, 'assets/ino-icon');
var svgFiles = fs.readdirSync(SRC_SVG_DIR);
svgFiles = svgFiles.filter(function (f) {
  return f.indexOf('.svg') > -1;
});
function capitalize(word) {
  return word[0].toUpperCase() + word.toLowerCase().slice(1);
}
function isInternal(icon) {
  return icon.startsWith('_');
}
function camelize(text) {
  if (isInternal(text)) {
    return '_' + camelize(text.slice(1));
  }
  var words = text.split(/[-_]/g); // ok one simple regexp.
  words = words.filter(function (word) {
    return word.length > 0;
  });
  return words[0].toLowerCase() + words.slice(1).map(capitalize).join('');
}
var iconData = svgFiles.map(function (filename) {
  var name = filename.split('.')[0];
  var importName = camelize(name);
  return {
    filename: filename,
    importName: importName,
    name: name,
  };
});
var BASE_PATH = '.';
var finalFile =
  '\n' +
  iconData
    .map(function (_a) {
      var filename = _a.filename,
        importName = _a.importName;
      return (
        'import ' + importName + " from '" + BASE_PATH + '/' + filename + "';"
      );
    })
    .join('\n') +
  '\nexport var ICON_PATHS = {\n' +
  iconData
    .map(function (_a) {
      var name = _a.name,
        importName = _a.importName;
      return "  '" + name + "': " + importName;
    })
    .join(',\n') +
  '\n};\nexport { ' +
  iconData
    .map(function (_a) {
      var importName = _a.importName;
      return importName;
    })
    .join(', ') +
  ' };\n';
fs.writeFileSync(DST_ESM, finalFile);
var finalDts =
  '\nexport type IconMap = {\n' +
  iconData
    .map(function (_a) {
      var name = _a.name;
      return "  '" + name + "': string;";
    })
    .join('\n') +
  '\n};\nexport type IconNames = keyof IconMap;\nexport declare const ICON_PATHS: IconMap;\n' +
  iconData
    .map(function (_a) {
      var importName = _a.importName;
      return 'export declare const ' + importName + ': string;';
    })
    .join('\n') +
  '\n';
fs.writeFileSync(DST_ESM_D_TS, finalDts);
var jsContent =
  "\nrequire.context('!!file-loader?name=[name].[ext]&outputPath=svg!./', false, /.svg$/);\n";
fs.writeFileSync(DST_JS, jsContent);
