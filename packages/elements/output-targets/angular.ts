import { angularOutputTarget } from '@stencil/angular-output-target';
import { join } from 'path';

const angularTargetPath = join(
  __dirname,
  '../../elements-angular/src/directives',
);

export default angularOutputTarget({
  componentCorePackage: '@inovex.de/elements',
  outputType: 'component',
  directivesProxyFile: `${angularTargetPath}/proxies.ts`,
  directivesArrayFile: `${angularTargetPath}/proxies-list.ts`
});
