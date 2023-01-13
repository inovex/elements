import useTranslation from '../utils/hooks/useTranslation';
import {useRouter} from 'next/router';
import {useMount} from 'react-use';

export default function Custom404() {
  const { push } = useRouter();
  const { locale } = useTranslation();

  useMount(() => {
    push(`/${locale}/404`);
  });
}
