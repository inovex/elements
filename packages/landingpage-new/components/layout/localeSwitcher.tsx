import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { languageNames, locales } from 'translations/config';
import useTranslation from 'utils/hooks/useTranslation';
import { InoSelect, InoOption } from '@elements';
import { InoSelectCustomEvent } from '@inovex.de/elements';
import styles from './header.module.scss';

const LocaleSwitcher = () => {
  const router = useRouter();
  const handleLocaleChange = useCallback(
    (e: InoSelectCustomEvent<string>) => {
      const targetLang = e.detail;
      const regex = new RegExp(`^/(${locales.join('|')})`);
      router.push(
        router.pathname,
        router.asPath.replace(regex, `/${targetLang}`)
      );
    },
    [router]
  );
  const { t, locale } = useTranslation();
  return (
    <div>
      <InoSelect
        className={styles.select}
        label={t('common')['language']}
        onValueChange={handleLocaleChange}
        value={locale}
      >
        {locales.map((el, index) => (
          <InoOption key={index} value={el}>
            {languageNames[el]}
          </InoOption>
        ))}
      </InoSelect>
    </div>
  );
};

export default LocaleSwitcher;
