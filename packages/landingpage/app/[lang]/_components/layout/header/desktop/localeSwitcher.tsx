import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import { defaultLng, SupportedLanguages } from 'translations/i18n';
import { InoSwitch } from '@inovex.de/elements-react';

export default function LocaleSwitcher() {
  const pathName = usePathname();
  const router = useRouter();
  const currentLocale = useMemo(
    () => pathName?.split('/')[1] ?? defaultLng,
    [pathName],
  );
  const isChecked = useMemo(
    () => currentLocale === SupportedLanguages.EN,
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
      segments[1] = isDE ? SupportedLanguages.EN : SupportedLanguages.DE;
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
          {SupportedLanguages.DE.toUpperCase()}
        </p>
        <p slot="trailing" style={trailingStyle}>
          {SupportedLanguages.EN.toUpperCase()}
        </p>
      </InoSwitch>
    </div>
  );
}
