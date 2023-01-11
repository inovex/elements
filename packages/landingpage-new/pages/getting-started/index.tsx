import { useRouter } from 'next/router';
import { useMount } from 'react-use';
import { Frameworks } from '../../components/getting-started/frameworks';
import JsGuidePage from './js';

/**
 * Forwards to react guide as default
 */
const GettingStarted = () => {
  const { pathname, replace } = useRouter();

  useMount(() => {
    replace(pathname + '/' + Frameworks.JS);
  });

  return <JsGuidePage />;
};

export default GettingStarted;
