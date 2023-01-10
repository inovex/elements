import { useRouter } from 'next/router';
import { useMount } from 'react-use';
import ReactGuidePage from './react';
import { Framework } from '../../utils/frameworks';

/**
 * Forwards to react guide as default
 */
const GettingStarted = () => {
  const { pathname, replace } = useRouter();

  useMount(() => {
    replace(pathname + '/' + Framework.REACT);
  });

  return <ReactGuidePage />;
};

export default GettingStarted;
