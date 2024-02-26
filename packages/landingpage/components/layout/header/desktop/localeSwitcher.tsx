import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import { i18n } from '../../../../i18n-config';
import { InoSwitch } from '@inovex.de/elements-react';

export default function LocaleSwitcher() {
  const pathName = usePathname();
  const router = useRouter();
  const currentLocale = useMemo(
    () => pathName?.split('/')[1] ?? i18n.defaultLocale,
    [pathName],
  );
  const isChecked = useMemo(
    () => currentLocale === i18n.locales[0],
    [currentLocale],
  );
  const [isDisabled, setIsDisabled] = useState(false);

  const leadingStyle = {
    color: isChecked ? '#575464' : 'black',
  };

  const trailingStyle = {
    color: isChecked ? 'black' : '#575464',
  };

  const redirectedLocale = (isDE: boolean) => {
    if (!pathName) {
      router.push('/');
    } else {
      const segments = pathName!.split('/');
      segments[1] = isDE ? i18n.locales[0] : i18n.locales[1];
      router.push(segments.join('/'));
    }
  };

  useEffect(() => {
    if (pathName?.startsWith('/[lang]/getting-started')) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [pathName]);

  return (
    <div>
      <InoSwitch
        disabled={isDisabled}
        checked={isChecked}
        onCheckedChange={(e) => redirectedLocale(e.detail)}
      >
        <p slot="leading" style={leadingStyle}>
          {i18n.locales[1].toUpperCase()}
        </p>
        <p slot="trailing" style={trailingStyle}>
          {i18n.locales[0].toUpperCase()}
        </p>
      </InoSwitch>
    </div>
  );
}
