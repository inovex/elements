import { angularOutputTarget } from '@stencil/angular-output-target';
import { join } from 'path';

const angularTargetPath = join(
  __dirname,
  '../../elements-angular/src/directives',
);

const angularStandaloneTargetPath = join(
  __dirname,
  '../../elements-angular/standalone/src/directives',
);


export default [
  angularOutputTarget({
    componentCorePackage: '@inovex.de/elements',
    outputType: 'component',
    directivesProxyFile: `${angularTargetPath}/proxies.ts`,
    directivesArrayFile: `${angularTargetPath}/proxies-list.ts`,
  }),
  angularOutputTarget({
    componentCorePackage: '@inovex.de/elements',
    outputType: 'standalone',
    customElementsDir: 'dist/components',
    directivesProxyFile: `${angularStandaloneTargetPath}/proxies.ts`,
    directivesArrayFile: `${angularStandaloneTargetPath}/proxies-list.ts`,
  })
];
