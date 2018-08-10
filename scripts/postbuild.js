const fs = require('fs');
const path = require('path');

const typescriptDefinitionsPath = path.join(
  __dirname,
  '..',
  'dist/types/components.d.ts'
);

// Fix typescript definitions
const typescriptDefinitions = String(
  fs.readFileSync(typescriptDefinitionsPath)
);
const fixedTypescriptDefinitions = typescriptDefinitions.replace(
  'interface HTMLAttributes {}',
  'interface HTMLAttributes { [key: string]: any; }'
);
fs.writeFileSync(typescriptDefinitionsPath, fixedTypescriptDefinitions);

console.info(
  'Fixed typescript definitions. // TODO remove this when stencil has a fix for that'
);
