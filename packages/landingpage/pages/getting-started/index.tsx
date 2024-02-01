import { useRouter } from 'next/router';
import { useMount } from 'react-use';
import { Framework } from 'utils/frameworks';

/**
 * Forwards to react guide as default
 */
const GettingStarted = () => {
  const { asPath, push } = useRouter();

  useMount(() => {
    push(`${asPath}/${Framework.REACT}`);
  });

  return <></>;
};

export default GettingStarted;
