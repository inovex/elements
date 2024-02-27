'use client';

import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { i18n } from 'i18n-config';

export default function NotFound() {
  const router = useRouter();
  const pathName = usePathname();

  useEffect(() => {
    const [lang] = navigator.language.split('-');
    const fallbackLang = lang ?? i18n.defaultLocale;

    // e.g. user tries to open /other/page then redirect to /[lang]/404
    const pathLocale = pathName?.split('/')[1];
    const locale = i18n.locales.includes(pathLocale as any)
      ? pathLocale
      : fallbackLang;

    router.replace(`/${locale}/404`);
  }, []);
}
