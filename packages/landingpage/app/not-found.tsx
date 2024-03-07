'use client';

import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { getValidLang, isValidLang } from 'translations/i18n';

export default function NotFound() {
  const router = useRouter();
  const pathName = usePathname();

  useEffect(() => {
    const [lang] = navigator.language.split('-');
    const fallbackLang = getValidLang(lang);

    // e.g. user tries to open /other/page then redirect to /[lang]/404
    const pathLocale = pathName?.split('/')[1].toLowerCase();
    const validLang = isValidLang(pathLocale) ? pathLocale : fallbackLang;

    router.replace(`/${validLang}/404`);
  }, []);
}
