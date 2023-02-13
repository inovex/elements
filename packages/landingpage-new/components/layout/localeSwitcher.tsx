import { useRouter } from 'next/router';
import { useCallback } from 'react';
import useTranslation from 'utils/hooks/useTranslation';
import { InoSwitch } from '@elements';
import { Supported_Locales } from '../../translations/config';

const LocaleSwitcher = () => {
  const router = useRouter();
  const { locale } = useTranslation();

  const handleLocaleChangeNew = useCallback(
    (switchToEnglish: boolean) => {
      const pathArray = router.asPath.split('/');
      pathArray[1] = switchToEnglish ? Supported_Locales.EN : Supported_Locales.DE;
      const newAsPath = pathArray.join('/');
      router.push(newAsPath);
    },
    [router]
  );  

  return (
    <div>
      <InoSwitch
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
