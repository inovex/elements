'use client';

import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { i18n } from '../i18n-config';

export default function NotFound() {
  const router = useRouter();
  const pathName = usePathname();

  const locale = pathName?.split('/')[1] ?? i18n.defaultLocale;

  useEffect(() => {
    router.replace(`/${locale}/404`);
  }, []);
}
