import { useRouter } from 'next/router';
import { useMount } from 'react-use';
import JsGuidePage from './javascript';
import { Framework } from '../../utils/frameworks';

/**
 * Forwards to javascript guide as default
 */
const GettingStarted = () => {
  const { pathname, replace } = useRouter();

  useMount(() => {
    replace(pathname + '/' + Framework.JS);
  });

  return <JsGuidePage />;
};

export default GettingStarted;
