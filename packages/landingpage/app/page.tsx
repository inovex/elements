'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { getValidLang } from 'translations/i18n';

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    const [lang] = navigator.language.split('-');
    router.replace(`/${getValidLang(lang)}`);
  }, []);
}
