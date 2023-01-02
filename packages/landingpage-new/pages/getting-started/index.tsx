import { useRouter } from 'next/router';
import { useMount } from 'react-use';
import { Frameworks } from '../../components/getting-started/frameworks';
import ReactGuidePage from './react';

/**
 * Forwards to react guide as default
 */
const GettingStarted = () => {
  const { pathname, replace } = useRouter();

  useMount(() => {
    replace(pathname + '/' + Frameworks.REACT);
  });

  return <ReactGuidePage />;
};

export default GettingStarted;
