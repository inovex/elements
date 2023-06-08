import { InoSwitch } from '@elements';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import useTranslation from 'utils/hooks/useTranslation';
import { Supported_Locales } from '../../../../translations/config';

const LocaleSwitcher = () => {
  const router = useRouter();
  const { locale } = useTranslation();
  const [isDisabled, setIsDisabled] = useState(false);

  const handleLocaleChangeNew = useCallback(
    (switchToEnglish: boolean) => {
      router.push(
        router.pathname,
        switchToEnglish
          ? router.asPath.replace(Supported_Locales.DE, Supported_Locales.EN)
          : router.asPath.replace(Supported_Locales.EN, Supported_Locales.DE)
      );
    },
    [router]
  );

  useEffect(() => {
    if (router.route.startsWith('/[lang]/getting-started')) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [router.route]);

  return (
    <div>
      <InoSwitch
        disabled={isDisabled}
        checked={(locale as string) === Supported_Locales.EN}
        onCheckedChange={(e) => handleLocaleChangeNew(e.detail)}
      >
        <p slot="leading">DE</p>
        <p slot="trailing">EN</p>
      </InoSwitch>
    </div>
  );
};

export default LocaleSwitcher;
