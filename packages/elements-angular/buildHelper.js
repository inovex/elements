const fs = require('fs');
const path = require('path');

const args = process.argv;
const packageJsonPath = path.join(__dirname, 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, { encoding: 'utf-8' }));

if (args[2] === 'preBuild') {
  delete packageJson['exports'];
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + '\n');
} else if (args[2] === 'sync') {
  const distPackageJsonPath = path.join(__dirname, 'dist', 'package.json');
  if (!fs.existsSync(distPackageJsonPath)) {
    console.error('dist/package.json not found. Run build first.');
    process.exit(1);
  }
  const distPackageJson = JSON.parse(fs.readFileSync(distPackageJsonPath, { encoding: 'utf-8' }));

  // Fields to update from dist
  const fieldsToSync = [
    'version',
    'peerDependencies',
    'dependencies',
    'main',
    'module',
    'es2015',
    'esm2020',
    'fesm2015',
    'fesm2020',
    'typings',
    'types',
    'exports',
  ];

  fieldsToSync.forEach(field => {
    if (distPackageJson[field]) {
      packageJson[field] = distPackageJson[field];
    }
  });

  const extensions = ['.mjs', '.d.ts', '.js', '.json'];
  const walk = obj => {
    for (const key in obj) {
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        walk(obj[key]);
      } else if (typeof obj[key] === 'string') {
        const value = obj[key];
        // naive check: if it looks like a file path and not already prefixed with dist/ (unless it should be)
        // Adjusting logic to match previous behavior: prepend ./dist/ if it ends with extension
        // But we need to be careful not to break absolute paths or urls (unlikely in pkg.json)
        if (extensions.some(ext => value.endsWith(ext)) && !value.startsWith('./dist/') && !value.startsWith('dist/')) {
          // Ensure it starts with ./ if not present
          const cleanValue = value.startsWith('./') ? value.substring(2) : value;
          obj[key] = './' + path.posix.join('dist', cleanValue);
        }
      }
    }
  };

  // Apply path fix only to the synced fields in packageJson
  // We can just walk the whole packageJson, assuming other fields like 'scripts' don't have paths we mess up.
  // Scripts usually don't have paths ending in .mjs/.d.ts as values (they are commands).
  walk(packageJson);

  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + '\n');
}
