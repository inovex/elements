import { usePathname, useRouter } from 'next/navigation';
import { useMemo } from 'react';
import { SupportedLanguages } from 'translations/i18n';
import { InoSwitch } from '@inovex.de/elements-react';
import { useTranslation } from '@hooks/useTranslation';

export default function LocaleSwitcher() {
  const pathName = usePathname();
  const router = useRouter();
  const { lang } = useTranslation();

  const isChecked = useMemo(() => lang === SupportedLanguages.EN, [lang]);
  const isDisabled = useMemo(
    () => pathName?.split('/')[2] === 'getting-started',
    [pathName],
  );

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
