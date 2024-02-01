import { useRouter } from 'next/router';
import { useMount } from 'react-use';
import { WELCOME_PAGE_PLACEHOLDER } from '../../utils/hooks/useStorybookUrl';
import { SubRoutes } from '../../utils/routes';

const Components = () => {
  const { asPath, push } = useRouter();

  useMount(() => {
    push(
      `${asPath}/${SubRoutes.LIBRARY_COMPONENTS}?element=${WELCOME_PAGE_PLACEHOLDER}`,
      undefined,
      { scroll: false },
    );
  });

  return <></>;
};

export default Components;
