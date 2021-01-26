var fs = require('fs');
var path = require('path');
var packageJson = require('../package.json');
var lernaJson = require('../lerna.json');

packageJson.version = lernaJson.version;

fs.writeFileSync(
  path.join(__dirname, '../package.json'),
  JSON.stringify(packageJson, null, 2),
  function (err) {
    if (err) return console.log(err);
    console.log(JSON.stringify(packageJson));
  }
);
