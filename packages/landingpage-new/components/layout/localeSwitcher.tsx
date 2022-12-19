import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { locales } from 'translations/config';
import styles from './header.module.scss';
import useTranslation from 'utils/hooks/useTranslation';

const LocaleSwitcher = () => {
  const router = useRouter();
  const { locale } = useTranslation();
  
  const handleLocaleChange = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      const targetLang = e.currentTarget.innerHTML;
      const regex = new RegExp(`^/(${locales.join('|')})`);
      router.push(
        router.pathname,
        router.asPath.replace(regex, `/${targetLang}`)
      );
    },
    [router]
  );
  return (
    <div>
      {locales.map((el) => (
        <b
          onClick={handleLocaleChange}
          key={el}
          className={el === locale ? styles.selected : ''}
        >
          {el}
        </b>
      ))}
    </div>
  );
};

export default LocaleSwitcher;
