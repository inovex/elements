import { join } from 'path';
import { reactOutputTarget } from '@stencil/react-output-target';

const reactProxyPath = join(__dirname, '../../elements-react/src/components');

export default reactOutputTarget({
  componentCorePackage: '@inovex.de/elements',
  proxiesFile: `${reactProxyPath}/index.ts`,
  includeDefineCustomElements: true,
});
