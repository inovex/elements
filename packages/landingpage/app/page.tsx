'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { i18n } from 'i18n-config';

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    const [lang] = navigator.language.split('-');
    const locale = lang ?? i18n.defaultLocale;
    router.replace(`/${locale}`);
  }, []);
}
